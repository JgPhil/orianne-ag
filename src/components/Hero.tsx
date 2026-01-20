import Link from 'next/link';
import styles from './Hero.module.css';
import { prefix } from '@/lib/utils';

export default function Hero() {
    return (
        <section id="accueil" className={styles.hero}>
            <div
                className={styles.heroBackground}
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url('${prefix}/images/hero_background_new.jpg')`
                }}
            >
                {/* Idéalement une image sombre de haute qualité ici */}
                <div className={styles.heroOverlay}></div>
            </div>

            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
                        Décoration Mariage & Événementiel
                        <span style={{ display: 'block', fontStyle: 'italic', fontWeight: '400', marginTop: '1rem' }}>Alsace & Lorraine</span>
                    </h1>

                    <p className={`${styles.heroSubtitle} animate-fade-in-up`}>
                        Depuis plus de 15 ans, Orianne met son savoir-faire et sa sensibilité artistique à votre service pour créer des décors uniques et sur mesure.
                    </p>

                    <div className={`${styles.heroButtons} animate-fade-in-up`}>
                        <Link href="/#contact" className="btn btn-primary btn-large">
                            Me contacter
                        </Link>
                        <Link href="/realisations" className="btn btn-secondary btn-large">
                            Découvrir mon univers
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollMouse}></div>
            </div>
        </section>
    );
}
