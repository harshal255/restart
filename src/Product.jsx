function Product(data) {
    console.log(data)
    const { img, name, desc, price } = data.data;
    return (
        <div>
            <img src={img} alt="products" />
            <h4>{name}</h4>
            <p>{desc}</p>
            <h4>{price}</h4>
        </div>
    );
}

export default Product