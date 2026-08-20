"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    if(e) e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      {/* Header Menu */}
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <div className={styles.logo}>CaisseHub</div>
          <nav className={styles.navLinks}>
            <a href="#services" className={styles.navLink}>Nos Services</a>
            <a href="#flotte" className={styles.navLink}>Notre Flotte</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>L'Élégance pour <br /><span>Votre Jour-J</span></h1>
          <p className={styles.heroSubtitle}>
            Location de voitures de prestige avec chauffeur pour mariages et événements d'exception.
          </p>
          <div className={styles.heroButtons}>
            <a href="#flotte" className="btn-primary">Découvrir la flotte</a>
            <button onClick={openModal} className="btn-secondary">Réserver maintenant</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section container" id="services">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">L'excellence à votre service</p>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>👔</div>
            <h3 className={styles.serviceTitle}>Chauffeur Privé</h3>
            <p className={styles.serviceDesc}>Des chauffeurs professionnels, ponctuels et discrets pour un service irréprochable tout au long de votre événement.</p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>✨</div>
            <h3 className={styles.serviceTitle}>Décoration Florale</h3>
            <p className={styles.serviceDesc}>Personnalisez votre véhicule avec des compositions florales raffinées et sur-mesure pour sublimer votre arrivée.</p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>🍾</div>
            <h3 className={styles.serviceTitle}>Service VIP</h3>
            <p className={styles.serviceDesc}>Champagne, rafraîchissements et tapis rouge : profitez d'une expérience véritablement inoubliable.</p>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="flotte" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="section container">
          <h2 className="section-title">Notre Flotte</h2>
          <p className="section-subtitle">Des véhicules d'exception avec décorations florales</p>
          
          <div className={styles.fleetGrid}>
            {/* Card 1 */}
            <div className={styles.fleetCard}>
              <img src="/mercedes_wedding_car.jpg" alt="Mercedes Classe S Mariage" className={styles.fleetImage} />
              <div className={styles.fleetInfo}>
                <h3 className={styles.fleetName}>Pack Élégance - Classe S</h3>
                <p className={styles.fleetDesc}>L'incarnation du luxe absolu. Inclut chauffeur privé et décoration florale sur-mesure sur le capot.</p>
                <div className={styles.fleetPrice}>À partir de 450€ / jour</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className={styles.fleetCard}>
              <img src="/rolls_royce_wedding.jpg" alt="Rolls-Royce Phantom Mariage" className={styles.fleetImage} />
              <div className={styles.fleetInfo}>
                <h3 className={styles.fleetName}>Pack Prestige - Rolls-Royce</h3>
                <p className={styles.fleetDesc}>L'élégance intemporelle pour une entrée majestueuse, ornée de fleurs de saison et rubans de soie.</p>
                <div className={styles.fleetPrice}>À partir de 950€ / jour</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className={styles.fleetCard}>
              <img src="/g_class_wedding.jpg" alt="Mercedes G63 AMG Mariage" className={styles.fleetImage} />
              <div className={styles.fleetInfo}>
                <h3 className={styles.fleetName}>Pack Audace - Classe G</h3>
                <p className={styles.fleetDesc}>Caractère et prestance imposante, sublimé par un bouquet asymétrique élégant pour un mariage moderne.</p>
                <div className={styles.fleetPrice}>À partir de 600€ / jour</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section container" id="avis">
        <h2 className="section-title">Avis Clients</h2>
        <p className="section-subtitle">Ce que nos mariés disent de nous</p>
        
        <div className={styles.fleetGrid} style={{ marginTop: '3rem' }}>
          {/* Review 1 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', lineHeight: '1.6', flex: 1 }}>"Un service irréprochable ! La Mercedes Classe S était magnifique avec sa décoration florale. Le chauffeur était d'un grand professionnalisme. Merci d'avoir contribué à rendre notre mariage parfait."</p>
            <div style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Sophie & Julien</div>
          </div>
          {/* Review 2 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', lineHeight: '1.6', flex: 1 }}>"Nous avons loué la Rolls-Royce Phantom pour notre arrivée à la mairie. C'était tout simplement magique. Le service VIP avec le champagne à bord était une touche très appréciée."</p>
            <div style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Marie & Alexandre</div>
          </div>
          {/* Review 3 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', lineHeight: '1.6', flex: 1 }}>"La Classe G a fait sensation ! Une prestation haut de gamme, ponctuelle et avec une décoration florale sublime qui correspondait exactement à notre thème."</p>
            <div style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Claire & Thomas</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section container" id="contact">
        <h2 className="section-title">Réservez votre Véhicule</h2>
        <p className="section-subtitle">Votre événement mérite ce qu'il y a de meilleur</p>
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '4rem 2rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
          <p style={{ marginBottom: '2.5rem', color: '#ccc', fontSize: '1.1rem' }}>
            Nous sommes à votre entière disposition pour vous accompagner dans le choix du véhicule parfait et de sa décoration florale.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1rem' }}>
            Réserver maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerCol}>
            <h4 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--accent-color)', fontSize: '1.8rem', border: 'none' }}>CaisseHub</h4>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              L'excellence de la location de véhicules de prestige pour vos événements les plus précieux. Confort, ponctualité et élégance.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Liens Rapides</h4>
            <a href="#services">Nos Services</a>
            <a href="#flotte">Notre Flotte</a>
            <a href="#contact">Contact & Réservation</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Nous Contacter</h4>
            <p>📍 75008 Paris, France</p>
            <p>📞 +33 1 23 45 67 89</p>
            <p>✉️ contact@caissehub.com</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>📸</span>
              <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>📱</span>
              <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>💼</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} CaisseHub. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Reservation Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
            <h3 className={styles.modalTitle}>Demande de Réservation</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Votre demande a bien été envoyée !'); closeModal(); }}>
              <div className={styles.formGroup}>
                <label>Prénom et Nom</label>
                <input type="text" className={styles.input} required placeholder="Jean Dupont" />
              </div>
              <div className={styles.formGroup}>
                <label>Date de la location</label>
                <input type="date" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label>Lieu de l'événement</label>
                <input type="text" className={styles.input} required placeholder="Mairie de Paris, Domaine X..." />
              </div>
              <div className={styles.formGroup}>
                <label>Plan de l'offre souhaité</label>
                <select className={styles.select} required>
                  <option value="">Sélectionnez un pack...</option>
                  <option value="elegance">Pack Élégance - Classe S (450€/j)</option>
                  <option value="prestige">Pack Prestige - Rolls-Royce (950€/j)</option>
                  <option value="audace">Pack Audace - Classe G (600€/j)</option>
                </select>
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Confirmer la demande
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
