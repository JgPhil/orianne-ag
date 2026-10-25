# Orianne Décoratrice — Site Officiel (`oriannedecoratrice.com`)

Site vitrine d'**Orianne Décoratrice** (décoration de mariages, scénographie de réceptions et créations florales sur mesure en Alsace et en Lorraine), géré directement depuis **Antigravity**.

## Structure du projet

- `index.html` : Page d'accueil (présentation, vidéo d'ambiance, carrousel, prestations de réception, aperçu du portfolio et formulaire de contact relié à `oriannedecoratrice@gmail.com`).
- `decoration-de-mariage.html` (et `decoration-de-mariage/index.html`) : Page dédiée aux mariages et grande galerie photo avec zoom plein écran (Lightbox).
- `assets/css/styles.css` : Feuille de style complète (couleurs doré, terracotta, sauge et ivoire inspirées du logo d'Orianne).
- `assets/js/main.js` : Scripts d'interactivité (menu mobile, carrousel automatique, galerie plein écran Lightbox, envoi du formulaire de contact).
- `assets/images/` & `assets/video/` : Toutes vos photos originales, votre logo et votre vidéo rapatriés localement (aucune dépendance au constructeur de site Hostinger).
- `sitemap.xml` & `robots.txt` : Fichiers SEO configurés pour Google.

## Prévisualiser le site sur votre Mac

Dans un terminal (ou directement en demandant à Antigravity) :

```bash
python3 -m http.server 8080
```

Puis ouvrez [http://localhost:8080](http://localhost:8080) dans votre navigateur.

## Mettre en ligne gratuitement (Vercel ou Cloudflare Pages) et relier le domaine Hostinger

1. **Publier sur GitHub** : Créez un dépôt GitHub pour ce dossier et poussez-le (`git push`).
2. **Connecter à Vercel (ou Cloudflare Pages)** :
   - Créez un compte gratuit sur [vercel.com](https://vercel.com) avec votre compte GitHub.
   - Importez le projet `oriannedecoratrice.com`.
   - À chaque modification faite ici avec Antigravity (`git push`), votre site se mettra à jour automatiquement en quelques secondes.
3. **Relier votre nom de domaine `oriannedecoratrice.com` (chez Hostinger)** :
   - Dans Vercel : allez dans **Settings → Domains** et ajoutez `oriannedecoratrice.com`.
   - Dans votre espace **Hostinger → Noms de domaine → DNS / Nameservers** : remplacez l'enregistrement `A` (`@`) et le `CNAME` (`www`) par ceux indiqués par Vercel (`76.76.21.21` et `cname.vercel-dns.com`).
   - Une fois le domaine relié, vous n'aurez plus besoin de payer l'abonnement au *Website Builder* d'Hostinger (seul le renouvellement annuel du nom de domaine suffit).
