import About from "./About";
import Origin from "./Originators";

export default function Home() {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                {/* <h1>Easy{' '}Lend</h1> */}
                {/* <p>Easy for Business, Easy for Everyone!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Origin />
    </header>
    
  )
}
