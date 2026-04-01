import './App.css'
import Banner from './component/banner/Banner'
import Bottom from './component/Bottom/Bottom'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Services from './component/services/Services'
import Stack from './component/stack/Stack'
import Steps from './component/steps/steps'


const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stack />
      <Services />
      <Steps />
      <Pricing />
      <Bottom />
    </div>
  )
}

export default App