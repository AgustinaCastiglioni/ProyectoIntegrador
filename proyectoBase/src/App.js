import Header from './components/Headers';
import Tarjeta from './components/Tarjetas';
import InfoRick from './rickandmorty.json';

function App() {
  return (
    <div className="App">
       <Header/>
       <div class="tarjetas">
       <div class="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
     
      {
        InfoRick.map(function(tarjetas, idx){
          return <Tarjeta key={idx} infoTarjetas={tarjetas}/>
        })
      }
    </div>
    </div>
    </div>
  

     
  );
}


export default App;
