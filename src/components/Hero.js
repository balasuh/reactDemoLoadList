import photoGrid from '../assets/photo-grid.png'

function Hero() {
    return (
      <>
        <section className="hero-section">  
          <img className="photo-grid" src={photoGrid} alt="A grid with variety of lifestyle hobbies such as singing and yoga"/>
          <div className="hero-description">
            <h2 className="hero-description--header">Online Experiences</h2>
            <p className="hero-description--content">
              Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
          </div>
        </section>
    </>
    )
  }

  export default Hero;