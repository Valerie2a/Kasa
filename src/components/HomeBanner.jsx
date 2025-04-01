import img from '../assets/img.png';
import '../styles/HomeBanner.scss';

function HomeBanner() {
  return (
    <div className="home-banner">
      <img src={img} alt="Falaise" className="img-banner" />
      <div className="banner-overlay"></div>
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default HomeBanner;
