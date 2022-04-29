import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage/HomePage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
