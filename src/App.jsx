import { useEffect, useState } from 'react';
import Map from './Map';
import './App.css';

function App() {
  const [focus, setFocus] = useState();

  useEffect(() => {
    const map = document.querySelector('.leaflet-container');
    const poi1 = document.querySelector('#poi1');

    window.addEventListener('scroll', () => {
      if (window.scrollY > poi1.getBoundingClientRect().top) {
        map.style.maxWidth = '50%';
      } else {
        map.style.maxWidth = '100%';
      }
    });
  }, []);

  useEffect(() => {
    if (focus) scrollToId(focus);
  }, [focus])

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView();
  }

  return (
    <div className="App">
      <section className="flex items-center justify-center h-screen w-screen">
        <span className="font-bold text-5xl">The Map Demo</span>
      </section>

      <div>
        <Map focus={focus} setFocus={setFocus}></Map>

        <div>
          <div className="h-[1000px]"></div>

          <section className="flex flex-col gap-4 cursor-pointer ml-[50%] p-10 text-left hover:bg-indigo-100 transition-colors" id="poi1" onClick={() => setFocus('poi1')}>
            <h2 className="font-bold text-xl">1. This is a section with more information.</h2>

            <p>Sea, upon the appear own sixth second cattle. Sea multiply creeping divide seed. Midst which gathered good Upon divide female one created bring.</p>

            <p>Seed created you'll creepeth hath have Under dry one evening saw. Every, abundantly beginning form divided the itself replenish gathered female Hath created their subdue creature beginning yielding. You beginning fifth days god. Waters form may morning made can't night.</p>

            <p>Light spirit make fourth. Form called given whales multiply abundantly fish under, seed whose night tree moved fill every earth male their, own so creepeth male. A. Form appear. Dry appear sea moving void under form above.</p>
          </section>

          <section className="flex flex-col gap-4 cursor-pointer ml-[50%] p-10 text-left hover:bg-indigo-100 transition-colors" id="poi2" onClick={() => setFocus('poi2')}>
            <h2 className="font-bold text-xl">2. This is a section with more information.</h2>

            <p>Lesser gathered place their morning void seas sea appear male i fly wherein cattle had hath fruit image god hath subdue deep bring two, green. Have set under bring doesn&#39;t spirit. Our him open grass herb form above morning face second of the.</p>

            <p>Greater, from moved their of appear one give void i moveth also. Beginning winged light moving seed, it gathering appear midst. Moving gathering third sixth, over gathering i.</p>

            <p>Don&#39;t appear him. Female which you, sixth of saw brought our, moving to itself fowl grass the deep creeping. Green lights signs kind spirit gathered for yielding she&#39;d fifth.</p>
          </section>

          <section className="flex flex-col gap-4 cursor-pointer ml-[50%] p-10 text-left hover:bg-indigo-100 transition-colors" id="poi3" onClick={() => setFocus('poi3')}>
            <h2 className="font-bold text-xl">3. This is a section with more information.</h2>

            <p>Own darkness beginning darkness behold, creepeth is give can&#39;t green fish heaven lesser were sea she&#39;d moved divide very have evening kind set fill. Bearing very fowl good behold all wherein together seasons fifth. Fruitful seas darkness.</p>

            <p>There let beast two were shall they&#39;re dominion void shall she&#39;d is. Replenish divide divided from us set were that fifth gathering give wherein lesser our she&#39;d make light sixth first air wherein appear green from. Fowl had.</p>

            <p>All without place rule. Earth firmament had man. Seasons you image. God said first after that replenish creature called you&#39;ll his morning evening appear fly.</p>
          </section>

          <section className="flex flex-col gap-4 ml-[50%] p-10 text-left" id="poi4">
            <h2 className="font-bold text-xl">4. This is a section with more information.</h2>

            <p>Won&#39;t to, bring deep abundantly moving. Fourth creature days set whales. First were make. Behold were wherein open thing subdue all fruitful green form doesn&#39;t creeping. Air give fish male moving evening over place given. Deep man gathering.</p>

            <p>Which years, fowl first fifth. Tree gathered waters fish forth good gathering hath night void seas.</p>

            <p>Fourth, male greater seed yielding own deep greater first he appear be, seas. Itself night fish god, place said living. Doesn&#39;t multiply, face and. Is bearing. Beginning bring them. Tree is light seasons for two appear rule bring moving god i third were divided from open.</p>
          </section>
 
        </div>
      </div>
      <footer className="p-20">
        This is the footer.
      </footer>
    </div>
  );
}

export default App;
