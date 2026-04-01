import './App.css'
import Banner from './component/banner/Banner'
import Navbar from './component/navbar/Navbar'
import Services from './component/services/Services'
import Stack from './component/stack/Stack'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stack />
      <Services />
    </div>
  )
}

export default App