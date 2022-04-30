import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage/HomePage';
import Update from './Home/Update/Update';
import Login from './LoginPage/Login/Login';
import Register from './LoginPage/Register/Register';
import PageNotFound from './PageNotFound/PageNotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/manageitem' element={<PrivateRoute><ManageInventory></ManageInventory></PrivateRoute>}></Route>
        <Route path='/update' element={<PrivateRoute><Update></Update></PrivateRoute>}></Route>
        <Route path='/additem' element={<PrivateRoute><AddItem></AddItem></PrivateRoute>}></Route>
        <Route path='/myitems' element={<PrivateRoute><MyItems></MyItems></PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
