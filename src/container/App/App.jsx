import { useState, useEffect } from 'react';
import './App.css';
import logo from '../../assets/images/logo.svg';
import iconMenu from '../../assets/images/icon-menu.svg';
import iconMenuClose from '../../assets/images/icon-menu-close.svg';
import web3Desktop from '../../assets/images/image-web-3-desktop.jpg';
import web3Mobile from '../../assets/images/image-web-3-mobile.jpg';
import retroPcs from '../../assets/images/image-retro-pcs.jpg';
import topLaptops from '../../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../../assets/images/image-gaming-growth.jpg';


function App() {
  const [ isBigWidth, setIsBigWidth ] = useState(window.innerWidth >= 992);
  const [ displaySidebar, setDisplaySidebar ] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => setIsBigWidth(window.innerWidth >= 992));
  }, []);

  return (
    <div className="App">
      <nav className="navbar my-8 lg:mb-10 lg:mt-16">
        <div className='md:container md:mx-auto mx-4 flex justify-between' >
          <a href="/" className='brand'>
            <img className="w-14 lg:w-20" src={logo} alt="brand" />
          </a>

          {isBigWidth && <div className='collapsed flex-1 flex items-center justify-end'>
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

          <button className= "block lg:hidden" onClick={() => setDisplaySidebar(true)}>
            <img src={iconMenu} />
          </button>
        </div>
      </nav>

      { displaySidebar && <div className='flex justify-end items-stretch fixed inset-0 bg-very-dark-blue/60'>
        <div className="p-6 fixed w-[70%] max-w[250px] bg-off-white h-full">
          <div className="flex flex-row items-center justify-end">
            <button className= "block mb-16" onClick={() => setDisplaySidebar(false)}>
              <img src={iconMenuClose} />
            </button>
          </div>
          
          <ul className='sidebar-items flex flex-col items-start justify-center gap-6 text-lg font-bold'>
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
        </div>
      </div>}
  
      <main className="mx-4 md:mx-auto md:container ">
        <section className="flex flex-col gap-x-8 lg:flex-row">
          <div className='big-content flex flex-col gap-6 mb-16 grow-[1.5]'>
            <img src={isBigWidth ? web3Desktop : web3Mobile} alt="header-img" />
            <div className="flex flex-col lg:flex-row gap-x-10">
              <h1 className="font-extrabold text-5xl flex-1 text-very-dark-blue mb-8">
              The Bright Future of Web 3.0?
              </h1>
              <div className="flex-1">
                <p className='content mb-8'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
                </p>

                <button 
                  className='text-off-white bg-soft-red py-4 px-0 inline-block w-[225px] uppercase font-bold text-xl tracking-widest' 
                  onClick={() => {location.href = '/'}}>
                Read more
                </button>
              </div>  
            </div>
            
            
          </div>
          <div className="p-4 lg:p-8 bg-very-dark-blue text-off-white mb-16 grow-[1]">
            <h2 className="text-soft-orange text-4xl font-extrabold mb-8">New</h2>
            <div className="my-8 flex flex-col gap-4">
              <h3 className="font-bold text-2xl">Hydrogen VS Electric Cars</h3>
              <p className="text-grayish-blue">Will hydrogen-fueled cars ever catch up to EVs?</p>
              <hr className="text-grayish-blue" />
            </div>
            <div className="my-8 flex flex-col gap-4">
              <h3 className="font-bold text-2xl">The Downsides of AI Artistry</h3>
              <p className="text-grayish-blue">What are the possible adverse effects of on-demand AI image generation?</p>
              <hr className="text-grayish-blue" />
            </div>
            <div className="mt-8 mb-4 flex flex-col gap-4">
              <h3 className="font-bold text-2xl">Is VC Funding Drying Up?</h3>
              <p className="text-grayish-blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>
      
        <section className="flex flex-col gap-y-10 gap-x-20 lg:flex-row lg:justify-between">
          <div className="flex flex-row justify-center gap-6 max-w-[350px]">
            <img className="w-[100px]" src={retroPcs} />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-4xl font-extrabold text-grayish-blue">01</h2>
              <h3 className="text-xl text-very-dark-blue font-extrabold">Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 max-w-[350px]">
            <img className="w-[100px]" src={topLaptops} />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-4xl font-extrabold text-grayish-blue">02</h2>
              <h3 className="text-xl text-very-dark-blue font-extrabold">Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 max-w-[350px]">
            <img className="w-[100px]" src={gamingGrowth} />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-4xl font-extrabold text-grayish-blue">03</h2>
              <h3 className="text-xl text-very-dark-blue font-extrabold">The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main> 
    </div>
  )
}

export default App
