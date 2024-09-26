import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
function Home({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
  user,
  setUser,
}) {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Hero
        heroCount={heroCount}
        heroData={heroData}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        user={user}
        setUser={setUser}
      />
      <Background playStatus={playStatus} heroCount={heroCount} />
    </>
  );
}

export default Home;
