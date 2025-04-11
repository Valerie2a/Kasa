import '../styles/HomeBanner.scss';

function HomeBanner({image, text}) {
  return (
    <div className="home-banner">
      <img src={image} alt="Bannière" className="img-banner" />
      <div className="banner-overlay"></div>

      {text && (
        <h1 className="banner-title">
          <span className="mobile-only">
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
          <span className="desktop-only">{text}</span>
        </h1>
      )}
    </div>
  );
}

export default HomeBanner;
