// Chinatown Celebration Background Music Engine (Web Audio API + Audio File Fallback)
// Features lively Chinatown festive pentatonic melody, Guzheng/Pipa plucked strings,
// Dizi bamboo flute phrasing, resonant festival gong (锣), and rhythmic woodblock (木鱼).

class ChinatownMusicPlayer {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private timerId: NodeJS.Timeout | null = null;
  private step: number = 0;
  private volume: number = 0.35; // Enhanced volume as requested ("perbesar sedikit lagunya")
  private audioEl: HTMLAudioElement | null = null;
  private useAudioElement: boolean = false;

  // Chinatown Traditional Pentatonic Scale Frequencies (G Major Pentatonic: G, A, B, D, E)
  // Low, Mid, High registers
  private scale = {
    G3: 196.0,
    A3: 220.0,
    B3: 246.94,
    D4: 293.66,
    E4: 329.63,
    G4: 392.0,
    A4: 440.0,
    B4: 493.88,
    D5: 587.33,
    E5: 659.25,
    G5: 783.99,
    A5: 880.0,
    B5: 987.77,
    D6: 1174.66,
    E6: 1318.51,
  };

  // Joyful Chinatown Festive Celebration Melody sequence (16 beats repeated with variations)
  private chinatownMelody = [
    // Phrase 1: Auspicious greeting fanfare
    392.0, 493.88, 587.33, 659.25, 783.99, 659.25, 587.33, 493.88, // G4, B4, D5, E5, G5, E5, D5, B4
    440.0, 493.88, 587.33, 659.25, 587.33, 493.88, 440.0, 392.0,  // A4, B4, D5, E5, D5, B4, A4, G4
    // Phrase 2: Joyful soaring celebration
    587.33, 659.25, 783.99, 880.0, 987.77, 880.0, 783.99, 659.25,  // D5, E5, G5, A5, B5, A5, G5, E5
    783.99, 659.25, 587.33, 493.88, 440.0, 493.88, 392.0, 392.0,  // G5, E5, D5, B4, A4, B4, G4, G4
    // Phrase 3: High festive flourish
    987.77, 880.0, 783.99, 659.25, 783.99, 880.0, 987.77, 1174.66,// B5, A5, G5, E5, G5, A5, B5, D6
    987.77, 783.99, 659.25, 587.33, 659.25, 587.33, 493.88, 392.0, // B5, G5, E5, D5, E5, D5, B4, G4
    // Phrase 4: Auspicious finale resolution
    440.0, 493.88, 587.33, 783.99, 880.0, 783.99, 880.0, 987.77,  // A4, B4, D5, G5, A5, G5, A5, B5
    783.99, 587.33, 493.88, 440.0, 392.0, 293.66, 392.0, 392.0   // G5, D5, B4, A4, G4, D4, G4, G4
  ];

  // Plucked Guzheng / Pipa arpeggio runs
  private guzhengArpeggios = [
    [196.0, 293.66, 392.0, 493.88], // G3, D4, G4, B4
    [220.0, 293.66, 440.0, 587.33], // A3, D4, A4, D5
    [246.94, 329.63, 493.88, 659.25], // B3, E4, B4, E5
    [196.0, 293.66, 392.0, 587.33], // G3, D4, G4, D5
  ];

  public init() {
    if (typeof window === "undefined") return;

    // Check if an external audio file exists (e.g., /chinatown.mp3 or /audio/chinatown.mp3)
    if (!this.audioEl) {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = Math.min(1.0, this.volume * 2.2);
      audio.src = "/audio/chinatown.mp3";
      this.audioEl = audio;
    }

    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  // Synthesize crisp acoustic plucked tone (Guzheng / Pipa)
  private playGuzheng(freq: number, duration: number, gainLevel: number = 0.22) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Woody triangle + slight sawtooth for rich acoustic string resonance
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      oscHarmonic.type = "sine";
      oscHarmonic.frequency.setValueAtTime(freq * 2, now);

      // Fast finger pluck attack with natural exponential string ring
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(gainLevel, now + 0.008);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      oscHarmonic.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + duration);
      oscHarmonic.stop(now + duration);
    } catch {
      // AudioContext policy catch
    }
  }

  // Synthesize Bamboo Flute (Dizi / 笛子) with gentle expressive vibrato
  private playDiziFlute(freq: number, duration: number, gainLevel: number = 0.20) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      const noteGain = this.ctx.createGain();

      // Dizi breath vibrato (~5.5 Hz)
      vibrato.frequency.setValueAtTime(5.5, now);
      vibratoGain.gain.setValueAtTime(freq * 0.015, now);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Smooth bamboo flute articulation
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(gainLevel, now + 0.04);
      noteGain.gain.setValueAtTime(gainLevel * 0.85, now + duration * 0.7);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      vibrato.start(now);
      osc.start(now);
      vibrato.stop(now + duration);
      osc.stop(now + duration);
    } catch {
      // AudioContext policy catch
    }
  }

  // Synthesize Ceremonial Chinatown Bronze Temple Gong (锣)
  private playCeremonialGong(gainLevel: number = 0.28) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const fundamental = 164.81; // Deep resonant gong fundamental (E3/G3)
      // Metallic inharmonic spectrum ratios of Chinese bronze gongs
      const ratios = [1.0, 1.43, 1.88, 2.45, 3.12];

      ratios.forEach((ratio, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(fundamental * ratio, now);

        const partialGain = (gainLevel / (i + 1)) * 0.8;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.linearRampToValueAtTime(partialGain, now + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, now + (3.5 - i * 0.4));

        osc.connect(g);
        g.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 3.6);
      });
    } catch {
      // Catch policy
    }
  }

  // Synthesize Chinatown Festive Temple Woodblock / Muyu (木鱼)
  private playWoodblock(pitch: "high" | "low" = "high", gainLevel: number = 0.16) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const g = this.ctx.createGain();

      const freq = pitch === "high" ? 820 : 620;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + 0.05);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq, now);
      filter.Q.setValueAtTime(6.0, now);

      g.gain.setValueAtTime(gainLevel, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      osc.connect(filter);
      filter.connect(g);
      g.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Catch policy
    }
  }

  // Play next rhythmic step of the Chinatown composition
  private playStep() {
    if (!this.isPlaying || !this.ctx) return;

    const currentStep = this.step;
    const beat16 = currentStep % 16;
    const chordIndex = Math.floor(currentStep / 8) % this.guzhengArpeggios.length;
    const arpChord = this.guzhengArpeggios[chordIndex];

    // 1. Auspicious Ceremonial Gong on major phrase beginnings (step 0, 32, etc.)
    if (currentStep % 16 === 0) {
      this.playCeremonialGong(0.26);
    }

    // 2. Chinatown Festive Percussion Woodblock (bouncing cadence)
    if (beat16 % 4 === 0) {
      this.playWoodblock("low", 0.18);
    } else if (beat16 % 2 === 1 && beat16 % 4 === 3) {
      this.playWoodblock("high", 0.14);
    }

    // 3. Guzheng Sparkling Pentatonic Rhythms
    const arpNote = arpChord[currentStep % arpChord.length];
    this.playGuzheng(arpNote, 1.2, 0.20);

    // 4. Chinatown Melodic Passage (Dizi Bamboo Flute + High Guzheng)
    const melodyNote = this.chinatownMelody[currentStep % this.chinatownMelody.length];
    if (currentStep % 2 === 0) {
      this.playDiziFlute(melodyNote, 0.7, 0.22);
    } else {
      // Ornamental grace note
      this.playGuzheng(melodyNote * 1.5 > 1400 ? melodyNote : melodyNote * 1.5, 0.4, 0.14);
    }

    this.step++;
  }

  public start() {
    this.init();

    // Attempt to play external audio file if present
    if (this.audioEl && this.audioEl.src) {
      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.useAudioElement = true;
            this.isPlaying = true;
          })
          .catch(() => {
            // Audio file not present or autoplay restricted -> Use synthesized Chinatown Web Audio
            this.useAudioElement = false;
            this.startSynthesizer();
          });
        return;
      }
    }

    this.startSynthesizer();
  }

  private startSynthesizer() {
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    this.step = 0;
    this.playStep();

    // Chinatown festive brisk tempo (~360ms sixteenth step = ~105-110 BPM)
    this.timerId = setInterval(() => {
      this.playStep();
    }, 360);
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioEl) {
      try {
        this.audioEl.pause();
      } catch {
        // Ignore
      }
    }
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
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

  // Adjust volume ("perbesar sedikit lagunya")
  public setVolume(newVol: number) {
    this.volume = Math.max(0.1, Math.min(1.0, newVol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.volume = Math.min(1.0, this.volume * 2.0);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const musicPlayer = new ChinatownMusicPlayer();
