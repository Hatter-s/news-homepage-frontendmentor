import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <nav className="navbar">
      <div className='container mx-auto flex items-center' >
        <a href="/" className='brand'>
          <img src="/assets/images/logo.svg" alt="brand" />
        </a>

        <div className='collapsed flex-1'>
          <ul className='navitems flex justify-end items-center gap-6'>
            <li className='nav-item'>
              <a href='/' className='home nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='home nav-link'>
                New
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='home nav-link'>
                Popular
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='home nav-link'>
                Trending
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='home nav-link'>
              Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  <main>
    <section className='big-content'>
      <img src="/" alt="header-img" />
      <h1>
      The Bright Future of Web 3.0?
      </h1>
      <p className='content'>
      We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
But is it really fulfilling its promise?
      </p>

      <button 
        className='' 
        onClick={() => {location.href = '/'}}>
      Read more
      </button>
    </section>
  </main>


  New 

  Hydrogen VS Electric Cars
  Will hydrogen-fueled cars ever catch up to EVs?

  The Downsides of AI Artistry
  What are the possible adverse effects of on-demand AI image generation?

  Is VC Funding Drying Up?
  Private funding by VC firms is down 50% YOY. We take a look at what that means.

  01
  Reviving Retro PCs
  What happens when old PCs are given modern upgrades?

  02
  Top 10 Laptops of 2022
  Our best picks for various needs and budgets.

  03
  The Growth of Gaming
  How the pandemic has sparked fresh opportunities.
    </div>
  )
}

export default App
