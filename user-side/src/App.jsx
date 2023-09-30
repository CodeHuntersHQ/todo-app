import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function App() {
  return (
    <div>
    <Navbar/>
    <Landing/>
    </div>
  )
}