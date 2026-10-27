/* ============================================================================
   CONFIGURAÇÃO PERSONALIZÁVEL (Edite aqui facilmente os dados do casal)
   ============================================================================ */
const CONFIG = {
  // Data oficial do início do namoro (Formato: DD/MM/AAAA)
  dataInicioNamoro: "27/09/2026",

  // Foto do casal que aparece na moldura Polaroid ao abrir a caixa:
  // Coloque a foto real na pasta "assets/foto-casal.jpg".
  // Se o arquivo ainda não existir, o site usa automaticamente a ilustração romântica reserva.
  fotoCasalUrl: "assets/foto-casal.jpg",
  fotoCasalReserva: "assets/foto-casal-placeholder.svg",
  legendaPolaroid: "O meu lugar favorito no mundo é ao seu lado ❤️",

  // Configuração da música de fundo (salve um MP3 suave em assets/musica.mp3;
  // caso não exista, o sintetizador Web Audio toca caixinha de música + pad com reverb)
  musica: {
    arquivo: "assets/musica.mp3",
    volume: 0.32,
    fadeInMs: 2500,
  },

  // Página 1 da Carta (Texto original preservado)
  cartaPagina1: {
    saudacao: "Para o amor da minha vida,",
    paragrafos: [
      "Desde o dia 27 de setembro, cada momento ao seu lado tem sido a resposta mais bonita que Deus poderia ter colocado no meu caminho. Você trouxe leveza, paz, risadas sinceras e um abrigo onde meu coração finalmente descansa.",
      "Olhar para a nossa caminhada, lembrar das nossas orações, das nossas conversas e de como tudo foi se encaixando com tanta delicadeza só me dá ainda mais certeza: é com você que eu quero dividir os sonhos, os planos, os dias comuns e todas as alegrias que ainda vão chegar."
    ],
    assinatura: "Com todo o meu amor, Caique. 💌"
  },

  // Página 2 da Carta (Lorem Ipsum temporário para você substituir depois pelo seu texto)
  cartaPagina2: {
    saudacao: "Meu amor,",
    paragrafos: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
    ],
    assinatura: "Para sempre seu, Caique. ❤️"
  },

  // Página 3 da Carta: Homenagem a Santa Teresinha e a Flor Branca
  santaTeresinha: {
    imagemUrl: "assets/santa-teresinha-cartoon.webp",
    imagemReserva: "assets/santa-teresinha-cartoon.svg",
    titulo: "A flor branca que você pediu a Santa Teresinha 🤍✨",
    texto1:
      "Logo no começo da novena, quando rezamos pedindo um sinal do céu para o nosso namoro, você pediu uma flor branca a Santa Teresinha… e ela já tinha te atendido! 🙏🤍",
    texto2:
      "A florzinha branca você já recebeu lá no comecinho da novena, e agora toma essa chuva de florzinhas brancas digitais para lembrar sempre do carinho do céu com a gente! 🤍🌧️🌼"
  },

  // Etapa 6: Elogios antes da Raspadinha do Cupom
  elogiosRaspadinha: {
    titulo: "Para a melhor namorada do mundo",
    elogios:
      "Obrigado por ser uma namorada linda, incrível, atenciosa, amorosa, compreensiva, divertida, esperta… 🥰",
    brincadeira:
      "(Vou parar por aqui, pois não caberiam milhões de elogios nem em todo o mundo digital! 😂💘)",
    instrucao:
      "Raspe o cartão dourado abaixo com o dedo para revelar o próximo capítulo:"
  },

  // Textos do Cupom de Encontro com Açaí
  cupomAcai: {
    titulo: "Nosso Próximo Capítulo: Um Encontro com Açaí",
    descricao:
      "Este cupom dá direito a um encontro romântico com o seu namorado, com açaí garantido, muitas risadas, abraço demorado e tempo de qualidade sem pressa."
  },

  // Mensagem final após ela aceitar o encontro
  agradecimentoFinal: {
    titulo: "Encontro aceito! 💜",
    agradecimento:
      "Obrigado por ter chegado até aqui, por cada sorriso seu e por fazer os meus dias tão mais felizes.",
    promessa:
      "Agora essa caixa digital guarda uma promessa: a nossa caminhada ainda tem muitos momentos bonitos pela frente.",
    declaracao:
      "Eu te amo, Isabela. Hoje, amanhã e em todos os próximos capítulos. ❤️"
  }
};

/* ============================================================================
   ESTADO DA APLICAÇÃO
   ============================================================================ */
const STORAGE_AUDIO_KEY = "surpresa_isabela_audio_enabled";
const isLowEndMobile =
  (typeof navigator !== "undefined" && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
  window.innerWidth < 400;

const state = {
  gateOpened: false,
  locksOpened: [false, false, false],
  q1Attempts: 0,
  isUnlockingBox: false,
  acaiCompleted: false,
  polaroidFlipped: false,
  envelopeOpenedOnce: false,
  currentLetterPage: 1,
  scratchCompleted: false,
  scratchStarted: false,
  dateAccepted: false,
  audioEnabled: sessionStorage.getItem(STORAGE_AUDIO_KEY) !== "false",
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  pageVisible: document.visibilityState !== "hidden",
  preloadedHeavyAssets: false,
  maxParticles: isLowEndMobile ? 35 : 60,
};

/* ============================================================================
   SELETORES DO DOM
   ============================================================================ */
const el = {
  stepGate: document.getElementById("step-gate"),
  gateEnvelopeCard: document.getElementById("gate-envelope-card"),
  appShell: document.getElementById("app-shell"),
  srAnnouncer: document.getElementById("sr-announcer"),
  bgMusicAudio: document.getElementById("bg-music-audio"),

  goldDustCanvas: document.getElementById("gold-dust-canvas"),
  ambientPetalLayer: document.getElementById("ambient-petal-layer"),
  celebrationLayer: document.getElementById("celebration-layer"),
  desktopBotanicals: document.getElementById("desktop-botanicals"),

  locksProgress: document.getElementById("locks-progress"),
  ribbonProgressFill: document.getElementById("ribbon-progress-fill"),
  progressCountText: document.getElementById("progress-count-text"),
  lockIndicators: Array.from(document.querySelectorAll(".lock-indicator")),
  lockConnectors: Array.from(document.querySelectorAll(".lock-connector")),

  audioToggle: document.getElementById("audio-toggle"),
  audioIcon: document.getElementById("audio-icon"),
  audioText: document.getElementById("audio-text"),

  giftBoxStage: document.getElementById("gift-box-stage"),
  giftBoxWrapper: document.getElementById("gift-box-wrapper"),
  giftBox: document.getElementById("gift-box"),
  boxLid: document.getElementById("box-lid"),
  boxBow: document.getElementById("box-bow"),
  lidRibbonVertical: document.getElementById("lid-ribbon-vertical"),
  ribbonVertical: document.getElementById("ribbon-vertical"),
  ribbonHorizontal: document.getElementById("ribbon-horizontal"),
  boxPadlock: document.getElementById("box-padlock"),
  padlockShackle: document.getElementById("padlock-shackle"),
  boxGiftTag: document.getElementById("box-gift-tag"),
  tagHearts: Array.from(document.querySelectorAll(".tag-heart")),
  flyingKey: document.getElementById("flying-key"),
  mainBloomingRose: document.getElementById("main-blooming-rose"),
  boxBurstFlash: document.getElementById("box-burst-flash"),
  particlesAnchor: document.getElementById("particles-anchor"),

  stepIntro: document.getElementById("step-intro"),
  introSplitName: document.getElementById("intro-split-name"),
  stepQ1: document.getElementById("step-q1"),
  stepQ2: document.getElementById("step-q2"),
  stepQ3: document.getElementById("step-q3"),
  stepUnlocked: document.getElementById("step-unlocked"),
  stepLetter: document.getElementById("step-letter"),
  stepScratch: document.getElementById("step-scratch"),

  btnStart: document.getElementById("btn-start"),

  formQ1: document.getElementById("form-q1"),
  dateInputWrapper: document.getElementById("date-input-wrapper"),
  inputDate: document.getElementById("input-date"),
  btnSubmitQ1: document.getElementById("btn-submit-q1"),
  feedbackQ1: document.getElementById("feedback-q1"),

  optionsGridQ2: document.querySelector("#step-q2 .options-grid"),
  optionBtnsQ2: Array.from(document.querySelectorAll("#step-q2 .option-btn")),
  feedbackQ2: document.getElementById("feedback-q2"),

  formQ3: document.getElementById("form-q3"),
  inputIdentity: document.getElementById("input-identity"),
  btnSubmitQ3: document.getElementById("btn-submit-q3"),
  btnIdLove: document.getElementById("btn-id-love"),
  btnIdIntruder: document.getElementById("btn-id-intruder"),
  feedbackQ3: document.getElementById("feedback-q3"),

  polaroidCard: document.getElementById("polaroid-card"),
  couplePhoto: document.getElementById("couple-photo"),
  polaroidCaption: document.getElementById("polaroid-caption"),
  polaroidBackDate: document.getElementById("polaroid-back-date"),

  acaiTrack: document.getElementById("acai-track"),
  acaiFill: document.getElementById("acai-fill"),
  acaiHandle: document.getElementById("acai-handle"),
  acaiTapBtn: document.getElementById("acai-tap-btn"),

  letterEnvelopeStage: document.getElementById("letter-envelope-stage"),
  realEnvelope: document.getElementById("real-envelope"),
  loveLetterPaper: document.getElementById("love-letter-paper"),
  letterPagesViewport: document.getElementById("letter-pages-viewport"),
  letterPageBadge: document.getElementById("letter-page-badge"),
  letterPage1: document.getElementById("letter-page-1"),
  letterPage2: document.getElementById("letter-page-2"),
  letterPage3: document.getElementById("letter-page-3"),

  letterContentP1: document.getElementById("letter-content-p1"),
  letterGreetingP1: document.getElementById("letter-greeting-p1"),
  letterSignatureP1: document.getElementById("letter-signature-p1"),

  letterContentP2: document.getElementById("letter-content-p2"),
  letterGreetingP2: document.getElementById("letter-greeting-p2"),
  letterSignatureP2: document.getElementById("letter-signature-p2"),

  curlToPage2: document.getElementById("curl-to-page-2"),
  btnToPage2: document.getElementById("btn-to-page-2"),
  curlToPage3: document.getElementById("curl-to-page-3"),
  btnToPage3: document.getElementById("btn-to-page-3"),
  btnBackPage1: document.getElementById("btn-back-page-1"),
  btnBackPage2: document.getElementById("btn-back-page-2"),
  btnToScratch: document.getElementById("btn-to-scratch"),

  stThereseImg: document.getElementById("st-therese-img"),
  stTitle: document.getElementById("st-title"),
  stText1: document.getElementById("st-text-1"),
  stText2: document.getElementById("st-text-2"),

  scratchPageTitle: document.getElementById("scratch-page-title"),
  complimentsMain: document.getElementById("compliments-main"),
  complimentsJoke: document.getElementById("compliments-joke"),
  complimentsInstruction: document.getElementById("compliments-instruction"),

  scratchCardWrapper: document.getElementById("scratch-card-wrapper"),
  scratchCanvas: document.getElementById("scratch-canvas"),
  scratchDustCanvas: document.getElementById("scratch-dust-canvas"),
  btnRevealScratch: document.getElementById("btn-reveal-scratch"),

  couponTitle: document.getElementById("coupon-title"),
  couponDescription: document.getElementById("coupon-description"),
  btnAcceptDate: document.getElementById("btn-accept-date"),
  couponActions: document.getElementById("coupon-actions"),
  couponStamp: document.getElementById("coupon-stamp"),

  finalPromiseCard: document.getElementById("final-promise-card"),
  finalTitle: document.getElementById("final-title"),
  finalThanks: document.getElementById("final-thanks"),
  finalPromise: document.getElementById("final-promise"),
  finalHandwrittenLove: document.getElementById("final-handwritten-love"),
  finalDeclaration: document.getElementById("final-declaration"),

  counterDays: document.getElementById("counter-days"),
  counterHours: document.getElementById("counter-hours"),
  counterMinutes: document.getElementById("counter-minutes"),
  counterMesversarioBadge: document.getElementById("counter-mesversario-badge"),

  btnReadAgain: document.getElementById("btn-read-again"),
  btnRestart: document.getElementById("btn-restart"),
};

/* ============================================================================
   5. MOTOR DE ÁUDIO ROMÂNTICO ("soundFX" com Reverb, Caixinha de Música e MP3)
   ============================================================================ */
class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.reverbNode = null;
    this.filterNode = null;

    this.isPlayingMusic = false;
    this.usingExternalMp3 = false;
    this.mp3Checked = false;
    this.mp3Available = false;
    this.mediaElementSource = null;

    this.arpeggioTimer = null;
    this.stepIndex = 0;
    this.lastScratchSoundTime = 0;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Filtro Lowpass suave a 3.5kHz para calor analógico
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(3500, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(0.7, this.ctx.currentTime);

      // Reverb via ConvolverNode com Impulse Response sintético de 2.4s
      this.reverbNode = this.createSyntheticReverb(2.4, 2.2);

      // Dry + Wet mix
      const dryGain = this.ctx.createGain();
      const wetGain = this.ctx.createGain();
      dryGain.gain.setValueAtTime(0.72, this.ctx.currentTime);
      wetGain.gain.setValueAtTime(0.38, this.ctx.currentTime);

      this.filterNode.connect(dryGain);
      dryGain.connect(this.masterGain);

      if (this.reverbNode) {
        this.filterNode.connect(this.reverbNode);
        this.reverbNode.connect(wetGain);
        wetGain.connect(this.masterGain);
      }

      // Canal de Música
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.musicGain.connect(this.filterNode);

      // Canal de Efeitos Sonoros (SFX)
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.9, this.ctx.currentTime);
      this.sfxGain.connect(this.filterNode);
    }

    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  createSyntheticReverb(durationSec = 2.4, decay = 2.2) {
    try {
      const rate = this.ctx.sampleRate;
      const length = Math.floor(rate * durationSec);
      const impulse = this.ctx.createBuffer(2, length, rate);
      for (let ch = 0; ch < 2; ch++) {
        const data = impulse.getChannelData(ch);
        for (let i = 0; i < length; i++) {
          const n = i / length;
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - n, decay);
        }
      }
      const convolver = this.ctx.createConvolver();
      convolver.buffer = impulse;
      return convolver;
    } catch {
      return null;
    }
  }

  async checkMp3Availability() {
    if (this.mp3Checked) return this.mp3Available;
    this.mp3Checked = true;
    if (!CONFIG.musica || !CONFIG.musica.arquivo) return false;
    if (window.location.protocol === "file:") {
      this.mp3Available = false;
      return false;
    }
    try {
      const res = await fetch(CONFIG.musica.arquivo, { method: "HEAD" });
      const contentType = res.headers.get("content-type") || "";
      this.mp3Available = res.ok && (contentType.includes("audio") || contentType.includes("mpeg") || contentType.includes("octet-stream"));
    } catch {
      this.mp3Available = false;
    }
    return this.mp3Available;
  }

  async startAmbientMelody() {
    if (!state.audioEnabled || !state.pageVisible) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const fadeSec = ((CONFIG.musica && CONFIG.musica.fadeInMs) || 2500) / 1000;
    const targetVol = this.usingExternalMp3
      ? (CONFIG.musica && CONFIG.musica.volume) || 0.32
      : 0.18;

    const now = ctx.currentTime;
    this.musicGain.gain.cancelScheduledValues(now);
    this.musicGain.gain.setValueAtTime(Math.max(0.0001, this.musicGain.gain.value), now);
    this.musicGain.gain.linearRampToValueAtTime(targetVol, now + fadeSec);

    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    const hasMp3 = await this.checkMp3Availability();
    if (!state.audioEnabled || !this.isPlayingMusic) return;

    if (hasMp3 && el.bgMusicAudio) {
      try {
        if (!this.mediaElementSource) {
          el.bgMusicAudio.src = CONFIG.musica.arquivo;
          this.mediaElementSource = ctx.createMediaElementSource(el.bgMusicAudio);
          this.mediaElementSource.connect(this.musicGain);
        }
        await el.bgMusicAudio.play();
        this.usingExternalMp3 = true;
        const mp3Vol = (CONFIG.musica && CONFIG.musica.volume) || 0.32;
        this.musicGain.gain.linearRampToValueAtTime(mp3Vol, ctx.currentTime + fadeSec);
        return;
      } catch {
        this.usingExternalMp3 = false;
      }
    }

    // Fallback: Caixinha de Música + Pad Quente (Progressão C – Am – F – G a ~70 BPM)
    this.startMusicBoxGenerator();
  }

  startMusicBoxGenerator() {
    if (this.arpeggioTimer) clearInterval(this.arpeggioTimer);

    // Progressão romântica C -> Am -> F -> G (cada acorde tem 8 notas de arpejo + nota de baixo/pad)
    const chords = [
      { pad: [130.81, 196.0, 246.94], notes: [523.25, 659.25, 783.99, 1046.5, 783.99, 659.25, 783.99, 659.25] }, // Cmaj7
      { pad: [110.0, 164.81, 220.0], notes: [440.0, 523.25, 659.25, 880.0, 659.25, 523.25, 659.25, 523.25] },   // Am7
      { pad: [174.61, 220.0, 261.63], notes: [349.23, 440.0, 523.25, 698.46, 523.25, 440.0, 523.25, 440.0] },   // Fmaj7
      { pad: [196.0, 246.94, 293.66], notes: [392.0, 493.88, 587.33, 783.99, 587.33, 493.88, 587.33, 493.88] },  // G6
    ];

    const stepMs = 428; // ~70 BPM (colcheias suaves)

    const playTick = () => {
      if (!state.audioEnabled || !this.isPlayingMusic || !state.pageVisible) return;
      const ctx = this.ctx;
      if (!ctx || ctx.state !== "running") return;

      const chordIdx = Math.floor(this.stepIndex / 8) % chords.length;
      const noteIdx = this.stepIndex % 8;
      const chord = chords[chordIdx];

      // No início de cada compasso, toca o pad quente sustentado
      if (noteIdx === 0) {
        this.playWarmPadChord(chord.pad, (stepMs * 8) / 1000);
      }

      // Nota da caixinha de música (seno + harmônico de triângulo suave, decay de 1.5s)
      const freq = chord.notes[noteIdx];
      this.playMusicBoxNote(freq, 1.5);

      this.stepIndex = (this.stepIndex + 1) % (chords.length * 8);
    };

    playTick();
    this.arpeggioTimer = setInterval(playTick, stepMs);
  }

  playMusicBoxNote(freq, duration = 1.5) {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    const oscSine = this.ctx.createOscillator();
    const oscTri = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const triGain = this.ctx.createGain();

    oscSine.type = "sine";
    oscSine.frequency.setValueAtTime(freq, now);

    oscTri.type = "triangle";
    oscTri.frequency.setValueAtTime(freq * 2, now);
    triGain.gain.setValueAtTime(0.12, now);

    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.16, now + 0.018);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscSine.connect(noteGain);
    oscTri.connect(triGain);
    triGain.connect(noteGain);
    noteGain.connect(this.musicGain);

    oscSine.start(now);
    oscTri.start(now);
    oscSine.stop(now + duration + 0.04);
    oscTri.stop(now + duration + 0.04);
  }

  playWarmPadChord(freqs, duration = 3.4) {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    freqs.forEach((f) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.65);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    });
  }

  stopAmbientMelody(fadeMs = 450) {
    this.isPlayingMusic = false;
    if (this.arpeggioTimer) {
      clearInterval(this.arpeggioTimer);
      this.arpeggioTimer = null;
    }
    if (this.ctx && this.musicGain) {
      const now = this.ctx.currentTime;
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.setValueAtTime(Math.max(0.0001, this.musicGain.gain.value), now);
      this.musicGain.gain.linearRampToValueAtTime(0.0001, now + fadeMs / 1000);
    }
    if (this.usingExternalMp3 && el.bgMusicAudio) {
      setTimeout(() => {
        if (!this.isPlayingMusic) el.bgMusicAudio.pause();
      }, fadeMs);
    }
  }

  // Abaixa a música para 40% durante momentos especiais (abertura da caixa, aceitar encontro)
  duckMusic(durationMs = 2000) {
    if (!this.ctx || !this.musicGain || !this.isPlayingMusic) return;
    const now = this.ctx.currentTime;
    const baseVol = this.usingExternalMp3
      ? (CONFIG.musica && CONFIG.musica.volume) || 0.32
      : 0.18;

    this.musicGain.gain.cancelScheduledValues(now);
    this.musicGain.gain.setValueAtTime(Math.max(0.0001, this.musicGain.gain.value), now);
    this.musicGain.gain.linearRampToValueAtTime(baseVol * 0.4, now + 0.18);
    this.musicGain.gain.linearRampToValueAtTime(baseVol, now + durationMs / 1000);
  }

  // Helper de nota SFX suave (volume 0.04 a 0.08 passando pelo reverb)
  playSoftNote(freq, startTime, duration = 0.45, peakGain = 0.06, type = "sine") {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.03);
  }

  // Helper de ruído branco filtrado (lacre, papel, raspar)
  playFilteredNoise(durationSec = 0.14, filterType = "bandpass", freq = 1400, q = 1.2, peakGain = 0.055) {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;

    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(freq, ctx.currentTime);
    filter.Q.setValueAtTime(q, ctx.currentTime);

    const gain = ctx.createGain();
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peakGain, now + durationSec * 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
    noise.stop(now + durationSec + 0.02);
  }

  // Acerto: arpejo ascendente de 3 notas tipo sino/celesta (C6–E6–G6)
  playSuccess() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [1046.5, 1318.51, 1567.98].forEach((freq, idx) => {
      this.playSoftNote(freq, now + idx * 0.095, 0.55, 0.065, "sine");
    });
  }

  // Erro: "toc" de madeira grave e abafado (seno 180Hz com pitch caindo + ruído curto filtrado; nada de sawtooth)
  playError() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(78, now + 0.16);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.075, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.2);

    this.playFilteredNoise(0.06, "lowpass", 420, 0.8, 0.04);
  }

  // Lacre de cera rachando
  playWaxCrack() {
    this.playFilteredNoise(0.11, "bandpass", 1850, 2.2, 0.07);
    setTimeout(() => this.playFilteredNoise(0.08, "bandpass", 1320, 1.8, 0.05), 55);
  }

  // Chave/cadeado: dois cliques metálicos (seno alto + ruído passa-alta curto)
  playKeyUnlock() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    this.playSoftNote(2480, now, 0.08, 0.05, "sine");
    this.playFilteredNoise(0.04, "highpass", 3200, 1.5, 0.04);
    this.playSoftNote(2960, now + 0.14, 0.1, 0.055, "sine");
  }

  // Abertura da caixa: glissando de harpa ascendente (8 notas pentatônicas, 60ms entre elas) + acorde final
  playBoxUnlock() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    this.duckMusic(2600);

    const now = ctx.currentTime;
    const harpPentatonic = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];
    harpPentatonic.forEach((freq, idx) => {
      this.playSoftNote(freq, now + idx * 0.06, 0.85, 0.055, "triangle");
    });

    // Acorde final sustentado
    const chordStart = now + harpPentatonic.length * 0.06;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq) => {
      this.playSoftNote(freq, chordStart, 1.6, 0.048, "sine");
    });
  }

  // Virada de página de papel
  playPageTurn() {
    this.playFilteredNoise(0.16, "bandpass", 1150, 0.9, 0.055);
  }

  // Som sutil de raspar folha de ouro (apenas enquanto move o dedo)
  playScratchGrain() {
    if (!state.audioEnabled) return;
    const nowMs = performance.now();
    if (nowMs - this.lastScratchSoundTime < 75) return;
    this.lastScratchSoundTime = nowMs;
    this.playFilteredNoise(0.055, "bandpass", 2200, 1.4, 0.028);
  }

  // Carimbo ("thump" grave) + Aceitar encontro (acorde maior em cascata)
  playAcceptEncounter() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    this.duckMusic(2200);

    const now = ctx.currentTime;
    // Thump grave do carimbo
    this.playSoftNote(110, now, 0.22, 0.08, "sine");
    this.playFilteredNoise(0.07, "lowpass", 600, 1.0, 0.05);

    // Acorde maior brilhante em cascata
    const cascade = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98];
    cascade.forEach((freq, idx) => {
      this.playSoftNote(freq, now + 0.14 + idx * 0.07, 1.1, 0.058, "sine");
    });
  }
}

const soundFX = new RomanticAudioEngine();

/* ============================================================================
   INICIALIZAÇÃO DOS DADOS PERSONALIZADOS DO CONFIG
   ============================================================================ */
function initPersonalization() {
  // Foto do casal com fallback em uma única carga (sem carregar 2x)
  if (el.couplePhoto) {
    el.couplePhoto.onerror = function handlePhotoFallback() {
      el.couplePhoto.onerror = null;
      el.couplePhoto.src = CONFIG.fotoCasalReserva;
    };
    el.couplePhoto.src = CONFIG.fotoCasalUrl;
  }

  if (el.polaroidCaption) {
    el.polaroidCaption.textContent = CONFIG.legendaPolaroid;
  }
  if (el.polaroidBackDate) {
    el.polaroidBackDate.textContent = CONFIG.dataInicioNamoro;
  }

  // Página 1 da Carta
  if (CONFIG.cartaPagina1) {
    el.letterGreetingP1.textContent = CONFIG.cartaPagina1.saudacao;
    el.letterSignatureP1.textContent = CONFIG.cartaPagina1.assinatura;
    const existingP1 = el.letterContentP1.querySelectorAll(".letter-paragraph");
    existingP1.forEach((p) => p.remove());
    const sigWrap1 = el.letterContentP1.querySelector(".letter-signature-wrap");
    CONFIG.cartaPagina1.paragrafos.forEach((texto) => {
      const p = document.createElement("p");
      p.className = "letter-paragraph";
      p.textContent = texto;
      el.letterContentP1.insertBefore(p, sigWrap1);
    });
  }

  // Página 2 da Carta
  if (CONFIG.cartaPagina2) {
    el.letterGreetingP2.textContent = CONFIG.cartaPagina2.saudacao;
    el.letterSignatureP2.textContent = CONFIG.cartaPagina2.assinatura;
    const existingP2 = el.letterContentP2.querySelectorAll(".letter-paragraph");
    existingP2.forEach((p) => p.remove());
    const sigWrap2 = el.letterContentP2.querySelector(".letter-signature-wrap");
    CONFIG.cartaPagina2.paragrafos.forEach((texto) => {
      const p = document.createElement("p");
      p.className = "letter-paragraph";
      p.textContent = texto;
      el.letterContentP2.insertBefore(p, sigWrap2);
    });
  }

  // Página 3: Santa Teresinha (fallback sem carregar 2x + "flor branca" em itálico)
  if (CONFIG.santaTeresinha && el.stThereseImg) {
    el.stThereseImg.onerror = function handleStFallback() {
      el.stThereseImg.onerror = null;
      el.stThereseImg.src = CONFIG.santaTeresinha.imagemReserva;
    };
    el.stThereseImg.src = CONFIG.santaTeresinha.imagemUrl;

    if (el.stTitle) {
      el.stTitle.innerHTML = CONFIG.santaTeresinha.titulo.replace(
        /flor branca/i,
        "<em>flor branca</em>"
      );
    }
    if (el.stText1) el.stText1.textContent = CONFIG.santaTeresinha.texto1;
    if (el.stText2) el.stText2.textContent = CONFIG.santaTeresinha.texto2;
  }

  // Etapa 6: Elogios e Raspadinha
  if (CONFIG.elogiosRaspadinha) {
    if (el.scratchPageTitle) el.scratchPageTitle.textContent = CONFIG.elogiosRaspadinha.titulo;
    if (el.complimentsMain) el.complimentsMain.textContent = CONFIG.elogiosRaspadinha.elogios;
    if (el.complimentsJoke) el.complimentsJoke.textContent = CONFIG.elogiosRaspadinha.brincadeira;
    if (el.complimentsInstruction) {
      el.complimentsInstruction.textContent = CONFIG.elogiosRaspadinha.instrucao;
    }
  }

  // Textos do Cupom de Açaí
  if (CONFIG.cupomAcai) {
    if (el.couponTitle) el.couponTitle.textContent = CONFIG.cupomAcai.titulo;
    if (el.couponDescription) el.couponDescription.textContent = CONFIG.cupomAcai.descricao;
  }

  // Mensagem final de agradecimento
  if (CONFIG.agradecimentoFinal) {
    if (el.finalTitle) el.finalTitle.textContent = CONFIG.agradecimentoFinal.titulo;
    if (el.finalThanks) el.finalThanks.textContent = CONFIG.agradecimentoFinal.agradecimento;
    if (el.finalPromise) el.finalPromise.textContent = CONFIG.agradecimentoFinal.promessa;

    const fullDecl = CONFIG.agradecimentoFinal.declaracao;
    const prefix = "Eu te amo, Isabela.";
    if (fullDecl.startsWith(prefix)) {
      if (el.finalHandwrittenLove) el.finalHandwrittenLove.textContent = prefix;
      if (el.finalDeclaration) el.finalDeclaration.textContent = fullDecl.slice(prefix.length).trim();
    } else {
      if (el.finalDeclaration) el.finalDeclaration.textContent = fullDecl;
    }
  }

  // Prepara animação por letra em "Isabela" na Intro
  setupIntroSplitName();
}

function setupIntroSplitName() {
  if (!el.introSplitName || state.reducedMotion) return;
  const text = el.introSplitName.textContent.trim();
  el.introSplitName.innerHTML = "";
  Array.from(text).forEach((ch, idx) => {
    const span = document.createElement("span");
    span.className = "split-char";
    span.style.setProperty("--char-delay", `${120 + idx * 35}ms`);
    span.textContent = ch;
    el.introSplitName.appendChild(span);
  });
}

// Pré-carrega assets da etapa final quando a pessoa chega na Pergunta 3
function preloadUpcomingAssets() {
  if (state.preloadedHeavyAssets) return;
  state.preloadedHeavyAssets = true;
  if (CONFIG.santaTeresinha && CONFIG.santaTeresinha.imagemUrl) {
    const imgSt = new Image();
    imgSt.src = CONFIG.santaTeresinha.imagemUrl;
  }
  if (CONFIG.fotoCasalUrl) {
    const imgCouple = new Image();
    imgCouple.src = CONFIG.fotoCasalUrl;
  }
}

/* ============================================================================
   POEIRA DOURADA (CANVAS) + PÉTALA SOLITÁRIA A CADA 6–10s
   ============================================================================ */
let goldDustRaf = null;
let singlePetalTimeout = null;

function initAmbientParticles() {
  const canvas = el.goldDustCanvas;
  if (!canvas || state.reducedMotion) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const count = isLowEndMobile ? 18 : 26;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.8,
    vy: -(Math.random() * 0.28 + 0.1),
    vx: (Math.random() - 0.5) * 0.18,
    alpha: Math.random() * 0.55 + 0.2,
    phase: Math.random() * Math.PI * 2,
  }));

  window.addEventListener(
    "resize",
    () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    },
    { passive: true }
  );

  function renderDust() {
    if (!state.pageVisible || state.reducedMotion) {
      goldDustRaf = null;
      return;
    }
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.vy;
      p.x += p.vx + Math.sin(p.phase) * 0.08;
      p.phase += 0.02;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      const twinkle = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(243, 227, 189, ${twinkle.toFixed(3)})`;
      ctx.fill();
    }
    goldDustRaf = requestAnimationFrame(renderDust);
  }

  goldDustRaf = requestAnimationFrame(renderDust);

  // De vez em quando (a cada 6–10s) cai uma única pétala de rosa SVG
  function scheduleSinglePetal() {
    if (singlePetalTimeout) clearTimeout(singlePetalTimeout);
    if (state.reducedMotion || !state.pageVisible) return;

    const nextMs = 6200 + Math.random() * 3800;
    singlePetalTimeout = setTimeout(() => {
      if (state.pageVisible && !state.reducedMotion && el.ambientPetalLayer) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 28 32");
        svg.setAttribute("class", "ambient-single-petal");
        svg.style.left = `${Math.random() * 88 + 6}%`;
        svg.style.animationDuration = `${7 + Math.random() * 3.5}s`;
        svg.innerHTML = `<use href="#petal" />`;
        el.ambientPetalLayer.appendChild(svg);
        setTimeout(() => svg.remove(), 11000);
      }
      scheduleSinglePetal();
    }, nextMs);
  }

  scheduleSinglePetal();
}

/* ============================================================================
   2. TELA DE ENTRADA COM LACRE DE CERA (#step-gate) E CONTROLE DE SOM
   ============================================================================ */
function updateAudioButtonUI() {
  if (!el.audioToggle) return;
  el.audioToggle.setAttribute("aria-pressed", String(state.audioEnabled));
  if (state.audioEnabled) {
    el.audioText.textContent = "Música";
    el.audioToggle.setAttribute("aria-label", "Silenciar trilha sonora");
  } else {
    el.audioText.textContent = "Som";
    el.audioToggle.setAttribute("aria-label", "Ativar trilha sonora suave");
  }
}

function setupGateAndAudio() {
  updateAudioButtonUI();

  function openGateExperience() {
    if (state.gateOpened) return;
    state.gateOpened = true;

    // 1. Desbloqueia o AudioContext e inicia a música com fade-in de 2.5s
    soundFX.initContext();
    soundFX.playWaxCrack();
    if (state.audioEnabled) {
      soundFX.startAmbientMelody();
    }

    if (!el.stepGate) return;

    if (state.reducedMotion) {
      el.stepGate.hidden = true;
      return;
    }

    // 2. O lacre racha em 2 metades que caem + aba do envelope abre
    el.stepGate.classList.add("gate-opening");

    // 3. Dissolve num zoom suave em direção à Intro (~900ms)
    setTimeout(() => {
      el.stepGate.classList.add("gate-dissolve");
    }, 340);

    setTimeout(() => {
      el.stepGate.hidden = true;
      el.stepGate.classList.remove("gate-opening", "gate-dissolve");
      if (el.stepIntro) {
        const heading = el.stepIntro.querySelector("h1");
        if (heading) heading.focus({ preventScroll: true });
      }
    }, 920);
  }

  if (el.stepGate) {
    el.stepGate.addEventListener("click", openGateExperience);
    el.stepGate.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openGateExperience();
      }
    });
  }

  // Botão de mutar/desmutar (sem conflito com listeners globais)
  if (el.audioToggle) {
    el.audioToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      state.audioEnabled = !state.audioEnabled;
      sessionStorage.setItem(STORAGE_AUDIO_KEY, String(state.audioEnabled));
      updateAudioButtonUI();

      if (state.audioEnabled) {
        soundFX.startAmbientMelody();
        soundFX.playSuccess();
      } else {
        soundFX.stopAmbientMelody(350);
      }
    });
  }

  // Pausa todos os loops (música, pétalas, poeira dourada) quando a aba fica em segundo plano
  document.addEventListener("visibilitychange", () => {
    state.pageVisible = document.visibilityState !== "hidden";
    if (!state.pageVisible) {
      soundFX.stopAmbientMelody(300);
      stopContinuousWhiteFlowers();
    } else {
      if (state.gateOpened && state.audioEnabled) {
        soundFX.startAmbientMelody();
      }
      if (!state.reducedMotion && !goldDustRaf) {
        initAmbientParticles();
      }
      if (!el.stepLetter.hidden && state.currentLetterPage === 3) {
        startContinuousWhiteFlowers();
      }
    }
  });
}

/* ============================================================================
   PARALLAX LEVE DA CAIXA E CENOGRAFIA DESKTOP
   ============================================================================ */
function setupBoxAndDesktopParallax() {
  if (state.reducedMotion) return;

  window.addEventListener(
    "pointermove",
    (e) => {
      if (state.isUnlockingBox) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1 a 1
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      if (el.giftBox && !el.giftBoxStage.hidden) {
        const rotY = nx * 5.5;
        const rotX = -ny * 4.5;
        el.giftBox.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }

      if (el.desktopBotanicals && window.innerWidth >= 768) {
        const leftCluster = el.desktopBotanicals.querySelector(".botanical-left");
        const rightCluster = el.desktopBotanicals.querySelector(".botanical-right");
        if (leftCluster) {
          leftCluster.style.transform = `translate3d(${(nx * -10).toFixed(1)}px, calc(-50% + ${(ny * -8).toFixed(1)}px), 0)`;
        }
        if (rightCluster) {
          rightCluster.style.transform = `translate3d(${(nx * 10).toFixed(1)}px, calc(-50% + ${(ny * 8).toFixed(1)}px), 0) scaleX(-1)`;
        }
      }
    },
    { passive: true }
  );
}

/* ============================================================================
   4.1 TRANSIÇÕES ENTRE ETAPAS (View Transitions + Stagger + Acessibilidade)
   ============================================================================ */
const allSteps = [
  el.stepIntro,
  el.stepQ1,
  el.stepQ2,
  el.stepQ3,
  el.stepUnlocked,
  el.stepLetter,
  el.stepScratch,
];

function applyStepStagger(stepEl) {
  if (!stepEl || state.reducedMotion) return;
  const children = stepEl.querySelectorAll(".stagger-item");
  children.forEach((child, idx) => {
    child.style.setProperty("--stagger-delay", `${idx * 60}ms`);
  });
  stepEl.classList.remove("stagger-ready");
  void stepEl.offsetWidth;
  stepEl.classList.add("stagger-ready");
}

function focusAndAnnounceStep(stepEl) {
  if (!stepEl) return;
  const heading = stepEl.querySelector("h1, h2, h3");
  if (heading) {
    if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
    if (el.srAnnouncer) {
      el.srAnnouncer.textContent = heading.textContent.trim();
    }
  }

  // Rola suavemente para o topo apenas se necessário
  const rect = stepEl.getBoundingClientRect();
  if (rect.top < 0 || rect.top > window.innerHeight * 0.45) {
    window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });
  }
}

function goToStep(targetStep) {
  if (!targetStep) return;
  const currentStep = allSteps.find((s) => s && !s.hidden);

  if (currentStep === targetStep) {
    focusAndAnnounceStep(targetStep);
    return;
  }

  const switchDom = () => {
    allSteps.forEach((step) => {
      if (!step) return;
      const isTarget = step === targetStep;
      step.hidden = !isTarget;
      step.classList.toggle("active-step", isTarget);
      step.classList.remove("step-leaving", "step-entering");
    });

    if (!state.reducedMotion) {
      targetStep.classList.add("step-entering");
      applyStepStagger(targetStep);
    }
    focusAndAnnounceStep(targetStep);
  };

  if (state.reducedMotion || !currentStep) {
    switchDom();
    return;
  }

  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => {
      switchDom();
    });
  } else {
    currentStep.classList.add("step-leaving");
    setTimeout(() => {
      switchDom();
    }, 260);
  }
}

function showStep(targetStep) {
  goToStep(targetStep);
}

/* ============================================================================
   PROGRESSO DA FITA DE CETIM E REAÇÕES DA CAIXA DE PORCELANA
   ============================================================================ */
function unlockIndicator(lockNumber) {
  const index = lockNumber - 1;
  state.locksOpened[index] = true;

  const indicator = el.lockIndicators[index];
  if (indicator) {
    indicator.setAttribute("data-unlocked", "true");
  }

  // Acende o coração correspondente na etiqueta "Para Isabela"
  const tagHeart = el.tagHearts[index];
  if (tagHeart) {
    tagHeart.classList.add("lit");
  }

  const totalOpened = state.locksOpened.filter(Boolean).length;
  if (el.ribbonProgressFill) {
    const pct = (totalOpened / 3) * 100;
    el.ribbonProgressFill.style.width = `${pct}%`;
  }
  if (el.progressCountText) {
    el.progressCountText.textContent = `${totalOpened} de 3`;
  }
  if (el.locksProgress) {
    el.locksProgress.setAttribute(
      "aria-label",
      `Progresso de desbloqueio: ${totalOpened} de 3 cadeados abertos`
    );
  }
}

function spawnBoxMiniPetals(count = 7) {
  if (state.reducedMotion || !el.particlesAnchor) return;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("div");
    item.className = "burst-petal-item";
    const isGoldSpark = i % 3 === 0;
    item.innerHTML = isGoldSpark
      ? `<svg viewBox="0 0 24 24"><use href="#sparkle" /></svg>`
      : `<svg viewBox="0 0 28 32"><use href="#petal" /></svg>`;
    el.particlesAnchor.appendChild(item);

    const angle = (-135 + Math.random() * 90) * (Math.PI / 180);
    const dist = 48 + Math.random() * 55;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 15;
    const rot = (Math.random() - 0.5) * 220;

    item.animate(
      [
        { transform: "translate3d(0,0,0) scale(0.4) rotate(0deg)", opacity: 1 },
        { transform: `translate3d(${tx}px, ${ty}px, 0) scale(1) rotate(${rot}deg)`, opacity: 0.9, offset: 0.6 },
        { transform: `translate3d(${tx * 1.15}px, ${ty + 38}px, 0) scale(0.6) rotate(${rot * 1.4}deg)`, opacity: 0 },
      ],
      { duration: 920 + Math.random() * 260, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    ).onfinish = () => item.remove();
  }
}

function triggerBoxSuccessBounce() {
  soundFX.playSuccess();
  navigator.vibrate?.(15);

  if (state.reducedMotion) return;
  el.giftBoxWrapper.classList.remove("box-shake-error", "box-bounce-success");
  void el.giftBoxWrapper.offsetWidth;
  el.giftBoxWrapper.classList.add("box-bounce-success");
  spawnBoxMiniPetals(7);
}

function triggerBoxErrorShake(inputEl) {
  soundFX.playError();
  navigator.vibrate?.([20, 40, 20]);

  if (state.reducedMotion) return;
  el.giftBoxWrapper.classList.remove("box-bounce-success", "box-shake-error");
  void el.giftBoxWrapper.offsetWidth;
  el.giftBoxWrapper.classList.add("box-shake-error");

  if (inputEl) {
    inputEl.classList.remove("input-shake");
    void inputEl.offsetWidth;
    inputEl.classList.add("input-shake");
  }
}

function renderFeedback(container, type, messageHtml, actionLabel = null, onAction = null) {
  container.hidden = false;
  container.className = `feedback-box ${type === "success" ? "feedback-success" : "feedback-error"}`;
  container.innerHTML = `<div>${messageHtml}</div>`;

  if (actionLabel && typeof onAction === "function") {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-primary feedback-action-btn";
    if (actionLabel.includes("Abrir a caixa")) {
      btn.classList.add("btn-heartbeat");
    }
    btn.innerHTML = `<span>${actionLabel}</span>`;
    btn.addEventListener("click", onAction);
    container.appendChild(btn);
  }
}

/* ============================================================================
   ETAPA 1: VALIDAÇÃO DA DATA DO ANIVERSÁRIO DE NAMORO
   ============================================================================ */
function formatDateInputMask(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
  return `${digits.slice(0, 2)} / ${digits.slice(2, 4)} / ${digits.slice(4, 8)}`;
}

function normalizeDateDigits(str) {
  return str.replace(/\D/g, "");
}

function isAnniversaryDateCorrect(rawInput) {
  const cleanUser = normalizeDateDigits(rawInput);
  const cleanTarget = normalizeDateDigits(CONFIG.dataInicioNamoro);

  // Aceita tanto DDMMAAAA completo (ex: 27092026) quanto DDMM (2709) caso digite sem o ano
  if (cleanUser === cleanTarget) return true;
  if (cleanUser.length >= 4 && cleanTarget.length >= 4) {
    const userDayMonth = cleanUser.slice(0, 4);
    const targetDayMonth = cleanTarget.slice(0, 4);
    const userYear = cleanUser.slice(4);
    const targetYear = cleanTarget.slice(4);
    if (userDayMonth === targetDayMonth && (userYear === "" || userYear === targetYear)) {
      return true;
    }
  }
  return false;
}

function setupQuestion1() {
  el.inputDate.addEventListener("input", (e) => {
    const formatted = formatDateInputMask(e.target.value);
    e.target.value = formatted;
    const digits = normalizeDateDigits(formatted);
    if (el.btnSubmitQ1) {
      el.btnSubmitQ1.classList.toggle("pulse-ready", digits.length === 8);
    }
  });

  el.formQ1.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.locksOpened[0]) return;

    const val = el.inputDate.value.trim();
    if (!val) {
      triggerBoxErrorShake(el.inputDate);
      renderFeedback(
        el.feedbackQ1,
        "error",
        "Digite a data especial do nosso começo antes de tentar abrir o cadeado 💕"
      );
      return;
    }

    if (isAnniversaryDateCorrect(val)) {
      unlockIndicator(1);
      triggerBoxSuccessBounce();
      if (el.dateInputWrapper) el.dateInputWrapper.classList.add("sealed");
      el.inputDate.disabled = true;
      el.btnSubmitQ1.hidden = true;
      el.btnSubmitQ1.classList.remove("pulse-ready");

      renderFeedback(
        el.feedbackQ1,
        "success",
        "<strong>Sim, meu amor!</strong> 27/09 — o dia em que começou a nossa história mais bonita. O primeiro cadeado já se abriu! ❤️✨",
        "Ir para a 2ª pergunta",
        () => goToStep(el.stepQ2)
      );
    } else {
      state.q1Attempts += 1;
      triggerBoxErrorShake(el.inputDate);

      let hintMsg =
        "Quase lá, meu amor! Pensa com carinho no dia exato em que dissemos sim para a nossa caminhada juntos… 💭💕";
      if (state.q1Attempts === 2) {
        hintMsg =
          "Dica especial do coração: foi num dia <strong>27 de setembro</strong> muito abençoado… Tenta de novo! 🥰";
      } else if (state.q1Attempts >= 3) {
        hintMsg =
          "Amor, até o <strong>VAR do nosso tricolor</strong> já chamou no monitor pra ajudar! 😂⚽ Dica oficial da cabine: foi em <strong>27/09</strong>! Agora é só bater pro gol! ❤️🤍🖤";
      }

      renderFeedback(el.feedbackQ1, "error", hintMsg);
    }
  });
}

/* ============================================================================
   ETAPA 2: PERGUNTA DE SANTA TERESINHA
   ============================================================================ */
function setupQuestion2() {
  el.optionBtnsQ2.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.locksOpened[1]) return;

      const choice = btn.getAttribute("data-option");

      if (choice === "c") {
        btn.classList.add("selected-correct");
        if (el.optionsGridQ2) el.optionsGridQ2.classList.add("has-winner");
        el.optionBtnsQ2.forEach((b) => (b.disabled = true));

        unlockIndicator(2);
        triggerBoxSuccessBounce();

        renderFeedback(
          el.feedbackQ2,
          "success",
          "<strong>Isso mesmo, meu amor!</strong> Foi para <strong>Santa Teresinha do Menino Jesus</strong> que rezamos pedindo um sinal do céu… e que confirmação linda ela nos deu! 🌹🤍✨",
          "Ir para a última pergunta",
          () => {
            preloadUpcomingAssets();
            goToStep(el.stepQ3);
          }
        );
      } else {
        btn.classList.add("selected-wrong");
        triggerBoxErrorShake(btn);

        const wrongFeedbacks = {
          a: "Santa Cecília é muito querida, mas não foi para ela que pedimos a nossa confirmação especial… Tenta mais uma vez, meu amor! 🎶🤍",
          b: "Santo Antônio tem fama de casamenteiro, né? 😂 Mas a nossa intercessora especial do céu foi outra santinha das rosas… 🌹💭",
          d: "Amor, você ama demais o <strong>Santo Rosário</strong> mesmo, né?! 😂📿 São Domingos de Gusmão fica muito feliz no céu com tanta devoção sua, mas a confirmação do nosso namoro nós pedimos para a santinha da chuva de rosas! 🌹🤍"
        };

        renderFeedback(
          el.feedbackQ2,
          "error",
          wrongFeedbacks[choice] || "Quase! Tenta outra opção com carinho 💕"
        );
      }
    });
  });
}

/* ============================================================================
   ETAPA 3: PERGUNTA DE IDENTIDADE ("ISABELA", "ISA" OU "AMOR") + PLACEHOLDER FANTASMA
   ============================================================================ */
let ghostPlaceholderInterval = null;

function setupGhostPlaceholderQ3() {
  if (!el.inputIdentity || state.reducedMotion) return;
  const phrases = ["Isabela…", "Isa…", "Amor da vida do…"];
  let phraseIdx = 0;

  ghostPlaceholderInterval = setInterval(() => {
    if (document.activeElement === el.inputIdentity || el.stepQ3.hidden) return;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    el.inputIdentity.setAttribute("placeholder", phrases[phraseIdx]);
  }, 3000);
}

function normalizeText(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function handleQuestion3Success(customMessage) {
  if (state.locksOpened[2]) return;

  unlockIndicator(3);
  triggerBoxSuccessBounce();

  el.inputIdentity.disabled = true;
  el.btnSubmitQ3.hidden = true;
  el.btnIdLove.disabled = true;
  el.btnIdIntruder.disabled = true;

  renderFeedback(
    el.feedbackQ3,
    "success",
    customMessage,
    "Abrir a caixa misteriosa",
    () => triggerBoxUnlockSequence()
  );
}

function setupQuestion3() {
  setupGhostPlaceholderQ3();

  el.formQ3.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.locksOpened[2]) return;

    const rawValue = el.inputIdentity.value;
    const clean = normalizeText(rawValue);

    if (!clean) {
      triggerBoxErrorShake(el.inputIdentity);
      renderFeedback(
        el.feedbackQ3,
        "error",
        "Digite seu nome lindo ou escolha um dos botões abaixo para o cadeado reconhecer você! 🥰"
      );
      return;
    }

    const containsAmor = clean.includes("amor");
    const startsWithIsa = clean.startsWith("isa") || clean.includes("isabela");

    if (containsAmor) {
      handleQuestion3Success(
        "<strong>Ownnn!</strong> Escrevendo <em>'amor'</em> a caixa reconhece na hora a dona do coração do Caique! Todos os cadeados foram destrancados! 🥰💖"
      );
      return;
    }

    if (startsWithIsa) {
      const isExactIsaOrIsabela = clean === "isa" || clean === "isabela";
      if (!isExactIsaOrIsabela) {
        handleQuestion3Success(
          `Opa, peraí… <strong>"${rawValue.trim()}"</strong>?! 😂 Seria essa uma <em>Isa Ivo do multiverso</em> ou uma invasora disfarçada tentando abrir a caixa?! Como começou com <strong>Isa</strong>, o sistema liberou com carinho! 💖🔓`
        );
      } else {
        handleQuestion3Success(
          "<strong>Identidade confirmada com sucesso:</strong> Isabela, a dona do meu coração! Todos os cadeados foram destrancados! ❤️🔓"
        );
      }
      return;
    }

    triggerBoxErrorShake(el.inputIdentity);
    renderFeedback(
      el.feedbackQ3,
      "error",
      "Hmm… O sensor romântico apitou aqui! 🕵️‍♂️💘 Digite <strong>'Isabela'</strong>, <strong>'Isa'</strong> ou escreva <strong>'Amor'</strong> (ou toque em <em>'Sou o amor da vida do Caique'</em>) para destrancar!"
    );
  });

  el.btnIdLove.addEventListener("click", () => {
    if (state.locksOpened[2]) return;
    handleQuestion3Success(
      "<strong>Sabia que era você, amor da minha vida!</strong> Todos os 3 cadeados foram abertos. Prepare o coração para abrir a nossa caixa! 💘🔓"
    );
  });

  el.btnIdIntruder.addEventListener("click", () => {
    if (state.locksOpened[2]) return;
    triggerBoxErrorShake(el.btnIdIntruder);
    renderFeedback(
      el.feedbackQ3,
      "error",
      "Alerta de segurança máxima! 🚨 Essa caixa é exclusiva da <strong>Isabela</strong>, o amor da minha vida. Se você é ela, clique na opção de cima ou digite seu nome lindo! 😂💖"
    );
  });
}

/* ============================================================================
   3.3 & 3.4 SEQUÊNCIA DE ABERTURA DA CAIXA (~3.5s) E EXPLOSÃO DE ROSAS COM FÍSICA
   ============================================================================ */
function spawnRoseAndPetalPhysicsBurst() {
  if (!el.particlesAnchor) return;

  if (state.reducedMotion) {
    // Reduced motion: 5 rosas estáticas aparecendo com fade
    for (let i = 0; i < 5; i++) {
      const rose = document.createElement("div");
      rose.className = "burst-rose-item";
      const sym = i === 2 ? "#rose-white" : "#rose";
      rose.innerHTML = `<svg viewBox="0 0 80 80"><use href="${sym}" /></svg>`;
      rose.style.transform = `translate3d(${(i - 2) * 38}px, ${-48 - (i % 2) * 18}px, 0) scale(0.85)`;
      el.particlesAnchor.appendChild(rose);
      setTimeout(() => rose.remove(), 3500);
    }
    return;
  }

  // 1. Burst de 12 Rosas Inteiras (80% vermelhas #rose, 20% brancas #rose-white) com física real
  const roseCount = isLowEndMobile ? 10 : 14;
  for (let i = 0; i < roseCount; i++) {
    const roseEl = document.createElement("div");
    roseEl.className = "burst-rose-item";
    const isWhite = i % 5 === 0; // 20% brancas (flor de Santa Teresinha)
    roseEl.innerHTML = `<svg viewBox="0 0 80 80"><use href="${isWhite ? "#rose-white" : "#rose"}" /></svg>`;
    el.particlesAnchor.appendChild(roseEl);

    const spreadAngle = (-145 + (i / (roseCount - 1)) * 110 + (Math.random() - 0.5) * 14) * (Math.PI / 180);
    const speed = 220 + Math.random() * 160;
    const vx = Math.cos(spreadAngle) * speed;
    const vy0 = Math.sin(spreadAngle) * speed - 60;
    const gravity = 460;
    const scale = 0.55 + Math.random() * 0.55;
    const rotSpeed = (Math.random() - 0.5) * 260;
    const totalMs = 2100 + Math.random() * 500;
    const startTime = performance.now();

    function stepRose(now) {
      const elapsed = (now - startTime) / 1000;
      const progress = (now - startTime) / totalMs;
      if (progress >= 1) {
        roseEl.remove();
        return;
      }
      const x = vx * elapsed;
      const y = vy0 * elapsed + 0.5 * gravity * elapsed * elapsed;
      const rot = rotSpeed * elapsed;
      const alpha = progress > 0.72 ? 1 - (progress - 0.72) / 0.28 : 1;
      roseEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      roseEl.style.opacity = alpha.toFixed(2);
      requestAnimationFrame(stepRose);
    }

    requestAnimationFrame(stepRose);
  }

  // 2. 35 a 50 Pétalas que explodem e depois caem lentamente pela tela inteira por ~5s com flutter
  const petalCount = isLowEndMobile ? 28 : 46;
  for (let i = 0; i < petalCount; i++) {
    const petalEl = document.createElement("div");
    petalEl.className = "burst-petal-item";
    const isWhite = i % 5 === 0;
    petalEl.innerHTML = `<svg viewBox="0 0 28 32"><use href="${isWhite ? "#petal-white" : "#petal"}" /></svg>`;
    el.celebrationLayer.appendChild(petalEl);

    const startX = window.innerWidth * 0.5 + (Math.random() - 0.5) * 60;
    const startY = window.innerHeight * 0.34 + (Math.random() - 0.5) * 30;
    const burstVx = (Math.random() - 0.5) * (window.innerWidth * 0.85);
    const burstVy = -(80 + Math.random() * 180);
    const fallSpeed = 75 + Math.random() * 65;
    const swayAmp = 22 + Math.random() * 28;
    const swayFreq = 1.8 + Math.random() * 1.6;
    const phase = Math.random() * Math.PI * 2;
    const scale = 0.65 + Math.random() * 0.65;
    const durationMs = 4600 + Math.random() * 1200;
    const t0 = performance.now();

    function stepPetal(now) {
      const dt = (now - t0) / 1000;
      const p = (now - t0) / durationMs;
      if (p >= 1 || !state.pageVisible) {
        petalEl.remove();
        return;
      }
      // Transição suave do impulso inicial para queda com deriva senoidal
      const damp = Math.exp(-dt * 2.1);
      const x =
        startX +
        burstVx * (1 - damp) * 0.48 +
        Math.sin(dt * swayFreq + phase) * swayAmp;
      const y =
        startY +
        burstVy * (1 - damp) * 0.42 +
        fallSpeed * dt * dt * 0.55;

      const rotZ = dt * 95 + Math.sin(dt * 2.5) * 25;
      const rotX = Math.sin(dt * 3.2 + phase) * 65;
      const rotY = Math.cos(dt * 2.8 + phase) * 65;
      const alpha = p > 0.8 ? 1 - (p - 0.8) / 0.2 : 1;

      petalEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateZ(${rotZ.toFixed(1)}deg) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      petalEl.style.opacity = alpha.toFixed(2);
      requestAnimationFrame(stepPetal);
    }

    requestAnimationFrame(stepPetal);
  }
}

function triggerBoxUnlockSequence() {
  if (state.isUnlockingBox) return;
  state.isUnlockingBox = true;

  if (state.reducedMotion) {
    soundFX.playBoxUnlock();
    el.giftBoxStage.classList.add("rays-active", "css-fallback-open", "compact");
    spawnRoseAndPetalPhysicsBurst();
    startPolaroidDeveloping();
    goToStep(el.stepUnlocked);
    return;
  }

  const gsapInstance = window.gsap;
  if (!gsapInstance) {
    // Degradação elegante caso o CDN do GSAP não tenha carregado
    soundFX.playKeyUnlock();
    setTimeout(() => {
      soundFX.playBoxUnlock();
      el.giftBoxStage.classList.add("rays-active", "css-fallback-open");
      spawnRoseAndPetalPhysicsBurst();
    }, 1100);
    setTimeout(() => {
      el.giftBoxStage.classList.add("compact");
      startPolaroidDeveloping();
      goToStep(el.stepUnlocked);
    }, 3100);
    return;
  }

  // Timeline coreografada de ~3.5s com GSAP
  const tl = gsapInstance.timeline();

  // 0.00s: Chave dourada entra voando em arco, encaixa no cadeado e gira 90°
  tl.add(() => soundFX.playKeyUnlock(), 0);
  tl.fromTo(
    el.flyingKey,
    { opacity: 0, x: -70, y: -35, rotation: -35, scale: 0.8 },
    { opacity: 1, x: 78, y: 12, rotation: 0, scale: 1, duration: 0.32, ease: "power2.out" },
    0
  );
  tl.to(el.flyingKey, { rotation: 90, duration: 0.14, ease: "back.out(2)" }, 0.32);

  // 0.45s: A haste do cadeado salta e o cadeado cai com gravidade, gira e some com fade
  tl.to(el.padlockShackle, { y: -8, rotation: 22, duration: 0.18, ease: "back.out(2)" }, 0.45);
  tl.to(
    [el.boxPadlock, el.flyingKey],
    { y: 75, rotation: 28, opacity: 0, duration: 0.42, ease: "power2.in" },
    0.55
  );

  // 0.85s: O laço desfaz e as fitas escorregam pelas laterais
  tl.to(
    el.boxBow.querySelectorAll(".bow-loop-left, .bow-tail-left"),
    { x: -28, scaleX: 0.35, opacity: 0, duration: 0.42, ease: "power2.inOut" },
    0.85
  );
  tl.to(
    el.boxBow.querySelectorAll(".bow-loop-right, .bow-tail-right"),
    { x: 28, scaleX: 0.35, opacity: 0, duration: 0.42, ease: "power2.inOut" },
    0.85
  );
  tl.to(el.boxBow.querySelector(".bow-knot"), { scale: 0, opacity: 0, duration: 0.3 }, 0.92);
  tl.to(
    [el.ribbonVertical, el.lidRibbonVertical],
    { scaleY: 0, y: 40, opacity: 0, duration: 0.45, ease: "power2.in" },
    0.95
  );
  tl.to(
    el.ribbonHorizontal,
    { scaleX: 0, x: 45, opacity: 0, duration: 0.45, ease: "power2.in" },
    0.95
  );

  // 1.40s: A tampa sobe e é lançada para o lado com rotação e fade; sai luz quente
  tl.add(() => {
    el.giftBoxStage.classList.add("rays-active");
  }, 1.38);
  tl.to(
    el.boxLid,
    { y: -68, rotationX: 25, rotationZ: -12, duration: 0.32, ease: "power2.out" },
    1.4
  );
  tl.to(
    el.boxLid,
    { x: -115, y: -25, rotationZ: -42, opacity: 0, duration: 0.42, ease: "power2.in" },
    1.72
  );

  // 1.60s: EXPLOSÃO DE ROSAS + Rosa principal desabrochando de dentro para fora
  tl.add(() => {
    soundFX.playBoxUnlock();
    spawnRoseAndPetalPhysicsBurst();
  }, 1.6);

  // Flash de luz quente rápido (0 -> 0.35 -> 0)
  tl.fromTo(
    el.boxBurstFlash,
    { opacity: 0 },
    { opacity: 0.35, duration: 0.14, yoyo: true, repeat: 1 },
    1.6
  );

  // Rosa principal (~94px) sobe devagar do centro da caixa e desabrocha camada por camada
  tl.fromTo(
    el.mainBloomingRose,
    { opacity: 0, xPercent: -50, y: 15, scale: 0.25 },
    { opacity: 1, xPercent: -50, y: -64, scale: 1, duration: 1.15, ease: "back.out(1.5)" },
    1.62
  );
  tl.fromTo(
    el.mainBloomingRose.querySelectorAll(".bloom-outer, .bloom-mid, .bloom-core"),
    { scale: 0.3, rotation: -25 },
    { scale: 1, rotation: 0, duration: 1.15, stagger: 0.15, ease: "elastic.out(1, 0.6)" },
    1.68
  );

  // 3.20s: A caixa diminui e sobe para o topo (compact) e o painel "Caixa desbloqueada!" entra
  tl.add(() => {
    el.giftBoxStage.classList.add("compact");
    startPolaroidDeveloping();
    goToStep(el.stepUnlocked);
  }, 3.2);
}

/* ============================================================================
   ETAPA 4: POLAROID (Revelação Química + 3D Flip) E SLIDER DE AÇAÍ
   ============================================================================ */
function startPolaroidDeveloping() {
  if (!el.couplePhoto || state.reducedMotion) return;
  el.couplePhoto.classList.add("developing");
  requestAnimationFrame(() => {
    setTimeout(() => {
      el.couplePhoto.classList.remove("developing");
    }, 120);
  });
}

function setupPolaroidFlip() {
  if (!el.polaroidCard) return;

  const toggleFlip = () => {
    state.polaroidFlipped = !state.polaroidFlipped;
    el.polaroidCard.classList.toggle("is-flipped", state.polaroidFlipped);
    soundFX.playPageTurn();
  };

  el.polaroidCard.addEventListener("click", toggleFlip);
  el.polaroidCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  });
}

function setupAcaiSlider() {
  let isDragging = false;
  let startX = 0;
  let currentProgress = 0;
  let maxSlidePx = 0;
  let movedDistance = 0;

  function updateSliderVisual(progressRatio) {
    const clamped = Math.max(0, Math.min(1, progressRatio));
    currentProgress = clamped;

    const trackWidth = el.acaiTrack.clientWidth;
    const handleWidth = el.acaiHandle.offsetWidth;
    maxSlidePx = Math.max(1, trackWidth - handleWidth - 8);

    const translateX = clamped * maxSlidePx;
    el.acaiHandle.style.transform = `translateX(${translateX}px)`;
    el.acaiFill.style.width = `${translateX + handleWidth * 0.65}px`;
    el.acaiTrack.setAttribute("aria-valuenow", String(Math.round(clamped * 100)));
  }

  function completeAcaiInteraction() {
    if (state.acaiCompleted) return;
    state.acaiCompleted = true;

    el.acaiTrack.classList.add("completed");
    el.acaiHandle.style.transition = "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)";
    el.acaiFill.style.transition = "width 0.42s cubic-bezier(0.22, 1, 0.36, 1)";
    updateSliderVisual(1);

    soundFX.playSuccess();
    spawnBoxMiniPetals(8);

    setTimeout(() => {
      openLetterStage();
    }, 480);
  }

  el.acaiHandle.addEventListener("pointerdown", (e) => {
    if (state.acaiCompleted) return;
    isDragging = true;
    movedDistance = 0;
    startX = e.clientX;

    el.acaiHandle.style.transition = "none";
    el.acaiFill.style.transition = "none";
    el.acaiHandle.setPointerCapture(e.pointerId);
  });

  el.acaiHandle.addEventListener("pointermove", (e) => {
    if (!isDragging || state.acaiCompleted) return;

    const trackWidth = el.acaiTrack.clientWidth;
    const handleWidth = el.acaiHandle.offsetWidth;
    maxSlidePx = Math.max(1, trackWidth - handleWidth - 8);

    const deltaX = e.clientX - startX;
    movedDistance = Math.max(movedDistance, Math.abs(deltaX));

    const ratio = deltaX / maxSlidePx;
    updateSliderVisual(ratio);

    if (ratio >= 0.82) {
      isDragging = false;
      completeAcaiInteraction();
    }
  });

  function handlePointerEnd() {
    if (!isDragging || state.acaiCompleted) return;
    isDragging = false;

    if (movedDistance < 8) {
      completeAcaiInteraction();
      return;
    }

    if (currentProgress >= 0.78) {
      completeAcaiInteraction();
    } else {
      el.acaiHandle.style.transition = "transform 0.35s ease";
      el.acaiFill.style.transition = "width 0.35s ease";
      updateSliderVisual(0);
    }
  }

  el.acaiHandle.addEventListener("pointerup", handlePointerEnd);
  el.acaiHandle.addEventListener("pointercancel", handlePointerEnd);

  el.acaiTapBtn.addEventListener("click", () => {
    completeAcaiInteraction();
  });

  // Acessibilidade de teclado completa para role="slider" (Setas, Home, End, Enter, Espaço)
  el.acaiTrack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "End" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      completeAcaiInteraction();
    } else if (e.key === "ArrowLeft" || e.key === "Home") {
      e.preventDefault();
      updateSliderVisual(0);
    }
  });
}

/* ============================================================================
   ETAPA 5: ENVELOPE 3D REAL + CARTA EM 3 PÁGINAS (Virada 3D e Swipe)
   ============================================================================ */
function openLetterStage() {
  el.giftBoxStage.hidden = true;
  goToStep(el.stepLetter);

  if (state.reducedMotion || state.envelopeOpenedOnce) {
    if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = true;
    if (el.loveLetterPaper) el.loveLetterPaper.hidden = false;
    goToLetterPage(1, "next");
    return;
  }

  // Sequência de abertura do envelope 3D (~1.8s)
  state.envelopeOpenedOnce = true;
  if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = false;
  if (el.loveLetterPaper) el.loveLetterPaper.hidden = true;
  if (el.realEnvelope) {
    el.realEnvelope.className = "real-envelope";
  }

  soundFX.playWaxCrack();
  setTimeout(() => {
    if (el.realEnvelope) el.realEnvelope.classList.add("env-step-seal");
  }, 120);

  setTimeout(() => {
    if (el.realEnvelope) el.realEnvelope.classList.add("env-step-flap");
    soundFX.playPageTurn();
  }, 540);

  setTimeout(() => {
    if (el.realEnvelope) el.realEnvelope.classList.add("env-step-sheet");
  }, 980);

  setTimeout(() => {
    if (el.realEnvelope) el.realEnvelope.classList.add("env-step-done");
  }, 1450);

  setTimeout(() => {
    if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = true;
    if (el.loveLetterPaper) el.loveLetterPaper.hidden = false;
    goToLetterPage(1, "next");
  }, 1800);
}

function revealParagraphsInContainer(container) {
  if (!container) return;
  const paragraphs = container.querySelectorAll(".letter-paragraph");

  if (state.reducedMotion) {
    paragraphs.forEach((p) => p.classList.add("revealed"));
    return;
  }

  paragraphs.forEach((p) => p.classList.remove("revealed"));
  paragraphs.forEach((p, idx) => {
    setTimeout(() => {
      p.classList.add("revealed");
    }, 120 + idx * 350);
  });
}

function goToLetterPage(pageNumber, direction = "next") {
  state.currentLetterPage = pageNumber;
  if (el.letterPageBadge) {
    el.letterPageBadge.textContent = `Página ${pageNumber} de 3`;
  }

  const pages = [el.letterPage1, el.letterPage2, el.letterPage3];
  pages.forEach((pageEl, idx) => {
    if (!pageEl) return;
    const isTarget = idx + 1 === pageNumber;
    pageEl.hidden = !isTarget;
    pageEl.classList.toggle("active-page", isTarget);
    pageEl.classList.remove("page-flip-next", "page-flip-prev");

    if (isTarget && !state.reducedMotion) {
      void pageEl.offsetWidth;
      pageEl.classList.add(direction === "prev" ? "page-flip-prev" : "page-flip-next");
    }
  });

  if (pageNumber === 1) {
    stopContinuousWhiteFlowers();
    revealParagraphsInContainer(el.letterContentP1);
  } else if (pageNumber === 2) {
    stopContinuousWhiteFlowers();
    revealParagraphsInContainer(el.letterContentP2);
  } else if (pageNumber === 3) {
    startContinuousWhiteFlowers();
  }

  // Rola suavemente só se o topo da carta estiver fora da tela (sem pulos agressivos)
  if (el.loveLetterPaper) {
    const rect = el.loveLetterPaper.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.4) {
      el.loveLetterPaper.scrollIntoView({
        behavior: state.reducedMotion ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }
}

/* Chuva contínua de Pétalas Brancas SVG na Página 3 de Santa Teresinha */
let whiteFlowersRafTimer = null;
let activeWhitePetals = 0;

function spawnSingleWhiteFlower() {
  if (
    state.reducedMotion ||
    !state.pageVisible ||
    !el.celebrationLayer ||
    state.currentLetterPage !== 3 ||
    activeWhitePetals >= 24
  ) {
    return;
  }

  activeWhitePetals++;
  const wrapper = document.createElement("div");
  wrapper.className = "white-svg-petal";
  const isFullWhiteRose = Math.random() < 0.25;
  wrapper.innerHTML = `<svg viewBox="${isFullWhiteRose ? "0 0 80 80" : "0 0 28 32"}"><use href="${
    isFullWhiteRose ? "#rose-white" : "#petal-white"
  }" /></svg>`;

  wrapper.style.left = `${Math.random() * 92 + 4}%`;
  const size = isFullWhiteRose ? 28 + Math.random() * 10 : 20 + Math.random() * 8;
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;
  wrapper.style.setProperty("--drift-mid", `${(Math.random() - 0.5) * 60}px`);
  wrapper.style.setProperty("--drift-end", `${(Math.random() - 0.5) * 80}px`);
  const dur = 3.8 + Math.random() * 2.4;
  wrapper.style.animationDuration = `${dur}s`;

  el.celebrationLayer.appendChild(wrapper);
  setTimeout(() => {
    wrapper.remove();
    activeWhitePetals = Math.max(0, activeWhitePetals - 1);
  }, dur * 1000 + 100);
}

function startContinuousWhiteFlowers() {
  stopContinuousWhiteFlowers();
  if (state.reducedMotion || !el.celebrationLayer) return;

  for (let i = 0; i < 6; i++) {
    setTimeout(spawnSingleWhiteFlower, i * 220);
  }
  whiteFlowersRafTimer = setInterval(spawnSingleWhiteFlower, 520);
}

function stopContinuousWhiteFlowers() {
  if (whiteFlowersRafTimer) {
    clearInterval(whiteFlowersRafTimer);
    whiteFlowersRafTimer = null;
  }
}

function setupLetterPagination() {
  const toPage2 = () => {
    soundFX.playPageTurn();
    goToLetterPage(2, "next");
  };

  const toPage3 = () => {
    soundFX.playPageTurn();
    goToLetterPage(3, "next");
  };

  const backToPage1 = () => {
    soundFX.playPageTurn();
    goToLetterPage(1, "prev");
  };

  const backToPage2 = () => {
    soundFX.playPageTurn();
    goToLetterPage(2, "prev");
  };

  if (el.btnToPage2) el.btnToPage2.addEventListener("click", toPage2);
  if (el.curlToPage2) el.curlToPage2.addEventListener("click", toPage2);

  if (el.btnToPage3) el.btnToPage3.addEventListener("click", toPage3);
  if (el.curlToPage3) el.curlToPage3.addEventListener("click", toPage3);

  if (el.btnBackPage1) el.btnBackPage1.addEventListener("click", backToPage1);
  if (el.btnBackPage2) el.btnBackPage2.addEventListener("click", backToPage2);

  if (el.btnToScratch) {
    el.btnToScratch.addEventListener("click", () => {
      soundFX.playSuccess();
      openScratchStage();
    });
  }

  // Suporte a Swipe Horizontal na carta (esquerda = avançar, direita = voltar)
  if (el.loveLetterPaper) {
    let touchStartX = 0;
    let touchStartY = 0;

    el.loveLetterPaper.addEventListener(
      "touchstart",
      (e) => {
        if (!e.touches || !e.touches[0]) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    el.loveLetterPaper.addEventListener(
      "touchend",
      (e) => {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          if (dx < 0) {
            if (state.currentLetterPage === 1) toPage2();
            else if (state.currentLetterPage === 2) toPage3();
          } else {
            if (state.currentLetterPage === 3) backToPage2();
            else if (state.currentLetterPage === 2) backToPage1();
          }
        }
      },
      { passive: true }
    );
  }
}

/* ============================================================================
   ETAPA 6: ELOGIOS PALAVRA POR PALAVRA + RASPADINHA DE FOLHA DE OURO REAL
   ============================================================================ */
function animateComplimentsWords() {
  if (!el.complimentsMain) return;
  const fullText = CONFIG.elogiosRaspadinha.elogios;

  if (state.reducedMotion) {
    el.complimentsMain.textContent = fullText;
    if (el.complimentsJoke) el.complimentsJoke.classList.add("joke-visible");
    return;
  }

  const words = fullText.split(" ");
  el.complimentsMain.innerHTML = "";
  words.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "compliment-word";
    span.style.setProperty("--word-delay", `${idx * 75}ms`);
    span.textContent = word;
    el.complimentsMain.appendChild(span);
    el.complimentsMain.appendChild(document.createTextNode(" "));
  });

  if (el.complimentsJoke) {
    el.complimentsJoke.classList.remove("joke-visible");
    setTimeout(() => {
      el.complimentsJoke.classList.add("joke-visible");
    }, words.length * 75 + 260);
  }
}

function openScratchStage() {
  stopContinuousWhiteFlowers();
  goToStep(el.stepScratch);
  animateComplimentsWords();

  const drawWhenFontsReady = () => {
    requestAnimationFrame(() => {
      initScratchCanvas();
    });
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawWhenFontsReady).catch(drawWhenFontsReady);
  } else {
    drawWhenFontsReady();
  }
}

function initScratchCanvas() {
  const canvas = el.scratchCanvas;
  const dustCanvas = el.scratchDustCanvas;
  const wrapper = el.scratchCardWrapper;
  if (!canvas || !wrapper || state.scratchCompleted) return;

  const rect = wrapper.getBoundingClientRect();
  const width = Math.max(260, Math.round(rect.width));
  const height = Math.max(250, Math.round(rect.height));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  if (dustCanvas) {
    dustCanvas.width = width * dpr;
    dustCanvas.height = height * dpr;
  }

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.scale(dpr, dpr);

  // Película de Folha de Ouro Real (gradiente metálico + micro-losangos em relevo)
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#F3E3BD");
  grad.addColorStop(0.24, "#E0C48A");
  grad.addColorStop(0.48, "#FFF6DC");
  grad.addColorStop(0.72, "#B8924A");
  grad.addColorStop(1, "#7E6129");

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Padrão de micro-losangos em relevo na folha de ouro
  ctx.strokeStyle = "rgba(255, 251, 245, 0.22)";
  ctx.lineWidth = 0.8;
  const step = 18;
  for (let x = -height; x < width + height; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + height, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(x + height, 0);
    ctx.stroke();
  }

  // Moldura dupla gravada
  ctx.strokeStyle = "rgba(43, 11, 20, 0.35)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(12, 12, width - 24, height - 24);
  ctx.setLineDash([6, 4]);
  ctx.strokeRect(18, 18, width - 36, height - 36);
  ctx.setLineDash([]);

  // Coração gravado no centro superior da raspadinha
  const cx = width / 2;
  const cy = height / 2 - 36;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx, cy + 12);
  ctx.bezierCurveTo(cx, cy + 12, cx - 16, cy + 2, cx - 16, cy - 7);
  ctx.bezierCurveTo(cx - 16, cy - 14, cx - 8, cy - 16, cx, cy - 8);
  ctx.bezierCurveTo(cx + 8, cy - 16, cx + 16, cy - 14, cx + 16, cy - 7);
  ctx.bezierCurveTo(cx + 16, cy + 2, cx, cy + 12, cx, cy + 12);
  ctx.fillStyle = "rgba(122, 10, 28, 0.78)";
  ctx.fill();
  ctx.restore();

  // Texto central de instrução da raspadinha (desenhado após document.fonts.ready)
  ctx.fillStyle = "#2B0B14";
  ctx.font = "700 17px 'Fraunces', Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("RASPE AQUI COM O DEDO", width / 2, height / 2 + 2);

  ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#5A1428";
  ctx.fillText("Descubra o nosso próximo capítulo 💜", width / 2, height / 2 + 28);
}

// Partículas de pó dourado que saem do dedo ao raspar
const scratchDustParticles = [];
let scratchDustRaf = null;

function spawnScratchGoldDust(x, y) {
  if (state.reducedMotion || !el.scratchDustCanvas) return;
  for (let i = 0; i < 4; i++) {
    scratchDustParticles.push({
      x: x + (Math.random() - 0.5) * 18,
      y: y + (Math.random() - 0.5) * 18,
      vx: (Math.random() - 0.5) * 2.2,
      vy: Math.random() * 1.8 + 0.4,
      r: Math.random() * 2.2 + 1,
      alpha: 0.95,
    });
  }
  if (!scratchDustRaf) {
    renderScratchDust();
  }
}

function renderScratchDust() {
  const dustCanvas = el.scratchDustCanvas;
  if (!dustCanvas) {
    scratchDustRaf = null;
    return;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const ctx = dustCanvas.getContext("2d");
  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, dustCanvas.width / dpr, dustCanvas.height / dpr);

  for (let i = scratchDustParticles.length - 1; i >= 0; i--) {
    const p = scratchDustParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.035;
    if (p.alpha <= 0) {
      scratchDustParticles.splice(i, 1);
      continue;
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(243, 227, 189, ${p.alpha.toFixed(2)})`;
    ctx.fill();
  }
  ctx.restore();

  if (scratchDustParticles.length > 0) {
    scratchDustRaf = requestAnimationFrame(renderScratchDust);
  } else {
    scratchDustRaf = null;
  }
}

function completeScratchReveal() {
  if (state.scratchCompleted) return;
  state.scratchCompleted = true;

  el.scratchCanvas.classList.add("scratched-complete");
  if (el.btnRevealScratch) el.btnRevealScratch.hidden = true;
  if (el.btnAcceptDate) el.btnAcceptDate.disabled = false;

  soundFX.playSuccess();
  triggerCelebrationShower(18);
}

function setupScratchCard() {
  const canvas = el.scratchCanvas;
  if (!canvas) return;

  let isScratching = false;
  let moveCounter = 0;

  // Pincel com borda irregular (vários círculos com jitter) + pó dourado
  function scratchAtPoint(clientX, clientY) {
    if (state.scratchCompleted) return;
    state.scratchStarted = true;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.globalCompositeOperation = "destination-out";

    for (let i = 0; i < 4; i++) {
      const jx = x + (Math.random() - 0.5) * 16;
      const jy = y + (Math.random() - 0.5) * 16;
      const jr = 18 + Math.random() * 12;
      ctx.beginPath();
      ctx.arc(jx, jy, jr, 0, Math.PI * 2);
      ctx.fill();
    }

    spawnScratchGoldDust(x, y);
    soundFX.playScratchGrain();

    moveCounter++;
    if (moveCounter % 6 === 0) {
      checkScratchPercentage();
    }
  }

  function checkScratchPercentage() {
    if (state.scratchCompleted) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const { width, height } = canvas;
    if (!width || !height) return;

    const imgData = ctx.getImageData(0, 0, width, height).data;
    let transparentPixels = 0;
    const stride = 32;
    let totalSampled = 0;

    for (let i = 3; i < imgData.length; i += 4 * stride) {
      totalSampled++;
      if (imgData[i] < 128) {
        transparentPixels++;
      }
    }

    const ratio = transparentPixels / Math.max(1, totalSampled);
    if (ratio >= 0.45) {
      completeScratchReveal();
    }
  }

  canvas.addEventListener("pointerdown", (e) => {
    if (state.scratchCompleted) return;
    isScratching = true;
    canvas.setPointerCapture(e.pointerId);
    scratchAtPoint(e.clientX, e.clientY);
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!isScratching || state.scratchCompleted) return;
    scratchAtPoint(e.clientX, e.clientY);
  });

  function stopScratching() {
    if (!isScratching) return;
    isScratching = false;
    checkScratchPercentage();
  }

  canvas.addEventListener("pointerup", stopScratching);
  canvas.addEventListener("pointercancel", stopScratching);

  if (el.btnRevealScratch) {
    el.btnRevealScratch.addEventListener("click", () => {
      completeScratchReveal();
    });
  }

  window.addEventListener(
    "resize",
    () => {
      if (!el.stepScratch.hidden && !state.scratchCompleted && !state.scratchStarted) {
        initScratchCanvas();
      }
    },
    { passive: true }
  );
}

/* ============================================================================
   4.10 CUPOM, CARIMBO COM IMPACTO, "EU TE AMO" MANUSCRITO E CONTADOR AO VIVO
   ============================================================================ */
function triggerCelebrationShower(total = 32) {
  if (state.reducedMotion || !el.celebrationLayer) return;
  const maxItems = Math.min(total, state.maxParticles);
  const symbols = ["#heart", "#rose", "#rose-white", "#petal", "#sparkle"];

  for (let i = 0; i < maxItems; i++) {
    const item = document.createElement("div");
    item.className = "white-svg-petal";
    const sym = symbols[i % symbols.length];
    const viewBox = sym.includes("rose")
      ? "0 0 80 80"
      : sym === "#petal"
      ? "0 0 28 32"
      : "0 0 24 24";

    item.innerHTML = `<svg viewBox="${viewBox}" style="color: var(--crimson-500)"><use href="${sym}" /></svg>`;
    item.style.left = `${Math.random() * 94 + 3}%`;
    const size = sym.includes("rose") ? 30 : 22;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.setProperty("--drift-mid", `${(Math.random() - 0.5) * 70}px`);
    item.style.setProperty("--drift-end", `${(Math.random() - 0.5) * 90}px`);
    const dur = 2.8 + Math.random() * 2.2;
    item.style.animationDuration = `${dur}s`;
    item.style.animationDelay = `${Math.random() * 0.7}s`;

    el.celebrationLayer.appendChild(item);
    setTimeout(() => item.remove(), (dur + 0.9) * 1000);
  }
}

/* Contador "Juntos há X dias, Y horas e Z minutos" */
let relationshipCounterTimer = null;

function parseStartDate(dateStr) {
  const parts = (dateStr || "27/09/2026").split("/");
  const day = parseInt(parts[0], 10) || 27;
  const month = (parseInt(parts[1], 10) || 9) - 1;
  const year = parseInt(parts[2], 10) || 2026;
  return new Date(year, month, day, 0, 0, 0);
}

function computeRelationshipDuration() {
  const start = parseStartDate(CONFIG.dataInicioNamoro);
  const now = new Date();
  const diffMs = Math.max(0, now.getTime() - start.getTime());

  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const isMesversario =
    days > 0 && (days % 30 === 0 || now.getDate() === start.getDate());

  return { days, hours, minutes, isMesversario };
}

function startRelationshipCounter(animateCountUp = true) {
  if (relationshipCounterTimer) clearInterval(relationshipCounterTimer);

  const updateValues = (useCountUp = false) => {
    const { days, hours, minutes, isMesversario } = computeRelationshipDuration();

    if (el.counterMesversarioBadge) {
      el.counterMesversarioBadge.hidden = !isMesversario;
    }

    if (!useCountUp || state.reducedMotion) {
      if (el.counterDays) el.counterDays.textContent = String(days);
      if (el.counterHours) el.counterHours.textContent = String(hours);
      if (el.counterMinutes) el.counterMinutes.textContent = String(minutes);
      return;
    }

    const durMs = 1200;
    const t0 = performance.now();
    function tickCount(now) {
      const p = Math.min(1, (now - t0) / durMs);
      const eased = 1 - Math.pow(1 - p, 3);
      if (el.counterDays) el.counterDays.textContent = String(Math.round(days * eased));
      if (el.counterHours) el.counterHours.textContent = String(Math.round(hours * eased));
      if (el.counterMinutes) el.counterMinutes.textContent = String(Math.round(minutes * eased));
      if (p < 1) requestAnimationFrame(tickCount);
    }
    requestAnimationFrame(tickCount);
  };

  updateValues(animateCountUp);
  relationshipCounterTimer = setInterval(() => updateValues(false), 60000);
}

function setupFinalCouponActions() {
  el.btnAcceptDate.addEventListener("click", () => {
    if (state.dateAccepted) return;
    state.dateAccepted = true;

    soundFX.playAcceptEncounter();
    navigator.vibrate?.([25, 40, 35]);

    el.couponActions.hidden = true;
    el.couponStamp.hidden = false;

    if (!state.reducedMotion) {
      document.body.classList.add("screen-stamp-shake");
      setTimeout(() => document.body.classList.remove("screen-stamp-shake"), 380);
    }

    triggerCelebrationShower(36);

    el.finalPromiseCard.hidden = false;
    el.finalPromiseCard.classList.remove("handwriting-active");
    void el.finalPromiseCard.offsetWidth;
    el.finalPromiseCard.classList.add("handwriting-active");

    startRelationshipCounter(true);

    setTimeout(() => {
      const rect = el.finalPromiseCard.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        el.finalPromiseCard.scrollIntoView({
          behavior: state.reducedMotion ? "auto" : "smooth",
          block: "center",
        });
      }
    }, 220);
  });

  // Botão "Ler a carta novamente" -> Volta para a Página 1 da Carta
  el.btnReadAgain.addEventListener("click", () => {
    openLetterStage();
  });

  // Botão "Voltar ao começo"
  el.btnRestart.addEventListener("click", () => {
    resetExperience();
  });
}

/* ============================================================================
   7.5 REINICIAR A CAIXA E A EXPERIÊNCIA COMPLETA ("VOLTAR AO COMEÇO")
   ============================================================================ */
function resetBox() {
  if (window.gsap) {
    window.gsap.killTweensOf([
      el.flyingKey,
      el.padlockShackle,
      el.boxPadlock,
      el.boxBow,
      el.ribbonVertical,
      el.lidRibbonVertical,
      el.ribbonHorizontal,
      el.boxLid,
      el.mainBloomingRose,
      el.boxBurstFlash,
    ]);
    window.gsap.set(
      [
        el.flyingKey,
        el.padlockShackle,
        el.boxPadlock,
        el.ribbonVertical,
        el.lidRibbonVertical,
        el.ribbonHorizontal,
        el.boxLid,
        el.mainBloomingRose,
        el.boxBurstFlash,
        ...el.boxBow.querySelectorAll("*"),
      ],
      { clearProps: "all" }
    );
  }

  el.giftBoxStage.hidden = false;
  el.giftBoxStage.className = "gift-box-stage";
  el.giftBoxWrapper.className = "gift-box-wrapper";
  if (el.giftBox) el.giftBox.style.transform = "";
  if (el.particlesAnchor) el.particlesAnchor.innerHTML = "";

  el.tagHearts.forEach((h) => h.classList.remove("lit"));
}

function resetExperience() {
  stopContinuousWhiteFlowers();
  if (relationshipCounterTimer) {
    clearInterval(relationshipCounterTimer);
    relationshipCounterTimer = null;
  }

  state.locksOpened = [false, false, false];
  state.q1Attempts = 0;
  state.isUnlockingBox = false;
  state.acaiCompleted = false;
  state.polaroidFlipped = false;
  state.envelopeOpenedOnce = false;
  state.currentLetterPage = 1;
  state.scratchCompleted = false;
  state.scratchStarted = false;
  state.dateAccepted = false;

  // Reseta Fita de Cetim de Progresso
  el.lockIndicators.forEach((ind) => ind.setAttribute("data-unlocked", "false"));
  if (el.ribbonProgressFill) el.ribbonProgressFill.style.width = "0%";
  if (el.progressCountText) el.progressCountText.textContent = "0 de 3";
  if (el.locksProgress) {
    el.locksProgress.setAttribute(
      "aria-label",
      "Progresso de desbloqueio: 0 de 3 cadeados abertos"
    );
  }

  // Reseta Caixa de Porcelana
  resetBox();

  // Reseta Pergunta 1
  if (el.dateInputWrapper) el.dateInputWrapper.classList.remove("sealed");
  el.inputDate.disabled = false;
  el.inputDate.value = "";
  el.btnSubmitQ1.hidden = false;
  el.btnSubmitQ1.classList.remove("pulse-ready");
  el.feedbackQ1.hidden = true;
  el.feedbackQ1.innerHTML = "";

  // Reseta Pergunta 2
  if (el.optionsGridQ2) el.optionsGridQ2.classList.remove("has-winner");
  el.optionBtnsQ2.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("selected-correct", "selected-wrong");
  });
  el.feedbackQ2.hidden = true;
  el.feedbackQ2.innerHTML = "";

  // Reseta Pergunta 3
  el.inputIdentity.disabled = false;
  el.inputIdentity.value = "";
  el.btnSubmitQ3.hidden = false;
  el.btnIdLove.disabled = false;
  el.btnIdIntruder.disabled = false;
  el.feedbackQ3.hidden = true;
  el.feedbackQ3.innerHTML = "";

  // Reseta Polaroid e Slider de Açaí
  if (el.polaroidCard) el.polaroidCard.classList.remove("is-flipped");
  el.acaiTrack.classList.remove("completed");
  el.acaiHandle.style.transition = "none";
  el.acaiFill.style.transition = "none";
  el.acaiHandle.style.transform = "translateX(0px)";
  el.acaiFill.style.width = "32px";
  el.acaiTrack.setAttribute("aria-valuenow", "0");

  // Reseta Raspadinha, Cupom e Card Final
  el.scratchCanvas.classList.remove("scratched-complete");
  if (el.btnRevealScratch) el.btnRevealScratch.hidden = false;
  el.btnAcceptDate.disabled = true;
  el.couponActions.hidden = false;
  el.couponStamp.hidden = true;
  el.finalPromiseCard.hidden = true;
  el.finalPromiseCard.classList.remove("handwriting-active");
  if (el.celebrationLayer) el.celebrationLayer.innerHTML = "";

  setupIntroSplitName();
  goToStep(el.stepIntro);
}

/* ============================================================================
   INICIALIZAÇÃO GERAL
   ============================================================================ */
function init() {
  initPersonalization();
  initAmbientParticles();
  setupGateAndAudio();
  setupBoxAndDesktopParallax();

  el.btnStart.addEventListener("click", () => {
    triggerBoxSuccessBounce();
    goToStep(el.stepQ1);
    setTimeout(() => el.inputDate.focus(), 120);
  });

  setupQuestion1();
  setupQuestion2();
  setupQuestion3();
  setupPolaroidFlip();
  setupAcaiSlider();
  setupLetterPagination();
  setupScratchCard();
  setupFinalCouponActions();
}

document.addEventListener("DOMContentLoaded", init);
