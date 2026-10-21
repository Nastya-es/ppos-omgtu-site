import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './_pages_old/Home';
import News from './_pages_old/News';
import Projects from './_pages_old/Projects';
import Departments from './_pages_old/Departments';
import About from './_pages_old/About';
import Contacts from './_pages_old/Contacts';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="projects" element={<Projects />} />
          <Route path="departments" element={<Departments />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;