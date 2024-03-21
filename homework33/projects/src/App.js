import React from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import Context from "./Context/Context";


function App() {
  return (
      <Context>
          <div className='app-container'>
              <RouterProvider router={router} />
          </div>
      </Context>
  );
}

export default App;
