import logo from './logoloja.png';
import './App.css';
import Rodape from './rodape';
import Slogan from './slogan';

import {lazy, Suspense} from 'react';

const Menu =lazy(() => import('./menu'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Suspense fallback={<p>Carregando...</p> }>
          <Menu />
        </Suspense>
      

        <img src={logo} className="App-logo" alt="logo" />
       
      //rederiza o slogan e rodape
        <Slogan />
    
        <Rodape ano ='2021'/> 

      </header>
    </div>
  );
}

export default App;
