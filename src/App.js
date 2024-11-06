
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerNav from "./components/drawerNav";
import Home from "./components/pages/home/home";
import Favourite from "./components/pages/favourite/favourite";
import RecentSearch from "./components/pages/recentSearch/recentSearch";


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/favourite' exact element={<Favourite />}></Route>
          <Route path='/recentSearch' exact element={<RecentSearch />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}
