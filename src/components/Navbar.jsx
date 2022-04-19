import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a href="/" className="navbar-brand fw-bold text-success fs-2">
						ECART
					</a>
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
								<a href="/" className="nav-link active" aria-current="page">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a href="/" className="nav-link">
									Products
								</a>
							</li>
							<li className="nav-item">
								<a href="/" className="nav-link">
									About
								</a>
							</li>
							<li className="nav-item">
								<a href="/" className="nav-link">
									Contact
								</a>
							</li>
						</ul>
						<div className="d-flex">
							<a
								href="/"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between"
								type="submit"
							>
								<i class="fa fa-user me-2" aria-hidden="true" />
								<span>Login</span>
							</a>
							<a
								href="/"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between mx-2"
								type="submit"
							>
								<i class="fa fa-sign-in me-2" aria-hidden="true" />
								<span>Register</span>
							</a>
							<a
								href="/"
								className="btn btn-outline-dark d-flex align-items-center justify-content-between"
								type="submit"
							>
								<i class="fa fa-cart-plus me-2" aria-hidden="true" />
								<span>Cart (0)</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
