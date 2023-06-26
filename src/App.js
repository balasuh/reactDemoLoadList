// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Footer from './components/Footer';
import Card from './components/Card';
import data from './data';


function App() {
  
  
  const cardArray=data.map((item, index) => {
    return(
      <Card
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        {/* <Footer /> */}
        <section className="card-section">
          {cardArray}
        </section>
    </div>
  );
}

export default App;
