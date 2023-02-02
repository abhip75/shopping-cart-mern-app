import './Product.css';
import {Link} from 'react-router-dom';

const Product = ({productId, name, price, description, imageUrl, countInStock}) => {
	console.log('===>',productId);
	const pdtname = name;
	return (<div className="products">
		<img src={imageUrl} alt={name} className="product_image" />
		<div className="Product__info">
			<p className="info__name">{name}</p>
			<p className="info__description">{description}</p>
			<p className="info__price">Rs {price}</p>
			<p className="info__countInStock">In Stock - {countInStock}</p>
			<Link to={`/product/${productId}`} className="info__button">View</Link>
			<code>Product Id -{productId}</code>
		</div>
		</div>)
};
export default Product;