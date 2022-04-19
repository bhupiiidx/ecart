import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink to="/" className="navbar-brand fw-bold text-success fs-2">
						ECART
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/products" className="nav-link">
									Products
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="d-flex">
							<NavLink
								to="/login"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between"
								type="submit"
							>
								<i className="fa fa-user me-2" aria-hidden="true" />
								<span>Login</span>
							</NavLink>
							<NavLink
								to="/register"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between mx-2"
								type="submit"
							>
								<i className="fa fa-sign-in me-2" aria-hidden="true" />
								<span>Register</span>
							</NavLink>
							<NavLink
								to="/cart"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between"
								type="submit"
							>
								<i className="fa fa-cart-plus me-2" aria-hidden="true" />
								<span>Cart (0)</span>
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
