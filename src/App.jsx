import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Skill from "./component/Skill";
import Main from "./component/Main";
import Project from "./component/Project";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />}>
          <Route path=":projectName" element={<Project />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
