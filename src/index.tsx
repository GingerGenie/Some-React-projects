import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root';

import EasyCounter from './projects/Easy Counter';
import EasyThermometer from './projects/Easy Thermometer/easy-thermometer';

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
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);