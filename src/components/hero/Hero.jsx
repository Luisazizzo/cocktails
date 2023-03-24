import styled from "styled-components";

const HeroDiv = styled.div`
  position: relative;
`;

const HeroTrasparent = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 500px;
  background-color: #00000072;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroImg = styled.img`
  margin-top: 80px;
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const HeroCategory = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  gap: 30px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  list-style: none;

  & li {
    cursor: pointer;
    font-weight: bold;
    transition: all 0.35s;
  }
`;

const HeroH2 = styled.h2`
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const HeroDivButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%);
`;

const HeroButton = styled.button`
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  background-color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
`;

const Hero = ({ setCategory, setFormPrenota }) => {
  const selectCategory = (value) => {
    setCategory(value);
  };

  const openModalForm = () => {
    setFormPrenota(true);
  };

  return (
    <HeroDiv>
      <HeroTrasparent></HeroTrasparent>
      <HeroImg src="https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg" />
      <HeroCategory>
        <li onClick={() => selectCategory("Ordinary Drink")}>Ordinary</li>
        <li onClick={() => selectCategory("Cocktail")}>Cocktail</li>
        <li onClick={() => selectCategory("Shake")}>Shake</li>
        <li onClick={() => selectCategory("Coffee / Tea")}>Coffee</li>
        <li onClick={() => selectCategory("Other / Unknown")}>Other</li>
        <li onClick={() => selectCategory("Cocoa")}>Cocoa</li>
        <li onClick={() => selectCategory("Shot")}>Shot</li>
        <li onClick={() => selectCategory("Punch / Party Drink")}>Punch</li>
        <li onClick={() => selectCategory("Homemade Liqueur")}>Liqueur</li>
        <li onClick={() => selectCategory("Beer")}>Beer</li>
        <li onClick={() => selectCategory("Soft Drink")}>Soft Drink</li>
      </HeroCategory>
      <HeroH2>Scegli tra le categorie</HeroH2>
      <HeroDivButton>
        <p>Prenota il tuo tavolo:</p>
        <HeroButton onClick={openModalForm}>Prenota</HeroButton>
      </HeroDivButton>
    </HeroDiv>
  );
};

export default Hero;
