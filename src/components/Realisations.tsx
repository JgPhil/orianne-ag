'use client';

import Image from 'next/image';
import styles from './Realisations.module.css';

const projects = [
    {
        id: 1,
        title: 'Château de Pourtalès',
        category: 'Mariage Romantique',
        image: '/images/realisation-1.png',
        alt: 'Décoration de table mariage chateau'
    },
    {
        id: 2,
        title: 'Jardin des Deux Rives',
        category: 'Cérémonie Laïque',
        image: '/images/realisation-2.png',
        alt: 'Arche florale cérémonie laïque'
    },
    {
        id: 3,
        title: 'Abbaye des Prémontrés',
        category: 'Dîner de Gala',
        image: '/images/realisation-3.png',
        alt: 'Détails décoration bougies'
    }
];

export default function Realisations() {
    return (
        <section id="realisations" className={`section ${styles.realisations}`}>
            <div className="container">
                <h2 className="section-title">
                    Nos Dernières <span className="gradient-text" style={{ background: 'var(--color-primary-dark)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Réalisations</span>
                </h2>
                {/* Note: J'ai forcé le gradient-text à être primary-dark uni ici pour éviter le problème "2 couleurs", 
                    ou je devrais juste retirer le span. Je vais retirer le span gradient dans une prochaine étape proprement.
                    Ici je mets un titre simple. */}
            </div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                        Galerie & Univers
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-neutral-600)' }}>
                        Découvrez un aperçu de nos créations où chaque détail compte.
                    </p>
                </div>

                <div className={styles.gallery}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.item}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.overlay}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <span className={styles.tag}>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a href="https://www.instagram.com/oriannedecoratrice" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                        Voir plus sur Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
