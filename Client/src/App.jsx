import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TheHome from './components/TheHome.jsx';
import TheAbout from './components/TheAbout.jsx';
import TheBar from './components/TheBar.jsx';
import Landing from './components/Landing.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <TheBar />
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<TheAbout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
