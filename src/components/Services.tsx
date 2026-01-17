'use client';

import { Flower2, Sparkles, Armchair, Palette } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: <Flower2 size={64} strokeWidth={1} />,
        title: 'Décoration de Mariage Complète',
        description: 'Du bouquet de mariée à la scénographie complète de votre lieu de réception. Nous créons une ambiance sur mesure qui vous ressemble : élégante, romantique ou moderne.',
        features: ['Bouquets & Accessoires', 'Cérémonie Laïque/Religieuse', 'Centres de table', 'Drapés & Nappage'],
    },
    {
        icon: <Sparkles size={64} strokeWidth={1} />,
        title: 'Scénographie Événementielle',
        description: 'Pour vos réceptions privées ou événements d\'entreprise, nous imaginons des décors uniques qui marquent les esprits. Vitrines, Noël, Lancements de produits.',
        features: ['Soirées de Gala', 'Arbres de Noël', 'Décors de Vitrine', 'Anniversaires Prestiges'],
    },
    {
        icon: <Armchair size={64} strokeWidth={1} />,
        title: 'Location & Mise en Scène',
        description: 'Service de location de matériel décoratif haut de gamme et installation soignée par nos équipes en Alsace et Lorraine.',
        features: ['Housses de chaises', 'Guirlandes guinguette', 'Vases & Chandeliers', 'Installation/Désinstallation'],
    },
    {
        icon: <Palette size={64} strokeWidth={1} />,
        title: 'Architecture & Design Intérieur',
        description: 'Passionnée par le design, je vous conseille dans l\'aménagement de vos espaces privés. Harmonie des couleurs, choix du mobilier et tendances actuelles.',
        features: ['Coaching Déco', 'Planches d\'ambiance', 'Agencement', 'Harmonie colorée'],
    },
];

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">
                    Nos Services
                </h2>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card ${styles.serviceCard}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>

                            <ul className={styles.serviceFeatures}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.serviceFeature}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.servicesFooter}>
                    <p className={styles.servicesNote}>
                        Chaque projet est unique. Nous créons des décors sur mesure adaptés à vos envies,
                        votre budget et votre thème.
                    </p>
                    <a href="#contact" className="btn btn-primary btn-large">
                        Discutons de votre projet
                    </a>
                </div>
            </div>
        </section>
    );
}
