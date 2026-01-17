'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi (à remplacer par votre API)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                location: '',
                message: '',
            });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">
                    Contactez-<span className="gradient-text">nous</span>
                </h2>

                <div className={styles.contactWrapper}>
                    <div className={styles.contactInfo}>
                        <h2 className="section-title">Parlons de votre projet</h2>
                        <p className={styles.introText}>
                            Vous avez une idée en tête ou vous souhaitez être guidé&apos;e ? N&apos;hésitez pas à me contacter.
                            Je serai ravie d&apos;échanger avec vous sur vos envies de décoration.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactDetail}>
                                <div className={styles.contactIcon}>📞</div>
                                <div>
                                    <strong>Téléphone</strong>
                                    <a href="tel:+33683659718">+33 6 XX XX XX XX</a>
                                </div>
                            </div>

                            <div className={styles.contactDetail}>
                                <div className={styles.contactIcon}>✉️</div>
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:contact@votre-entreprise.fr">contact@votre-entreprise.fr</a>
                                </div>
                            </div>

                            <div className={styles.contactDetail}>
                                <div className={styles.contactIcon}>📍</div>
                                <div>
                                    <strong>Zone d&apos;intervention</strong>
                                    <span>Alsace & Lorraine</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceAreas}>
                            <h4>Nous intervenons à :</h4>
                            <ul>
                                <li>Strasbourg</li>
                                <li>Colmar</li>
                                <li>Mulhouse</li>
                                <li>Metz</li>
                                <li>Nancy</li>
                                <li>Thionville</li>
                                <li>Et toute la région Grand Est</li>
                            </ul>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nom complet *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="votre@email.fr"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Téléphone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="06 XX XX XX XX"
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="eventType">Type d&apos;événement *</label>
                                <select
                                    id="eventType"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Sélectionnez...</option>
                                    <option value="mariage">Mariage</option>
                                    <option value="anniversaire">Anniversaire</option>
                                    <option value="corporate">Événement corporate</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="eventDate">Date de l&apos;événement</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="location">Lieu de l&apos;événement</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Ville ou lieu"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Votre message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Décrivez-nous votre projet, vos envies, votre thème..."
                            />
                        </div>

                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ✓ Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className={styles.errorMessage}>
                                ✗ Une erreur est survenue. Veuillez réessayer.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-large"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
