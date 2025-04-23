// Import des composants nécessaires
import RentalList from '../components/RentalList';
import HomeBanner from '../components/HomeBanner';
import bannerImage from '../assets/img.png';

// Composant de la page d'accueil
function Home() {
  return (
    <div>
      {/* Affichage de la bannière d'accueil */}
      <HomeBanner image={bannerImage} text="Chez vous, partout et ailleurs" />

      {/* Affichage de la liste des logements */}
      <RentalList />
    </div>
  );
}

export default Home;
