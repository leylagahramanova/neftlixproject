import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import QA from './components/QA.jsx';
import Join from './components/Join.jsx';
import Cards from './components/Cards.jsx';
import { Carousel } from './components/Carousel.jsx';

function App() {
  return (
    <div className="App bg-black  ">
      <div className="container" style={{margin:'auto'}}>
      <Navbar />
      </div>
 <Carousel className="px-7 py-4"style={{margin:'5rem'}}/>
      <div className="container" style={{margin:'auto'}}> 
     
      
      <Cards />
      <Join />
      <QA />
      <Footer />
      </div>
    </div>
  );
}

export default App;
