import './App.css';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Galeri from './components/Galeri';
import Footer from './components/Footer';
import Sejarah from './components/Sejarah';
import Kegiatan from './components/Kegiatan';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Beranda />
      <Sejarah />
      <Kegiatan />
      <Galeri />
      <Footer />
    </div>
  );
}

export default App;
