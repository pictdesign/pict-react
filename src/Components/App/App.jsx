import React from "react";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Projects from "../../Constants/Projects";
import Project from "../Project/Project";
import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const App = () => {

  function filter(value, filterType) {
    return value.type.some((type) => type === filterType);
  }
  
  const styleFilter = Projects.filter((project) => filter(project, 'style'));
  const webFilter = Projects.filter((project) => filter(project, 'web'));
  const presentationFilter = Projects.filter((project) => filter(project, 'presentation'));
  const graphicsFilter = Projects.filter((project) => filter(project, 'graphics'));
  const polygraphyFilter = Projects.filter((project) => filter(project, 'polygraphy'));

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="app__content" id="scroll">
            <Routes>
              <Route path="/" element={<Cards cards={Projects} />} />
              <Route path="style" element={<Cards cards={styleFilter} />} />
              <Route path="web" element={<Cards cards={webFilter} />} />
              <Route path="graphics" element={<Cards cards={graphicsFilter} />} />
              <Route path="presentation" element={<Cards cards={presentationFilter} />} />
              <Route path="polygraphy" element={<Cards cards={polygraphyFilter} />} />
              <Route path="about" element={<About />} />
              <Route exact path={'/:id'} element={
                  <>
                    <Project /> 
                    <Cards cards={Projects}/>
                  </>}
                />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
      </div>
    </Router>
    
  )
}

export default App;