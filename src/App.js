import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage/HomePage';
import Update from './Home/Update/Update';
import Login from './LoginPage/Login/Login';
import Register from './LoginPage/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/myitems' element={
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
