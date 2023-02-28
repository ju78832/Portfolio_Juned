import Topbar from "./component/topbar/Topbar.jsx";
import Intro from "./component/intro/Intro.jsx";
import Portfolio from "./component/portfolio/Portfolio.jsx";
import Works from "./component/works/Works.jsx";
import Testimonials from "./component/testimonials/Testimonials.jsx";
import Contact from "./component/contact/Contact.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./component/menu/Menu.jsx"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;