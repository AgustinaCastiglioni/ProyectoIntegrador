import Header from './components/Headers';
import Tarjeta from './components/Tarjetas';
import InfoRick from './rickandmorty.json';
function App() {
  return (
    <div className="App">
       <Header/>
    <div class="uk-child-width-1-3@m" uk-grid>
      {
        InfoRick.map(function(tarjetas, idx){
          return <Tarjeta key={idx} infoTarjetas={tarjetas}/>
        })
      }
    </div>
    </div>

     
  );
}


export default App;
