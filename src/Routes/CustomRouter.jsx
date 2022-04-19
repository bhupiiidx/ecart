import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Cart from '../components/Cart';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Product from '../components/ProductListingWithCategory';
import ViewProduct from '../components/ViewProduct';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';

function CustomRouter() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/products' element={<Product />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/product/:pid' element={<ViewProduct />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
}

export default CustomRouter;
