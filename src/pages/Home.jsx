import LocationList from '../components/LocationList';
import HomeBanner from '../components/HomeBanner';
import bannerImage from '../assets/img.png';

function Home() {
  return (
    <div>
      <HomeBanner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <LocationList />
    </div>
  );
}

export default Home;
