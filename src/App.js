import './App.css';
import Hero from './components/hero'
import Nav from './components/nav'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Project from './components/project'

function App() {
    return (
      <div>
        <Nav />
        <Hero />
        <About />
        <Contact />
        <Project />
        <Footer />
      </div>
    );
}

export default App;
