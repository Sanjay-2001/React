import { useState } from "react";
import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { About, Home, Contact, User, Github } from "./components";
import { githubInfoLoader } from "./components/Github/githubInfoLoader";


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home />
  //       },
  //       {
  //         path: "about",
  //         element: <About/>
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact/>
  //       },
  //     ]
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route path="" element ={<Home/>} />
        <Route path="about" element ={<About/>} />
        <Route path="contact" element ={<Contact/>} />
        <Route path="user/:id" element={<User/>}/>
        <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
      </Route>

    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
