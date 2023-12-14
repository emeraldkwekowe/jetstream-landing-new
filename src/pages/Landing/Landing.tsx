import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Jetvision from "./components/Jetvision/Jetvision";
import WhatSetsUsApart from "./components/WhatSetsUsApart/WhatSetsUsApart";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

function Landing() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <Jetvision />
      <WhatSetsUsApart />
    </main>
  );
}

export default Landing;
