import { Home } from "./components/pages/Home/Home";
import {Route, Routes} from 'react-router-dom'
import { Header } from "./components/layouts/Header/Header";
import { UseState } from "./components/pages/UseState/UseState";
import { UseCustom } from "./components/pages/UseCustom/UseCustom";
import { UseEffect } from "./components/pages/UseEffect/UseEffect";
import { Tweets } from "./components/pages/Tweets/Tweets";

function App() {

  return (
    <div>
      <Header/>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/UseState" element={<UseState/>}></Route>
        <Route path="/UseCustom" element={<UseCustom/>}></Route>
        <Route path="/UseEffect" element={<UseEffect/>}></Route>
        <Route path="/RickAndMorty" element={<Home/>}></Route>
        <Route path="/Tweets" element={<Tweets/>}></Route>
        <Route path="*" element="Not Found"></Route>
      </Routes>
    </div>
  )
}

export default App;
