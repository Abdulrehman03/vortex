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
        <div>
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

          </div>
         
        </div>
 {state&&  <p className='descText animate__fadeIn  animate__animated'>Lorem Ipsum is simply dummy text of
           the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,</p>}
        <a className='footertext' href="mailto:info@3dvortex.ch">info@3dvortex.ch</a>
      </div>
      <div>

      </div>
    </>
  );
}

export default App;
