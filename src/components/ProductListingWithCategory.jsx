import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'

function Product() {
	const [ data, setData ] = useState([]);
	const [ filter, setFilter ] = useState(data);
	const [ loading, setLoading ] = useState(false);
	let componentMounted = true;

	useEffect(() => {
		const getProducts = async () => {
			setLoading(false);
			const response = await fetch('https://fakestoreapi.com/products');
			// .then((response) => console.log('response is =>', response))
			// .catch((error) => console.log('error is =>', error));
			if (componentMounted) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
			}

			return () => {
				componentMounted = false;
			};
		};

		getProducts();
	}, []);

	const Loading = () => <Skeleton height="300px"/>;

	const filterProducts = category => {
		let formatedData = data.filter(fil => fil.category === category)
		setFilter(formatedData)
	}

	const ShowProducts = () => {
		return (
			<div>
				<div className="buttons d-flex justify-content-center mb-5 pb-5">
					<button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronic")}>Electronic</button>
				</div>
				<div className="row">
					{filter.map((product) => (
						<div className="col-12 col-md-3" key={product.id}>
							<div class="card h-100 text-center p-4">
								<img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
								<div class="card-body">
									<h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
									<p class="card-text lead fw-bold">${product.price}</p>
									<a href="/" className="btn btn-outline-dark m-2">
										Buy Now
									</a>
									<a href="/" className="btn btn-outline-dark m-2">
										Add To Cart
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div>
			<div>
				<div className="container my-5 py-5">
					<div className="row">
						<div className="col-12 mb-5">
							<h1 className="display-6 fw-bolder text-center">Latest Products</h1>
							<hr />
						</div>
					</div>
					<div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
