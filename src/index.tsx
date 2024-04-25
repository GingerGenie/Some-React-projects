import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root';
import './Root.css'

import EasyCounter from './projects/Easy Counter/Easy Counter';
import EasyThermometer from './projects/Easy Thermometer/easy-thermometer';
import RegistrationForm from './projects/Basic Registration Form/App';
import ReduxStore from './projects/Redux Store/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "EasyCounter",
    element: <EasyCounter/>
  },
  {
    path: "EasyThermometer",
    element: <EasyThermometer/>
  },
  {
    path: "ReduxStore",
    element: <ReduxStore/>,
  },
  {
    path: "BasicRegistrationForm",
    element: <RegistrationForm/>,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);