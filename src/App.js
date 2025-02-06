import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Galeri from './components/Galeri';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Galeri />
      <Footer />
    </div>
  );
}

export default App;
