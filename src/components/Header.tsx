'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { prefix } from '@/lib/utils';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/#accueil', label: 'Accueil' },
        { href: '/#services', label: 'Services' },
        { href: '/realisations', label: 'Réalisations' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={`${prefix}/images/logo-v2.png`}
                                alt="Orianne Décoratrice"
                                fill
                                sizes="(max-width: 768px) 100px, 150px"
                                className={styles.logoImage}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>



                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileNavList}>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={styles.mobileNavLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
