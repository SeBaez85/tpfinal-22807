import './App.css';
import ShowEmployees from "./components/ShowEmployees/ShowEmployees"
import CreateEmployee from "./components/CreateEmployee/CreateEmployee"
import EditEmployee from "./components/EditEmployee/EditEmployee"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowEmployees/>}/>
        <Route path='/create' element={<CreateEmployee/>}/>
        <Route path='/edit/:id' element={<EditEmployee/>}/>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
