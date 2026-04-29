import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
const router=createBrowserRouter([
  {
path:"/",
element:<Layout/>,
children:[
  {
path:"",
element:<Home/>
  },
  {
path:"About",
element:<About/>

  },
  {
    path:"Contact",
    element:<Contact/>
  },
  // {
  //   path:"user/:id",
  //   element:<User/>
  // }
  {
    path:"Github",
    element:<Github/>
  }
]
}
])
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Router path='/' element={<Layout/>}>
//     <Router path='' element={<Home/>}/>
//     <Router path='About' element={<About/>}/>
//     <Router path='Contact' element={<Contact/>}/>
    

//     </Router>
//   )
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
