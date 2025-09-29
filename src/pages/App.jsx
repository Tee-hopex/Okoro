import './App.css'

import image from './assets/react.svg'

const App = () => {

  return (
    <>
      <header>
          <img src={image} alt="react logo" />
          <nav className='nav-container'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
      </header>
    </>
  )
}

export default App
