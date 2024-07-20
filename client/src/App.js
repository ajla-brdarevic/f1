import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Drivers from './Pages/Drivers';
import Circuits from './Pages/Circuits';

function App() {

return (
<div className="App">
        <Router>
          <Routes>
            <Route path="/api/drivers" element={<Drivers />} />
            <Route path="/api/circuits" element={<Circuits />} />
          </Routes>
        </Router>
      </div>
);
}
export default App;