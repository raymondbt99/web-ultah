// Web Audio API ambient oriental celebration music player
// Generates serene, authentic Chinese pentatonic Guzheng / Pipa plucked tones and bells
class BackgroundMusicPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;
  private step: number = 0;

  // Traditional Chinese Pentatonic scale frequencies in Hz
  // Gong (C), Shang (D), Jiao (E), Zhi (G), Yu (A)
  // Tuned in G major pentatonic (G, A, B, D, E) for festive auspicious warmth
  private chords = [
    [196.0, 246.94, 293.66, 392.0], // G, B, D, G (Gong)
    [220.0, 293.66, 329.63, 440.0], // A, D, E, A (Shang)
    [164.81, 246.94, 329.63, 392.0], // E, B, E, G (Jiao)
    [146.83, 220.0, 293.66, 440.0],  // D, A, D, A (Zhi)
  ];

  // Plucked Guzheng melodic passage
  private melodyNotes = [
    587.33, 659.25, 783.99, 880.0,  // D5, E5, G5, A5
    987.77, 880.0, 783.99, 659.25,  // B5, A5, G5, E5
    587.33, 493.88, 587.33, 783.99,  // D5, B4, D5, G5
    880.0, 987.77, 1174.66, 987.77, // A5, B5, D6, B5
    783.99, 659.25, 587.33, 392.0   // G5, E5, D5, G4
  ];

  public init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  // Plucked string synthesis (fast attack, natural ring and exponential decay)
  private playPluckedTone(freq: number, duration: number, gainVal: number = 0.08) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Triangle wave mimics woody acoustic string timbre of Chinese Guzheng
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      // Guzheng pick attack
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gainVal, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Audio context might be restricted before gesture
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    this.step = 0;
    this.playStep();

    this.intervalId = setInterval(() => {
      this.playStep();
    }, 600);
  }

  private playStep() {
    if (!this.isPlaying || !this.ctx) return;

    const chordIndex = Math.floor(this.step / 8) % this.chords.length;
    const chord = this.chords[chordIndex];
    const subStep = this.step % 8;

    // Arpeggiated plucked string note
    const noteFreq = chord[subStep % chord.length];
    this.playPluckedTone(noteFreq, 2.0, 0.06);

    // Warm deep gong/bass tone on primary downbeats
    if (subStep === 0 || subStep === 4) {
      this.playPluckedTone(chord[0] * 0.5, 3.2, 0.08);
    }

    // Melodic flute/guzheng high flourish
    if (subStep % 2 === 0) {
      const melodyFreq = this.melodyNotes[(this.step / 2) % this.melodyNotes.length];
      this.playPluckedTone(melodyFreq, 1.6, 0.04);
    }

    this.step++;
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const musicPlayer = new BackgroundMusicPlayer();
