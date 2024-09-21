import './App.css'
import Login from './components/LoginPage/Login'
import FooterEx from './components/Footer/FooterEx'
import HeaderComponent from './components/Header/HeaderComponent'
function App() {

  return (
    <>
<div className='container'>
    <div className='Header'><HeaderComponent ></HeaderComponent></div>
      <div><Login/></div>
      <div className='Footer'>  <FooterEx></FooterEx>  </div>
      </div>
    </>
  )
}

export default App
