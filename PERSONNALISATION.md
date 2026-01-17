# Guide de Personnalisation

Ce guide vous aide à personnaliser facilement votre site vitrine.

## 🎨 Modifier les couleurs

### Fichier : `src/app/globals.css`

Les couleurs sont définies dans les variables CSS. Modifiez les valeurs HSL selon vos préférences :

```css
:root {
  /* Couleur principale (rose poudré) */
  --color-primary: hsl(340, 45%, 75%);
  
  /* Couleur secondaire (beige champagne) */
  --color-secondary: hsl(30, 35%, 80%);
  
  /* Couleur d'accent (pêche doux) */
  --color-accent: hsl(25, 50%, 85%);
}
```

### Exemples de palettes alternatives

**Palette Lavande & Mauve :**
```css
--color-primary: hsl(270, 40%, 75%);      /* Lavande */
--color-secondary: hsl(280, 30%, 85%);    /* Mauve clair */
--color-accent: hsl(260, 35%, 80%);       /* Lilas */
```

**Palette Vert Sauge & Crème :**
```css
--color-primary: hsl(140, 25%, 70%);      /* Vert sauge */
--color-secondary: hsl(45, 30%, 85%);     /* Crème */
--color-accent: hsl(35, 40%, 80%);        /* Beige doré */
```

**Palette Bleu Poudré & Gris Perle :**
```css
--color-primary: hsl(210, 30%, 75%);      /* Bleu poudré */
--color-secondary: hsl(200, 15%, 85%);    /* Gris perle */
--color-accent: hsl(190, 25%, 80%);       /* Bleu clair */
```

## 📝 Modifier les informations de l'entreprise

### Fichier : `src/lib/seo.ts`

```typescript
export const BUSINESS_INFO = {
  name: 'Votre Nom d\'Entreprise',
  description: 'Votre description personnalisée',
  phone: '+33 6 12 34 56 78',
  email: 'contact@votre-domaine.fr',
  address: {
    street: '123 Rue de la Décoration',
    city: 'Strasbourg',
    region: 'Alsace',
    postalCode: '67000',
    country: 'France',
  },
  serviceArea: [
    'Strasbourg',
    'Colmar',
    // Ajoutez vos villes
  ],
  services: [
    'Décoration de mariage',
    // Ajoutez vos services
  ],
};
```

## 🖼️ Modifier le contenu

### Hero Section

**Fichier : `src/components/Hero.tsx`**

```tsx
<h1 className={`${styles.heroTitle} animate-fade-in-up`}>
  Votre titre principal
  <span className="gradient-text"> personnalisé</span>
</h1>

<p className={`${styles.heroSubtitle} animate-fade-in-up`}>
  Votre sous-titre personnalisé
</p>
```

### Services

**Fichier : `src/components/Services.tsx`**

Modifiez le tableau `services` :

```typescript
const services = [
  {
    icon: '💐',  // Changez l'emoji
    title: 'Votre Service',
    description: 'Description de votre service',
    features: [
      'Caractéristique 1',
      'Caractéristique 2',
    ],
  },
  // Ajoutez plus de services...
];
```

### Contact

**Fichier : `src/components/Contact.tsx`**

Modifiez les coordonnées affichées :

```tsx
<a href="tel:+33612345678">+33 6 12 34 56 78</a>
<a href="mailto:contact@votre-domaine.fr">contact@votre-domaine.fr</a>
```

## 🔤 Modifier les polices

### Fichier : `src/app/globals.css`

Changez l'import Google Fonts :

```css
@import url('https://fonts.googleapis.com/css2?family=Votre+Police:wght@300;400;600;700&display=swap');

:root {
  --font-display: 'Votre Police Display', serif;
  --font-body: 'Votre Police Body', sans-serif;
}
```

### Polices recommandées pour un site de décoration

**Élégantes et classiques :**
- Display : Playfair Display, Cormorant Garamond, Libre Baskerville
- Body : Montserrat, Lato, Open Sans

**Modernes et épurées :**
- Display : Raleway, Poppins, Josefin Sans
- Body : Inter, Nunito, Work Sans

**Romantiques :**
- Display : Great Vibes, Dancing Script, Parisienne
- Body : Quicksand, Comfortaa, Varela Round

## 📱 Ajouter des réseaux sociaux

### Footer

**Fichier : `src/components/Footer.tsx`**

Ajoutez une section réseaux sociaux :

```tsx
<div className={styles.footerSection}>
  <h4 className={styles.footerSubtitle}>Suivez-nous</h4>
  <div className={styles.socialLinks}>
    <a href="https://facebook.com/votre-page" target="_blank">
      Facebook
    </a>
    <a href="https://instagram.com/votre-compte" target="_blank">
      Instagram
    </a>
    <a href="https://pinterest.com/votre-compte" target="_blank">
      Pinterest
    </a>
  </div>
</div>
```

### SEO

**Fichier : `src/lib/seo.ts`**

Ajoutez vos liens sociaux dans le schema :

```typescript
sameAs: [
  'https://www.facebook.com/votre-page',
  'https://www.instagram.com/votre-compte',
  'https://www.pinterest.com/votre-compte',
],
```

## 🖼️ Ajouter des images

### 1. Placez vos images dans le dossier `public/images/`

```
public/
  images/
    hero-background.jpg
    service-1.jpg
    realisation-1.jpg
```

### 2. Utilisez les images dans vos composants

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-background.jpg"
  alt="Description de l'image"
  width={1920}
  height={1080}
  priority
/>
```

### Optimisation des images

- Format recommandé : **WebP** ou **AVIF**
- Taille maximale : **2000px** de largeur
- Compression : Utilisez [TinyPNG](https://tinypng.com/)

## 📊 Ajouter Google Analytics

### 1. Créez un fichier `src/lib/analytics.ts`

```typescript
export const GA_TRACKING_ID = 'G-XXXXXXXXXX';

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
```

### 2. Ajoutez le script dans `src/app/layout.tsx`

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `}
</Script>
```

## 🎯 Modifier les mots-clés SEO

### Fichier : `src/lib/seo.ts`

```typescript
keywords: [
  'votre mot-clé principal',
  'décoration mariage Alsace',
  'votre ville + votre service',
  // Ajoutez vos mots-clés
],
```

### Conseils pour les mots-clés locaux

- Utilisez le format : `[service] + [ville]`
- Exemples :
  - "décoration mariage Strasbourg"
  - "fleuriste événementiel Colmar"
  - "location matériel mariage Metz"

## 🔧 Personnalisations avancées

### Ajouter une section Galerie

Créez `src/components/Gallery.tsx` :

```tsx
export default function Gallery() {
  const images = [
    '/images/galerie-1.jpg',
    '/images/galerie-2.jpg',
    // ...
  ];

  return (
    <section id="realisations" className="section">
      <div className="container">
        <h2 className="section-title">
          Nos <span className="gradient-text">Réalisations</span>
        </h2>
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Réalisation ${index + 1}`}
              width={600}
              height={400}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Ajouter une section Témoignages

Créez `src/components/Testimonials.tsx` :

```tsx
const testimonials = [
  {
    name: 'Marie & Thomas',
    text: 'Un travail exceptionnel pour notre mariage !',
    rating: 5,
  },
  // ...
];
```

## 📞 Support

Pour toute question sur la personnalisation, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Guide CSS Variables](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)
