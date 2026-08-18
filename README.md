# Portfolio — Beatrice Perrone

Portfolio web di **Beatrice Perrone**: eventi, comunicazione e marketing strategico.

- Homepage tipografica ("Portfolio / Beatrice Perrone") con intro e gallery di **8 progetti**
- Card **quadrate che flippano in hover** mostrando l'abstract, con click verso la pagina dedicata
- Pagina dedicata per ogni progetto (testo, metadati, galleria, crediti foto, prev/next)
- Sezione **Chi sono** (esperienza, formazione, competenze, lingue, certificazioni)
- PDF scaricabile **"I 7 step dell'esperienza museale"** nella pagina della tesi
- CV scaricabile dal footer
- Palette: crema caldo + viola elettrico + accenti (corallo, ambra, rosa) — font **Inter**

## Struttura

```
portfolio/            ← il sito pronto da pubblicare (deploy questa cartella)
  index.html
  progetti/<slug>/index.html
  css/style.css
  js/main.js
  assets/…            (CV, PDF 7 step, favicon)
build/                ← sorgente contenuti + generatori (non serve in produzione)
  data.js             ← TUTTI i testi e i contenuti del sito
  build.js            ← genera le pagine statiche
  make-pdf.js         ← genera il PDF dei 7 step
  qa/audit.js         ← QA automatico con Chromium
.pi/extensions/webqa/ ← estensione pi: screenshot e audit delle pagine
screenshots/          ← anteprime PNG generate durante il QA
```

## Avvio e anteprima

```bash
# dentro la cartella del progetto
npm install            # una sola volta (installa puppeteer/Chromium)

# aprire direttamente (senza server)
open portfolio/index.html

# oppure servire localmente su http://localhost:4173
npm run serve
```

## Modifiche e rigenerazione

Modifica i contenuti in **`build/data.js`**, poi:

```bash
npm run build          # rigenera portfolio/index.html + pagine progetto
node build/make-pdf.js # rigenera il PDF dei 7 step (solo se cambi gli step)
```

## QA automatico

```bash
npm run qa             # serve /portfolio, apre ogni pagina con Chromium
                       # e verifica errori, immagini rotte, overflow, flip in hover
```

Gli screenshot completi vengono salvati in `screenshots/`.

## Estensione pi (per "vedere" il sito dentro pi)

Dopo aver fatto `/reload` in pi, sono disponibili due tool:

- **`screenshot_page`** — apre una pagina e salva uno screenshot in `screenshots/`
  - es. `"fai lo screenshot di /progetti/luoghi-comuni/"`
- **`audit_page`** — report tecnico (console, immagini, overflow)
  - es. `"fai l'audit di /index.html"`

L'estensione usa Puppeteer (Chromium) già installato con `npm install`.

## Note sulle immagini

Le foto provengono da **Wikimedia Commons** e sono citate con autore e licenza
(CC BY / CC BY-SA / Public domain) direttamente nelle didascalie delle pagine.
---

## Versione V2 (`portfolio-v2/`)

Una seconda versione, **senza toccare la prima** (`portfolio/`), con due differenze:

1. **Testi senza trattini lunghi** (nessun `—` o `–`): rimosso dai contenuti e dai titoli.
2. **Gallery "a tutto schermo" in righe da due**, come nel portfolio Wix di riferimento:
   - griglia full-bleed (bordo a bordo), 2 progetti per riga, nessun gap,
   - card in rapporto **4:3** (720×540 su viewport 1440px, esattamente come l'esempio),
   - su schermi piccoli la griglia passa a 1 colonna.

```bash
npm run build:v2     # rigenera portfolio-v2/
npm run serve:v2     # anteprima su http://localhost:4174
npm run qa:v2        # audit automatico della v2
```

I contenuti della v2 vivono in `build/data.v2.js` e il generatore in `build/build-v2.js`.
Gli screenshot della v2 sono in `screenshots-v2/`.

---

## Pubblicazione su GitHub Pages

Il sito pubblicato è la **V2**, copiata in `docs/` (GitHub Pages serve da lì).

1. Push del progetto su `main`.
2. Su GitHub: **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/docs**
   - Save
3. Dopo qualche secondo/minuto il sito è su `https://apoffa.github.io/portfolio-bea/`

Per aggiornare il sito dopo modifiche:

```bash
npm run build:pages     # rigenera portfolio-v2 e sincronizza docs/
git add -A && git commit -m "Update portfolio" && git push
```
