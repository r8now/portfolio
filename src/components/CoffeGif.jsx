import myGif from "./assets/coffe.gif";

const CoffeGif = () => {
  return (
    <div className="rounded-lg">
      <img src={myGif} alt="coffe" className="rounded-full " />
    </div>
  );
};

export default CoffeGif;
