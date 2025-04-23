// Import du style pour la bannière d'accueil
import '../styles/HomeBanner.scss';

// Composant pour afficher la bannière d'accueil avec image et texte
function HomeBanner({image, text}) {
  return (
    <div className="home-banner">
      {/* Image de fond de la bannière */}
      <img src={image} alt="Bannière" className="img-banner" />

      {/* Superposition d'un filtre sombre */}
      <div className="banner-overlay"></div>

      {/* Affichage conditionnel du texte si une valeur est fournie */}
      {text && (
        <h1 className="banner-title">
          {/* Affichage spécifique pour mobile */}
          <span className="mobile-only">
            {/* Sépare le texte sur deux lignes si une virgule est présente */}
            {text.includes(',') ? (
              <>
                {text.split(',')[0]},
                <br />
                {text.split(',')[1]}
              </>
            ) : (
              text
            )}
          </span>

          {/* Affichage classique sur desktop */}
          <span className="desktop-only">{text}</span>
        </h1>
      )}
    </div>
  );
}

export default HomeBanner;
