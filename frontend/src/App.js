import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './files/reservation';

function App() {
  return (
        <div className='App'>
          <BrowserRouter>            
            <Routes>
                {/* <Route path='/Navigate' element={<Navigate/>} /> */}
                <Route path='/' element={<Reservation/>} />
            </Routes>
          </BrowserRouter>
        </div>
    
  );
}

export default App;
