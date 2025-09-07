import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import RecipesPage from "./RecipesPage";
import LemonRice from "./recipes/LemonRice";
import ChakraPongal from "./recipes/ChakraPongal";
import IdliSambarChutney from "./recipes/IdliSambarChutney";
import MilletUpma from "./recipes/MilletUpma";
import AvalLaddu from "./recipes/AvalLaddu";
import RichCreamyPayasam from "./recipes/RichCreamyPayasam";
import KuzhiPaniyaram from "./recipes/KuzhiPaniyaram";
import VazhaipooVadai from "./recipes/VazhaipooVadai";
import Kozhukattai from "./recipes/Kozhukattai";
import RagiKali from "./recipes/RagiKali";
import TamarindRice from "./recipes/TamarindRice";
import Idiyappam from "./recipes/Idiyappam";
import MuttonKolaUrundai from "./recipes/MuttonKolaUrundai";
import Uttapam from "./recipes/Uttapam";
import KarupuKavuniRiceKanji from "./recipes/KarupuKavuniRiceKanji";




function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/lemonrice" element={<LemonRice />} />
        <Route path="/chakrapongal" element={<ChakraPongal />} />
        <Route path="/idlisambarchutney" element={<IdliSambarChutney />} />
        <Route path="/milletupma" element={<MilletUpma />} />
        <Route path="/avalladdu" element={<AvalLaddu />} />
        <Route path="/richcreamypayasam" element={<RichCreamyPayasam />} />
        <Route path="/kuzhipaniyaram" element={<KuzhiPaniyaram />} />
        <Route path="/vazhaipoovadai" element={<VazhaipooVadai />} />
        <Route path="/kozhukattai" element={<Kozhukattai />} />
        <Route path="/ragikali" element={<RagiKali />} />
        <Route path="/tamarindrice" element={<TamarindRice />} />
        <Route path="/idiyappam" element={<Idiyappam />} />
        <Route path="/muttonkolaurundai" element={<MuttonKolaUrundai />} />
        <Route path="/uttapam" element={<Uttapam />} />
        <Route path="/karupukavuniricekanji" element={<KarupuKavuniRiceKanji />} />

      </Routes>
    </Router>
  );
}
export default App;