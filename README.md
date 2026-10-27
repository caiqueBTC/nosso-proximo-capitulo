# Uma Surpresa para Isabela 💌

Experiência romântica, interativa e mobile-first criada para a Isabela.

## ✨ Como personalizar antes de enviar

Toda a configuração personalizada fica concentrada logo no topo do arquivo [`script.js`](./script.js) dentro do bloco `CONFIG`:

1. **Data do início do namoro (`dataInicioNamoro`)**:
   Abra o arquivo [`script.js`](./script.js) e altere a linha:
   ```js
   dataInicioNamoro: "27/09/2026", // Coloque aqui a data real no formato "DD/MM/AAAA"
   ```

2. **Foto do casal na moldura Polaroid (`fotoCasalUrl` e `legendaPolaroid`)**:
   - Basta salvar a foto escolhida na pasta `assets/` com o nome **`foto-casal.jpg`** (enquadramento quadrado ou vertical funciona super bem; o estilo já protege o topo para não cortar os rostos).
   - Enquanto o arquivo `assets/foto-casal.jpg` não for colocado, o site exibe automaticamente a arte ilustrada `assets/foto-casal-placeholder.svg`.

3. **Texto definitivo da Carta (`carta`)**:
   No mesmo bloco `CONFIG` em [`script.js`](./script.js), edite os parágrafos dentro de `carta.paragrafos`:
   ```js
   carta: {
     saudacao: "Para o amor da minha vida,",
     paragrafos: [
       "Seu primeiro parágrafo...",
       "Seu segundo parágrafo..."
     ],
     assinatura: "Com todo o meu amor, Caique. 💌"
   }
   ```

## 📱 Como visualizar no computador ou celular

- Você pode abrir o arquivo [`index.html`](./index.html) diretamente em qualquer navegador.
- Para publicar gratuitamente e enviar um link lindo pelo WhatsApp:
  - **Netlify Drop** (`app.netlify.com/drop`): basta arrastar a pasta `surpresa-isabela` para lá e o link fica pronto na hora.
  - **Vercel** ou **GitHub Pages**: faça upload dos arquivos e compartilhe o link.
