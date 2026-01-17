import { Metadata } from 'next';

export const BUSINESS_INFO = {
    name: 'Orianne Décoratrice',
    description: 'Décoration événementielle et mariages en Alsace et Lorraine. Créations florales sur mesure, mise en scène de cérémonies et réceptions.',
    phone: '+33 6 83 65 97 18',
    email: 'oriannedecoratrice@gmail.com',
    address: {
        street: 'Votre adresse',
        city: 'Votre ville',
        region: 'Alsace',
        postalCode: '67000',
        country: 'France',
    },
    serviceArea: [
        'Strasbourg',
        'Colmar',
        'Mulhouse',
        'Metz',
        'Nancy',
        'Thionville',
        'Alsace',
        'Lorraine',
        'Bas-Rhin',
        'Haut-Rhin',
        'Grand Est',
    ],
    services: [
        'Décoration de mariage',
        'Décoration événementielle',
        'Créations florales',
        'Location de matériel',
        'Mise en scène de cérémonies',
        'Décoration de salles de réception',
        'Arches florales',
        'Bouquets de mariée',
    ],
};

export const generateLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://oriannedecoratrice.com',
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.region,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.country,
    },
    areaServed: BUSINESS_INFO.serviceArea.map((area) => ({
        '@type': 'City',
        name: area,
    })),
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    url: 'https://oriannedecoratrice.com',
    sameAs: [
        // Ajoutez vos réseaux sociaux ici
    ],
});

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://oriannedecoratrice.com'),
    title: {
        default: `${BUSINESS_INFO.name} | Décoration Mariage Alsace Lorraine`,
        template: `%s | ${BUSINESS_INFO.name}`,
    },
    // ... (omitting unchanged lines for brevity in viewing, but replacement should be targeted)
    // Wait, REPLACE ALL is better done with multiple chunks as they are scattered.
    // Let's do a multi_replace for accuracy or just target specific lines.

    // Correct approach: Update URL in chunks.
    description: BUSINESS_INFO.description,
    keywords: [
        'décoration mariage Alsace',
        'décoration mariage Lorraine',
        'décoration mariage Lorraine',
        'décoratrice Strasbourg',
        'décoratrice Metz',
        'décoratrice Nancy',
        'décoration événementielle Alsace',
        'fleuriste mariage Strasbourg',
        'location décoration mariage',
        'arche florale mariage',
        'décoration salle réception',
        'wedding planner Alsace',
    ],
    authors: [{ name: BUSINESS_INFO.name }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://oriannedecoratrice.com',
        siteName: BUSINESS_INFO.name,
        title: `${BUSINESS_INFO.name} | Décoration Mariage Alsace Lorraine`,
        description: BUSINESS_INFO.description,
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: BUSINESS_INFO.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${BUSINESS_INFO.name} | Décoration Mariage Alsace Lorraine`,
        description: BUSINESS_INFO.description,
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'votre-code-google-search-console',
    },
};
