import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/itemList" element={<ItemList />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
