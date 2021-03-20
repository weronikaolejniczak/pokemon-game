const Pokemon = ({ image, name }) => (
  <div className="pokemon">
    <div className="pokemon__name">{name}</div>
    <div className="pokemon__meta"></div>
    <div className="pokemon__image">
      <img src={image} alt={name} />
    </div>
    <div className="pokemon__attacks"></div>
  </div>
);

export default Pokemon;
