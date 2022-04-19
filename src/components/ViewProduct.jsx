import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';

function ViewProduct() {
	const { pid } = useParams();
	const [ product, setProduct ] = useState({});
	const [ isloading, setIsLoading ] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			const response = await fetch(`https://fakestoreapi.com/products/${pid}`);
			setProduct(await response.json());
			setIsLoading(false);
		};
		getProducts();
	}, []);

	const Loading = () => {
		return (
			<div className="col-12">
				<div className="row">
					<div className="col-md-6">
						<Skeleton height={600} />
					</div>
					<div className="col-md-6">
						<Skeleton height={50} />
						<Skeleton count={3} />
						<Skeleton height={50} />
						<Skeleton count={3} />
						<Skeleton height={100} count={7} />
					</div>
				</div>
			</div>
		);
	};
	const ShowProduct = () => (
		<div className="col-12">
			<div className="row">
				<div className="col-md-6">
					<img src={product.image} alt={product.title} style={{ height: '400px', width: '400px' }} />
				</div>

				<div className="col-md-6">
					<h4 className="text-uppercase text-black-50">{product.category}</h4>
					<h1 className="display-5">{product.title}</h1>
					<p className="lead fw-bolder">
						Rating {product.rating && product.rating.rate}
						<i className="fa fa-star" />
					</p>
					<h3 className="display-6 fw-bold my-4">${product.price}</h3>
					<p className="lead">{product.description}</p>
					<button type="button" class="btn btn-outline-dark py-2 px-4">
						Add To Cart
					</button>
					<NavLink className="btn btn-dark ms-2 px-3 py-2" to="/cart">
						Go To Cart
					</NavLink>
				</div>
			</div>
		</div>
	);

	return (
		<div>
			<div className="container py-5">
				<div className="row py-5">{isloading ? <Loading /> : <ShowProduct />}</div>
			</div>
		</div>
	);
}

export default ViewProduct;
