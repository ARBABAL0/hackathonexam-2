

import React from "react";
import Herosection from "./components/herosection";
import Details from "./components/details";
import Admin from "./components/admin";
import Categories from "./components/categories";

import Payment from "./components/payment";

const Home = ()=>{
  return(
<div>
  <Herosection/>
  <Categories/>
  <Details/>
 <Admin/>
 <Payment/>
</div>
  )
}
export default Home;