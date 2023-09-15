import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CoinRanking from './components/CoinRanking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
           <Route index element={<CoinRanking />}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
