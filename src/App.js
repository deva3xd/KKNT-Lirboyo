import './App.css';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Galeri from './components/Galeri';
import Footer from './components/Footer';
import Sejarah from './components/Sejarah';
import Kegiatan from './components/Kegiatan';
import Button from './components/Button';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Beranda />
      <Sejarah />
      <Kegiatan />
      <Galeri />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
