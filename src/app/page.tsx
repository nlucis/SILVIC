'use client';
import { NextPage } from 'next';
import { 
  useEffect, 
  useState 
} from 'react';


const App: NextPage = () => {

  

  return <>
    <div id='map-container' className='w-full h-full fixed'></div>
  </>;
}

// const App: NextPage = () => {
// const [ 
//     currentview, 
//     setCurrentView 
//   ] = useState<string>('streamentry');
//   // Switch View On Click (just for dev)
//   useEffect(() => {
//     const codexButton = document.getElementById('codex-button');
//     codexButton?.addEventListener('click', () => {
//       switch (currentview) {
//         case 'streamentry':
//           setCurrentView('streamentry');
//           break;
//       }
//     });
//   }, [ currentview, setCurrentView ]);
//   // View Management
//   const renderCurrentView = () => {
//     return <></>;
//   };
//   return renderCurrentView();
// }

export default App;
