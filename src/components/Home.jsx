import React from 'react';
import ProductListingWithCategory from './ProductListingWithCategory';

function Home() {
	return (
		<div>
			<div className="card bg-dark text-white">
				<img src="/assets/banner.jpg" className="card-img" alt="Banner" height="500px" />
				<div className="card-img-overlay d-flex flex-column justify-content-center">
					<div className="container">
						<h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
						<p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>
					</div>
				</div>
			</div>
			<ProductListingWithCategory />
		</div>
	);
}

export default Home;
