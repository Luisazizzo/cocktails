import "./index.scss";

const Hero = ({ setCategory }) => {
  const selectCategory = (value) => {
    setCategory(value);
  };
  return (
    <div className="Hero">
      <div className="trasparent"></div>
      <img
        className="Hero__img"
        src="https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg"
        alt="heroimage"
      />
      <ul className="category">
        <li onClick={() => selectCategory("Ordinary Drink")}>Ordinary</li>
        <li onClick={() => selectCategory("Cocktail")}>Cocktail</li>
        <li onClick={() => selectCategory("Shake")}>Shake</li>
        <li onClick={() => selectCategory("Cocoa")}>Cocoa</li>
        <li onClick={() => selectCategory("Shot")}>Shot</li>
        <li onClick={() => selectCategory("Punch / Party Drink")}>Punch</li>
        <li onClick={() => selectCategory("Coffee / Tea")}>Coffee</li>
        <li onClick={() => selectCategory("Other / Unknown")}>Other</li>
        <li onClick={() => selectCategory("Homemade Liqueur")}>Liqueur</li>
        <li onClick={() => selectCategory("Beer")}>Beer</li>
        <li onClick={() => selectCategory("Soft Drink")}>Soft Drink</li>
      </ul>
      <h2>Scegli tra le categorie</h2>
    </div>
  );
};

export default Hero;
