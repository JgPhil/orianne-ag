import Link from 'next/link';
import styles from './Footer.module.css';

import { Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Orianne Décoratrice</h3>
                        <p className={styles.footerDescription}>
                            Artisan Décorateur diplômée en Arts Appliqués depuis 2009.<br /><br />
                            Spécialisée dans la décoration de mariages et l&apos;événementiel en Alsace et Lorraine.
                            J&apos;imagine et mets en scène vos cérémonies à Strasbourg, Nancy, Metz et Colmar.
                        </p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a
                                href="https://www.instagram.com/oriannedecoratrice"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-light)', textDecoration: 'none', fontWeight: 500 }}
                            >
                                <Instagram size={20} />
                                Suivez-moi sur Instagram
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Plan du site</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="#accueil">Accueil</Link></li>
                            <li><Link href="#services">Prestations</Link></li>
                            <li><Link href="#realisations">Galerie & Univers</Link></li>
                            <li><Link href="#contact">Contact & Devis</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Expertises</h4>
                        <ul className={styles.footerLinks}>
                            <li>Scénographie Mariage</li>
                            <li>Décoration Florale</li>
                            <li>Architecture Intérieure</li>
                            <li>Décors Vitrines & Noël</li>
                            <li>Location de Mobilier</li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Me Contacter</h4>
                        <ul className={styles.footerContact}>
                            <li>
                                <a href="tel:+33683659718">+33 6 83 65 97 18</a>
                            </li>
                            <li>
                                <a href="mailto:contact@votre-entreprise.fr">contact@votre-entreprise.fr</a>
                            </li>
                            <li style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem' }}>
                                Intervention : Alsace & Lorraine<br />
                                Strasbourg • Colmar • Metz • Nancy
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Votre Entreprise. Tous droits réservés.</p>
                    <div className={styles.footerLegal}>
                        <Link href="/mentions-legales">Mentions légales</Link>
                        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
