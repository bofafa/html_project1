import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Serivces from './components/Serivces';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
     <About />
     <Serivces/>
     <Tours />
     <Footer />
    </div>
  );
}

export default App;