# Orianne Décoratrice — Site Officiel (`oriannedecoratrice.com`)

Site vitrine d'**Orianne Décoratrice** (décoration de mariages, scénographie de réceptions et créations florales sur mesure en Alsace et en Lorraine), géré directement depuis **Antigravity**.

## Structure du projet

- `index.html` : Page d'accueil (en-tête original avec logo, grand jumbotron vidéo, diaporama panoramique, présentation, prestations de réception, portfolio et formulaire de contact relié à `oriannedecoratrice@gmail.com`).
- `decoration-de-mariage.html` (et `decoration-de-mariage/index.html`) : Page dédiée aux mariages et grande galerie photo avec zoom plein écran (Lightbox).
- `mentions-legales.html` (et `mentions-legales/index.html`) : Mentions légales (LCEN) et Politique de confidentialité (RGPD) — Orianne Jaming (EI), SIREN 518 114 376, hébergement Cloudflare Pages.
- `assets/css/styles.css` : Feuille de style complète (couleurs doré, terracotta, sauge et ivoire inspirées du logo d'Orianne).
- `assets/js/main.js` : Scripts d'interactivité (menu mobile, carrousel automatique, galerie plein écran Lightbox, envoi du formulaire de contact).
- `assets/images/` & `assets/video/` : Vos 28 photos originales (recadrées fidèlement), votre logo et votre vidéo rapatriés localement.
- `sitemap.xml` & `robots.txt` : Fichiers SEO configurés pour Google.

## Prévisualiser le site sur votre Mac

Dans un terminal (ou directement en demandant à Antigravity) :

```bash
python3 -m http.server 8080
```

Puis ouvrez [http://localhost:8080](http://localhost:8080) dans votre navigateur.

## Mettre en ligne gratuitement sur Cloudflare Pages

```bash
npx wrangler pages deploy . --project-name=oriannedecoratrice
```
