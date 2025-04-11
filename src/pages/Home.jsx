import RentalList from '../components/RentalList';
import HomeBanner from '../components/HomeBanner';
import bannerImage from '../assets/img.png';

function Home() {
  return (
    <div>
      <HomeBanner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <RentalList />
    </div>
  );
}

export default Home;
