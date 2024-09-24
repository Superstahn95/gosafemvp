import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
function Home({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) {
  return (
    <>
      <Navbar />
      <Hero
        heroCount={heroCount}
        heroData={heroData}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
      <Background playStatus={playStatus} heroCount={heroCount} />
    </>
  );
}

export default Home;
