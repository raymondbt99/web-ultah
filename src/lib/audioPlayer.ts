// Web Audio API ambient celebration music player
// Generates gentle, warm acoustic harp/piano chords and celebratory melody
class BackgroundMusicPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;
  private step: number = 0;

  // Chord progression in Hz (Romantic & Celebratory: D major key)
  // Dmaj9 - Bm7 - Gmaj7 - A7sus4
  private chords = [
    [146.83, 220.0, 277.18, 369.99, 440.0], // D, A, C#, F#, A
    [123.47, 185.0, 220.0, 293.66, 369.99], // B, F#, A, D, F#
    [98.0, 146.83, 196.0, 293.66, 369.99],  // G, D, G, D, F#
    [110.0, 164.81, 220.0, 293.66, 440.0], // A, E, A, D, A
  ];

  private melodyNotes = [
    587.33, 659.25, 739.99, 880.0, // D5, E5, F#5, A5
    739.99, 659.25, 587.33, 440.0,
    493.88, 587.33, 739.99, 880.0,
    987.77, 880.0, 739.99, 587.33
  ];

  public init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  private playTone(freq: number, duration: number, type: OscillatorType = "sine", gainVal: number = 0.08, detune: number = 0) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.detune.setValueAtTime(detune, this.ctx.currentTime);

      // Envelope: soft attack, gentle decay
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gainVal, now + 0.12);
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
    }, 650);
  }

  private playStep() {
    if (!this.isPlaying || !this.ctx) return;

    const chordIndex = Math.floor(this.step / 8) % this.chords.length;
    const chord = this.chords[chordIndex];
    const subStep = this.step % 8;

    // Arpeggio note from chord
    const noteFreq = chord[subStep % chord.length];
    this.playTone(noteFreq, 2.2, "sine", 0.07);

    // Warm bass on beat 0 and 4
    if (subStep === 0 || subStep === 4) {
      this.playTone(chord[0] * 0.5, 3.0, "triangle", 0.09);
    }

    // Shimmering melody note occasionally
    if (subStep % 2 === 0) {
      const melodyFreq = this.melodyNotes[(this.step / 2) % this.melodyNotes.length];
      this.playTone(melodyFreq, 1.8, "sine", 0.035, 3);
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
