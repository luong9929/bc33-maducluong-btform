import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BaiTapForm from './Page/BaiTapForm/BaiTapForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div>
           
      <BrowserRouter>

           <Routes>
                  <Route path='' element={<BaiTapForm/>}></Route>
           </Routes>

            


      </BrowserRouter>
      
      </div>
);

