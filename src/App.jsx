import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VarifyPage from "./pages/VarifyPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductListPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/varify' element={<VarifyPage/>}/>
                <Route path='/cart-list/' element={<CartListPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;