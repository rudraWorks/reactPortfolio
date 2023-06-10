import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Blog from "./components/Blog";

function App() {
  const pageObj = useSelector(state=>state.pageState)
  const modalOn = useSelector(state=>state.modalState)

  if(modalOn.on)  document.getElementById('---').style.filter="blur(5px)"
  else document.getElementById('---').style.filter="blur(0px)"

  return ( 
    <>
      <Navbar/>
      <div>
        {pageObj.home && <Home/>}
        {pageObj.about && <About/>}
        {pageObj.projects && <Projects/>}
        {pageObj.contact && <Contact/>}
        {pageObj.certif && <Certificates/>}
        {pageObj.blog && <Blog/>}
      </div>
    </>
  );
}

export default App;
