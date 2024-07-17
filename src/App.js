// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Title from './components/title';
// import Experience from './components/experience';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Title />
//         <Experience />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
// import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout';

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Layout />
    </>
  );
}

export default App;
