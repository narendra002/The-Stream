import './App.scss'
import Navbar from './Component/Nav/Navbar'
import Home from "./Home/Home"
import Watch from "./Component/Watch/Watch"
import Movies from "./Component/Movies/Movies"
import Anime from "./Component/Anime/Anime"
import TvShows from "./Component/TvShows/TvShows"
import MovieMain from "./Component/Movies/MovieMain"
import Signin from "./Component/Autantication/Signin"
import Signup from "./Component/Autantication/Signup"
import Forgetpass from "./Component/Autantication/Forgetpass"

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

 function App() {
  return (
    <Router>
       <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Watch/:watchId" element={<Watch/>}/>
		<Route path="/Movies" element={<Movies/>}/>
	  <Route path="/TvShows" element={<TvShows/>}/>
   	<Route path="/Anime" element={<Anime/>}/>
   	<Route path="/MovieMain" element={<MovieMain/>}/>
   	<Route path="/Signin" element={<Signin/>}/>
   	<Route path="/Signup" element={<Signup/>}/>
    <Route path="/Forgetpass" element={<Forgetpass/>}/>

    </Routes>
 
    </Router>
  
  )
}
export default App;