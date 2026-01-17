import Link from 'next/link';
import styles from './Footer.module.css';

import { Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection} style={{ flex: '1 1 300px' }}>
                        <h3 className={styles.footerTitle}>Orianne Décoratrice</h3>
                        <p className={styles.footerDescription}>
                            Artisan Décorateur en Alsace et Lorraine.<br />
                            Spécialisée dans la décoration de mariages et l&apos;événementiel.
                        </p>
                        <div style={{ marginTop: '1rem' }}>
                            <a
                                href="https://www.instagram.com/oriannedecoratrice"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: 500 }}
                            >
                                <Instagram size={20} />
                                Suivez-moi sur Instagram
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection} style={{ flex: '0 1 200px' }}>
                        <h4 className={styles.footerSubtitle}>Navigation</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/#accueil">Accueil</Link></li>
                            <li><Link href="/#services">Prestations</Link></li>
                            <li><Link href="/realisations">Galerie</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection} style={{ flex: '0 1 250px' }}>
                        <h4 className={styles.footerSubtitle}>Contact</h4>
                        <ul className={styles.footerContact}>
                            <li>
                                <a href="tel:+33683659718">+33 6 83 65 97 18</a>
                            </li>
                            <li>
                                <a href="mailto:oriannedecoratrice@gmail.com">oriannedecoratrice@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Orianne Décoratrice. Tous droits réservés.</p>
                    <div className={styles.footerLegal}>
                        <Link href="/mentions-legales">Mentions légales</Link>
                        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
