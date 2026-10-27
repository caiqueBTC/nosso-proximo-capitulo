/**
 * ============================================================================
 * CONFIGURAÇÃO PERSONALIZÁVEL — UMA SURPRESA PARA ISABELA 💌
 * ============================================================================
 * Altere facilmente os dados abaixo (data de início do namoro, foto do casal,
 * textos das páginas da carta e agradecimentos) sem mexer no restante do código.
 */
const CONFIG = {
  // 1. DATA DO INÍCIO DO NAMORO (Formato: "DD/MM/AAAA")
  dataInicioNamoro: "27/09/2026",

  // 2. FOTO DO CASAL NA MOLDURA POLAROID
  fotoCasalUrl: "assets/foto-casal.jpg",
  fotoCasalReservaUrl: "assets/foto-casal-placeholder.svg",
  legendaPolaroid: "O meu lugar favorito no mundo é ao seu lado ❤️",

  // 3. PÁGINA 1 DA CARTA (Texto introdutório mantido)
  cartaPagina1: {
    saudacao: "Para o amor da minha vida,",
    paragrafos: [
      "Aqui entrará uma mensagem só nossa. Um texto sobre tudo o que vivemos, sobre o quanto você é importante para mim e sobre como eu ainda quero viver muitos capítulos ao seu lado.",
      "Essa caixinha guarda apenas uma pequena parte de tudo o que eu sinto por você."
    ],
    assinatura: "Com todo o meu amor, Caique. 💌"
  },

  // 4. PÁGINA 2 DA CARTA (Substitua pelo texto que você vai mandar depois!)
  cartaPagina2: {
    saudacao: "Meu amor,",
    paragrafos: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Desde que você chegou, cada detalhe dos meus dias ganhou uma cor diferente, uma paz que eu nunca tinha experimentado antes e uma certeza bonita no coração.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aqui entrará o texto especial que estou preparando para você, contando tudo o que passa no meu peito quando olho para o seu sorriso e penso no nosso futuro juntos.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Que a gente continue escrevendo essa história lado a lado, com todo o carinho do mundo."
    ],
    assinatura: "Para sempre seu, Caique. ❤️"
  },

  // 5. PÁGINA 3 DA CARTA (Santa Teresinha Cartoon + Flor Branca Digital)
  santaTeresinha: {
    imagemUrl: "assets/santa-teresinha-cartoon.png",
    imagemReservaUrl: "assets/santa-teresinha-cartoon.svg",
    titulo: "A flor branca que você pediu a Santa Teresinha 🤍✨",
    paragrafos: [
      "Você me contou que rezou para ela pedindo uma flor branca — sem exigir que fosse rosa ou qualquer outra —, apenas como um sinal no seu coração de que o nosso relacionamento era da vontade de Deus. E logo no comecinho da novena, você já recebeu a sua florzinha! 🥹🤍",
      "A florzinha branca real você já ganhou… então agora toma essa chuva de florzinhas brancas digitais, só para te lembrar todos os dias: o nosso amor é plano de Deus, e você é a resposta mais linda que Ele colocou na minha vida."
    ]
  },

  // 6. PÁGINA DA RASPADINHA (Elogios antes de raspar o Cupom do Açaí)
  elogiosRaspadinha: {
    titulo: "Para a melhor namorada do mundo",
    elogios:
      "Obrigado por ser uma namorada linda, incrível, atenciosa, amorosa, compreensiva, divertida, esperta… 🥰",
    brincadeira:
      "(Vou parar por aqui, pois não caberiam milhões de elogios nem em todo o mundo digital! 😂💘)",
    instrucao:
      "Raspe o cartão dourado abaixo com o dedo para revelar o próximo capítulo:"
  },

  // 7. MENSAGEM FINAL (Agradecimento por tudo após aceitar o encontro)
  agradecimentoFinal: {
    titulo: "Encontro aceito! 💜",
    agradecimento:
      "Obrigado por tudo, meu amor. Obrigado por cada sorriso, pelo seu carinho, pela sua compreensão, pela sua companhia e por fazer dos meus dias os mais felizes desde que começamos a nossa história.",
    promessa:
      "Agora essa caixa digital guarda uma promessa: a nossa caminhada ainda tem muitos momentos bonitos pela frente.",
    declaracao:
      "Eu te amo, Isabela. Hoje, amanhã e em todos os próximos capítulos. ❤️"
  },

  // 8. TRILHA SONORA OPCIONAL
  arquivoMusicaOpcional: ""
};

/* ============================================================================
   ESTADO E ELEMENTOS DA EXPERIÊNCIA
   ============================================================================ */
const state = {
  locksOpened: [false, false, false],
  isUnlockingBox: false,
  acaiCompleted: false,
  currentLetterPage: 1,
  scratchCompleted: false,
  dateAccepted: false,
  audioEnabled: true,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

// Elementos do DOM
const el = {
  ambientParticles: document.getElementById("ambient-particles"),
  celebrationLayer: document.getElementById("celebration-layer"),
  locksProgress: document.getElementById("locks-progress"),
  lockIndicators: [
    document.getElementById("lock-indicator-1"),
    document.getElementById("lock-indicator-2"),
    document.getElementById("lock-indicator-3")
  ],
  lockConnectors: [
    document.getElementById("lock-conn-1"),
    document.getElementById("lock-conn-2")
  ],
  audioToggle: document.getElementById("audio-toggle"),
  audioIcon: document.getElementById("audio-icon"),
  audioText: document.getElementById("audio-text"),

  // Caixa de presente
  giftBoxStage: document.getElementById("gift-box-stage"),
  giftBoxWrapper: document.getElementById("gift-box-wrapper"),
  boxBurstContainer: document.getElementById("box-burst-container"),

  // Etapas (Painéis)
  stepIntro: document.getElementById("step-intro"),
  stepQ1: document.getElementById("step-q1"),
  stepQ2: document.getElementById("step-q2"),
  stepQ3: document.getElementById("step-q3"),
  stepUnlocked: document.getElementById("step-unlocked"),
  stepLetter: document.getElementById("step-letter"),
  stepScratch: document.getElementById("step-scratch"),

  // Controles Etapa 0
  btnStart: document.getElementById("btn-start"),

  // Controles Etapa 1 (Data)
  formQ1: document.getElementById("form-q1"),
  inputDate: document.getElementById("input-date"),
  btnSubmitQ1: document.getElementById("btn-submit-q1"),
  feedbackQ1: document.getElementById("feedback-q1"),

  // Controles Etapa 2 (Santo)
  optionBtnsQ2: document.querySelectorAll("#step-q2 .option-btn"),
  feedbackQ2: document.getElementById("feedback-q2"),

  // Controles Etapa 3 (Identidade)
  formQ3: document.getElementById("form-q3"),
  inputIdentity: document.getElementById("input-identity"),
  btnSubmitQ3: document.getElementById("btn-submit-q3"),
  feedbackQ3: document.getElementById("feedback-q3"),

  // Controles Etapa 4 (Polaroid + Açaí)
  couplePhoto: document.getElementById("couple-photo"),
  polaroidCaption: document.getElementById("polaroid-caption"),
  acaiTrack: document.getElementById("acai-track"),
  acaiFill: document.getElementById("acai-fill"),
  acaiHandle: document.getElementById("acai-handle"),
  acaiTapBtn: document.getElementById("acai-tap-btn"),

  // Controles Etapa 5 (Carta em 3 Páginas)
  loveLetterPaper: document.getElementById("love-letter-paper"),
  letterPageBadge: document.getElementById("letter-page-badge"),
  letterPage1: document.getElementById("letter-page-1"),
  letterPage2: document.getElementById("letter-page-2"),
  letterPage3: document.getElementById("letter-page-3"),
  letterContentP1: document.getElementById("letter-content-p1"),
  letterContentP2: document.getElementById("letter-content-p2"),
  teresinhaImg: document.getElementById("teresinha-img"),
  teresinhaTextBox: document.getElementById("teresinha-text-box"),
  btnToPage2: document.getElementById("btn-to-page-2"),
  curlToPage2: document.getElementById("curl-to-page-2"),
  btnBackPage1: document.getElementById("btn-back-page-1"),
  btnToPage3: document.getElementById("btn-to-page-3"),
  curlToPage3: document.getElementById("curl-to-page-3"),
  btnBackPage2: document.getElementById("btn-back-page-2"),
  btnToScratch: document.getElementById("btn-to-scratch"),

  // Controles Etapa 6 (Elogios + Raspadinha + Cupom + Mensagem Final)
  complimentsHeading: document.getElementById("compliments-heading"),
  complimentsMainText: document.getElementById("compliments-main-text"),
  complimentsJokeText: document.getElementById("compliments-joke-text"),
  scratchInstruction: document.getElementById("scratch-instruction"),
  scratchCardWrapper: document.getElementById("scratch-card-wrapper"),
  digitalCoupon: document.getElementById("digital-coupon"),
  scratchCanvas: document.getElementById("scratch-canvas"),
  btnRevealScratch: document.getElementById("btn-reveal-scratch"),
  couponStamp: document.getElementById("coupon-stamp"),
  couponActions: document.getElementById("coupon-actions"),
  btnAcceptDate: document.getElementById("btn-accept-date"),
  finalPromiseCard: document.getElementById("final-promise-card"),
  finalTitle: document.getElementById("final-title"),
  finalThankyouText: document.getElementById("final-thankyou-text"),
  finalPromiseText: document.getElementById("final-promise-text"),
  finalDeclarationText: document.getElementById("final-declaration-text"),
  btnReadAgain: document.getElementById("btn-read-again"),
  btnRestart: document.getElementById("btn-restart")
};

/* ============================================================================
   SINTETIZADOR DE ÁUDIO SUAVE (CAIXINHA DE MÚSICA OPCIONAL, SEM AUTOPLAY)
   ============================================================================ */
const soundFX = (() => {
  let ctx = null;
  let melodyTimer = null;
  let customAudio = null;

  function ensureContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume();
    }
  }

  function playTone(freq, duration = 0.35, delay = 0, volume = 0.06, type = "sine") {
    if (!state.audioEnabled) return;
    ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  function playSuccess() {
    playTone(523.25, 0.25, 0, 0.07, "triangle");
    playTone(659.25, 0.25, 0.1, 0.07, "triangle");
    playTone(783.99, 0.4, 0.2, 0.08, "triangle");
    playTone(1046.5, 0.55, 0.32, 0.08, "sine");
  }

  function playPageTurn() {
    playTone(587.33, 0.18, 0, 0.045, "sine");
    playTone(783.99, 0.25, 0.08, 0.05, "triangle");
  }

  function playError() {
    playTone(240, 0.18, 0, 0.06, "sawtooth");
    playTone(195, 0.28, 0.14, 0.06, "sawtooth");
  }

  function playBoxUnlock() {
    const notes = [523.25, 587.33, 659.25, 783.99, 987.77, 1046.5];
    notes.forEach((n, idx) => {
      playTone(n, 0.45, idx * 0.12, 0.07, "triangle");
    });
  }

  function startAmbientMelody() {
    if (CONFIG.arquivoMusicaOpcional) {
      if (!customAudio) {
        customAudio = new Audio(CONFIG.arquivoMusicaOpcional);
        customAudio.loop = true;
        customAudio.volume = 0.35;
      }
      customAudio.play().catch(() => {});
      return;
    }

    ensureContext();
    stopAmbientMelody();

    const boxNotes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880.0, 698.46];
    let step = 0;

    melodyTimer = setInterval(() => {
      if (!state.audioEnabled) return;
      playTone(boxNotes[step % boxNotes.length], 0.8, 0, 0.035, "sine");
      step++;
    }, 950);
  }

  function stopAmbientMelody() {
    if (customAudio) {
      customAudio.pause();
    }
    if (melodyTimer) {
      clearInterval(melodyTimer);
      melodyTimer = null;
    }
  }

  return {
    playSuccess,
    playPageTurn,
    playError,
    playBoxUnlock,
    startAmbientMelody,
    stopAmbientMelody
  };
})();

/* ============================================================================
   INICIALIZAÇÃO DE FOTO, CARTA, SANTA TERESINHA E TEXTOS
   ============================================================================ */
function initPersonalization() {
  const params = new URLSearchParams(window.location.search);
  const queryDate = params.get("data");
  if (queryDate) {
    CONFIG.dataInicioNamoro = queryDate;
  }

  if (el.polaroidCaption && CONFIG.legendaPolaroid) {
    el.polaroidCaption.textContent = CONFIG.legendaPolaroid;
  }

  // Foto do casal com fallback
  if (el.couplePhoto && CONFIG.fotoCasalUrl) {
    const testImg = new Image();
    testImg.onload = () => {
      el.couplePhoto.src = CONFIG.fotoCasalUrl;
    };
    testImg.onerror = () => {
      el.couplePhoto.src = CONFIG.fotoCasalReservaUrl;
    };
    testImg.src = CONFIG.fotoCasalUrl;
  }

  // Ilustração de Santa Teresinha com fallback
  if (el.teresinhaImg && CONFIG.santaTeresinha.imagemUrl) {
    const testTeresinha = new Image();
    testTeresinha.onload = () => {
      el.teresinhaImg.src = CONFIG.santaTeresinha.imagemUrl;
    };
    testTeresinha.onerror = () => {
      el.teresinhaImg.src = CONFIG.santaTeresinha.imagemReservaUrl;
    };
    testTeresinha.src = CONFIG.santaTeresinha.imagemUrl;
  }

  // Renderiza as 3 páginas da carta
  renderLetterPageText(el.letterContentP1, CONFIG.cartaPagina1);
  renderLetterPageText(el.letterContentP2, CONFIG.cartaPagina2);
  renderTeresinhaPage();

  // Renderiza os textos dos elogios e do agradecimento final
  if (el.complimentsHeading) {
    el.complimentsHeading.textContent = CONFIG.elogiosRaspadinha.titulo;
  }
  if (el.complimentsMainText) {
    el.complimentsMainText.textContent = CONFIG.elogiosRaspadinha.elogios;
  }
  if (el.complimentsJokeText) {
    el.complimentsJokeText.innerHTML = `<em>${escapeHTML(CONFIG.elogiosRaspadinha.brincadeira)}</em>`;
  }
  if (el.scratchInstruction) {
    el.scratchInstruction.innerHTML = `<strong>${escapeHTML(CONFIG.elogiosRaspadinha.instrucao)}</strong>`;
  }

  if (el.finalTitle) {
    el.finalTitle.textContent = CONFIG.agradecimentoFinal.titulo;
  }
  if (el.finalThankyouText) {
    el.finalThankyouText.textContent = CONFIG.agradecimentoFinal.agradecimento;
  }
  if (el.finalPromiseText) {
    el.finalPromiseText.textContent = CONFIG.agradecimentoFinal.promessa;
  }
  if (el.finalDeclarationText) {
    el.finalDeclarationText.innerHTML = `<strong>${escapeHTML(CONFIG.agradecimentoFinal.declaracao)}</strong>`;
  }
}

function renderLetterPageText(container, pageConfig) {
  if (!container || !pageConfig) return;
  container.innerHTML = "";

  const greetingEl = document.createElement("p");
  greetingEl.className = "letter-paragraph letter-greeting";
  greetingEl.innerHTML = `<strong>${escapeHTML(pageConfig.saudacao)}</strong>`;
  container.appendChild(greetingEl);

  pageConfig.paragrafos.forEach((texto) => {
    const p = document.createElement("p");
    p.className = "letter-paragraph";
    p.textContent = texto;
    container.appendChild(p);
  });

  const signatureEl = document.createElement("p");
  signatureEl.className = "letter-paragraph letter-signature";
  signatureEl.innerHTML = `<strong>${escapeHTML(pageConfig.assinatura)}</strong>`;
  container.appendChild(signatureEl);
}

function renderTeresinhaPage() {
  if (!el.teresinhaTextBox) return;
  const cfg = CONFIG.santaTeresinha;
  let bodyHTML = "";
  if (Array.isArray(cfg.paragrafos)) {
    bodyHTML = cfg.paragrafos.map((p) => `<p class="teresinha-body">${escapeHTML(p)}</p>`).join("");
  } else if (cfg.texto) {
    const parts = cfg.texto.split(/\n\n+/);
    bodyHTML = parts.map((p) => `<p class="teresinha-body">${escapeHTML(p)}</p>`).join("");
  }
  el.teresinhaTextBox.innerHTML = `
    <h3 class="teresinha-title">${escapeHTML(cfg.titulo)}</h3>
    ${bodyHTML}
  `;
}

function initAmbientParticles() {
  if (state.reducedMotion || !el.ambientParticles) return;

  const symbols = ["🌸", "✨", "💮", "✨", "🌹"];
  const count = 9;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "ambient-item";
    span.textContent = symbols[i % symbols.length];
    span.style.left = `${Math.random() * 94 + 3}%`;
    span.style.fontSize = `${Math.random() * 0.45 + 0.75}rem`;
    span.style.animationDuration = `${Math.random() * 10 + 14}s`;
    span.style.animationDelay = `${Math.random() * 12}s`;
    el.ambientParticles.appendChild(span);
  }
}

/* ============================================================================
   UTILITÁRIOS DE TEXTO, ANIMAÇÃO DA CAIXA E NAVEGAÇÃO ENTRE ETAPAS
   ============================================================================ */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function normalizeText(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeDateDigits(str) {
  const parts = (str || "").trim().split(/\D+/).filter(Boolean);
  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = parts[1].padStart(2, "0");
    const year = parts[2].length === 2 ? `20${parts[2]}` : parts[2];
    return `${day}${month}${year}`;
  }
  return (str || "").replace(/\D/g, "");
}

function showStep(stepElement) {
  const allSteps = [
    el.stepIntro,
    el.stepQ1,
    el.stepQ2,
    el.stepQ3,
    el.stepUnlocked,
    el.stepLetter,
    el.stepScratch
  ];

  allSteps.forEach((panel) => {
    if (panel) panel.hidden = panel !== stepElement;
  });
}

function triggerBoxErrorShake() {
  soundFX.playError();
  if (!el.giftBoxWrapper) return;
  el.giftBoxWrapper.classList.remove("shake-error", "bounce-success");
  void el.giftBoxWrapper.offsetWidth;
  el.giftBoxWrapper.classList.add("shake-error");
}

function triggerBoxSuccessBounce() {
  soundFX.playSuccess();
  if (!el.giftBoxWrapper) return;
  el.giftBoxWrapper.classList.remove("shake-error", "bounce-success");
  void el.giftBoxWrapper.offsetWidth;
  el.giftBoxWrapper.classList.add("bounce-success");
}

function unlockProgressIndicator(index) {
  state.locksOpened[index] = true;
  const indicator = el.lockIndicators[index];
  if (indicator) {
    indicator.setAttribute("data-unlocked", "true");
  }

  if (index >= 1 && el.lockConnectors[0]) {
    el.lockConnectors[0].classList.add("active");
  }
  if (index >= 2 && el.lockConnectors[1]) {
    el.lockConnectors[1].classList.add("active");
  }

  const totalUnlocked = state.locksOpened.filter(Boolean).length;
  if (el.locksProgress) {
    el.locksProgress.setAttribute(
      "aria-label",
      `Progresso de desbloqueio: ${totalUnlocked} de 3 cadeados abertos`
    );
  }
}

function spawnBoxParticles(symbols = ["💖", "🌹", "✨", "💘", "🌸"], count = 12) {
  if (state.reducedMotion || !el.boxBurstContainer) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "burst-particle";
    particle.textContent = symbols[i % symbols.length];

    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
    const distance = 65 + Math.random() * 65;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 35;
    const rot = `${Math.round(Math.random() * 80 - 40)}deg`;

    particle.style.setProperty("--tx", `${tx}px`);
    particle.style.setProperty("--ty", `${ty}px`);
    particle.style.setProperty("--rot", rot);

    el.boxBurstContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 1900);
  }
}

/* ============================================================================
   ETAPA 1: QUE DIA COMEÇAMOS A NAMORAR?
   ============================================================================ */
function setupQuestion1() {
  el.inputDate.addEventListener("input", (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    let formatted = digits;
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)} / ${digits.slice(2, 4)} / ${digits.slice(4)}`;
    } else if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    }
    e.target.value = formatted;
  });

  el.formQ1.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.locksOpened[0]) return;

    const typedDigits = normalizeDateDigits(el.inputDate.value);
    const validDates = Array.isArray(CONFIG.dataInicioNamoro)
      ? CONFIG.dataInicioNamoro.map(normalizeDateDigits)
      : [normalizeDateDigits(CONFIG.dataInicioNamoro)];

    const isCorrect = typedDigits.length === 8 && validDates.includes(typedDigits);

    if (isCorrect) {
      unlockProgressIndicator(0);
      triggerBoxSuccessBounce();
      spawnBoxParticles(["💘", "✨", "💖"], 8);

      el.inputDate.disabled = true;
      el.btnSubmitQ1.hidden = true;

      el.feedbackQ1.className = "feedback-box is-success";
      el.feedbackQ1.innerHTML = `
        <p class="feedback-title">Isso mesmo! 🥹💘</p>
        <p class="feedback-text">
          O dia em que a minha vida ficou muito mais bonita. Até o calendário deveria comemorar essa data.
        </p>
        <button type="button" class="btn btn-primary" id="btn-next-q2">
          <span>Próxima pergunta</span>
          <span aria-hidden="true">✨</span>
        </button>
      `;
      el.feedbackQ1.hidden = false;

      const btnNextQ2 = document.getElementById("btn-next-q2");
      btnNextQ2.addEventListener("click", () => {
        showStep(el.stepQ2);
      });
      btnNextQ2.focus();
    } else {
      triggerBoxErrorShake();
      el.feedbackQ1.className = "feedback-box is-error";
      el.feedbackQ1.innerHTML = `
        <p class="feedback-title">Eita! Será que é mesmo a namorada do Caique ou uma invasora??? 👀</p>
        <p class="feedback-text">
          Se não for Isabela, pode ir saindo daqui. Se for… respira e tenta de novo! 😂
        </p>
      `;
      el.feedbackQ1.hidden = false;
    }
  });
}

/* ============================================================================
   ETAPA 2: A QUAL SANTO PEDIMOS INTERCESSÃO PARA NAMORAR?
   ============================================================================ */
function setupQuestion2() {
  el.optionBtnsQ2.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.locksOpened[1]) return;

      const choice = btn.getAttribute("data-option");

      el.optionBtnsQ2.forEach((b) => {
        b.classList.remove("selected-wrong", "selected-correct");
      });

      if (choice === "c") {
        btn.classList.add("selected-correct");
        unlockProgressIndicator(1);
        triggerBoxSuccessBounce();
        spawnBoxParticles(["🌹", "✨", "🌹", "💖"], 10);

        el.optionBtnsQ2.forEach((b) => {
          b.disabled = true;
        });

        el.feedbackQ2.className = "feedback-box is-success";
        el.feedbackQ2.innerHTML = `
          <p class="feedback-title">Santa Teresinha aprovou essa resposta! 🌹</p>
          <p class="feedback-text">
            Uma rosa para você, outro cadeado aberto e mais uma prova de que essa caixa escolheu a pessoa certa.
          </p>
          <button type="button" class="btn btn-primary" id="btn-next-q3">
            <span>Ir para a última pergunta</span>
            <span aria-hidden="true">🌹</span>
          </button>
        `;
        el.feedbackQ2.hidden = false;

        const btnNextQ3 = document.getElementById("btn-next-q3");
        btnNextQ3.addEventListener("click", () => {
          showStep(el.stepQ3);
          setTimeout(() => el.inputIdentity.focus(), 80);
        });
        btnNextQ3.focus();
      } else if (choice === "b") {
        btn.classList.add("selected-wrong");
        triggerBoxErrorShake();

        el.feedbackQ2.className = "feedback-box is-error";
        el.feedbackQ2.innerHTML = `
          <p class="feedback-title">VAMOS, TRICOLOOOR! 🔴⚪⚫</p>
          <p class="feedback-text">
            Mas infelizmente esse gol foi anulado pelo VAR. Tenta outra vez! 😂
          </p>
        `;
        el.feedbackQ2.hidden = false;
      } else if (choice === "d") {
        btn.classList.add("selected-wrong");
        triggerBoxErrorShake();

        el.feedbackQ2.className = "feedback-box is-error";
        el.feedbackQ2.innerHTML = `
          <p class="feedback-title">São Domingos quase mandou você rezar um Rosário inteiro! 😂📿🐶</p>
          <p class="feedback-text">
            O fundador dos Dominicanos nos deu o Santo Rosário e pregou com o coração em chamas, mas para o nosso namoro a intercessora foi outra! Dica: a resposta certa costuma vir acompanhada de rosas. 🌹
          </p>
        `;
        el.feedbackQ2.hidden = false;
      } else {
        btn.classList.add("selected-wrong");
        triggerBoxErrorShake();

        el.feedbackQ2.className = "feedback-box is-error";
        el.feedbackQ2.innerHTML = `
          <p class="feedback-title">Hmm… a intercessão foi forte, mas essa memória está precisando de uma novena! 😂</p>
          <p class="feedback-text">
            Dica: a resposta certa costuma vir acompanhada de rosas.
          </p>
        `;
        el.feedbackQ2.hidden = false;
      }
    });
  });
}

/* ============================================================================
   ETAPA 3: QUEM É VOCÊ? (IDENTIDADE SECRETA)
   ============================================================================ */
function completeQuestion3(feedbackHTML) {
  unlockProgressIndicator(2);
  triggerBoxSuccessBounce();
  spawnBoxParticles(["💘", "✨", "💖", "🌹"], 10);

  el.inputIdentity.disabled = true;
  el.btnSubmitQ3.hidden = true;

  el.feedbackQ3.className = "feedback-box is-success";
  el.feedbackQ3.innerHTML = `
    ${feedbackHTML}
    <button type="button" class="btn btn-primary" id="btn-unlock-box">
      <span>Abrir a caixa misteriosa</span>
      <span aria-hidden="true">🔓✨</span>
    </button>
  `;
  el.feedbackQ3.hidden = false;

  const btnUnlock = document.getElementById("btn-unlock-box");
  btnUnlock.addEventListener("click", () => {
    runBoxUnlockSequence();
  });
  btnUnlock.focus();
}

function setupQuestion3() {
  el.formQ3.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.locksOpened[2]) return;

    const rawValue = el.inputIdentity.value;
    const normalized = normalizeText(rawValue);

    if (!normalized) {
      triggerBoxErrorShake();
      el.inputIdentity.focus();
      return;
    }

    const startsWithIsa = /^isa(bela)?\b/.test(normalized);
    const containsAmor = normalized.includes("amor");

    if (containsAmor) {
      completeQuestion3(`
        <p class="feedback-title">Exatamente! Agora sim você falou o seu nome completo. 💘</p>
      `);
    } else if (startsWithIsa) {
      completeQuestion3(`
        <p class="feedback-title">QUASEEE! 😌</p>
        <p class="feedback-text">
          O correto é: <strong>AMOR DA VIDA DO CAIQUE.</strong><br/>
          Mas como você chegou muito perto, vou aceitar.
        </p>
      `);
    } else {
      triggerBoxErrorShake();

      el.feedbackQ3.className = "feedback-box is-error";
      el.feedbackQ3.innerHTML = `
        <p class="feedback-title">Essa resposta levantou suspeitas… 👀</p>
        <p class="feedback-text">
          Você é o amor da vida do Caique ou a Isa Ivo do multiverso?
        </p>
        <div class="choice-buttons-stack">
          <button type="button" class="btn btn-primary" id="btn-choice-amor">
            <span>Sou o amor da vida do Caique 💘</span>
          </button>
          <button type="button" class="btn btn-secondary-choice" id="btn-choice-invasora">
            <span>Sou só uma invasora curiosa 👀</span>
          </button>
        </div>
      `;
      el.feedbackQ3.hidden = false;

      const btnAmor = document.getElementById("btn-choice-amor");
      const btnInvasora = document.getElementById("btn-choice-invasora");

      btnAmor.addEventListener("click", () => {
        completeQuestion3(`
          <p class="feedback-title">Exatamente! Agora sim você falou o seu nome completo. 💘</p>
        `);
      });

      btnInvasora.addEventListener("click", () => {
        triggerBoxErrorShake();
        el.feedbackQ3.className = "feedback-box is-error";
        el.feedbackQ3.innerHTML = `
          <p class="feedback-title">Sabia! A segurança dessa caixa é quase intransponível. 😂</p>
          <p class="feedback-text">
            Mas, como você parece promissora, vou dar mais uma chance. 😂
          </p>
        `;
        el.inputIdentity.value = "";
        el.inputIdentity.focus();
      });
    }
  });
}

/* ============================================================================
   ETAPA 4: ANIMAÇÃO DE DESBLOQUEIO DA CAIXA + POLAROID + INTERAÇÃO DO AÇAÍ
   ============================================================================ */
function runBoxUnlockSequence() {
  if (state.isUnlockingBox) return;
  state.isUnlockingBox = true;

  el.stepQ3.hidden = true;
  soundFX.playBoxUnlock();

  if (state.reducedMotion) {
    el.giftBoxStage.classList.add(
      "glow-intense",
      "unlock-shackle",
      "unlock-padlock-gone",
      "unlock-ribbons",
      "unlock-lid-open",
      "compact"
    );
    showStep(el.stepUnlocked);
    return;
  }

  el.giftBoxStage.classList.add("glow-intense", "unlock-shackle");

  setTimeout(() => {
    el.giftBoxStage.classList.add("unlock-padlock-gone");
  }, 450);

  setTimeout(() => {
    el.giftBoxStage.classList.add("unlock-ribbons");
  }, 900);

  setTimeout(() => {
    el.giftBoxStage.classList.add("unlock-lid-open");
    spawnBoxParticles(["💖", "🌹", "✨", "💘", "🌸", "💛"], 18);
  }, 1350);

  setTimeout(() => {
    el.giftBoxStage.classList.add("compact");
    showStep(el.stepUnlocked);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 2200);
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

    el.acaiHandle.style.transition = "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)";
    el.acaiFill.style.transition = "width 0.42s cubic-bezier(0.22, 1, 0.36, 1)";
    updateSliderVisual(1);

    soundFX.playSuccess();
    spawnBoxParticles(["🥣", "💜", "💌", "✨"], 10);

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

  el.acaiTrack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      completeAcaiInteraction();
    }
  });
}

/* ============================================================================
   ETAPA 5: CARTA EM 3 PÁGINAS COM EFEITO DE VIRAR A PÁGINA
   ============================================================================ */
function openLetterStage() {
  el.giftBoxStage.hidden = true;
  showStep(el.stepLetter);
  goToLetterPage(1, "next");
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    }, 140 + idx * 320);
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
    pageEl.classList.remove("flip-in-next", "flip-in-prev");

    if (isTarget && !state.reducedMotion) {
      void pageEl.offsetWidth;
      pageEl.classList.add(direction === "prev" ? "flip-in-prev" : "flip-in-next");
    }
  });

  if (pageNumber === 1) {
    stopContinuousWhiteFlowers();
    revealParagraphsInContainer(el.letterContentP1);
  } else if (pageNumber === 2) {
    stopContinuousWhiteFlowers();
    revealParagraphsInContainer(el.letterContentP2);
  } else if (pageNumber === 3) {
    // Na página da Santa Teresinha, continua caindo flores brancas de forma suave
    startContinuousWhiteFlowers();
  }

  el.loveLetterPaper.scrollIntoView({ behavior: "smooth", block: "start" });
}

let whiteFlowersTimer = null;

function spawnSingleWhiteFlower() {
  if (state.reducedMotion || !el.celebrationLayer || state.currentLetterPage !== 3) return;

  const whiteFlowers = ["🤍", "🌼", "❀", "❁", "✨", "🤍", "🌸"];
  const petal = document.createElement("span");
  petal.className = "white-flower-petal";
  petal.textContent = whiteFlowers[Math.floor(Math.random() * whiteFlowers.length)];
  petal.style.left = `${Math.random() * 92 + 4}%`;
  petal.style.fontSize = `${Math.random() * 0.55 + 1.05}rem`;
  petal.style.animationDuration = `${Math.random() * 2.4 + 3.4}s`;

  el.celebrationLayer.appendChild(petal);
  setTimeout(() => petal.remove(), 6000);
}

function startContinuousWhiteFlowers() {
  stopContinuousWhiteFlowers();
  if (state.reducedMotion || !el.celebrationLayer) return;

  // Spawna uma salva inicial de flores brancas suaves
  for (let i = 0; i < 7; i++) {
    setTimeout(spawnSingleWhiteFlower, i * 200);
  }

  // Continua caindo flores brancas de forma suave até ela mudar de página
  whiteFlowersTimer = setInterval(spawnSingleWhiteFlower, 480);
}

function stopContinuousWhiteFlowers() {
  if (whiteFlowersTimer) {
    clearInterval(whiteFlowersTimer);
    whiteFlowersTimer = null;
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
}

/* ============================================================================
   ETAPA 6: PÁGINA DOS ELOGIOS + RASPADINHA DO CUPOM DO AÇAÍ
   ============================================================================ */
function openScratchStage() {
  stopContinuousWhiteFlowers();
  showStep(el.stepScratch);
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Aguarda a renderização do layout para dimensionar o canvas sobre o cupom
  requestAnimationFrame(() => {
    initScratchCanvas();
  });
}

function initScratchCanvas() {
  const canvas = el.scratchCanvas;
  const wrapper = el.scratchCardWrapper;
  if (!canvas || !wrapper || state.scratchCompleted) return;

  const rect = wrapper.getBoundingClientRect();
  const width = Math.max(260, Math.round(rect.width));
  const height = Math.max(240, Math.round(rect.height));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  // Película Dourada & Rosé Metálica
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#f7e39c");
  grad.addColorStop(0.32, "#d4af37");
  grad.addColorStop(0.68, "#e6b8c7");
  grad.addColorStop(1, "#b88917");

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Moldura interna tracejada elegante na raspadinha
  ctx.strokeStyle = "rgba(59, 13, 30, 0.35)";
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 5]);
  ctx.strokeRect(12, 12, width - 24, height - 24);
  ctx.setLineDash([]);

  // Brilhos decorativos sutis na película
  ctx.fillStyle = "rgba(255, 252, 245, 0.45)";
  for (let i = 0; i < 24; i++) {
    const sx = (i * 47 + 23) % (width - 24) + 12;
    const sy = (i * 61 + 19) % (height - 24) + 12;
    ctx.beginPath();
    ctx.arc(sx, sy, (i % 3) + 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Texto central de instrução da raspadinha
  ctx.fillStyle = "#2b0714";
  ctx.font = "700 18px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("✨ RASPE AQUI COM O DEDO ✨", width / 2, height / 2 - 14);

  ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#471025";
  ctx.fillText("Descubra o nosso próximo capítulo 💜", width / 2, height / 2 + 16);
}

function completeScratchReveal() {
  if (state.scratchCompleted) return;
  state.scratchCompleted = true;

  el.scratchCanvas.classList.add("scratched-complete");
  if (el.btnRevealScratch) el.btnRevealScratch.hidden = true;
  if (el.btnAcceptDate) el.btnAcceptDate.disabled = false;

  soundFX.playSuccess();
  triggerHeartShower(["💜", "🥣", "✨", "💘", "💖"], 16);
}

function setupScratchCard() {
  const canvas = el.scratchCanvas;
  if (!canvas) return;

  let isScratching = false;
  let moveCounter = 0;

  function scratchAtPoint(clientX, clientY) {
    if (state.scratchCompleted) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    moveCounter++;
    if (moveCounter % 7 === 0) {
      checkScratchPercentage();
    }
  }

  function checkScratchPercentage() {
    if (state.scratchCompleted) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    if (!width || !height) return;

    const imgData = ctx.getImageData(0, 0, width, height).data;
    let transparentPixels = 0;
    const stride = 32; // Amostragem leve para performance no celular
    let totalSampled = 0;

    for (let i = 3; i < imgData.length; i += 4 * stride) {
      totalSampled++;
      if (imgData[i] < 128) {
        transparentPixels++;
      }
    }

    const ratio = transparentPixels / Math.max(1, totalSampled);
    if (ratio >= 0.42) {
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

  window.addEventListener("resize", () => {
    if (!el.stepScratch.hidden && !state.scratchCompleted) {
      initScratchCanvas();
    }
  });
}

/* ============================================================================
   ACEITAÇÃO DO CUPOM E MENSAGEM FINAL DE AGRADECIMENTO
   ============================================================================ */
function triggerHeartShower(hearts = ["💘", "❤️", "💖", "💜", "🌹", "✨"], total = 26) {
  if (state.reducedMotion || !el.celebrationLayer) return;

  for (let i = 0; i < total; i++) {
    const heart = document.createElement("span");
    heart.className = "celebration-heart";
    heart.textContent = hearts[i % hearts.length];
    heart.style.left = `${Math.random() * 94 + 2}%`;
    heart.style.fontSize = `${Math.random() * 0.7 + 1.15}rem`;
    heart.style.animationDuration = `${Math.random() * 1.8 + 2.4}s`;
    heart.style.animationDelay = `${Math.random() * 0.9}s`;

    el.celebrationLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 4500);
  }
}

function setupFinalCouponActions() {
  el.btnAcceptDate.addEventListener("click", () => {
    if (state.dateAccepted) return;
    state.dateAccepted = true;

    soundFX.playBoxUnlock();
    triggerHeartShower();

    el.couponActions.hidden = true;
    el.couponStamp.hidden = false;
    el.finalPromiseCard.hidden = false;

    setTimeout(() => {
      el.finalPromiseCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
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
   REINICIAR A EXPERIÊNCIA ("VOLTAR AO COMEÇO")
   ============================================================================ */
function resetExperience() {
  stopContinuousWhiteFlowers();
  state.locksOpened = [false, false, false];
  state.isUnlockingBox = false;
  state.acaiCompleted = false;
  state.currentLetterPage = 1;
  state.scratchCompleted = false;
  state.dateAccepted = false;

  el.lockIndicators.forEach((ind) => ind.setAttribute("data-unlocked", "false"));
  el.lockConnectors.forEach((conn) => conn.classList.remove("active"));
  el.locksProgress.setAttribute(
    "aria-label",
    "Progresso de desbloqueio: 0 de 3 cadeados abertos"
  );

  el.giftBoxStage.hidden = false;
  el.giftBoxStage.className = "gift-box-stage";
  el.giftBoxWrapper.className = "gift-box-wrapper";

  el.inputDate.disabled = false;
  el.inputDate.value = "";
  el.btnSubmitQ1.hidden = false;
  el.feedbackQ1.hidden = true;
  el.feedbackQ1.innerHTML = "";

  el.optionBtnsQ2.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("selected-correct", "selected-wrong");
  });
  el.feedbackQ2.hidden = true;
  el.feedbackQ2.innerHTML = "";

  el.inputIdentity.disabled = false;
  el.inputIdentity.value = "";
  el.btnSubmitQ3.hidden = false;
  el.feedbackQ3.hidden = true;
  el.feedbackQ3.innerHTML = "";

  el.acaiHandle.style.transition = "none";
  el.acaiFill.style.transition = "none";
  el.acaiHandle.style.transform = "translateX(0px)";
  el.acaiFill.style.width = "28px";
  el.acaiTrack.setAttribute("aria-valuenow", "0");

  // Reseta Raspadinha e Cupom
  el.scratchCanvas.classList.remove("scratched-complete");
  if (el.btnRevealScratch) el.btnRevealScratch.hidden = false;
  el.btnAcceptDate.disabled = true;
  el.couponActions.hidden = false;
  el.couponStamp.hidden = true;
  el.finalPromiseCard.hidden = true;

  showStep(el.stepIntro);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================================
   CONTROLE DE SOM E INÍCIO DA EXPERIÊNCIA
   ============================================================================ */
function setupAudioControl() {
  // Som ativado por padrão
  el.audioToggle.setAttribute("aria-pressed", "true");
  el.audioIcon.textContent = "🎵";
  el.audioText.textContent = "Música";
  el.audioToggle.setAttribute("aria-label", "Silenciar trilha sonora");

  // Tenta iniciar a melodia imediatamente
  soundFX.startAmbientMelody();

  // Tratamento para políticas de autoplay mobile: garante início no primeiro toque/clique
  const resumeOnFirstTouch = () => {
    if (state.audioEnabled) {
      soundFX.startAmbientMelody();
    }
  };

  window.addEventListener("pointerdown", resumeOnFirstTouch, { once: true, passive: true });
  window.addEventListener("touchstart", resumeOnFirstTouch, { once: true, passive: true });
  window.addEventListener("click", resumeOnFirstTouch, { once: true, passive: true });
  window.addEventListener("keydown", resumeOnFirstTouch, { once: true, passive: true });

  el.audioToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    state.audioEnabled = !state.audioEnabled;
    el.audioToggle.setAttribute("aria-pressed", String(state.audioEnabled));

    if (state.audioEnabled) {
      el.audioIcon.textContent = "🎵";
      el.audioText.textContent = "Música";
      el.audioToggle.setAttribute("aria-label", "Silenciar trilha sonora");
      soundFX.startAmbientMelody();
      soundFX.playSuccess();
    } else {
      el.audioIcon.textContent = "🔇";
      el.audioText.textContent = "Som";
      el.audioToggle.setAttribute("aria-label", "Ativar trilha sonora suave");
      soundFX.stopAmbientMelody();
    }
  });
}

function init() {
  initPersonalization();
  initAmbientParticles();
  setupAudioControl();

  el.btnStart.addEventListener("click", () => {
    triggerBoxSuccessBounce();
    showStep(el.stepQ1);
    setTimeout(() => el.inputDate.focus(), 80);
  });

  setupQuestion1();
  setupQuestion2();
  setupQuestion3();
  setupAcaiSlider();
  setupLetterPagination();
  setupScratchCard();
  setupFinalCouponActions();
}

document.addEventListener("DOMContentLoaded", init);
