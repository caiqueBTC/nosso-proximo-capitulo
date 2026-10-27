# Uma Surpresa para Isabela 💌

Experiência romântica, interativa e mobile-first criada para a Isabela com o conceito **"Carta Selada à Luz de Velas"** — papelaria de luxo à luz de velas, caixa de porcelana branca com fita de cetim vermelha, lacre de cera, rosas em SVG, trilha sonora com fade-in e raspadinha em folha de ouro.

---

## ⚠️ Checklist antes de enviar para a Isabela

1. **Texto da Página 2 da Carta (`CONFIG.cartaPagina2`)**:
   - No topo de [`script.js`](./script.js), a chave `CONFIG.cartaPagina2.paragrafos` ainda está com **Lorem Ipsum temporário**. Substitua pelos seus parágrafos reais antes de enviar!
2. **Foto do casal na Polaroid (`assets/foto-casal.jpg`)**:
   - Salve a foto escolhida na pasta `assets/` com o nome **`foto-casal.jpg`**.
   - Enquanto `assets/foto-casal.jpg` não existir, o site usa automaticamente a arte reserva `assets/foto-casal-placeholder.svg` (sem carregar imagens duas vezes).
   - **Easter Egg**: ao tocar na foto Polaroid, ela vira em 3D revelando o verso manuscrito com a data do início do namoro (`27/09/2026`).
3. **Música de fundo opcional (`assets/musica.mp3`)**:
   - Caso queira usar uma faixa MP3 específica (ex.: piano solo romântico, caixinha de música + cordas, 60–80 BPM do *Pixabay Music*, *YouTube Audio Library* ou um cover instrumental da música de vocês), exporte em MP3 128kbps (≤ 3 MB) e salve como **`assets/musica.mp3`**.
   - Se `assets/musica.mp3` não estiver na pasta, o site toca automaticamente uma melodia gerada via **Web Audio API** (caixinha de música + pad quente na progressão C–Am–F–G com reverb e fade-in de 2.5s ao romper o lacre da tela de entrada).

---

## ✨ Como personalizar no `CONFIG` (`script.js`)

Toda a configuração editável fica concentrada no topo do arquivo [`script.js`](./script.js) dentro do objeto `CONFIG`:

```js
const CONFIG = {
  // Data oficial do início do namoro (valida a Pergunta 1, verso da Polaroid e o contador ao vivo "Juntos há X dias...")
  dataInicioNamoro: "27/09/2026",

  // Foto do casal e legenda da Polaroid
  fotoCasalUrl: "assets/foto-casal.jpg",
  fotoCasalReserva: "assets/foto-casal-placeholder.svg",
  legendaPolaroid: "O meu lugar favorito no mundo é ao seu lado ❤️",

  // Música de fundo
  musica: {
    arquivo: "assets/musica.mp3",
    volume: 0.32,
    fadeInMs: 2500,
  },

  // Página 1 e Página 2 da Carta
  cartaPagina1: { saudacao: "...", paragrafos: ["..."], assinatura: "..." },
  cartaPagina2: { saudacao: "...", paragrafos: ["..."], assinatura: "..." },

  // Página 3: Homenagem a Santa Teresinha e a Flor Branca
  santaTeresinha: { ... },

  // Elogios, Raspadinha, Cupom de Açaí e Card Final
  elogiosRaspadinha: { ... },
  cupomAcai: { ... },
  agradecimentoFinal: { ... }
};
```

---

## 📦 Otimizações e Assets

- `assets/santa-teresinha-cartoon.webp` (183 KB) é usado na Página 3 da carta (o arquivo antigo `.png` de ~910 KB foi removido para deixar o repositório e o carregamento leves).
- `assets/og-cover.jpg` (1200×630) e `assets/favicon.svg` + `assets/apple-touch-icon.png` garantem que o link tenha um cartão de preview bonito ao compartilhar no WhatsApp.
