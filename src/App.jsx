import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Skill from "./component/Skill";
import Main from "./component/Main";
import Project from "./component/Project";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />}>
          <Route path=":projectName" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
