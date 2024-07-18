import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Drivers from './Pages/Drivers';

function App() {

return (
<div className="App">
        <Router>
          <Routes>
            <Route path="/api/drivers" element={<Drivers />} />
          </Routes>
        </Router>
      </div>
);
}
export default App;