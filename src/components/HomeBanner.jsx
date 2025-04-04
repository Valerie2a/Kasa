import '../styles/HomeBanner.scss';

function HomeBanner({image, text}) {
  return (
    <div className="home-banner">
      <img src={image} alt="Bannière" className="img-banner" />
      <div className="banner-overlay"></div>
      {text && <h1 className="banner-title">{text}</h1>}
    </div>
  );
}

export default HomeBanner;
