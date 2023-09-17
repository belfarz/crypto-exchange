import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CoinRanking from './components/CoinRanking';
import MoonSheet from './pages/MoonSheet';
import MoonPulse from './pages/MoonPulse';
import Scan from './pages/Scan';
import AddCoin from './pages/AddCoin';
import Promote from './pages/Promote';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<CoinRanking />}/> 
      <Route path='moonsheet' element={<MoonSheet />} />
      <Route path='moonpulse' element={<MoonPulse />} />
      <Route path='scan' element={<Scan />} />
      <Route path='addcoin' element={<AddCoin />} />
      <Route path='promote' element={<Promote />} />
    </Route>
        
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
