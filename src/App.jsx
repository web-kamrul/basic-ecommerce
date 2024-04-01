import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VarifyPage from "./pages/VarifyPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import ValidationHelper from "./utility/ValidationHelper.js";
import PageNotFound from "./pages/PageNotFound.jsx";



const App = () => {

    if (ValidationHelper.isLogin()){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductListPage/>}/>
                    <Route path='/cart-list/' element={<CartListPage/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductListPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/varify' element={<VarifyPage/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

};

export default App;