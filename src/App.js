import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  const pageObj = useSelector(state=>state.pageState)
  return (
    <>
      <Navbar/>
      <div>
        {pageObj.home && <Home/>}
        {pageObj.about && <About/>}
        {pageObj.projects && <Projects/>}
        {pageObj.contact && <Contact/>}
        {pageObj.certif && <Certificates/>}
      </div>
    </>
  );
}

export default App;
