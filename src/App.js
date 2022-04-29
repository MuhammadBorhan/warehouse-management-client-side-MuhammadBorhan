import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage/HomePage';
import Login from './LoginPage/Login/Login';
import Register from './LoginPage/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
