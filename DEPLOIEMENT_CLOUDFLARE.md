# Guide de Déploiement Cloudflare Pages

Ce guide vous accompagne étape par étape pour déployer votre site vitrine sur Cloudflare Pages.

## 📋 Prérequis

- Un compte Cloudflare (gratuit) : [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
- Un repository Git (GitHub, GitLab, ou Bitbucket)
- Votre code poussé sur le repository

## 🚀 Méthode 1 : Déploiement via le Dashboard Cloudflare (Recommandé)

### Étape 1 : Préparer votre repository

1. Assurez-vous que votre code est poussé sur GitHub/GitLab/Bitbucket
2. Vérifiez que le fichier `package.json` contient les scripts nécessaires

### Étape 2 : Créer un projet Cloudflare Pages

1. Connectez-vous à [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Dans le menu latéral, cliquez sur **Pages**
3. Cliquez sur **Create a project**
4. Sélectionnez **Connect to Git**

### Étape 3 : Connecter votre repository

1. Autorisez Cloudflare à accéder à votre compte Git
2. Sélectionnez le repository de votre site
3. Cliquez sur **Begin setup**

### Étape 4 : Configurer le build

Remplissez les paramètres suivants :

- **Project name** : `votre-site-decoration` (ou le nom de votre choix)
- **Production branch** : `main` (ou `master`)
- **Framework preset** : Sélectionnez **Next.js**
- **Build command** : `npm run build`
- **Build output directory** : `.next`
- **Root directory** : `/` (laisser vide)

### Étape 5 : Variables d'environnement (optionnel)

Si vous avez des variables d'environnement :

1. Cliquez sur **Add variable**
2. Ajoutez vos variables (ex: `NEXT_PUBLIC_API_URL`)

### Étape 6 : Déployer

1. Cliquez sur **Save and Deploy**
2. Attendez que le build se termine (2-5 minutes)
3. Votre site sera accessible sur `https://votre-projet.pages.dev`

## 🌐 Méthode 2 : Déploiement via Wrangler CLI

### Installation de Wrangler

```bash
npm install -g wrangler
```

### Connexion à Cloudflare

```bash
wrangler login
```

### Build et déploiement

```bash
# Build du projet
npm run build

# Déploiement
npx wrangler pages deploy .next --project-name=votre-site-decoration
```

## 🔧 Configuration du domaine personnalisé

### Étape 1 : Ajouter votre domaine

1. Dans votre projet Pages, allez dans **Custom domains**
2. Cliquez sur **Set up a custom domain**
3. Entrez votre nom de domaine (ex: `www.votre-site.fr`)

### Étape 2 : Configurer les DNS

Si votre domaine est sur Cloudflare :
- Les DNS seront configurés automatiquement

Si votre domaine est ailleurs :
1. Ajoutez un enregistrement CNAME :
   - **Name** : `www` (ou `@` pour le domaine racine)
   - **Target** : `votre-projet.pages.dev`

### Étape 3 : Activer HTTPS

- HTTPS est activé automatiquement par Cloudflare
- Un certificat SSL gratuit est généré

## ⚙️ Optimisations Cloudflare

### 1. Activer les optimisations d'images

Dans **Speed** > **Optimization** :
- ✅ Auto Minify (HTML, CSS, JS)
- ✅ Brotli compression
- ✅ Early Hints

### 2. Configurer le cache

Dans **Caching** > **Configuration** :
- **Browser Cache TTL** : Respect Existing Headers
- ✅ Always Online

### 3. Activer HTTP/3

Dans **Network** :
- ✅ HTTP/3 (with QUIC)

## 📊 Surveillance et Analytics

### Activer Web Analytics

1. Allez dans **Analytics** > **Web Analytics**
2. Cliquez sur **Add a site**
3. Suivez les instructions pour ajouter le script

### Métriques à surveiller

- **Page Views** : Nombre de visites
- **Core Web Vitals** : Performance (LCP, FID, CLS)
- **Bandwidth** : Utilisation de la bande passante

## 🔄 Déploiements automatiques

Cloudflare Pages déploie automatiquement :
- ✅ À chaque push sur la branche `main`
- ✅ Preview deployments pour les pull requests

### Désactiver les déploiements automatiques

1. Allez dans **Settings** > **Builds & deployments**
2. Désactivez **Automatic deployments**

## 🐛 Dépannage

### Le build échoue

1. Vérifiez les logs dans le dashboard
2. Assurez-vous que `npm run build` fonctionne localement
3. Vérifiez la version de Node.js (doit être 20+)

### Le site ne s'affiche pas correctement

1. Vérifiez que le **Build output directory** est `.next`
2. Videz le cache Cloudflare : **Caching** > **Purge Everything**

### Erreur 404 sur les routes

1. Vérifiez que le fichier `_headers` est présent
2. Les redirects doivent pointer vers `/index.html`

## 📈 Optimisations SEO post-déploiement

### 1. Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété
3. Soumettez votre sitemap : `https://votre-site.fr/sitemap.xml`

### 2. Google My Business

Créez une fiche Google My Business pour améliorer le référencement local :
- Ajoutez votre adresse en Alsace/Moselle/Lorraine
- Ajoutez des photos de vos réalisations
- Collectez des avis clients

### 3. Vérification du SEO

Utilisez ces outils pour vérifier votre SEO :
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 💰 Coûts

Cloudflare Pages est **gratuit** pour :
- ✅ Builds illimités
- ✅ Bande passante illimitée
- ✅ 500 builds/mois
- ✅ Domaine personnalisé
- ✅ SSL gratuit

## 📞 Support

- [Documentation Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)
- [Discord Cloudflare](https://discord.gg/cloudflaredev)

## ✅ Checklist de déploiement

- [ ] Code poussé sur Git
- [ ] Projet créé sur Cloudflare Pages
- [ ] Build réussi
- [ ] Site accessible sur `.pages.dev`
- [ ] Domaine personnalisé configuré
- [ ] SSL activé
- [ ] Sitemap soumis à Google
- [ ] Analytics configuré
- [ ] Google My Business créé
- [ ] Performance testée (PageSpeed)

Félicitations ! Votre site est maintenant en ligne ! 🎉
