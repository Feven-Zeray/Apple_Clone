
import Header from './Components/Header/Header'
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import "./commonResource/js/bootstrap"
import Footer from "./Components/Footer/Footer";

import { Route, Routes } from 'react-router-dom';
import Ipad from './Components/Pages/Ipad';
import Iphone from './Components/Pages/Iphone';
import Mac from './Components/Pages/Mac';
import Music from './Components/Pages/Music';
import Support from './Components/Pages/Support';
import Tv from './Components/Pages/Tv';
import cart from './Components/Pages/cart';
import Four04 from './Components/Pages/Four04';
import Search from './Components/Pages/Search';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import Mainsection from './Components/MainSection/Mainsection';
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import Watch from './Components/Pages/Watch';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Mainsection />} />
          <Route path="/" element={<YoutubeVideos />} />

          <Route path="Ipad" element={<Ipad />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="tv" element={<Tv />} />
          <Route path="Cart" element={<cart />} />
          <Route path="Search" element={<Search />} />
        </Route>
        <Route path="*" element={<Four04 />} />
      </Routes>
    </>
  );
}

export default App
