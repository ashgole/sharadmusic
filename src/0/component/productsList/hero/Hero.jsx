const Hero = ({ productName }) => {
  let heroUrl = `https://ashgole.github.io/sharadmusic/assets/cover/${productName}.jpg`;
  return (
    <div className="h-96 flex justify-center items-center">
      <div
        style={{ backgroundImage: "url(" + heroUrl + ")" }}
        className="h-full w-full
        bg-no-repeat
        bg-center
        bg-cover
        "
      >
        <div className="h-full w-full flex flex-col justify-center items-start p-4 backdrop-blur-sm bg-black/30 text-white">
          <p className="titleFont">Explore {productName}</p>
          <p className="subTitleFont">
            Explore a vast collection of music at our store – a harmonious blend
            of genres awaits. Find your favorite tunes and discover new melodies
            for every mood. Shop now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
