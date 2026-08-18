// Genera il PDF "I 7 step dell'esperienza museale"
// Uso: node build/make-pdf.js  (richiede puppeteer / Chromium)

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const STEPS = [
  { title: "Ascolto", desc: "Mappa il pubblico e costruisci le personas: dati di visita, ricerche, feedback e comportamenti digitali." },
  { title: "Racconto", desc: "Definisci il concept esperienziale: una narrazione coerente che colleghi collezione, spazi e messaggi." },
  { title: "Immersione", desc: "Progetta l'esperienza interattiva e immersiva: installazioni, tecnologie e percorsi multisensoriali." },
  { title: "Identità", desc: "Valorizza l'unicità del sito: patrimonio, territorio e storia come leve distintive e competitive." },
  { title: "Partecipazione", desc: "Coinvolgi il pubblico: co-creazione, programmi pubblici, community e relazioni che durano nel tempo." },
  { title: "Sostenibilità", desc: "Costruisci l'autonomia finanziaria: fundraising, ticketing, merchandising e partnership strategiche." },
  { title: "Misurazione", desc: "Chiudi il cerchio: KPI, ascolto continuo e iterazione per migliorare di edizione in edizione." },
];

const MODELS = [
  { title: "Il museo esperienziale", desc: "Interattivo e immersivo, progetta la visita come un'esperienza memorabile e multisensoriale." },
  { title: "Il museo partecipativo", desc: "Coinvolge la comunità e trasforma il pubblico in co-autore dell'offerta culturale." },
  { title: "Il museo imprenditoriale", desc: "Costruisce autonomia finanziaria con ricavi diversificati e partnership strategiche." },
  { title: "Il museo identitario", desc: "Valorizza l'unicità del sito e del patrimonio come leva distintiva e competitiva." },
];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: "Inter", -apple-system, sans-serif; color: #1B1721; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { width: 210mm; min-height: 297mm; padding: 22mm 20mm; position: relative; background: #FBF6EF; page-break-after: always; }
  .page.last { page-break-after: auto; }
  .brand { font-size: 13px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 34px; }
  .brand em { font-style: normal; color: #4A2AF0; }
  .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #6F6875; }
  h1 { font-size: 40px; line-height: 1.02; letter-spacing: -0.04em; font-weight: 800; margin: 16px 0 18px; }
  h1 .vio { color: #4A2AF0; }
  .sub { font-size: 13.5px; line-height: 1.65; color: #6F6875; max-width: 150mm; margin-bottom: 30px; }
  .steps { display: flex; flex-direction: column; gap: 11px; }
  .step { display: grid; grid-template-columns: 60px 1fr; gap: 16px; align-items: start; background: #fff; border: 1px solid rgba(27,23,33,0.08); border-radius: 14px; padding: 15px 18px; }
  .step .n { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; color: #4A2AF0; line-height: 1.05; }
  .step h3 { font-size: 15px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 4px; }
  .step p { font-size: 12px; line-height: 1.5; color: #6F6875; }
  .models { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px; }
  .model { background: #fff; border: 1px solid rgba(27,23,33,0.08); border-radius: 12px; padding: 14px 16px; }
  .model .n { font-size: 12px; font-weight: 800; color: #4A2AF0; margin-bottom: 6px; }
  .model h3 { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
  .model p { font-size: 11px; line-height: 1.5; color: #6F6875; }
  .section-title { font-size: 15px; font-weight: 700; letter-spacing: -0.01em; margin: 24px 0 12px; }
  .foot { position: absolute; left: 20mm; right: 20mm; bottom: 16mm; font-size: 10px; color: #948C9A; display: flex; justify-content: space-between; border-top: 1px solid rgba(27,23,33,0.1); padding-top: 10px; }
`;

const stepsHtml = STEPS.map(
  (s, i) =>
    `<div class="step"><div class="n">0${i + 1}</div><div><h3>${s.title}</h3><p>${s.desc}</p></div></div>`
).join("");

const modelsHtml = MODELS.map(
  (m, i) =>
    `<div class="model"><div class="n">Modello 0${i + 1}</div><h3>${m.title}</h3><p>${m.desc}</p></div>`
).join("");

const html = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
<style>${css}</style>
</head>
<body>
  <div class="page">
    <div class="brand">Beatrice <em>Perrone</em></div>
    <div class="eyebrow">Ricerca &middot; IUSVE, Verona &middot; 2023</div>
    <h1>I 7 step<br />dell'esperienza <span class="vio">museale</span></h1>
    <p class="sub">Sintesi operativa della ricerca <em>&ldquo;I musei italiani nel contesto postmoderno: un approccio di marketing esperienziale&rdquo;</em>. Quattro modelli e sette step pronti da applicare, pensati per operatori culturali e management.</p>
    <div class="section-title">I 4 modelli di museo</div>
    <div class="models">${modelsHtml}</div>
    <div class="foot"><span>Beatrice Perrone &middot; beatrice.perrone00@gmail.com</span><span>1 / 2</span></div>
  </div>
  <div class="page last">
    <div class="eyebrow">Sintesi operativa</div>
    <h1 style="font-size:34px;">I 7 step<br />operativi</h1>
    <p class="sub" style="margin-top:18px;">Un percorso in sette passaggi per trasformare la visita in un'esperienza interattiva, immersiva e sostenibile.</p>
    <div class="steps">${stepsHtml}</div>
    <div class="foot"><span>Web Marketing &amp; Digital Communication</span><span>2 / 2</span></div>
  </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const out = path.join(__dirname, "..", "portfolio", "assets", "7-step-esperienza-museale.pdf");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.pdf({ path: out, format: "A4", printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  await browser.close();
  console.log("✓ PDF generato:", out);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});