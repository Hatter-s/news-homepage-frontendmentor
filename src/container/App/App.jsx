import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
  const [ displayNavbarItems, setDisplayNavbarItems ] =  useState(window.innerWidth >= 992);
  const [ displaySidebar, setDisplaySidebar ] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => setDisplayNavbarItems(window.innerWidth >= 992));
  }, []);

  return (
    <div className="App">
    <nav className="navbar">
      <div className='md:container md:mx-auto mx-4 flex justify-between my-4' >
        <a href="/" className='brand'>
          <img src="src/assets/images/logo.svg" alt="brand" />
        </a>

        { displayNavbarItems && <div className='collapsed flex-1'>
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
        </div>}

        <button className= "block" onClick={() => setDisplaySidebar(true)}>
          <img src={'src/assets/images/icon-menu.svg'} />
        </button>
      </div>
    </nav>

    { displaySidebar && <div className='sidebar flex-1 flex flex-col fixed w-[60%]max-w[250px] p-4 top-0 right-0'>
    <button className= "block justify-self-end" onClick={() => setDisplaySidebar(false)}>
          <img src={'src/assets/images/close-icon-menu.svg'} />
        </button>
          <ul className='sidebar-items flex flex-col items-start justify-center gap-6'>
            <li className='side-item'>
              <a href='/' className='home side-link'>
                Home
              </a>
            </li>
            <li className='side-item'>
              <a href='/' className='home side-link'>
                New
              </a>
            </li>
            <li className='side-item'>
              <a href='/' className='home side-link'>
                Popular
              </a>
            </li>
            <li className='side-item'>
              <a href='/' className='home side-link'>
                Trending
              </a>
            </li>
            <li className='side-item'>
              <a href='/' className='home side-link'>
              Categories
              </a>
            </li>
          </ul>
        </div>}
  
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
