// Import des composants et ressources
import HomeBanner from '../components/HomeBanner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import '../styles/About.scss';

// Composant pour la page "À propos"
function About() {
  return (
    <div className="about-page">
      {/* Bannière spécifique pour la page À propos */}
      <div className="about-banner">
        <HomeBanner image={aboutBanner} text="" />
      </div>

      {/* Section contenant les collapses de valeurs */}
      <section className="about-collapses">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale..."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa..."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite..."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa..."
        />
      </section>
    </div>
  );
}

export default About;
