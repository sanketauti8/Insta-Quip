import logo from './logo.svg';
import './App.css';
import HomePage  from './pages/home';
import RoomPage from './pages/home/room';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
