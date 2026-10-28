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
  legendaPolaroid: "O meu lugar favorito no mundo é ao seu lado.",

  // Configuração da música de fundo (Piano Romântico Cristalino sem graves pesados no HTML5 <audio>)
  musica: {
    arquivo: "assets/musica.wav?v=3",
    volume: 0.50,
    fadeInMs: 900,
  },

  // Página 1 da Carta (Texto original preservado)
  cartaPagina1: {
    saudacao: "Para o amor da minha vida,",
    paragrafos: [
      "Aqui entrará uma mensagem só nossa. Um texto sobre tudo o que vivemos, sobre o quanto você é importante para mim e sobre como eu ainda quero viver muitos capítulos ao seu lado.",
      "Essa caixinha guarda apenas uma pequena parte de tudo o que eu sinto por você."
    ],
    assinatura: "Com todo o meu amor, Caique."
  },

  // Página 2 da Carta: Declaração profunda + Poema + Vídeo Especial
  cartaPagina2: {
    saudacao: "Meu amor,",
    paragrafos: [
      "Eu não sou muito bom com textos longos, mas você merece que eu exprima até aquilo em que não sou tão bom. Mesmo lendo através de uma tela, gostaria que você ouvisse estas palavras usando a minha voz na sua mente. Quero que sinta que estou aí do seu lado, segurando a sua mão, logo depois de dar um beijo na sua testa. Se já está ouvindo a minha voz, podemos seguir em frente.",
      "Se eu tivesse um desejo concedido por Deus, seria o de ficar bem velhinho ao seu lado, com quantos filhos e netos Ele quisesse nos confiar. Assim, eu poderia repetir até cansar que a minha única dúvida seria saber se o melhor dia da minha vida foi quando comecei a namorar a avó dos meus netos ou o dia em que recebemos o sacramento do matrimônio diante do altar.",
      "Eu te amo, e não tenho dúvida disso. Uma vez vi que a paixão verdadeira começa muito além da atração física. Ela nasce quando a gente olha para alguém e sente uma luz própria que acalma o coração, uma beleza tão única que faltam palavras para explicar. Se eu fosse usar alguns versos para descrever o encanto que senti ao te ver, diria:",
      {
        tipo: "poema",
        versos: [
          "“De repente, o mundo inteiro fez silêncio,",
          "só para eu ouvir a paz que o seu sorriso traz.",
          "E em um único olhar seu, encontrei a minha casa,",
          "o meu abrigo e tudo o que eu sempre quis em paz.”"
        ]
      },
      "Eita, como eu te amo. Mas depois desse encanto, existe algo ainda maior que quero construir com você. Não quero ficar preso apenas na fase do enamoramento, aquele sentimento intenso que não sai da mente, mas que ainda traz medos e inseguranças.",
      "O que quero viver, e já estou começando a viver com você, é o amor genuíno e pleno. Com você eu descobri que amar de verdade é quando o seu bem se torna mais importante e valioso para mim do que a minha própria vida, e que o maior bem que posso te desejar é a vida eterna. Por isso, a minha vocação diária é cuidar de você, perdoar sem medidas, te proteger de toda tristeza e caminhar ao seu lado rumo ao céu, guardando você como o meu bem mais precioso sob o manto de Nossa Senhora, e vamos rezar muitos terços juntos para isso.",
      "Porque o amor mais forte não é aquele que passa rápido como o instante em que nasceu, mas o que cresce com calma dentro de nós. É uma entrega inteira, onde descobrimos uma paz completa e um futuro sem fim, unindo cada momento da nossa história para que você viva para sempre e o nosso amor penetre na eternidade. É isso que desejo a você."
    ],
    videoEspecial: {
      introducao:
        "Achei esse vídeo tão lindo que quis compartilhar com você — ele traduz exatamente esse amor que quero viver ao seu lado:",
      titulo: "O que é o amor?",
      subtitulo: "Toque para assistir ao vídeo que me inspirou",
      url: "https://www.youtube.com/watch?v=NJIErTgr1ZA"
    },
    assinatura: "Para sempre seu."
  },

  // Página 3 da Carta: Homenagem a Santa Teresinha e a Flor Branca
  santaTeresinha: {
    imagemUrl: "assets/santa-teresinha-cartoon.webp",
    imagemReserva: "assets/santa-teresinha-cartoon.svg",
    titulo: "A flor branca que você pediu a Santa Teresinha",
    texto1:
      "Você me contou que rezou para ela pedindo uma flor branca — sem exigir que fosse rosa ou qualquer outra —, apenas como um sinal no seu coração de que o nosso relacionamento era da vontade de Deus. E logo no comecinho da novena, você já recebeu a sua florzinha!",
    texto2:
      "A florzinha branca real você já ganhou… então agora toma essa chuva de florzinhas brancas digitais, só para te lembrar todos os dias: o nosso amor é plano de Deus, e você é a resposta mais linda que Ele colocou na minha vida."
  },

  // Etapa 6: Elogios antes da Raspadinha do Cupom
  elogiosRaspadinha: {
    titulo: "Para a melhor namorada do mundo",
    elogios:
      "Obrigado por ser uma namorada linda, incrível, atenciosa, amorosa, compreensiva, divertida, esperta…",
    brincadeira:
      "(Vou parar por aqui, pois não caberiam milhões de elogios nem em todo o mundo digital!)",
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
    titulo: "Encontro aceito!",
    agradecimento:
      "Obrigado por ter chegado até aqui, por cada sorriso seu e por fazer os meus dias tão mais felizes.",
    promessa:
      "Agora essa caixa digital guarda uma promessa: a nossa caminhada ainda tem muitos momentos bonitos pela frente.",
    declaracao:
      "Eu te amo, Isabela. Hoje, amanhã e em todos os próximos capítulos.",
    fotoFinalUrl: "assets/foto-final.jpg",
    whatsappNumero: "5512991882850",
    whatsappMensagem:
      "Amor, passei por todos os desafios, abri o nosso convite e já garanti meu prêmio da raspadinha! (Sorte que nas perguntas não tinha \"quem ama mais\" ksksks). Mas te amo, te amo muito! Essa mensagem foi para saber se você chegou até o final e trazer a conversa aqui para o WhatsApp"
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
  scratchStrokes: 0,
  scratchTotalDistance: 0,
  dateAccepted: false,
  audioEnabled: true,
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

  btnToPage2: document.getElementById("btn-to-page-2"),
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
  acaiCouponCard: document.getElementById("acai-coupon-card"),
  btnAcceptDate: document.getElementById("btn-accept-date"),
  couponActions: document.getElementById("coupon-actions"),
  couponStamp: document.getElementById("coupon-stamp"),

  finalPromiseCard: document.getElementById("final-promise-card"),
  finalPhoto: document.getElementById("final-photo"),
  finalTitle: document.getElementById("final-title"),
  finalThanks: document.getElementById("final-thanks"),
  finalPromise: document.getElementById("final-promise"),
  finalHandwrittenLove: document.getElementById("final-handwritten-love"),
  finalDeclaration: document.getElementById("final-declaration"),

  counterDays: document.getElementById("counter-days"),
  counterHours: document.getElementById("counter-hours"),
  counterMinutes: document.getElementById("counter-minutes"),

  btnWhatsapp: document.getElementById("btn-whatsapp"),
  finaleOverlay: document.getElementById("finale-overlay"),
  btnReadAgain: document.getElementById("btn-read-again"),
  btnRestart: document.getElementById("btn-restart"),
};

/* ============================================================================
   5. MOTOR DE ÁUDIO ROMÂNTICO (Piano Feltro Acústico em Fá Maior + Adaptação por Etapa)
   ============================================================================ */
class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.filterNode = null;

    this.isPlayingMusic = false;
    this.usingNativeAudio = false;
    this.currentMoodStage = "intro";
    this.targetMusicVolume = (CONFIG.musica && CONFIG.musica.volume) || 0.50;
    this.volumeFadeTimer = null;

    this.arpeggioTimer = null;
    this.stepIndex = 0;
    this.lastScratchSoundTime = 0;

    this.sfxUrls = {};
    this.sfxPlayer = null;
    this.prepareMobileSfxPool();
  }

  // Gera mini-WAVs em memória (< 4ms) com timbre de Piano Feltro quente para HTML5 <audio> nativo no celular
  encodeMiniWav(samples, sampleRate = 11025) {
    const numSamples = samples.length;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);
    const writeStr = (offset, str) => {
      for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
    };
    writeStr(0, "RIFF");
    view.setUint32(4, 36 + numSamples * 2, true);
    writeStr(8, "WAVE");
    writeStr(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeStr(36, "data");
    view.setUint32(40, numSamples * 2, true);
    for (let i = 0; i < numSamples; i++) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(44 + i * 2, s * 32767, true);
    }
    return URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
  }

  prepareMobileSfxPool() {
    try {
      const sr = 11025;
      // Sintetiza acordes arpejados de Piano Feltro em Fá Maior (mesma tonalidade da trilha principal)
      const synthFeltPianoChord = (notes, stepSec, noteDur, gain) => {
        const totalSec = notes.length * stepSec + noteDur + 0.25;
        const buf = new Float32Array(Math.floor(sr * totalSec));
        notes.forEach((f, idx) => {
          const start = Math.floor(idx * stepSec * sr);
          const len = Math.floor(noteDur * sr);
          const w1 = (2 * Math.PI * f) / sr;
          const w1b = (2 * Math.PI * f * 1.0005) / sr;
          const w2 = (2 * Math.PI * f * 2.0003) / sr;
          const w3 = (2 * Math.PI * f * 3.001) / sr;
          for (let i = 0; i < len && start + i < buf.length; i++) {
            const t = i / sr;
            const attack = t < 0.016 ? 0.5 * (1 - Math.cos((Math.PI * t) / 0.016)) : 1.0;
            const body = 0.65 * Math.exp(-t * 3.6) + 0.35 * Math.exp(-t * 1.15);
            const env = attack * body;
            const tone =
              (Math.sin(w1 * i) + Math.sin(w1b * i)) * 0.42 +
              Math.sin(w2 * i) * 0.22 * Math.exp(-t * 2.8) +
              Math.sin(w3 * i) * 0.07 * Math.exp(-t * 6.5);
            buf[start + i] += tone * gain * env;
          }
        });
        // Suave reverberação de sala íntima + filtro passa-baixa de tampo harmônico
        const d1 = Math.floor(0.11 * sr);
        const d2 = Math.floor(0.23 * sr);
        let lp = 0;
        for (let i = 0; i < buf.length; i++) {
          const rev =
            buf[i] +
            (i >= d1 ? buf[i - d1] * 0.24 : 0) +
            (i >= d2 ? buf[i - d2] * 0.14 : 0);
          lp += 0.45 * (rev - lp);
          buf[i] = Math.tanh(lp * 0.92);
        }
        return this.encodeMiniWav(buf, sr);
      };

      // Acordes cristalinos em Fá Maior (registro médio-agudo C4 a C6, sem notas graves pesadas)
      this.sfxUrls.chime = synthFeltPianoChord(
        [261.63, 349.23, 440.0, 523.25, 659.25, 783.99, 1046.5],
        0.095,
        1.35,
        0.36
      );
      this.sfxUrls.success = synthFeltPianoChord(
        [349.23, 440.0, 523.25, 659.25, 783.99],
        0.085,
        1.05,
        0.36
      );
      this.sfxUrls.boxUnlock = synthFeltPianoChord(
        [261.63, 349.23, 440.0, 523.25, 587.33, 659.25, 698.46, 880.0, 1046.5],
        0.105,
        1.5,
        0.35
      );
      this.sfxUrls.accept = synthFeltPianoChord(
        [261.63, 349.23, 440.0, 523.25, 659.25, 783.99, 1046.5],
        0.09,
        1.45,
        0.36
      );
      this.sfxUrls.pageTurn = synthFeltPianoChord(
        [349.23, 440.0, 523.25, 659.25],
        0.08,
        0.85,
        0.22
      );

      // Erro ("toc" suave e leve, sem sub-grave)
      const errBuf = new Float32Array(Math.floor(sr * 0.2));
      for (let i = 0; i < errBuf.length; i++) {
        const t = i / sr;
        const f = 240 * Math.exp(-t * 2.8);
        const env = t < 0.012 ? t / 0.012 : Math.exp(-t * 14);
        errBuf[i] = Math.sin(2 * Math.PI * f * t) * 0.32 * env;
      }
      this.sfxUrls.error = this.encodeMiniWav(errBuf, sr);

      this.sfxPlayer = new Audio();
      this.sfxPlayer.preload = "auto";

      // Loop WAV de Piano Cristalino em RAM (~12s em Fá Maior, sem graves abaixo de C4) caso a rede esteja lenta
      const barSec = 3.0;
      const bars = 4;
      const totalSamples = Math.floor(sr * barSec * bars);
      const mBuf = new Float32Array(totalSamples);
      const feltEvents = [
        // Compasso 1: Fmaj9 (registro médio-agudo leve)
        { t: 0.0, f: 261.63, d: 2.6, g: 0.14 },
        { t: 0.38, f: 349.23, d: 2.4, g: 0.15 },
        { t: 0.75, f: 440.0, d: 2.2, g: 0.16 },
        { t: 1.12, f: 523.25, d: 2.0, g: 0.17 },
        { t: 1.5, f: 659.25, d: 1.9, g: 0.18 },
        { t: 2.25, f: 523.25, d: 1.5, g: 0.15 },
        // Compasso 2: Dm9
        { t: 3.0, f: 293.66, d: 2.6, g: 0.14 },
        { t: 3.38, f: 349.23, d: 2.4, g: 0.15 },
        { t: 3.75, f: 440.0, d: 2.2, g: 0.16 },
        { t: 4.12, f: 523.25, d: 2.0, g: 0.17 },
        { t: 4.5, f: 659.25, d: 1.9, g: 0.18 },
        { t: 5.25, f: 587.33, d: 1.5, g: 0.16 },
        // Compasso 3: Bbmaj9
        { t: 6.0, f: 233.08, d: 2.5, g: 0.13 },
        { t: 6.38, f: 349.23, d: 2.4, g: 0.15 },
        { t: 6.75, f: 440.0, d: 2.2, g: 0.16 },
        { t: 7.12, f: 587.33, d: 2.0, g: 0.17 },
        { t: 7.5, f: 698.46, d: 1.9, g: 0.18 },
        { t: 8.25, f: 587.33, d: 1.5, g: 0.15 },
        // Compasso 4: C9sus4 -> C
        { t: 9.0, f: 261.63, d: 2.5, g: 0.14 },
        { t: 9.38, f: 349.23, d: 2.3, g: 0.15 },
        { t: 9.75, f: 392.0, d: 2.2, g: 0.16 },
        { t: 10.12, f: 523.25, d: 1.6, g: 0.17 },
        { t: 10.5, f: 587.33, d: 1.4, g: 0.17 },
        { t: 11.25, f: 659.25, d: 1.6, g: 0.16 },
      ];
      for (const ev of feltEvents) {
        const start = Math.floor(ev.t * sr);
        const nLen = Math.floor(ev.d * sr);
        const w1 = (2 * Math.PI * ev.f) / sr;
        const w1b = (2 * Math.PI * ev.f * 1.0005) / sr;
        const w2 = (2 * Math.PI * ev.f * 2.0003) / sr;
        for (let i = 0; i < nLen; i++) {
          const idx = (start + i) % totalSamples;
          const t = i / sr;
          const att = t < 0.018 ? 0.5 * (1 - Math.cos((Math.PI * t) / 0.018)) : 1.0;
          const env = att * (0.62 * Math.exp(-t * 2.4) + 0.38 * Math.exp(-t * 0.85));
          const s = (Math.sin(w1 * i) + Math.sin(w1b * i)) * 0.44 + Math.sin(w2 * i) * 0.18 * Math.exp(-t * 2.2);
          mBuf[idx] += s * ev.g * env;
        }
      }
      const d1 = Math.floor(0.19 * sr);
      const d2 = Math.floor(0.37 * sr);
      let lp = 0;
      for (let i = 0; i < totalSamples; i++) {
        const rev =
          mBuf[i] +
          mBuf[(i - d1 + totalSamples) % totalSamples] * 0.24 +
          mBuf[(i - d2 + totalSamples) % totalSamples] * 0.14;
        lp += 0.38 * (rev - lp);
        mBuf[i] = Math.tanh(lp * 0.88);
      }
      this.instantMusicWavUrl = this.encodeMiniWav(mBuf, sr);
    } catch (_) {}
  }

  playHtml5Sfx(key, volume = 0.78) {
    if (!state.audioEnabled || !this.sfxUrls[key]) return;
    try {
      const a = this.sfxPlayer || new Audio();
      a.src = this.sfxUrls[key];
      a.volume = volume;
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch (_) {}
  }

  initContext() {
    // Ativa o modo playback no iOS 17+ para tocar mesmo com a chave física de silencioso ativada
    try {
      if (navigator.audioSession && navigator.audioSession.type !== "playback") {
        navigator.audioSession.type = "playback";
      }
    } catch (_) {}

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      // Master Gain direto com filtro passa-alta (200 Hz) para remover 100% qualquer grave incômodo
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.highpassNode = this.ctx.createBiquadFilter();
      this.highpassNode.type = "highpass";
      this.highpassNode.frequency.setValueAtTime(200, this.ctx.currentTime);
      this.highpassNode.connect(this.masterGain);

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(3800, this.ctx.currentTime);
      this.filterNode.connect(this.highpassNode);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.42;
      this.musicGain.gain.setValueAtTime(0.42, this.ctx.currentTime);
      this.musicGain.connect(this.filterNode);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.78, this.ctx.currentTime);
      this.sfxGain.connect(this.filterNode);
    }

    this.unlockAudioHardware();
    return this.ctx;
  }

  unlockAudioHardware() {
    if (!this.ctx) return;
    if (this.ctx.state === "suspended" || this.ctx.state === "interrupted") {
      this.ctx.resume().catch(() => {});
    }
    try {
      const silentBuffer = this.ctx.createBuffer(1, 1, 22050);
      const source = this.ctx.createBufferSource();
      source.buffer = silentBuffer;
      source.connect(this.ctx.destination);
      source.start(0);
    } catch (_) {}
  }

  // Transição suave de volume do <audio> para acompanhar a emoção de cada etapa do site
  fadeAudioVolumeTo(targetVol, durationMs = 1100) {
    this.targetMusicVolume = Math.max(0.1, Math.min(0.95, targetVol));
    if (this.volumeFadeTimer) {
      clearInterval(this.volumeFadeTimer);
      this.volumeFadeTimer = null;
    }
    if (!el.bgMusicAudio || el.bgMusicAudio.paused) {
      if (el.bgMusicAudio) el.bgMusicAudio.volume = this.targetMusicVolume;
      return;
    }
    const startVol = el.bgMusicAudio.volume;
    const diff = this.targetMusicVolume - startVol;
    if (Math.abs(diff) < 0.01) {
      el.bgMusicAudio.volume = this.targetMusicVolume;
      return;
    }
    const steps = 16;
    const stepTime = Math.max(25, Math.floor(durationMs / steps));
    let currentStep = 0;
    this.volumeFadeTimer = setInterval(() => {
      currentStep++;
      if (!el.bgMusicAudio || currentStep >= steps) {
        if (el.bgMusicAudio) el.bgMusicAudio.volume = this.targetMusicVolume;
        clearInterval(this.volumeFadeTimer);
        this.volumeFadeTimer = null;
        return;
      }
      const p = currentStep / steps;
      const eased = 0.5 - 0.5 * Math.cos(Math.PI * p);
      el.bgMusicAudio.volume = Math.max(0.05, Math.min(1, startVol + diff * eased));
    }, stepTime);
  }

  // Adapta a dinâmica da trilha de piano e toca um acorde suave de transição conforme o andar do site
  setStageMood(stage) {
    if (!stage || this.currentMoodStage === stage) return;
    this.currentMoodStage = stage;
    if (!state.audioEnabled) return;

    const moodProfiles = {
      intro: { vol: 0.48, cutoff: 3600, chord: [261.63, 349.23, 440.0, 523.25, 659.25] }, // Fmaj7 cristalino
      q1: { vol: 0.44, cutoff: 3400, chord: [293.66, 349.23, 440.0, 587.33] },             // Gm7/D4 leve
      q2: { vol: 0.46, cutoff: 3500, chord: [293.66, 349.23, 440.0, 523.25] },             // Dm7 doce
      q3: { vol: 0.48, cutoff: 3600, chord: [293.66, 349.23, 440.0, 523.25, 659.25] },     // Bbmaj9 expectativa
      unlocked: { vol: 0.54, cutoff: 4000, chord: null },                                  // Abertura da caixa
      "letter-1": { vol: 0.36, cutoff: 3100, chord: [261.63, 349.23, 440.0, 523.25] },     // Piano suave para leitura
      "letter-2": { vol: 0.34, cutoff: 3000, chord: [293.66, 349.23, 440.0, 523.25, 659.25] }, // Dm9 contemplativo
      "letter-3": { vol: 0.48, cutoff: 3800, chord: [349.23, 440.0, 523.25, 659.25, 783.99] }, // Luminoso e celestial (Santa Teresinha)
      scratch: { vol: 0.45, cutoff: 3600, chord: [293.66, 349.23, 440.0, 523.25] },        // Leve e divertido
      finale: { vol: 0.58, cutoff: 4200, chord: null },                                    // Clímax romântico após aceitar o encontro
    };

    const profile = moodProfiles[stage] || moodProfiles.intro;
    this.fadeAudioVolumeTo(profile.vol, 1100);

    if (this.ctx && this.filterNode) {
      try {
        const now = this.ctx.currentTime;
        this.filterNode.frequency.cancelScheduledValues(now);
        this.filterNode.frequency.setValueAtTime(this.filterNode.frequency.value, now);
        this.filterNode.frequency.exponentialRampToValueAtTime(profile.cutoff, now + 0.9);
      } catch (_) {}
    }

    // Toca um acorde de piano feltro sutil que faz a ponte harmônica entre as páginas/etapas
    if (profile.chord && this.ctx && this.ctx.state === "running") {
      const now = this.ctx.currentTime;
      profile.chord.forEach((freq, idx) => {
        this.playFeltPianoNote(freq, now + idx * 0.085, 1.85, 0.042);
      });
    }
  }

  startAmbientMelody() {
    if (!state.audioEnabled || !state.pageVisible) return;
    this.initContext();

    // 1. Reprodução prioritária via elemento <audio> HTML5 nativo (assets/musica.wav?v=2)
    // Não usa createMediaElementSource para garantir que o som saia no canal de mídia nativo do celular!
    if (el.bgMusicAudio) {
      try {
        const mainTrackUrl = (CONFIG.musica && CONFIG.musica.arquivo) || "assets/musica.wav?v=3";
        const currentSrc = el.bgMusicAudio.getAttribute("src") || "";

        // Se o arquivo de rede ainda não terminou de baixar no 4G, toca o Piano Cristalino em RAM no milissegundo zero
        // e já faz o upgrade transparente para a balada completa assim que ela carregar em background
        if (el.bgMusicAudio.readyState < 2 && this.instantMusicWavUrl && currentSrc !== this.instantMusicWavUrl) {
          el.bgMusicAudio.src = this.instantMusicWavUrl;
          this.upgradeToFullPianoTrackWhenReady(mainTrackUrl);
        } else if (!currentSrc) {
          el.bgMusicAudio.src = mainTrackUrl;
        }

        el.bgMusicAudio.muted = false;
        el.bgMusicAudio.volume = this.targetMusicVolume || 0.50;

        const playPromise = el.bgMusicAudio.play();
        this.isPlayingMusic = true;
        this.usingNativeAudio = true;

        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => {
              this.usingNativeAudio = true;
              if (this.arpeggioTimer) {
                clearInterval(this.arpeggioTimer);
                this.arpeggioTimer = null;
              }
            })
            .catch(() => {
              if (this.instantMusicWavUrl && el.bgMusicAudio.src !== this.instantMusicWavUrl) {
                el.bgMusicAudio.src = this.instantMusicWavUrl;
                this.upgradeToFullPianoTrackWhenReady(mainTrackUrl);
                el.bgMusicAudio.play().catch(() => {
                  this.usingNativeAudio = false;
                  this.startMusicBoxGenerator();
                });
              } else {
                this.usingNativeAudio = false;
                this.startMusicBoxGenerator();
              }
            });
          return;
        }
        return;
      } catch (_) {
        this.usingNativeAudio = false;
      }
    }

    // 2. Fallback sintetizado de Piano Feltro
    this.isPlayingMusic = true;
    this.startMusicBoxGenerator();
  }

  upgradeToFullPianoTrackWhenReady(mainTrackUrl) {
    if (this._upgradingTrack) return;
    this._upgradingTrack = true;
    try {
      const loader = new Audio();
      loader.preload = "auto";
      loader.src = mainTrackUrl;
      const onReady = () => {
        loader.removeEventListener("canplaythrough", onReady);
        if (!el.bgMusicAudio || !state.audioEnabled || !this.isPlayingMusic) return;
        const prevVol = el.bgMusicAudio.volume;
        el.bgMusicAudio.src = mainTrackUrl;
        el.bgMusicAudio.volume = prevVol;
        el.bgMusicAudio.play().catch(() => {});
      };
      loader.addEventListener("canplaythrough", onReady);
      loader.load();
    } catch (_) {}
  }

  startMusicBoxGenerator() {
    if (this.arpeggioTimer) clearInterval(this.arpeggioTimer);

    // Progressão lenta e cristalina de Piano em Fá Maior (sem graves abaixo de C4)
    const chords = [
      { pad: [261.63, 349.23, 440.0], notes: [523.25, 659.25, 783.99, 880.0, 783.99, 659.25, 523.25, 440.0] },
      { pad: [293.66, 349.23, 440.0], notes: [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 440.0] },
      { pad: [293.66, 349.23, 466.16], notes: [523.25, 587.33, 698.46, 783.99, 698.46, 587.33, 523.25, 440.0] },
      { pad: [261.63, 349.23, 392.0], notes: [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 392.0] },
    ];

    const stepMs = 560; // ~53 BPM (andamento lento, calmo e respirado de balada de piano)

    const playTick = () => {
      if (!state.audioEnabled || !this.isPlayingMusic || !state.pageVisible) return;
      const ctx = this.ctx;
      if (!ctx) return;
      if (ctx.state === "suspended" || ctx.state === "interrupted") {
        ctx.resume().catch(() => {});
      }

      const chordIdx = Math.floor(this.stepIndex / 8) % chords.length;
      const noteIdx = this.stepIndex % 8;
      const chord = chords[chordIdx];

      if (noteIdx === 0) {
        this.playWarmPadChord(chord.pad, (stepMs * 8) / 1000);
      }

      const freq = chord.notes[noteIdx];
      this.playMusicBoxNote(freq, 2.2);

      this.stepIndex = (this.stepIndex + 1) % (chords.length * 8);
    };

    playTick();
    this.arpeggioTimer = setInterval(playTick, stepMs);
  }

  playMusicBoxNote(freq, duration = 2.2) {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    const oscSine = this.ctx.createOscillator();
    const oscWarm = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const warmGain = this.ctx.createGain();

    oscSine.type = "sine";
    oscSine.frequency.setValueAtTime(freq, now);

    oscWarm.type = "triangle";
    oscWarm.frequency.setValueAtTime(freq * 2.0003, now);
    warmGain.gain.setValueAtTime(0.12, now);
    warmGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.65);

    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.022);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscSine.connect(noteGain);
    oscWarm.connect(warmGain);
    warmGain.connect(noteGain);
    noteGain.connect(this.musicGain);

    oscSine.start(now);
    oscWarm.start(now);
    oscSine.stop(now + duration + 0.05);
    oscWarm.stop(now + duration + 0.05);
  }

  playWarmPadChord(freqs, duration = 4.4) {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    freqs.forEach((f) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.085, now + 0.65);
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
    if (el.bgMusicAudio && !el.bgMusicAudio.paused) {
      try {
        el.bgMusicAudio.pause();
      } catch (_) {}
    }
    if (this.ctx && this.musicGain) {
      const now = this.ctx.currentTime;
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.setValueAtTime(Math.max(0.0001, this.musicGain.gain.value), now);
      this.musicGain.gain.linearRampToValueAtTime(0.0001, now + fadeMs / 1000);
    }
  }

  // Abaixa suavemente a música durante momentos especiais e depois retorna ao volume da etapa atual
  duckMusic(durationMs = 2200) {
    if (!this.isPlayingMusic) return;
    const baseVol = this.targetMusicVolume || (CONFIG.musica && CONFIG.musica.volume) || 0.64;

    if (el.bgMusicAudio && !el.bgMusicAudio.paused) {
      el.bgMusicAudio.volume = Math.max(0.12, baseVol * 0.42);
      setTimeout(() => {
        if (this.isPlayingMusic && state.audioEnabled) {
          this.fadeAudioVolumeTo(this.targetMusicVolume || baseVol, 900);
        }
      }, durationMs);
    }

    if (this.ctx && this.musicGain) {
      const now = this.ctx.currentTime;
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.setValueAtTime(Math.max(0.0001, this.musicGain.gain.value), now);
      this.musicGain.gain.linearRampToValueAtTime(0.18, now + 0.18);
      this.musicGain.gain.linearRampToValueAtTime(0.5, now + durationMs / 1000);
    }
  }

  // Helper de nota de Piano Feltro suave para SFX harmônicos em Fá Maior
  playFeltPianoNote(freq, startTime, duration = 1.35, peakGain = 0.085) {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const overtoneGain = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2.0003, startTime);
    overtoneGain.gain.setValueAtTime(0.14, startTime);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.55);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(gain);
    osc2.connect(overtoneGain);
    overtoneGain.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.04);
    osc2.stop(startTime + duration + 0.04);
  }

  // Acorde de Piano Cristalino em Fmaj9 ao tocar em "Ativar som e abrir" na tela inicial
  playGateOpenChime() {
    if (!state.audioEnabled) return;
    this.playHtml5Sfx("chime", 0.68);
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [261.63, 349.23, 440.0, 523.25, 587.33, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      this.playFeltPianoNote(freq, now + idx * 0.09, 1.5, 0.065);
    });
  }

  // Helper de nota SFX suave
  playSoftNote(freq, startTime, duration = 0.65, peakGain = 0.06, type = "sine") {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.018);
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

  // Acerto: arpejo ascendente de Piano Feltro em Fmaj9 (F4 - A4 - C5 - E5 - G5)
  playSuccess() {
    if (!state.audioEnabled) return;
    this.playHtml5Sfx("success", 0.76);
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [349.23, 440.0, 523.25, 659.25, 783.99].forEach((freq, idx) => {
      this.playFeltPianoNote(freq, now + idx * 0.085, 1.15, 0.085);
    });
  }

  // Erro: "toc" de madeira grave e suave
  playError() {
    if (!state.audioEnabled) return;
    this.playHtml5Sfx("error", 0.78);
    const ctx = this.initContext();
    if (!ctx || !this.sfxGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(73.42, now + 0.17);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.13, now + 0.014);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.19);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.21);

    this.playFilteredNoise(0.06, "lowpass", 380, 0.8, 0.065);
  }

  // Lacre de cera rachando
  playWaxCrack() {
    this.playFilteredNoise(0.12, "bandpass", 1750, 2.0, 0.12);
    setTimeout(() => this.playFilteredNoise(0.09, "bandpass", 1260, 1.7, 0.095), 55);
  }

  // Chave/cadeado: dois toques harmônicos cristalinos em Fá Maior (C6 -> F6)
  playKeyUnlock() {
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    this.playFeltPianoNote(1046.5, now, 0.45, 0.075);
    this.playFilteredNoise(0.04, "highpass", 2800, 1.4, 0.055);
    this.playFeltPianoNote(1396.91, now + 0.13, 0.65, 0.085);
  }

  // Abertura da caixa: arpejo cristalino de Piano em Fmaj9 + acorde sustentado doce
  playBoxUnlock() {
    if (!state.audioEnabled) return;
    this.playHtml5Sfx("boxUnlock", 0.72);
    const ctx = this.initContext();
    if (!ctx) return;
    this.duckMusic(3600);

    const now = ctx.currentTime;
    const pianoArpeggio = [
      261.63, 349.23, 440.0, 523.25, 587.33, 659.25, 698.46, 880.0, 1046.5,
    ];
    pianoArpeggio.forEach((freq, idx) => {
      this.playFeltPianoNote(freq, now + idx * 0.095, 1.5, 0.07);
    });

    // Acorde final Fmaj9 sustentado (sem notas graves)
    const chordStart = now + pianoArpeggio.length * 0.095;
    [261.63, 349.23, 440.0, 523.25, 659.25, 783.99].forEach((freq) => {
      this.playFeltPianoNote(freq, chordStart, 2.5, 0.058);
    });
  }

  // Virada de página de papel + sussurro harmônico de piano
  playPageTurn() {
    this.playFilteredNoise(0.16, "bandpass", 1100, 0.9, 0.085);
    if (!state.audioEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [349.23, 440.0, 523.25].forEach((freq, idx) => {
      this.playFeltPianoNote(freq, now + idx * 0.075, 0.9, 0.034);
    });
  }

  // Som sutil de raspar folha de ouro (apenas enquanto move o dedo)
  playScratchGrain() {
    if (!state.audioEnabled) return;
    const nowMs = performance.now();
    if (nowMs - this.lastScratchSoundTime < 75) return;
    this.lastScratchSoundTime = nowMs;
    this.playFilteredNoise(0.055, "bandpass", 2100, 1.3, 0.055);
  }

  // Carimbo suave + Aceitar encontro (acorde Fmaj9 luminoso em cascata, sem sub-grave)
  playAcceptEncounter() {
    if (!state.audioEnabled) return;
    this.playHtml5Sfx("accept", 0.75);
    const ctx = this.initContext();
    if (!ctx) return;
    this.duckMusic(2200);

    const now = ctx.currentTime;
    this.playFilteredNoise(0.065, "bandpass", 850, 1.1, 0.075);

    // Acorde Fmaj9 em cascata de piano cristalino
    const cascade = [261.63, 349.23, 440.0, 523.25, 659.25, 783.99, 1046.5];
    cascade.forEach((freq, idx) => {
      this.playFeltPianoNote(freq, now + 0.1 + idx * 0.08, 1.6, 0.072);
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
    const webpSource = document.getElementById("couple-photo-webp");
    if (webpSource && CONFIG.fotoCasalUrl !== "assets/foto-casal.jpg") {
      webpSource.removeAttribute("srcset");
    }
    el.couplePhoto.onerror = function handlePhotoFallback() {
      el.couplePhoto.onerror = null;
      if (webpSource) webpSource.removeAttribute("srcset");
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
    const existingP2 = el.letterContentP2.querySelectorAll(
      ".letter-paragraph, .letter-poem-quote, .letter-video-box"
    );
    existingP2.forEach((p) => p.remove());
    const sigWrap2 = el.letterContentP2.querySelector(".letter-signature-wrap");

    CONFIG.cartaPagina2.paragrafos.forEach((item, idx) => {
      if (item && typeof item === "object" && item.tipo === "poema" && Array.isArray(item.versos)) {
        const quote = document.createElement("blockquote");
        quote.className = "letter-paragraph letter-poem-quote";
        item.versos.forEach((verso, vIdx) => {
          const span = document.createElement("span");
          span.className = "poem-line";
          span.textContent = verso;
          quote.appendChild(span);
          if (vIdx < item.versos.length - 1) {
            quote.appendChild(document.createElement("br"));
          }
        });
        el.letterContentP2.insertBefore(quote, sigWrap2);
      } else {
        const p = document.createElement("p");
        p.className = idx === 0 ? "letter-paragraph letter-paragraph-lead" : "letter-paragraph";
        p.textContent = String(item);
        el.letterContentP2.insertBefore(p, sigWrap2);
      }
    });

    if (CONFIG.cartaPagina2.videoEspecial && CONFIG.cartaPagina2.videoEspecial.url) {
      const vid = CONFIG.cartaPagina2.videoEspecial;
      const videoBox = document.createElement("div");
      videoBox.className = "letter-paragraph letter-video-box";

      if (vid.introducao) {
        const introP = document.createElement("p");
        introP.className = "letter-video-intro";
        introP.textContent = vid.introducao;
        videoBox.appendChild(introP);
      }

      const link = document.createElement("a");
      link.href = vid.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "letter-video-card";
      link.setAttribute("aria-label", `${vid.titulo || "O que é o amor?"} — Assistir vídeo no YouTube`);

      link.innerHTML = `
        <span class="letter-video-play-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="letter-video-play-svg">
            <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.45" />
            <path d="M9.5 7.5L17 12L9.5 16.5V7.5Z" fill="currentColor" />
          </svg>
        </span>
        <span class="letter-video-meta">
          <span class="letter-video-title">${vid.titulo || "O que é o amor?"}</span>
          <span class="letter-video-sub">${vid.subtitulo || "Toque para assistir ao vídeo"}</span>
        </span>
        <span class="letter-video-sparkle" aria-hidden="true">
          <svg viewBox="0 0 24 24"><use href="#sparkle" /></svg>
        </span>
      `;

      link.addEventListener("click", () => {
        soundFX.playKeyTap();
        soundFX.stopAmbientMelody(300);
      });

      videoBox.appendChild(link);
      el.letterContentP2.insertBefore(videoBox, sigWrap2);
    }
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

  // Mensagem final de agradecimento + Foto Final + Botão do WhatsApp
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

    if (el.finalPhoto) {
      el.finalPhoto.onerror = function handleFinalPhotoFallback() {
        el.finalPhoto.onerror = null;
        el.finalPhoto.src = CONFIG.fotoCasalReserva || "assets/foto-final.jpg";
      };
      if (CONFIG.agradecimentoFinal.fotoFinalUrl) {
        el.finalPhoto.src = CONFIG.agradecimentoFinal.fotoFinalUrl;
      }
    }

    if (el.btnWhatsapp && CONFIG.agradecimentoFinal.whatsappNumero) {
      const cleanPhone = String(CONFIG.agradecimentoFinal.whatsappNumero).replace(/\D/g, "");
      const msg = CONFIG.agradecimentoFinal.whatsappMensagem || "";
      el.btnWhatsapp.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    }
  }

  // Prepara animação por letra em "Isabela" na Intro
  setupIntroSplitName();
}

function setupIntroSplitName() {
  // Mantém "Isabela" como palavra contínua sem fatiar em inline-blocks individuais,
  // evitando que o hasteamento itálico do "l" seja cortado ou borrado no iOS Safari / Chrome
  if (!el.introSplitName) return;
  el.introSplitName.textContent = el.introSplitName.textContent.trim();
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

  const isMobileScreen = width < 768;
  const count = isMobileScreen ? 12 : 24;
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

  let dustFrameTick = 0;
  function renderDust() {
    if (!state.pageVisible || state.reducedMotion) {
      goldDustRaf = null;
      return;
    }
    dustFrameTick++;
    // Em celulares, atualiza o canvas de poeira a ~30fps para deixar o scroll e animações ultra-fluidos
    if (isMobileScreen && dustFrameTick % 2 !== 0) {
      goldDustRaf = requestAnimationFrame(renderDust);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    const speedFactor = isMobileScreen ? 1.8 : 1;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.vy * speedFactor;
      p.x += (p.vx + Math.sin(p.phase) * 0.08) * speedFactor;
      p.phase += 0.02 * speedFactor;

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
    el.audioText.textContent = "Som: Ligado";
    el.audioToggle.setAttribute("aria-label", "Silenciar trilha sonora");
  } else {
    el.audioText.textContent = "Som: Mudo";
    el.audioToggle.setAttribute("aria-label", "Ativar trilha sonora suave");
  }
}

function setupGateAndAudio() {
  updateAudioButtonUI();

  function openGateExperience() {
    if (state.gateOpened) {
      if (state.audioEnabled && el.bgMusicAudio && el.bgMusicAudio.paused) {
        soundFX.startAmbientMelody();
      }
      return;
    }
    state.gateOpened = true;

    // 1. Garante que o som seja ativado dentro do evento confiável (click/touchend)
    state.audioEnabled = true;
    sessionStorage.setItem(STORAGE_AUDIO_KEY, "true");
    updateAudioButtonUI();

    soundFX.startAmbientMelody();
    soundFX.playGateOpenChime();
    soundFX.playWaxCrack();

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
    }, 920);
  }

  if (el.stepGate) {
    // IMPORTANTE: No mobile (Android Chrome / iOS Safari), apenas click e touchend liberam áudio!
    el.stepGate.addEventListener("click", openGateExperience);
    // Ignora o touchend quando o dedo estava rolando a tela (evita abrir sem querer ao rolar)
    let gateTouchY = 0;
    let gateTouchMoved = false;
    el.stepGate.addEventListener("touchstart", (e) => {
      gateTouchMoved = false;
      gateTouchY = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
    }, { passive: true });
    el.stepGate.addEventListener("touchmove", (e) => {
      const y = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
      if (Math.abs(y - gateTouchY) > 10) gateTouchMoved = true;
    }, { passive: true });
    el.stepGate.addEventListener("touchend", () => {
      if (gateTouchMoved) return;
      openGateExperience();
    }, { passive: true });
    el.stepGate.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openGateExperience();
      }
    });
  }

  // Recuperação automática do som caso o celular suspenda a mídia (apenas em eventos confiáveis click/touchend)
  const ensureAudioRunningOnInteraction = () => {
    if (!state.gateOpened || !state.audioEnabled) return;
    if (el.bgMusicAudio && el.bgMusicAudio.paused) {
      soundFX.startAmbientMelody();
    } else if (!soundFX.isPlayingMusic) {
      soundFX.startAmbientMelody();
    }
  };
  document.addEventListener("click", ensureAudioRunningOnInteraction, { passive: true });
  document.addEventListener("touchend", ensureAudioRunningOnInteraction, { passive: true });

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

  window.addEventListener("focus", () => {
    if (state.gateOpened && state.audioEnabled && !soundFX.isPlayingMusic) {
      soundFX.startAmbientMelody();
    }
  });
}

/* ============================================================================
   PARALLAX LEVE DA CAIXA E CENOGRAFIA DESKTOP
   ============================================================================ */
function setupBoxAndDesktopParallax() {
  // Desativa parallax contínuo de pointermove em telas touch/mobile para máxima fluidez
  if (state.reducedMotion || window.innerWidth < 768) return;

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
  if (heading && el.srAnnouncer) {
    el.srAnnouncer.textContent = heading.textContent.trim();
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

  // Adapta o clima da trilha de piano de acordo com a etapa em que Isabela está
  const stepMoodMap = {
    "step-intro": "intro",
    "step-q1": "q1",
    "step-q2": "q2",
    "step-q3": "q3",
    "step-unlocked": "unlocked",
    "step-letter": `letter-${state.currentLetterPage || 1}`,
    "step-scratch": state.dateAccepted ? "finale" : "scratch",
  };
  if (targetStep.id && stepMoodMap[targetStep.id]) {
    soundFX.setStageMood(stepMoodMap[targetStep.id]);
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
        "Digite a data especial do nosso começo antes de tentar abrir o cadeado"
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
        `<p class="feedback-title">Isso mesmo!</p><p class="feedback-text">O dia em que a minha vida ficou muito mais bonita. Até o calendário deveria comemorar essa data.</p>`,
        "Próxima pergunta",
        () => goToStep(el.stepQ2)
      );
    } else {
      state.q1Attempts += 1;
      triggerBoxErrorShake(el.inputDate);

      renderFeedback(
        el.feedbackQ1,
        "error",
        `<p class="feedback-title">Eita! Será que é mesmo a namorada do Caique ou uma invasora?</p><p class="feedback-text">Se não for Isabela, pode ir saindo daqui. Se for… respira e tenta de novo!</p>`
      );
    }
  });
}

/* ============================================================================
   ETAPA 2: PERGUNTA DE SANTA TERESINHA E DOS SANTOS
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
          `<p class="feedback-title">Santa Teresinha aprovou essa resposta!</p><p class="feedback-text">Uma rosa para você, outro cadeado aberto e mais uma prova de que essa caixa escolheu a pessoa certa.</p>`,
          "Ir para a última pergunta",
          () => {
            preloadUpcomingAssets();
            goToStep(el.stepQ3);
            setTimeout(() => el.inputIdentity.focus(), 80);
          }
        );
      } else {
        btn.classList.add("selected-wrong");
        triggerBoxErrorShake(btn);

        const wrongFeedbacks = {
          a: `<p class="feedback-title">Hmm… a intercessão foi forte, mas essa memória está precisando de uma novena!</p><p class="feedback-text">Dica: a resposta certa costuma vir acompanhada de rosas.</p>`,
          b: `<p class="feedback-title">VAMOS, TRICOLOR!</p><p class="feedback-text">Mas infelizmente esse gol foi anulado pelo VAR. Tenta outra vez!</p>`,
          d: `<p class="feedback-title">São Domingos quase mandou você rezar um Rosário inteiro!</p><p class="feedback-text">O fundador dos Dominicanos nos deu o Santo Rosário e pregou com o coração em chamas, mas para o nosso namoro a intercessora foi outra! Dica: a resposta certa costuma vir acompanhada de rosas.</p>`
        };

        renderFeedback(
          el.feedbackQ2,
          "error",
          wrongFeedbacks[choice] || "Quase! Tenta outra opção com carinho"
        );
      }
    });
  });
}

/* ============================================================================
   ETAPA 3: PERGUNTA DE IDENTIDADE ("QUEM É VOCÊ PARA O CAIQUE?")
   ============================================================================ */
function normalizeText(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function handleQuestion3Success(customMessage) {
  if (state.locksOpened[2]) return;

  unlockIndicator(3);
  triggerBoxSuccessBounce();

  el.inputIdentity.disabled = true;
  el.btnSubmitQ3.hidden = true;

  renderFeedback(
    el.feedbackQ3,
    "success",
    customMessage,
    "Abrir a caixa misteriosa",
    () => triggerBoxUnlockSequence()
  );
}

function setupQuestion3() {
  el.formQ3.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.locksOpened[2]) return;

    const rawValue = el.inputIdentity.value;
    const clean = normalizeText(rawValue);

    if (!clean) {
      triggerBoxErrorShake(el.inputIdentity);
      el.inputIdentity.focus();
      return;
    }

    const containsAmor = clean.includes("amor");
    const startsWithIsa = /^isa(bela)?\b/.test(clean) || clean.includes("isabela");

    if (containsAmor) {
      handleQuestion3Success(
        `<p class="feedback-title">Exatamente! Agora sim você falou o seu nome completo.</p>`
      );
      return;
    }

    if (startsWithIsa) {
      handleQuestion3Success(
        `<p class="feedback-title">Quase!</p><p class="feedback-text">Sim, <strong>Isa</strong> ou <strong>Isabela</strong> é a dona do coração do Caique, mas o correto é: <strong>Amor da vida do Caique.</strong><br/>Mas como você chegou muito perto, vou aceitar.</p>`
      );
      return;
    }

    triggerBoxErrorShake(el.inputIdentity);
    el.feedbackQ3.hidden = false;
    el.feedbackQ3.className = "feedback-box feedback-error";
    el.feedbackQ3.innerHTML = `
      <p class="feedback-title">Essa resposta levantou suspeitas…</p>
      <p class="feedback-text">
        Você é o amor da vida do Caique ou a Isa Ivo do multiverso?
      </p>
      <div class="identity-quick-buttons" style="margin-top: 12px;">
        <button type="button" class="btn-primary" id="btn-choice-amor">
          <span>Sou o amor da vida do Caique</span>
        </button>
        <button type="button" class="btn-ghost-choice" id="btn-choice-invasora">
          <span>Sou só uma invasora curiosa</span>
        </button>
      </div>
    `;

    const btnAmor = document.getElementById("btn-choice-amor");
    const btnInvasora = document.getElementById("btn-choice-invasora");

    if (btnAmor) {
      btnAmor.addEventListener("click", () => {
        handleQuestion3Success(
          `<p class="feedback-title">Exatamente! Agora sim você falou o seu nome completo.</p>`
        );
      });
    }

    if (btnInvasora) {
      btnInvasora.addEventListener("click", () => {
        triggerBoxErrorShake(btnInvasora);
        el.feedbackQ3.className = "feedback-box feedback-error";
        el.feedbackQ3.innerHTML = `
          <p class="feedback-title">Sabia! A segurança dessa caixa é quase intransponível.</p>
          <p class="feedback-text">
            Mas, como você parece promissora, vou dar mais uma chance.
          </p>
        `;
        el.inputIdentity.value = "";
        el.inputIdentity.focus();
      });
    }
  });
}

/* ============================================================================
   3.3 & 3.4 SEQUÊNCIA DE ABERTURA DA CAIXA (~5.7s) E EXPLOSÃO DE ROSAS COM FÍSICA
   ============================================================================ */
function spawnRoseAndPetalPhysicsBurst(wave = 1) {
  if (!el.particlesAnchor) return;

  if (state.reducedMotion) {
    if (wave > 1) return;
    // Reduced motion: 5 rosas estáticas aparecendo com fade
    for (let i = 0; i < 5; i++) {
      const rose = document.createElement("div");
      rose.className = "burst-rose-item";
      const sym = i === 2 ? "#rose-white" : "#rose";
      rose.innerHTML = `<svg viewBox="0 0 80 80"><use href="${sym}" /></svg>`;
      rose.style.transform = `translate3d(${(i - 2) * 38}px, ${-48 - (i % 2) * 18}px, 0) scale(0.85)`;
      el.particlesAnchor.appendChild(rose);
      setTimeout(() => rose.remove(), 3800);
    }
    return;
  }

  // 1. Burst de Rosas Inteiras (80% vermelhas #rose, 20% brancas #rose-white) com física real
  const baseRoseCount = isLowEndMobile ? 10 : 15;
  const roseCount = wave === 1 ? baseRoseCount : Math.max(6, Math.round(baseRoseCount * 0.65));
  for (let i = 0; i < roseCount; i++) {
    const roseEl = document.createElement("div");
    roseEl.className = "burst-rose-item";
    const isWhite = (i + wave) % 5 === 0; // 20% brancas (flor de Santa Teresinha)
    roseEl.innerHTML = `<svg viewBox="0 0 80 80"><use href="${isWhite ? "#rose-white" : "#rose"}" /></svg>`;
    el.particlesAnchor.appendChild(roseEl);

    const spreadAngle = (-148 + (i / Math.max(1, roseCount - 1)) * 116 + (Math.random() - 0.5) * 16) * (Math.PI / 180);
    const speed = 235 + Math.random() * 175;
    const vx = Math.cos(spreadAngle) * speed;
    const vy0 = Math.sin(spreadAngle) * speed - 75;
    const gravity = 410;
    const scale = 0.6 + Math.random() * 0.58;
    const rotSpeed = (Math.random() - 0.5) * 240;
    const totalMs = 2600 + Math.random() * 650;
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
      const alpha = progress > 0.74 ? 1 - (progress - 0.74) / 0.26 : 1;
      roseEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      roseEl.style.opacity = alpha.toFixed(2);
      requestAnimationFrame(stepRose);
    }

    requestAnimationFrame(stepRose);
  }

  // 2. Pétalas que explodem e depois caem lentamente pela tela inteira por ~6s com flutter
  const basePetalCount = isLowEndMobile ? 28 : 48;
  const petalCount = wave === 1 ? basePetalCount : Math.round(basePetalCount * 0.5);
  for (let i = 0; i < petalCount; i++) {
    const petalEl = document.createElement("div");
    petalEl.className = "burst-petal-item";
    const isWhite = (i + wave) % 5 === 0;
    petalEl.innerHTML = `<svg viewBox="0 0 28 32"><use href="${isWhite ? "#petal-white" : "#petal"}" /></svg>`;
    el.celebrationLayer.appendChild(petalEl);

    const startX = window.innerWidth * 0.5 + (Math.random() - 0.5) * 65;
    const startY = window.innerHeight * 0.36 + (Math.random() - 0.5) * 32;
    const burstVx = (Math.random() - 0.5) * (window.innerWidth * 0.88);
    const burstVy = -(90 + Math.random() * 195);
    const fallSpeed = 68 + Math.random() * 58;
    const swayAmp = 24 + Math.random() * 30;
    const swayFreq = 1.7 + Math.random() * 1.5;
    const phase = Math.random() * Math.PI * 2;
    const scale = 0.68 + Math.random() * 0.65;
    const durationMs = 5400 + Math.random() * 1500;
    const t0 = performance.now();

    function stepPetal(now) {
      const dt = (now - t0) / 1000;
      const p = (now - t0) / durationMs;
      if (p >= 1 || !state.pageVisible) {
        petalEl.remove();
        return;
      }
      // Transição suave do impulso inicial para queda com deriva senoidal
      const damp = Math.exp(-dt * 2.0);
      const x =
        startX +
        burstVx * (1 - damp) * 0.48 +
        Math.sin(dt * swayFreq + phase) * swayAmp;
      const y =
        startY +
        burstVy * (1 - damp) * 0.42 +
        fallSpeed * dt * dt * 0.52;

      const rotZ = dt * 90 + Math.sin(dt * 2.5) * 25;
      const rotX = Math.sin(dt * 3.1 + phase) * 65;
      const rotY = Math.cos(dt * 2.7 + phase) * 65;
      const alpha = p > 0.82 ? 1 - (p - 0.82) / 0.18 : 1;

      petalEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateZ(${rotZ.toFixed(1)}deg) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      petalEl.style.opacity = alpha.toFixed(2);
      requestAnimationFrame(stepPetal);
    }

    requestAnimationFrame(stepPetal);
  }
}

function focusStageOnBoxForOpening() {
  // Oculta imediatamente o cartão da Pergunta 3 para que o palco da caixa fique 100% em destaque
  if (el.stepQ3 && !el.stepQ3.hidden) {
    if (state.reducedMotion) {
      el.stepQ3.hidden = true;
      el.stepQ3.classList.remove("active-step", "step-leaving", "step-entering");
    } else {
      el.stepQ3.classList.add("step-leaving");
      setTimeout(() => {
        el.stepQ3.hidden = true;
        el.stepQ3.classList.remove("active-step", "step-leaving", "step-entering");
      }, 220);
    }
  }

  // Centraliza a câmera no topo e ativa o modo palco cinematográfico da caixa
  window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });
  if (el.giftBox) {
    el.giftBox.style.transform = "";
  }
  el.giftBoxStage.classList.remove("compact");
  el.giftBoxStage.classList.add("opening-cinema");
}

function triggerBoxUnlockSequence() {
  if (state.isUnlockingBox) return;
  state.isUnlockingBox = true;

  focusStageOnBoxForOpening();

  if (state.reducedMotion) {
    soundFX.playBoxUnlock();
    el.giftBoxStage.classList.remove("opening-cinema");
    el.giftBoxStage.classList.add("rays-active", "css-fallback-open", "compact");
    spawnRoseAndPetalPhysicsBurst(1);
    startPolaroidDeveloping();
    goToStep(el.stepUnlocked);
    return;
  }

  const gsapInstance = window.gsap;
  if (!gsapInstance) {
    // Degradação elegante caso o CDN do GSAP não tenha carregado
    setTimeout(() => soundFX.playKeyUnlock(), 500);
    setTimeout(() => {
      soundFX.playBoxUnlock();
      el.giftBoxStage.classList.add("rays-active", "css-fallback-open");
      spawnRoseAndPetalPhysicsBurst(1);
    }, 1800);
    setTimeout(() => {
      el.giftBoxStage.classList.remove("opening-cinema");
      el.giftBoxStage.classList.add("compact");
      startPolaroidDeveloping();
      goToStep(el.stepUnlocked);
    }, 4800);
    return;
  }

  const giftTag = el.giftBox.querySelector(".box-gift-tag");

  // Timeline cinematográfica prolongada (~5.65s) com foco total na caixa
  const tl = gsapInstance.timeline();

  // 0.00s - 0.55s: Foco no palco, levitação suave e tremor de expectativa da caixa
  tl.fromTo(
    el.giftBox,
    { y: 0, scale: 1 },
    { y: -8, scale: 1.04, duration: 0.45, ease: "sine.inOut" },
    0.05
  );
  tl.to(
    el.giftBox,
    {
      keyframes: [
        { rotationZ: -1.8, duration: 0.07 },
        { rotationZ: 1.8, duration: 0.07 },
        { rotationZ: -1.4, duration: 0.07 },
        { rotationZ: 1.2, duration: 0.07 },
        { rotationZ: 0, duration: 0.08 },
      ],
      ease: "sine.inOut",
    },
    0.22
  );

  // 0.55s - 1.55s: Chave dourada entra voando num arco gracioso, solta brilhos, encaixa e gira 90°
  tl.fromTo(
    el.flyingKey,
    { opacity: 0, x: -95, y: -48, rotation: -42, scale: 0.72 },
    { opacity: 1, x: 78, y: 12, rotation: 0, scale: 1, duration: 0.68, ease: "power3.out" },
    0.55
  );
  tl.add(() => {
    soundFX.playKeyUnlock();
    spawnBoxMiniPetals(6);
  }, 1.22);
  tl.to(
    el.flyingKey,
    { rotation: 90, scale: 1.06, duration: 0.28, ease: "back.out(2.2)" },
    1.25
  );

  // 1.58s - 2.35s: A haste do cadeado salta com mola, a etiqueta comemora e o cadeado cai com gravidade
  tl.to(
    el.padlockShackle,
    { y: -10, rotation: 26, duration: 0.28, ease: "back.out(2.4)" },
    1.58
  );
  if (giftTag) {
    tl.to(
      giftTag,
      {
        keyframes: [
          { rotation: 22, duration: 0.18 },
          { rotation: 4, duration: 0.18 },
          { rotation: 14, duration: 0.18 },
          { rotation: 10, duration: 0.18 },
        ],
        ease: "sine.inOut",
      },
      1.6
    );
  }
  tl.to(
    [el.boxPadlock, el.flyingKey],
    { y: 88, rotation: 32, opacity: 0, duration: 0.55, ease: "power2.in" },
    1.82
  );

  // 2.35s - 3.45s: O laço 3D de cetim se desfaz lentamente e as fitas escorregam pelas laterais
  tl.to(
    el.boxBow.querySelector(".bow-knot"),
    { scale: 1.18, duration: 0.18, ease: "sine.out" },
    2.35
  );
  tl.to(
    el.boxBow.querySelectorAll(".bow-loop-left, .bow-tail-left"),
    { x: -38, y: 8, rotation: -24, scaleX: 0.28, opacity: 0, duration: 0.65, ease: "power2.inOut" },
    2.45
  );
  tl.to(
    el.boxBow.querySelectorAll(".bow-loop-right, .bow-tail-right"),
    { x: 38, y: 8, rotation: 24, scaleX: 0.28, opacity: 0, duration: 0.65, ease: "power2.inOut" },
    2.45
  );
  tl.to(
    el.boxBow.querySelector(".bow-knot"),
    { scale: 0, opacity: 0, duration: 0.38, ease: "back.in(1.8)" },
    2.58
  );
  tl.to(
    [el.ribbonVertical, el.lidRibbonVertical],
    { scaleY: 0, y: 48, opacity: 0, duration: 0.62, ease: "power2.inOut" },
    2.78
  );
  tl.to(
    el.ribbonHorizontal,
    { scaleX: 0, x: 54, opacity: 0, duration: 0.62, ease: "power2.inOut" },
    2.78
  );

  // 3.40s - 4.40s: Compressão de antecipação + A tampa se ergue alto revelando a luz divina interna
  tl.to(
    el.giftBox,
    { scaleX: 1.05, scaleY: 0.94, y: 4, duration: 0.24, ease: "sine.inOut" },
    3.4
  );
  tl.to(
    el.giftBox,
    { scaleX: 1, scaleY: 1, y: -4, duration: 0.38, ease: "back.out(1.8)" },
    3.64
  );
  tl.add(() => {
    el.giftBoxStage.classList.add("rays-active");
  }, 3.62);
  tl.to(
    el.boxLid,
    { y: -82, rotationX: 28, rotationZ: -14, duration: 0.52, ease: "power2.out" },
    3.64
  );
  tl.to(
    el.boxLid,
    { x: -128, y: -32, rotationZ: -44, opacity: 0, duration: 0.58, ease: "power2.in" },
    4.12
  );

  // 3.85s - 5.55s: GRANDE EXPLOSÃO DE ROSAS (2 ondas) + Rosa principal desabrochando camada por camada
  tl.add(() => {
    soundFX.playBoxUnlock();
    navigator.vibrate?.([20, 40, 30]);
    spawnRoseAndPetalPhysicsBurst(1);
  }, 3.85);

  // Flash de luz quente suave no momento da abertura
  tl.fromTo(
    el.boxBurstFlash,
    { opacity: 0 },
    { opacity: 0.42, duration: 0.22, yoyo: true, repeat: 1, ease: "sine.inOut" },
    3.85
  );

  // Rosa principal (~94px) sobe majestosamente do centro da caixa e desabrocha pétala por pétala
  tl.fromTo(
    el.mainBloomingRose,
    { opacity: 0, xPercent: -50, y: 18, scale: 0.2 },
    { opacity: 1, xPercent: -50, y: -72, scale: 1.14, duration: 1.45, ease: "back.out(1.4)" },
    3.88
  );
  tl.fromTo(
    el.mainBloomingRose.querySelectorAll(".bloom-outer, .bloom-mid, .bloom-core"),
    { scale: 0.25, rotation: -28 },
    { scale: 1, rotation: 0, duration: 1.45, stagger: 0.22, ease: "elastic.out(1, 0.65)" },
    3.96
  );

  // Segunda onda de rosas e faíscas douradas enquanto a rosa principal brilha no topo
  tl.add(() => {
    spawnRoseAndPetalPhysicsBurst(2);
    spawnBoxMiniPetals(10);
  }, 4.48);

  // 5.65s: A caixa recolhe suavemente para o topo (compact) e revela a Polaroid + Açaí
  tl.add(() => {
    el.giftBoxStage.classList.remove("opening-cinema");
    el.giftBoxStage.classList.add("compact");
    startPolaroidDeveloping();
    goToStep(el.stepUnlocked);
  }, 5.65);
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
function spawnEnvelopeParticles(count = 10) {
  const anchor = document.getElementById("envelope-particles-anchor") || el.particlesAnchor;
  if (state.reducedMotion || !anchor) return;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("div");
    item.className = "burst-petal-item";
    const isSparkle = i % 2 === 0;
    item.innerHTML = isSparkle
      ? `<svg viewBox="0 0 24 24"><use href="#sparkle" /></svg>`
      : `<svg viewBox="0 0 28 32"><use href="${i % 4 === 1 ? "#petal-white" : "#petal"}" /></svg>`;
    anchor.appendChild(item);

    const angle = (-150 + Math.random() * 120) * (Math.PI / 180);
    const dist = 55 + Math.random() * 75;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 22;
    const rot = (Math.random() - 0.5) * 240;

    item.animate(
      [
        { transform: "translate3d(0,0,0) scale(0.35) rotate(0deg)", opacity: 1 },
        {
          transform: `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(1.05) rotate(${rot.toFixed(1)}deg)`,
          opacity: 0.95,
          offset: 0.62,
        },
        {
          transform: `translate3d(${(tx * 1.18).toFixed(1)}px, ${(ty + 34).toFixed(1)}px, 0) scale(0.55) rotate(${(rot * 1.4).toFixed(1)}deg)`,
          opacity: 0,
        },
      ],
      { duration: 1050 + Math.random() * 350, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    ).onfinish = () => item.remove();
  }
}

function resetEnvelopeElements() {
  const envSeal = document.getElementById("real-env-seal");
  const envFlap = document.getElementById("real-env-flap");
  const envSheet = document.getElementById("real-env-sheet");
  const envGlow = document.getElementById("real-env-inner-glow");
  const envCaption = document.getElementById("envelope-stage-caption");

  if (window.gsap) {
    window.gsap.killTweensOf(
      [el.realEnvelope, envSeal, envFlap, envSheet, envGlow, envCaption].filter(Boolean)
    );
    window.gsap.set(
      [el.realEnvelope, envSeal, envFlap, envSheet, envGlow, envCaption].filter(Boolean),
      { clearProps: "all" }
    );
  }
  if (el.realEnvelope) el.realEnvelope.className = "real-envelope";
  if (envSeal) envSeal.classList.remove("seal-cracked");
  if (envCaption) envCaption.textContent = "Uma carta selada especialmente para você…";
}

function openLetterStage() {
  el.giftBoxStage.hidden = true;
  goToStep(el.stepLetter);

  // Foca imediatamente no topo para centralizar o palco do envelope/carta
  window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });

  if (state.reducedMotion || state.envelopeOpenedOnce) {
    if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = true;
    if (el.loveLetterPaper) {
      el.loveLetterPaper.hidden = false;
      el.loveLetterPaper.classList.remove("unfolding-paper");
    }
    goToLetterPage(1, "next");
    return;
  }

  // Sequência cinematográfica e prolongada de abertura do envelope 3D (~4.6s)
  state.envelopeOpenedOnce = true;
  if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = false;
  if (el.loveLetterPaper) el.loveLetterPaper.hidden = true;
  resetEnvelopeElements();

  const envSeal = document.getElementById("real-env-seal");
  const envFlap = document.getElementById("real-env-flap");
  const envSheet = document.getElementById("real-env-sheet");
  const envGlow = document.getElementById("real-env-inner-glow");
  const envCaption = document.getElementById("envelope-stage-caption");

  const revealFullLetterPaper = () => {
    if (el.letterEnvelopeStage) el.letterEnvelopeStage.hidden = true;
    if (el.loveLetterPaper) {
      el.loveLetterPaper.hidden = false;
      el.loveLetterPaper.classList.remove("unfolding-paper");
      void el.loveLetterPaper.offsetWidth;
      el.loveLetterPaper.classList.add("unfolding-paper");
    }
    window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });
    goToLetterPage(1, "next");
  };

  const gsapInstance = window.gsap;
  if (!gsapInstance) {
    // Fallback CSS prolongado (~4.2s) caso o GSAP não esteja disponível
    setTimeout(() => {
      soundFX.playWaxCrack();
      if (envSeal) envSeal.classList.add("seal-cracked");
      spawnEnvelopeParticles(8);
    }, 650);

    setTimeout(() => {
      if (el.realEnvelope) el.realEnvelope.classList.add("env-step-seal");
    }, 1050);

    setTimeout(() => {
      if (el.realEnvelope) el.realEnvelope.classList.add("env-step-flap");
      soundFX.playPageTurn();
    }, 1750);

    setTimeout(() => {
      if (el.realEnvelope) el.realEnvelope.classList.add("env-step-sheet");
      soundFX.playPageTurn();
      spawnEnvelopeParticles(8);
    }, 2650);

    setTimeout(() => {
      if (el.realEnvelope) el.realEnvelope.classList.add("env-step-done");
    }, 3650);

    setTimeout(revealFullLetterPaper, 4200);
    return;
  }

  const tl = gsapInstance.timeline();

  // 0.00s - 0.85s: O envelope entra no centro do palco iluminado e o lacre pulsa
  tl.fromTo(
    el.realEnvelope,
    { opacity: 0, y: 28, scale: 0.9, rotationX: 14 },
    { opacity: 1, y: 0, scale: 1.04, rotationX: 0, duration: 0.72, ease: "back.out(1.4)" },
    0
  );
  if (envSeal) {
    tl.to(
      envSeal,
      { scale: 1.12, duration: 0.28, yoyo: true, repeat: 1, ease: "sine.inOut" },
      0.45
    );
  }

  // 0.90s - 1.85s: O lacre de cera vermelho trinca, solta faíscas e cai com gravidade
  tl.add(() => {
    if (envCaption) envCaption.textContent = "Quebrando o lacre real…";
    soundFX.playWaxCrack();
    navigator.vibrate?.([18, 30, 18]);
    if (envSeal) envSeal.classList.add("seal-cracked");
    spawnEnvelopeParticles(10);
  }, 0.92);

  if (envSeal) {
    tl.to(
      envSeal,
      {
        keyframes: [
          { x: -3, rotation: -6, duration: 0.06 },
          { x: 3, rotation: 6, duration: 0.06 },
          { x: -2, rotation: -4, duration: 0.06 },
          { x: 0, rotation: 0, duration: 0.06 },
        ],
        ease: "sine.inOut",
      },
      0.94
    );
    tl.to(
      envSeal,
      { y: 76, rotation: 28, scale: 0.72, opacity: 0, duration: 0.58, ease: "power2.in" },
      1.28
    );
  }

  // 1.85s - 2.95s: A aba superior 3D se abre lentamente revelando o brilho quente interno
  tl.add(() => {
    if (envCaption) envCaption.textContent = "Abrindo o envelope…";
    soundFX.playPageTurn();
  }, 1.88);

  if (envFlap) {
    tl.to(
      envFlap,
      {
        rotationX: 180,
        duration: 0.92,
        ease: "power2.inOut",
        onUpdate: function () {
          if (this.progress() > 0.5) {
            envFlap.style.zIndex = "1";
          }
        },
      },
      1.88
    );
  }
  if (envGlow) {
    tl.to(envGlow, { opacity: 1, duration: 0.65, ease: "sine.out" }, 2.15);
  }
  tl.add(() => {
    spawnEnvelopeParticles(8);
  }, 2.45);

  // 2.85s - 4.15s: A folha de carta marfim desliza suavemente para fora do envelope
  tl.add(() => {
    if (envCaption) envCaption.textContent = "Desdobrando a sua carta…";
    soundFX.playPageTurn();
    soundFX.playSuccess();
    spawnEnvelopeParticles(12);
  }, 2.85);

  if (envSheet) {
    tl.to(
      envSheet,
      { y: -122, scale: 1.06, duration: 1.12, ease: "power3.out" },
      2.85
    );
  }

  // 4.10s - 4.60s: O envelope recolhe suavemente e dá lugar ao papel completo da carta
  tl.to(
    [el.realEnvelope, envCaption].filter(Boolean),
    { y: 34, scale: 0.94, opacity: 0, duration: 0.48, ease: "power2.inOut" },
    4.12
  );

  tl.add(revealFullLetterPaper, 4.6);
}

function revealParagraphsInContainer(container) {
  if (!container) return;
  const paragraphs = container.querySelectorAll(".letter-paragraph");

  if (state.reducedMotion) {
    paragraphs.forEach((p) => p.classList.add("revealed"));
    return;
  }

  paragraphs.forEach((p) => p.classList.remove("revealed"));
  const staggerMs = paragraphs.length > 4 ? 180 : 320;
  paragraphs.forEach((p, idx) => {
    setTimeout(() => {
      p.classList.add("revealed");
    }, 100 + idx * staggerMs);
  });
}

function goToLetterPage(pageNumber, direction = "next") {
  state.currentLetterPage = pageNumber;
  soundFX.setStageMood(`letter-${pageNumber}`);
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

  // Remove o foco do botão clicado no rodapé e sobe suavemente para o topo da nova página
  if (document.activeElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }
  window.scrollTo({
    top: 0,
    behavior: state.reducedMotion ? "auto" : "smooth",
  });
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
  if (el.btnToPage3) el.btnToPage3.addEventListener("click", toPage3);
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
  if (rect.height < 50) {
    requestAnimationFrame(initScratchCanvas);
    return;
  }
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
  ctx.fillText("Descubra o nosso próximo capítulo", width / 2, height / 2 + 28);
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
  if (el.btnAcceptDate) {
    el.btnAcceptDate.disabled = false;
    el.btnAcceptDate.classList.add("pulse-ready");
  }

  soundFX.playSuccess();
  triggerCelebrationShower(18);
}

function setupScratchCard() {
  const canvas = el.scratchCanvas;
  if (!canvas) return;

  let isScratching = false;
  let lastX = 0;
  let lastY = 0;
  let currentStrokeDistance = 0;
  let lastDirectionX = 0;
  let segmentDistanceX = 0;
  let moveThrottle = 0;

  function scratchSegment(x1, y1, x2, y2) {
    if (state.scratchCompleted) return;
    state.scratchStarted = true;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 28;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Pequeno detalhe orgânico nas bordas do risco
    for (let i = 0; i < 2; i++) {
      const rx = (x1 + x2) / 2 + (Math.random() - 0.5) * 12;
      const ry = (y1 + y2) / 2 + (Math.random() - 0.5) * 12;
      ctx.beginPath();
      ctx.arc(rx, ry, 10 + Math.random() * 6, 0, Math.PI * 2);
      ctx.fill();
    }

    spawnScratchGoldDust(x2, y2);
    soundFX.playScratchGrain();
  }

  function checkScratchPercentage() {
    if (state.scratchCompleted) return;

    // Exige no mínimo 5 raspadas reais antes de qualquer revelação automática!
    const effectiveStrokes = Math.max(
      state.scratchStrokes,
      Math.floor(state.scratchTotalDistance / 190)
    );

    if (effectiveStrokes < 5) {
      return;
    }

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const { width, height } = canvas;
    if (!width || !height) return;

    const imgData = ctx.getImageData(0, 0, width, height).data;
    let transparentPixels = 0;
    const stride = 28;
    let totalSampled = 0;

    for (let i = 3; i < imgData.length; i += 4 * stride) {
      totalSampled++;
      if (imgData[i] < 128) {
        transparentPixels++;
      }
    }

    const ratio = transparentPixels / Math.max(1, totalSampled);

    // Revela se raspou pelo menos 5 vezes E atingiu 52% de área raspada, OU se já deu 10 raspadas fortes
    if (ratio >= 0.52 || effectiveStrokes >= 10) {
      completeScratchReveal();
    }
  }

  canvas.addEventListener("pointerdown", (e) => {
    if (state.scratchCompleted) return;
    isScratching = true;
    currentStrokeDistance = 0;
    segmentDistanceX = 0;
    lastDirectionX = 0;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (_) {}

    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;

    // Cria apenas uma marquinha suave inicial onde tocou (sem revelar nem disparar check)
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(lastX, lastY, 13, 0, Math.PI * 2);
    ctx.fill();

    spawnScratchGoldDust(lastX, lastY);
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!isScratching || state.scratchCompleted) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist < 3) return; // ignora micro-vibrações

    currentStrokeDistance += dist;
    state.scratchTotalDistance += dist;

    // Detecta vai-e-vem (mudança de direção) para contar raspadas contínuas com o dedo no canvas
    const dx = x - lastX;
    const currentDirX = dx > 1.5 ? 1 : dx < -1.5 ? -1 : 0;
    if (currentDirX !== 0) {
      if (lastDirectionX !== 0 && currentDirX !== lastDirectionX && segmentDistanceX >= 35) {
        state.scratchStrokes++;
        segmentDistanceX = 0;
      } else {
        segmentDistanceX += Math.abs(dx);
      }
      lastDirectionX = currentDirX;
    }

    scratchSegment(lastX, lastY, x, y);
    lastX = x;
    lastY = y;

    moveThrottle++;
    if (moveThrottle % 10 === 0) {
      checkScratchPercentage();
    }
  });

  function stopScratching(e) {
    if (!isScratching) return;
    isScratching = false;

    if (e && e.pointerId) {
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }

    // Se o movimento do traço foi de pelo menos 30px, conta como uma raspada legítima
    if (currentStrokeDistance >= 30) {
      state.scratchStrokes++;
    }
    currentStrokeDistance = 0;
    segmentDistanceX = 0;
    lastDirectionX = 0;

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

  return { days, hours, minutes };
}

function startRelationshipCounter(animateCountUp = true) {
  if (relationshipCounterTimer) clearInterval(relationshipCounterTimer);

  const updateValues = (useCountUp = false) => {
    const { days, hours, minutes } = computeRelationshipDuration();

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

/* Corações flutuantes contínuos no capítulo final */
let finaleFloatingHeartsTimer = null;
let activeFinaleHearts = 0;

function spawnFinaleFloatingHeart() {
  if (
    state.reducedMotion ||
    !state.pageVisible ||
    !el.celebrationLayer ||
    !state.dateAccepted ||
    activeFinaleHearts >= 14
  ) {
    return;
  }

  activeFinaleHearts++;
  const item = document.createElement("div");
  item.className = "finale-float-heart";
  const isSparkle = Math.random() < 0.28;
  item.innerHTML = isSparkle
    ? `<svg viewBox="0 0 24 24"><use href="#sparkle" /></svg>`
    : `<svg viewBox="0 0 24 24" style="color: var(--crimson-400)"><use href="#heart" /></svg>`;

  const size = isSparkle ? 14 + Math.random() * 6 : 16 + Math.random() * 10;
  item.style.width = `${size.toFixed(0)}px`;
  item.style.height = `${size.toFixed(0)}px`;
  item.style.left = `${(Math.random() * 88 + 6).toFixed(1)}%`;
  item.style.setProperty("--sway", `${((Math.random() - 0.5) * 64).toFixed(1)}px`);
  item.style.setProperty("--heart-alpha", (0.35 + Math.random() * 0.35).toFixed(2));
  const dur = 5.2 + Math.random() * 2.8;
  item.style.animationDuration = `${dur.toFixed(2)}s`;

  el.celebrationLayer.appendChild(item);
  setTimeout(() => {
    item.remove();
    activeFinaleHearts = Math.max(0, activeFinaleHearts - 1);
  }, dur * 1000 + 120);
}

function startFinaleFloatingHearts() {
  stopFinaleFloatingHearts();
  if (state.reducedMotion || !el.celebrationLayer) return;

  for (let i = 0; i < 5; i++) {
    setTimeout(spawnFinaleFloatingHeart, i * 320);
  }
  finaleFloatingHeartsTimer = setInterval(spawnFinaleFloatingHeart, 780);
}

function stopFinaleFloatingHearts() {
  if (finaleFloatingHeartsTimer) {
    clearInterval(finaleFloatingHeartsTimer);
    finaleFloatingHeartsTimer = null;
  }
}

function setupFinalCouponActions() {
  el.btnAcceptDate.addEventListener("click", () => {
    if (state.dateAccepted) return;
    state.dateAccepted = true;

    soundFX.setStageMood("finale");
    soundFX.playAcceptEncounter();
    navigator.vibrate?.([25, 40, 35]);

    el.btnAcceptDate.classList.remove("pulse-ready");
    el.couponActions.hidden = true;
    el.couponStamp.hidden = false;
    if (el.acaiCouponCard) {
      el.acaiCouponCard.classList.add("coupon-sealed");
    }

    if (!state.reducedMotion) {
      document.body.classList.add("screen-stamp-shake");
      setTimeout(() => document.body.classList.remove("screen-stamp-shake"), 380);
    }

    triggerCelebrationShower(40);
    startFinaleFloatingHearts();

    const showFinalPromiseCard = () => {
      el.finalPromiseCard.hidden = false;
      el.finalPromiseCard.classList.remove("finale-in", "handwriting-active");
      void el.finalPromiseCard.offsetWidth;
      el.finalPromiseCard.classList.add("finale-in", "handwriting-active");

      startRelationshipCounter(true);

      setTimeout(() => {
        const rect = el.finalPromiseCard.getBoundingClientRect();
        const targetY = window.pageYOffset + rect.top - 20;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: state.reducedMotion ? "auto" : "smooth",
        });
      }, 140);
    };

    if (state.reducedMotion || !el.finaleOverlay) {
      showFinalPromiseCard();
      return;
    }

    // Após o impacto do carimbo (~520ms), abre a cortina romântica com o coração desenhado à mão
    setTimeout(() => {
      el.finaleOverlay.hidden = false;
      void el.finaleOverlay.offsetWidth;
      el.finaleOverlay.classList.add("is-active");
    }, 520);

    // Prepara o cartão final por trás da cortina e depois recolhe a cortina suavemente
    setTimeout(() => {
      showFinalPromiseCard();
    }, 2650);

    setTimeout(() => {
      el.finaleOverlay.classList.remove("is-active");
      setTimeout(() => {
        el.finaleOverlay.hidden = true;
      }, 620);
    }, 3150);
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
  const giftTag = el.giftBox ? el.giftBox.querySelector(".box-gift-tag") : null;
  if (window.gsap) {
    window.gsap.killTweensOf([
      el.giftBox,
      giftTag,
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
        el.giftBox,
        giftTag,
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
        ...el.mainBloomingRose.querySelectorAll(".bloom-outer, .bloom-mid, .bloom-core"),
      ].filter(Boolean),
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
  stopFinaleFloatingHearts();
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
  state.scratchStrokes = 0;
  state.scratchTotalDistance = 0;
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

  // Reseta Caixa de Porcelana e Envelope 3D
  resetBox();
  resetEnvelopeElements();

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
  if (el.acaiCouponCard) el.acaiCouponCard.classList.remove("coupon-sealed");
  if (el.btnAcceptDate) {
    el.btnAcceptDate.disabled = true;
    el.btnAcceptDate.classList.remove("pulse-ready");
  }
  el.couponActions.hidden = false;
  el.couponStamp.hidden = true;
  el.finalPromiseCard.hidden = true;
  el.finalPromiseCard.classList.remove("finale-in", "handwriting-active");
  if (el.finaleOverlay) {
    el.finaleOverlay.classList.remove("is-active");
    el.finaleOverlay.hidden = true;
  }
  if (el.celebrationLayer) el.celebrationLayer.innerHTML = "";

  initScratchCanvas();

  setupIntroSplitName();
  goToStep(el.stepIntro);
}

/* ============================================================================
   RELÓGIO DO NOSSO AMOR NA TELA INICIAL (tempo ao vivo + coração interativo)
   ============================================================================ */
const LOVE_TAPS_KEY = "surpresa_isabela_love_taps";

function addMonthsClamped(date, months) {
  const y = date.getFullYear();
  const m = date.getMonth() + months;
  const target = new Date(y, m, 1, date.getHours(), date.getMinutes(), date.getSeconds());
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  target.setDate(Math.min(date.getDate(), lastDay));
  return target;
}

function computeLoveCalendar(now = new Date()) {
  const start = parseStartDate(CONFIG.dataInicioNamoro);
  if (now < start) {
    return { start, months: 0, days: 0, totalMs: 0, lastMark: start, nextMark: addMonthsClamped(start, 1) };
  }
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (addMonthsClamped(start, months) > now) months--;
  const lastMark = addMonthsClamped(start, months);
  const nextMark = addMonthsClamped(start, months + 1);
  const days = Math.floor((now - lastMark) / 86400000);
  return { start, months, days, totalMs: now - start, lastMark, nextMark };
}

function formatLoveHeadline(months, days) {
  const years = Math.floor(months / 12);
  const restMonths = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (restMonths) parts.push(`${restMonths} ${restMonths === 1 ? "mês" : "meses"}`);
  if (days || !parts.length) parts.push(`${days} ${days === 1 ? "dia" : "dias"}`);
  const base = parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(", ")} e ${parts[parts.length - 1]}`;
  return `${base} de muito amor`;
}

function setupGateLoveClock() {
  const root = document.getElementById("love-clock");
  if (!root) return;

  const $ = (id) => document.getElementById(id);
  const sinceEl = $("love-clock-since");
  const headlineEl = $("love-clock-headline");
  const daysEl = $("love-days");
  const hoursEl = $("love-hours");
  const minutesEl = $("love-minutes");
  const secondsEl = $("love-seconds");
  const heartBtn = $("love-heart-btn");
  const heartMsg = $("love-heart-msg");
  const heartCount = $("love-heart-count");
  const noteCardEl = $("love-note-card");
  const noteTextEl = $("love-note-text");
  const noteDotsEl = $("love-note-dots");

  // Nada dentro do relógio abre o envelope (só o próprio envelope/botão abre)
  ["click", "touchend", "keydown", "pointerdown"].forEach((evt) => {
    root.addEventListener(evt, (e) => e.stopPropagation(), { passive: evt !== "keydown" });
  });

  const pad = (n) => String(n).padStart(2, "0");
  const startDate = parseStartDate(CONFIG.dataInicioNamoro);
  if (sinceEl) {
    sinceEl.textContent = `${pad(startDate.getDate())} · ${pad(startDate.getMonth() + 1)} · ${startDate.getFullYear()}`;
  }

  let lastSecond = -1;
  let clockTimer = null;

  function renderClock() {
    if (el.stepGate && el.stepGate.hidden) {
      clearInterval(clockTimer);
      return;
    }
    const now = new Date();
    const cal = computeLoveCalendar(now);
    const totalSec = Math.floor(cal.totalMs / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    if (daysEl) daysEl.textContent = String(d);
    if (hoursEl) hoursEl.textContent = pad(h);
    if (minutesEl) minutesEl.textContent = pad(m);
    if (secondsEl && s !== lastSecond) {
      secondsEl.textContent = pad(s);
      if (!state.reducedMotion) {
        secondsEl.classList.remove("tick");
        void secondsEl.offsetWidth;
        secondsEl.classList.add("tick");
      }
      lastSecond = s;
    }

    if (headlineEl) headlineEl.textContent = formatLoveHeadline(cal.months, cal.days);
  }

  renderClock();
  clockTimer = setInterval(renderClock, 1000);

  // Bilhetinhos de amor fofos com rotação automática suave
  const loveNotes = [
    "“Isabela: Promessa de Deus, dona do sorriso mais lindo e do meu coração inteiro.”",
    "“Você foi a flor branca que Santa Teresinha enviou para abençoar cada um dos meus dias.”",
    "“Se eu pudesse voltar no tempo e escolher de novo, escolheria você todos os dias, em todas as vidas.”",
    "“O meu plano favorito no mundo é qualquer um que termine de mãos dadas com você.”",
    "“Amar você é a coisa mais fácil e mais bonita que meu coração já aprendeu a fazer.”",
    "“Obrigado por ser meu refúgio, minha paz e o amor mais lindo da minha vida.”",
    "“Cada segundo ao seu lado me dá mais certeza: nosso amor é para a eternidade.”",
    "“Sorte a minha que Deus atendeu minhas orações colocando você no meu caminho.”",
    "“Eu não te amo só com palavras, te amo com cada batida do meu coração.”",
    "“Quando estou com você, o mundo inteiro faz silêncio só para eu te admirar.”"
  ];
  let currentNoteIdx = 0;
  let noteAutoTimer = null;

  // Cria indicadores de bolinhas delicadas para cada bilhete
  if (noteDotsEl) {
    noteDotsEl.innerHTML = "";
    loveNotes.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = `love-note-dot${idx === 0 ? " active" : ""}`;
      noteDotsEl.appendChild(dot);
    });
  }

  const updateDots = (activeIndex) => {
    if (!noteDotsEl) return;
    const dots = noteDotsEl.querySelectorAll(".love-note-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  };

  const advanceNote = (interactive = false) => {
    if (!noteTextEl) return;
    noteTextEl.classList.add("swap");
    if (interactive) {
      navigator.vibrate?.(10);
      try {
        const ctx = soundFX.initContext();
        if (ctx) soundFX.playFeltPianoNote(659.25, ctx.currentTime + 0.01, 1.1, 0.05);
      } catch (_) {}
    }
    setTimeout(() => {
      currentNoteIdx = (currentNoteIdx + 1) % loveNotes.length;
      noteTextEl.textContent = loveNotes[currentNoteIdx];
      updateDots(currentNoteIdx);
      noteTextEl.classList.remove("swap");
    }, 240);
  };

  const startNoteRotation = () => {
    if (noteAutoTimer) clearInterval(noteAutoTimer);
    noteAutoTimer = setInterval(() => {
      if (el.stepGate && el.stepGate.hidden) {
        clearInterval(noteAutoTimer);
        return;
      }
      advanceNote(false);
    }, 5400);
  };

  startNoteRotation();

  if (noteCardEl) {
    noteCardEl.addEventListener("click", () => {
      advanceNote(true);
      startNoteRotation(); // reinicia o intervalo após o clique
    });
  }

  // Coração interativo: cada toque é um "te amo" guardado no aparelho
  const messages = [
    "Mais um segundo te amando",
    "Esse coração bate por você",
    "Cada dia ao seu lado é um presente",
    "Sorte que não perguntaram quem ama mais",
    "Bora marcar o nosso encontro com açaí?",
    "Você é a minha resposta do céu",
    "Para sempre seu",
  ];
  const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
  let taps = parseInt(localStorage.getItem(LOVE_TAPS_KEY) || "0", 10) || 0;
  let msgIndex = -1;

  const renderCount = () => {
    if (!heartCount) return;
    heartCount.textContent = taps
      ? `${taps} ${taps === 1 ? "batida de amor" : "batidas de amor"}`
      : "cada toque é um te amo";
  };
  renderCount();

  function spawnFloatingHearts() {
    if (state.reducedMotion || !heartBtn) return;
    const rootRect = root.getBoundingClientRect();
    const btnRect = heartBtn.getBoundingClientRect();
    const cx = btnRect.left - rootRect.left + btnRect.width / 2;
    const cy = btnRect.top - rootRect.top + btnRect.height / 2;
    for (let i = 0; i < 6; i++) {
      const item = document.createElement("span");
      const isGold = i % 3 === 0;
      item.className = `love-float${isGold ? " gold" : ""}`;
      item.innerHTML = `<svg viewBox="0 0 24 24"><use href="${isGold ? "#sparkle" : "#heart"}" /></svg>`;
      item.style.left = `${cx}px`;
      item.style.top = `${cy}px`;
      item.style.setProperty("--fx", `${((Math.random() - 0.5) * 90).toFixed(0)}px`);
      item.style.setProperty("--fy", `${(-60 - Math.random() * 60).toFixed(0)}px`);
      item.style.setProperty("--fr", `${((Math.random() - 0.5) * 50).toFixed(0)}deg`);
      item.style.animationDelay = `${i * 40}ms`;
      root.appendChild(item);
      setTimeout(() => item.remove(), 1500);
    }
  }

  if (heartBtn) {
    heartBtn.addEventListener("click", () => {
      taps++;
      try {
        localStorage.setItem(LOVE_TAPS_KEY, String(taps));
      } catch (_) {}
      renderCount();

      heartBtn.classList.remove("pressed");
      void heartBtn.offsetWidth;
      heartBtn.classList.add("pressed");
      spawnFloatingHearts();
      navigator.vibrate?.(12);

      // Nota suave de piano subindo a escala a cada toque
      try {
        const ctx = soundFX.initContext();
        if (ctx) soundFX.playFeltPianoNote(notes[(taps - 1) % notes.length], ctx.currentTime + 0.01, 1.2, 0.07);
      } catch (_) {}

      if (heartMsg) {
        msgIndex = (msgIndex + 1) % messages.length;
        heartMsg.classList.add("swap");
        setTimeout(() => {
          heartMsg.textContent = messages[msgIndex];
          heartMsg.classList.remove("swap");
        }, 180);
      }
    });
  }
}

function setupGateRotatingMeaning() {
  const pill = document.getElementById("isabela-meaning-pill");
  const phraseEl = document.getElementById("isabela-meaning-phrase");
  if (!phraseEl) return;

  const meanings = [
    "“Promessa de Deus”",
    "“Consagrada ao Senhor”",
    "“A resposta da minha oração”",
    "“Dona do sorriso mais encantador”",
    "“Meu presente mais doce do céu”",
    "“O grande amor da minha vida”",
    "“Minha paz e meu porto seguro”"
  ];

  let currentIdx = 0;
  let timer = null;

  const advance = (interactive = false) => {
    phraseEl.classList.add("swap");
    if (interactive) {
      navigator.vibrate?.(10);
      try {
        const ctx = soundFX.initContext();
        if (ctx) soundFX.playFeltPianoNote(783.99, ctx.currentTime + 0.01, 1.0, 0.05);
      } catch (_) {}
    }
    setTimeout(() => {
      currentIdx = (currentIdx + 1) % meanings.length;
      phraseEl.textContent = meanings[currentIdx];
      phraseEl.classList.remove("swap");
    }, 280);
  };

  const startAuto = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (el.stepGate && el.stepGate.hidden) {
        clearInterval(timer);
        return;
      }
      advance(false);
    }, 4600);
  };

  startAuto();

  if (pill) {
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      advance(true);
      startAuto();
    });
  }
}

/* ============================================================================
   INICIALIZAÇÃO GERAL
   ============================================================================ */
function init() {
  initPersonalization();
  initAmbientParticles();
  setupGateAndAudio();
  setupGateLoveClock();
  setupGateRotatingMeaning();
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
