// require('dotenv').config();
import NavBar from './components/NavBar.jsx'
import News from './components/News.jsx'

function App({category}) {

  return (
    <>
    <NavBar/>
    <h1 className='text-center my-5' style={{paddingTop:"40px"}}>Newsiast - Providing quality news everytime</h1>
    <News category={category}/>
    </>
  )
}

export default App
