import './App.css';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Galeri from './components/Galeri';
import Footer from './components/Footer';
import Sejarah from './components/Sejarah';
import Profil from './components/Profil';
import Button from './components/Button';

function App() {
  return (
    <div className='2xl:container mx-auto'>
      <Navbar />
      <Beranda />
      <Sejarah />
      <Profil />
      <Galeri />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
