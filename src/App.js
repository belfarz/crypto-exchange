import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CoinRanking from './components/CoinRanking';
import MoonSheet,{loader as MoonCoinRankingLoader} from './pages/MoonSheet';
import Scan,{loader as CoinRankingLoader} from './pages/Scan';
import AddCoin from './pages/AddCoin';
import Promote from './pages/Promote';
import CoinAdd,{action as coinAction} from './pages/CoinAdd';
import PresaleAdd from './pages/PresaleAdd';
import CoinDetails,{loader as CoinDetailsLoader} from './components/CoinDetails';
import Bronze from './pages/promotePackeges/Bronze';
import Silver from './pages/promotePackeges/Silver';
import Gold from './pages/promotePackeges/Gold';
import Diamond from './pages/promotePackeges/Diamond';


function App() {

  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}  >
      <Route index element={<CoinRanking />}/> 
      <Route path='coin/:id' element={<CoinDetails />} loader={CoinDetailsLoader}/>
      <Route path='moonsheet' element={<MoonSheet />} loader={MoonCoinRankingLoader} />
      <Route path='scan' element={<Scan />} loader={CoinRankingLoader} />
      <Route path='addcoin' element={<AddCoin />} >
        <Route 
          index 
          element={<CoinAdd />}
          action={coinAction}
        />
        <Route path='presale' element={<PresaleAdd />} />
      </Route>
      <Route path='promote' element={<Promote />} >
        <Route index element={<Bronze />}/>
        <Route path='silver' element={<Silver />}/>
        <Route path='gold' element={<Gold />}/>
        <Route path='diamond' element={<Diamond />}/>
      </Route>
    </Route>
        
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
