'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
        setSubmitStatus('idle');

        try {
            // Ces valeurs devront être remplacées par vos propres clés EmailJS
            // Idéalement via des variables d'environnement : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'votre_service_id',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'votre_template_id',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    event_type: formData.eventType,
                    event_date: formData.eventDate,
                    location: formData.location,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'votre_public_key'
            );

            if (result.status === 200) {
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
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Erreur EmailJS:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                    Contactez-nous
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
                                    <a href="tel:+33683659718">+33 6 83 65 97 18</a>
                                </div>
                            </div>

                            <div className={styles.contactDetail}>
                                <div className={styles.contactIcon}>✉️</div>
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:oriannedecoratrice@gmail.com">oriannedecoratrice@gmail.com</a>
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
                                    placeholder="06 83 65 97 18"
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
