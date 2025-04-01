import './styles/App.scss';
import Router from './Router';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Banner />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
