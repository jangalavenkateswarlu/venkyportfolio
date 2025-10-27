// import logo from './logo.svg';
import './App.css';
import Navbar from './assets/components/navbar';
import Intro from './intro/intro';
import Skills from './skills/skills';
import Works from './works/work';
import Certificates from './certificates/certificates';
import Contact from './contact/contact';
import Footer from './Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
