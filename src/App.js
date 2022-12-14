import './App.css';
import logo from './images/mid.svg';
// import logo from './logo.svg';
import start from './images/first.svg';
import end from './images/end.svg';
import React from 'react';

function App() {
  const [state,setState]=React.useState()
  console.log({state})
  return (
    <>
      <div className="mainBody">
        <div className='content'>
          <div>
            <img src={start} width={100} className='firstPic  animate__fadeInLeft animate__animated animate__delay-2s' alt='' />
            <img src={logo} className="App-logo" alt="logo" />
            &nbsp;
            <img src={end} width={100} className='secondPic animate__fadeInRight animate__animated animate__delay-2s' alt='' />
          </div>
          <div className='words-body animate__fadeIn  animate__animated animate__delay-3s'>

            <ul onMouseEnter={()=>setState(1)} onMouseLeave={()=>setState()}>
              {'DIGITALISIERUNG'.split('')?.map((i) => <li>{i}</li>)}
            </ul>
            <ul onMouseEnter={()=>setState(2)} onMouseLeave={()=>setState()}>
              {'VISUALISIERUNG'.split('')?.map((i) => <li>{i}</li>)}
            </ul>
            <ul onMouseEnter={()=>setState(3)} onMouseLeave={()=>setState()}>
              {'3D-DRUCK'.split('')?.map((i) => <li>{i}</li>)}
            </ul>




          </div>
          
          <div>

          </div>
          <div>
         {state &&  <p className='descText animate__fadeIn  animate__animated'>
          
          {state ===1 && `Haben Sie alte und unhandliche Papierpläne und müssen diese den Wohninteressenten präsentieren? Oder stehen Umbauten, Renovationen oder Sanierungen an und dem Architekt fehlt die Grundlage für eine saubere Abwicklung? 
Wir digitalisieren so, dass eine problemlose Weiterbearbeitung in Ihrem CAD möglich ist. Am Schluss erhalten Sie von uns allen Plänen (als Fotodatei und) als DWG – Datei.`}
          {state ===2 && `3D-Visualisierungen haben sich nicht nur in der Produktentwicklung, sondern vor allem in der Architektur und im Immobilienverkauf durchgesetzt. Betrachter haben so die Chance, sich ein authentisches Bild vom jeweiligen Objekt zu machen. 
Nicht zu verkennen ist nämlich die Tatsache, dass nicht jeder Mensch mit der Fähigkeit zum räumlichen Sehen ausgestattet ist. Fügen Sie in Ihre Darstellen die dritte Dimension ein, erleichtern Sie das Verständnis und vergrößern Ihre Chancen. 
Ein Blick auf Immobilienportale zeigt, dass zumindest eine räumliche Ansicht der jeweiligen Wohnung oder des Hauses längst zum Standard gehört.
`}
          {state ===3 && `Genau wie bei Visualisierungen geht es auch bei Architekturmodellen darum, Ihrem Kunden ein Gefühl für sein Objekt zu vermitteln. 
Nicht jeder kann einen Bauplan lesen oder einen Situationsplan richtig interpretieren. Das 3D-Modell lässt sich anfassen, drehen und bewegen und hilft dem Kunden, sich sein Objekt besser vorzustellen. 
3D Druck eignet sich ideal für Architekturprojekte: Modelle lassen sich schnell und kostengünstig für Präsentationen oder Planungen herstellen. 
Neben Modellen von Gebäuden oder sogar detaillierten Räumen sind auch großflächige Landschafts- und Geländemodelle sowie 3D Reliefe häufig von Architekten gedruckte Objekte. 
`}
          
           </p>}
          </div>
         
        </div>

        <a className='footertext' href="mailto:info@3dvortex.ch">info@3dvortex.ch</a>
      </div>
      <div>

      </div>
    </>
  );
}

export default App;
