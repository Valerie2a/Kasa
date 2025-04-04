import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Logement from './pages/Logement';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
