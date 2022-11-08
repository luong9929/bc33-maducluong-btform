import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider} from "react-redux"
import {store} from "./Redux/ConfigStore.jsx"
import BaiTapForm from './Page/BaiTapForm/BaiTapForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div>
      <Provider store={store}>
      <BrowserRouter>

           <Routes>
                  <Route path='' element={<BaiTapForm/>}></Route>
           </Routes>

            


      </BrowserRouter>
      </Provider>   
      </div>
);

