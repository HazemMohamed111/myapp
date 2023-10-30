import './App.css';
import Heading from './hazem1/body';
import Nav from './hazem1/navigation';
import Serving from './hazem1/services';
import Portfolio from './hazem1/portfolio';
import About from './hazem1/about';
import Contact from './hazem1/contact';
import Dnav from './hazem1/cards';
// import Serve from './hazem1/Serve';

function App() {
  return (
    <>
    <Nav/>
    <Heading/>
    <Dnav/>
    {/* <Serve/> */}
    <Serving/>
    <Portfolio/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
