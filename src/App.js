import React ,{Fragment} from 'react'; 
import Pregunta from './components/Pregunta'; 


function App() {
  return (
     <Fragment>
       <div className="container">
         <header>
           <h1>Gasto Semanal</h1>

            <div className="contenido-principal contenido">
            <Pregunta/>
            </div>
         </header>
       </div>
     </Fragment>
  );
}

export default App;
