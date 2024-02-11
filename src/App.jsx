import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./0/component/home/Home";
import NotFound from "./0/component/notFound/NotFound";
import Products from "./0/component/productsList/Poducts";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sharadmusic/" element={<Home />} />
        <Route path="/sharadmusic/list/:productname" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
