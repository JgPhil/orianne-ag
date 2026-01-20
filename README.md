# Site Vitrine - Orianne décoratrice

Site vitrine Next.js optimisé pour le référencement local en Alsace, Moselle et Lorraine.

## 🎨 Caractéristiques

- **Design élégant et chaleureux** : Palette de couleurs douces (rose poudré, beige champagne, tons pêche)
- **SEO optimisé** : Métadonnées complètes, Schema.org LocalBusiness, sitemap
- **Référencement local** : Optimisé pour Alsace, Moselle, Lorraine (Strasbourg, Metz, Nancy, Colmar, etc.)
- **Performance** : Next.js 16 avec Turbopack, optimisations d'images
- **Responsive** : Design adaptatif pour tous les écrans
- **Animations** : Micro-animations élégantes pour une expérience premium

## 🚀 Démarrage rapide

### Développement local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de production

```bash
npm run build
npm start
```

## ☁️ Déploiement sur Cloudflare Pages

### Option 1 : Via le Dashboard Cloudflare

1. Connectez-vous à [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Allez dans **Pages** > **Create a project**
3. Connectez votre repository Git
4. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Build output directory** : `.next`
   - **Root directory** : `/`
5. Ajoutez les variables d'environnement si nécessaire
6. Cliquez sur **Save and Deploy**

### Option 2 : Via Wrangler CLI

```bash
# Installer Wrangler
npm install -g wrangler

# Se connecter à Cloudflare
wrangler login

# Déployer
npm run build
npx wrangler pages deploy .next
```

### Configuration Cloudflare Pages

Créez un fichier `wrangler.toml` à la racine :

```toml
name = "votre-site-decoration"
compatibility_date = "2024-01-01"

[site]
bucket = ".next"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## 📝 Personnalisation

### 1. Informations de l'entreprise

Modifiez le fichier `src/lib/seo.ts` :

```typescript
export const BUSINESS_INFO = {
  name: 'Votre Entreprise de Décoration',
  description: '...',
  phone: '+33 6 XX XX XX XX',
  email: 'contact@votre-entreprise.fr',
  // ... autres informations
};
```

### 2. Couleurs et design

Les variables CSS sont dans `src/app/globals.css` :

```css
:root {
  --color-primary: hsl(340, 45%, 75%);  /* Rose poudré */
  --color-secondary: hsl(30, 35%, 80%); /* Beige champagne */
  /* ... */
}
```

### 3. Contenu

- **Hero** : `src/components/Hero.tsx`
- **Services** : `src/components/Services.tsx`
- **Contact** : `src/components/Contact.tsx`

### 4. SEO

- Métadonnées : `src/lib/seo.ts`
- Sitemap : `src/app/sitemap.ts`
- Robots.txt : `src/app/robots.ts`

## 🎯 Optimisations SEO Local

Le site est optimisé pour les recherches locales :

- **Mots-clés ciblés** : décoration mariage Alsace, décoratrice Strasbourg, etc.
- **Schema.org** : Markup LocalBusiness avec zone de service
- **Métadonnées** : Open Graph, Twitter Cards
- **Performance** : Core Web Vitals optimisés

### Villes ciblées

- Strasbourg
- Colmar
- Mulhouse
- Metz
- Nancy
- Thionville
- Toute la région Grand Est

## 📱 Structure du site

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal avec SEO
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── globals.css      # Styles globaux
│   │   ├── sitemap.ts       # Sitemap XML
│   │   └── robots.ts        # Robots.txt
│   ├── components/
│   │   ├── Header.tsx       # Navigation
│   │   ├── Hero.tsx         # Section hero
│   │   ├── Services.tsx     # Services
│   │   ├── Contact.tsx      # Formulaire de contact
│   │   └── Footer.tsx       # Pied de page
│   └── lib/
│       └── seo.ts           # Configuration SEO
├── public/                  # Assets statiques
└── next.config.ts           # Configuration Next.js
```

## 🔧 Technologies

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : CSS Modules + CSS Variables
- **Fonts** : Playfair Display, Montserrat, Cormorant Garamond
- **Déploiement** : Cloudflare Pages

## 📊 Performance

- ⚡ Turbopack pour des builds ultra-rapides
- 🖼️ Optimisation automatique des images (AVIF, WebP)
- 📦 Code splitting automatique
- 🎨 CSS optimisé et minifié
- 🚀 Edge runtime sur Cloudflare

## 🌐 Domaine personnalisé

Pour configurer votre domaine sur Cloudflare Pages :

1. Allez dans votre projet Pages
2. **Custom domains** > **Set up a custom domain**
3. Suivez les instructions pour configurer les DNS

## 📞 Support

Pour toute question ou personnalisation, contactez votre développeur.

## 📄 Licence

Tous droits réservés © 2026
