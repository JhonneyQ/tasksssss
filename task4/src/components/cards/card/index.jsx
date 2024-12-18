import './02.css'; 


const Card = ({ products }) => {
  if (!Array.isArray(products)) {
      return <p>No products available</p>;
  }

  return (
      <div className="cards">
          {products.map((p) => (
              <div className="card" key={p.id}>
                  <img src={p.image} alt={p.name} width={200} />
                  <p>{p.id}</p>
                  <p className='name'>{p.name}</p>
                  <p>{p.prepTimeMinutes || 'N/A'}</p>
              </div>
          ))}
      </div>
  );
};

export default Card;
