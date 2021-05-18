import './App.css';
import Hero from './components/hero'
import Nav from './components/nav'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {
    return (
      <div>
        <Nav />
        <Hero />
        <About />
        <Contact />

        <Footer />
      </div>
    );
}

export default App;
