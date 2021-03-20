const Pokemon = ({ image, name }) => (
  <div className="pokemon">
    <h1>{name}</h1>
    <div className="pokemon__image">
      <img src={image} alt={name} />
    </div>
  </div>
);

export default Pokemon;
