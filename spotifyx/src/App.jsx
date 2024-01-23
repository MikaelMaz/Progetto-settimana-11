import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import SideBar from './Components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './Components/Player';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
    <Container fluid style={{minHeight: '100vh'}}>
    <Row>
    <SideBar className='col-2' />
    <div className='col-10'>
    <Home/>
    <Player />
    </div>
    </Row>
    <Routes>

    </Routes>
    </Container>

    </BrowserRouter>
);
}

export default App;
