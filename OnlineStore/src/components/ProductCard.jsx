import './ProductCard.css';

function ProductCard({name, price, image, description}) {
    return(
        <div className="product-card">
            <img className="product-image" src={image} />
            

            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;