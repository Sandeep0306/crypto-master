import Header from './Components/Header';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
    <div className='min-h-screen text-white flex-col justify-centre bg-custom'>
    <Header/>
   <Routes>
   <Route path="/" Component={Homepage} exact/> 
    <Route path="/coins/:id" Component={CoinPage} exact/>
   </Routes>
    
    
    </div>
    </BrowserRouter>
  

  )
   
}

export default App;
