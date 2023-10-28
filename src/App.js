import './App.css';
import lamp from './desk-lamp.png';
import chmi from './chmical.png';
import ball from './earthball.png';
import Heading from './hazem1/body';
import Cards from './hazem1/cards';
import Nav from './hazem1/navigation';
import Serving from './hazem1/services';
import Portfolio from './hazem1/portfolio';
import About from './hazem1/about';
import Contact from './hazem1/contact';

function App() {
  return (
    <>
    <Nav/>
    <Heading/>
    <Cards img={lamp} head='Tell Us Your Idea' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
    <Cards img={chmi} head='We Will Do All The Work' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
    <Cards img={ball} head='Your Product Is WorldWide' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
    <Serving/>
    <Portfolio/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
