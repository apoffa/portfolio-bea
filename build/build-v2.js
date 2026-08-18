// ============================================================
// BUILD V2 — genera il sito statico in /portfolio-v2
// Variante: gallery a tutto schermo, 2 progetti per riga (riferimento Wix)
// e testi senza trattini lunghi. Non modifica la v1 in /portfolio.
// Rilancia con: node build/build-v2.js
// ============================================================

const fs = require("fs");
const path = require("path");
const { SITE, PROJECTS, ABOUT } = require("./data.v2");

const root = path.join(__dirname, "..", "portfolio-v2");

// ---------- icone ----------
const ICONS = {
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowUpRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  arrowLeft:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
};

// ---------- layout condiviso ----------
function head(title, desc, base) {
  return `  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/svg+xml" href="${base}assets/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${base}css/style.css" />`;
}

function nav(base, active) {
  const links = [
    { href: `${base}index.html#lavori`, label: "Lavori", id: "lavori" },
    { href: `${base}index.html#chi-sono`, label: "Chi sono", id: "chi-sono" },
    { href: `${base}index.html#contatti`, label: "Contatti", id: "contatti" },
  ];
  return `<div class="nav">
  <div class="container nav-inner">
    <a class="brand" href="${base}index.html">Beatrice&nbsp;<em>Perrone</em></a>
    <nav class="nav-links" aria-label="Navigazione principale">
      ${links
        .map(
          (l) =>
            `<a href="${l.href}"${active === l.id ? ' aria-current="page"' : ""}>${l.label}</a>`
        )
        .join("\n      ")}
    </nav>
    <button class="nav-toggle" aria-label="Apri il menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</div>`;
}

function footer(base) {
  return `<footer class="footer" id="contatti">
  <div class="container">
    <div class="footer-cta reveal">
      <p class="eyebrow">Contatti</p>
      <a class="footer-cta-link" href="mailto:${SITE.email}">
        <span class="footer-cta-word">Parliamone<span style="color:var(--violet);">.</span></span>
        <span class="footer-cta-arrow">${ICONS.arrowUpRight}</span>
      </a>
      <p class="lead">Hai un evento da organizzare, una mostra da raccontare o una storia da far vivere al tuo pubblico?</p>
      <a class="footer-email" href="mailto:${SITE.email}">${SITE.email}</a>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2025</span> Beatrice Perrone · ${SITE.location}</span>
      <span><a href="${base}${SITE.cv}" target="_blank" rel="noopener">Scarica il CV</a> &middot; Immagini: Wikimedia Commons</span>
    </div>
  </div>
</footer>`;
}

// ---------- tile (gallery) ----------
function tile(p) {
  return `<a class="tile reveal" href="progetti/${p.slug}/index.html" aria-label="${p.title} · ${p.category}" style="--accent:${p.accent};--accent-text:${p.accentText};">
  <span class="tile-inner">
    <span class="tile-face tile-front">
      <img src="${p.hero.src}" alt="${p.hero.alt}" loading="lazy" width="640" height="640" />
      <span class="tile-front-label">
        <span class="cat">${p.category}</span>
        <span class="title">${p.title}</span>
      </span>
    </span>
    <span class="tile-face tile-back">
      <span class="tile-back-top">
        <span class="tile-num">${p.num}</span>
        <span class="tile-arrow">${ICONS.arrowUpRight}</span>
      </span>
      <span class="tile-back-body">
        <span class="title">${p.title}</span>
        <span class="abstract">${p.abstract}</span>
      </span>
      <span class="tile-back-cta">Apri progetto ${ICONS.arrowRight}</span>
    </span>
  </span>
</a>`;
}

// ---------- about ----------
function aboutSection() {
  const exp = ABOUT.experience
    .map(
      (e) =>
        `<li><span>${e.role}<span class="org"> · ${e.org}</span></span><span class="when">${e.period}</span></li>`
    )
    .join("\n      ");

  const edu = ABOUT.education
    .map(
      (e) =>
        `<li><span>${e.title}<span class="org"> · ${e.org}</span></span><span class="when">${e.period}</span></li>`
    )
    .join("\n      ");

  const lang = ABOUT.languages
    .map(
      (l) =>
        `<li><span>${l.lang}</span><span class="when">${l.level}</span></li>`
    )
    .join("\n      ");

  const certs = ABOUT.certifications.map((c) => `<li>${c}</li>`).join("\n      ");

  return `<section class="about" id="chi-sono">
  <div class="container section">
    <div class="about-grid">
      <div class="about-sticky reveal">
        <p class="eyebrow">Chi sono</p>
        <h2 class="section-title">Eventi, comunicazione<br />e marketing strategico<span style="color:var(--violet);">.</span></h2>
        <p class="lead">${SITE.tagline}</p>
      </div>
      <div class="about-body reveal">
        <div>${ABOUT.bio.join("\n        ")}</div>
        <div class="about-col">
          <div class="about-block">
            <h3>Esperienza</h3>
            <ul>${exp}</ul>
          </div>
          <div class="about-block">
            <h3>Formazione</h3>
            <ul>${edu}</ul>
          </div>
        </div>
        <div class="about-col">
          <div class="about-block">
            <h3>Competenze</h3>
            <div class="skill-tags">
              ${ABOUT.skills.map((s) => `<span>${s}</span>`).join("\n              ")}
            </div>
          </div>
          <div class="about-block">
            <h3>Lingue</h3>
            <ul>${lang}</ul>
          </div>
        </div>
        <div class="about-block">
          <h3>Certificazioni</h3>
          <ul>${certs}</ul>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ---------- hero ----------
function hero() {
  return `<header class="hero" id="top">
  <div class="container hero-inner">
    <h1 class="hero-title reveal">Piacere,<br /><span class="accent-violet">Beatrice.</span></h1>
    <p class="lead reveal" data-delay="1">${SITE.intro}</p>
  </div>
</header>`;
}

// ---------- index ----------
function indexPage() {
  const base = "";
  const body = `${nav(base)}
${hero()}
<main>
  <section class="works" id="lavori">
    <div class="container">
      <div class="section-head reveal">
        <div>
          <p class="eyebrow">Lavori</p>
          <h2 class="section-title">Progetti scelti<span style="color:var(--violet);">.</span></h2>
        </div>
      </div>
    </div>
    <div class="works-grid">
      ${PROJECTS.map((p, i) =>
        tile(p).replace('class="tile reveal"', `class="tile reveal" data-delay="${(i % 2) + 1}"`)
      ).join("\n      ")}
    </div>
  </section>
  ${aboutSection()}
</main>
${footer(base)}`;

  return `<!DOCTYPE html>
<html lang="it">
<head>
${head(`${SITE.name} · Eventi, comunicazione & marketing`, `${SITE.intro}`, base)}
</head>
<body>
${body}
<script src="js/main.js"></script>
</body>
</html>`;
}

// ---------- pagina progetto ----------
function projActions(p) {
  const items = p.actions.map((a) => `<li>${a}</li>`).join("\n        ");
  return `<div class="proj-actions">
  <h3>Cosa ho fatto</h3>
  <ul>${items}</ul>
</div>`;
}

function projResults(p) {
  return `<div class="proj-results">
  <h3>Risultati</h3>
  ${p.results.map((r) => `<p>${r}</p>`).join("\n  ")}
</div>`;
}

function projModels(p) {
  return `<div class="models">
  ${p.models
    .map(
      (m) =>
        `<div class="model"><span class="n">${m.n}</span><h5>${m.name}</h5><p>${m.desc}</p></div>`
    )
    .join("\n  ")}
</div>`;
}

function projDownload(p, assetBase) {
  return `<div class="download-box">
  <div class="txt">
    <h4>I 7 step dell'esperienza museale</h4>
    <p>La sintesi operativa della ricerca: modelli e step pronti da applicare per operatori culturali e management.</p>
  </div>
  <a class="btn btn-primary" href="${assetBase}7-step-esperienza-museale.pdf" target="_blank" rel="noopener">${ICONS.arrowUpRight} ${p.downloadLabel}</a>
</div>`;
}

function projectPage(p, prev, next) {
  const base = "../../";
  const assetBase = "../../assets/";
  const meta = [
    { k: "Ruolo", v: p.role },
    { k: "Cliente", v: p.client },
    { k: "Anno", v: p.year },
    { k: "Luogo", v: p.place },
  ];

  const gallery = p.gallery
    .map(
      (g) =>
        `<figure class="g-item"><img src="${g.src}" alt="${g.alt}" loading="lazy" /><figcaption class="credit">${g.credit}</figcaption></figure>`
    )
    .join("\n      ");

  const body = `  <p class="back-link reveal"><a href="${base}index.html#lavori">${ICONS.arrowLeft} Tutti i lavori</a></p>
  <p class="eyebrow proj-kicker reveal">${p.category}</p>
  <h1 class="proj-title reveal" data-delay="1">${p.title}</h1>
  <p class="proj-subtitle reveal" data-delay="2">${p.subtitle}</p>
</header>
<main class="proj" style="--accent:${p.accent};--accent-text:${p.accentText};">
  <div class="container">
    <figure class="proj-hero reveal">
      <img src="${p.hero.src}" alt="${p.hero.alt}" />
      <figcaption class="credit">${p.hero.credit}</figcaption>
    </figure>

    <div class="proj-meta reveal">
      ${meta
        .map(
          (m) =>
            `<div class="meta-cell"><div class="k">${m.k}</div><div class="v">${m.v}</div></div>`
        )
        .join("\n      ")}
    </div>

    <section class="proj-body">
      <div class="side-label reveal">
        <h2>Il progetto</h2>
        <p>${p.abstract}</p>
      </div>
      <div class="prose reveal">
        ${p.body.join("\n        ")}
        ${p.models ? projModels(p) : ""}
        ${p.actions ? projActions(p) : ""}
        ${p.results ? projResults(p) : ""}
        ${p.downloadLabel ? projDownload(p, assetBase) : ""}
      </div>
    </section>

    <section class="proj-gallery">
      <p class="label reveal">Galleria</p>
      <div class="gallery-grid count-${p.gallery.length} reveal">
        ${gallery}
      </div>
    </section>
  </div>

  <div class="container">
    <nav class="proj-nav">
      <a class="prev" href="../${prev.slug}/index.html">
        <span class="dir">← Precedente</span>
        <span class="t">${prev.title}</span>
      </a>
      <a class="next" href="../${next.slug}/index.html">
        <span class="dir">Successivo →</span>
        <span class="t">${next.title}</span>
      </a>
    </nav>
  </div>
</main>`;

  return `<!DOCTYPE html>
<html lang="it">
<head>
${head(`${p.title} · ${p.category} | Beatrice Perrone`, p.abstract, base)}
</head>
<body>
${nav(base)}
<header class="proj-head container">
${body}
${footer(base)}
<script src="${base}js/main.js"></script>
</body>
</html>`;
}

// ---------- genera ----------
function run() {
  fs.mkdirSync(path.join(root, "css"), { recursive: true });
  fs.mkdirSync(path.join(root, "js"), { recursive: true });
  fs.mkdirSync(path.join(root, "assets"), { recursive: true });

  // copia il CV
  const cvSrc = path.join(__dirname, "..", "CV_Beatrice Perrone_en.pdf");
  const cvDst = path.join(root, "assets", "CV_Beatrice-Perrone_en.pdf");
  if (fs.existsSync(cvSrc)) fs.copyFileSync(cvSrc, cvDst);

  // asset condivisi dalla v1 (favicon + PDF dei 7 step)
  const sharedAssetDir = path.join(__dirname, "..", "portfolio", "assets");
  for (const f of ["favicon.svg", "7-step-esperienza-museale.pdf"]) {
    const src = path.join(sharedAssetDir, f);
    const dst = path.join(root, "assets", f);
    if (fs.existsSync(src)) fs.copyFileSync(src, dst);
  }

  // index
  fs.writeFileSync(path.join(root, "index.html"), indexPage());

  // progetti
  const n = PROJECTS.length;
  PROJECTS.forEach((p, i) => {
    const prev = PROJECTS[(i - 1 + n) % n];
    const next = PROJECTS[(i + 1) % n];
    const dir = path.join(root, "progetti", p.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), projectPage(p, prev, next));
  });

  const count = fs.readdirSync(path.join(root, "progetti")).length;
  console.log(`✓ Sito v2 generato in /portfolio-v2 — index + ${count} pagine progetto`);
}

run();