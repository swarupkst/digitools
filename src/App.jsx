import './App.css'
import Banner from './component/banner/Banner'
import Bottom from './component/Bottom/Bottom'
import Footer from './component/footer/Footer'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Services from './component/services/Services'
import Stack from './component/stack/Stack'
import Steps from './component/steps/steps'
import { Suspense, useState } from 'react';

const fetchCost = async ()=> {
  const res = await fetch ("/data.json")
  return res.json();
}

const App = () => {
  const CostPromise = fetchCost();
  const [carts, setCarts] = useState ([])

  return (
    <div className="pt-20">
      <Navbar carts={carts}/>
      <Banner />
      <Stack />
      <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
      <Services CostPromise = {CostPromise} carts={carts} setCarts={setCarts} />
      </Suspense>
      <Steps />
      <Pricing />
      <Bottom />
      <Footer />

            
    </div>
  )
}

export default App