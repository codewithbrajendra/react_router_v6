import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import { Layout } from "./component/layout/Layout";
import "./App.css"

const App = () => {


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/movie",
//     element: <Movie />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   }
// ]);

//This is the old way to create router object and still it is using in some application.
//It's up to developer to choose where new way or old way.
//Note :- Instead of <Route><Route path... /> </Route>, we can directly use <><Route path... /></>
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie" element={<Movie />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );


//Below is the example of Layout for application where we decide which components should be display every time like
//Header and Footer of an application and which component should be display on execute url. 
//For example in the Layout component we specified Header and Footer but in between we use Outlet component from
//react-outer-dom. This Outlet component is responsible to render all children component which we already describe in
//router object in the App.jsx. So here we specify children element with Layout component and inside children we 
// provide array of path and element where we want to route the component.

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
    ]
  }
  
]);


  return (<RouterProvider router={router}/>);
}

export default App;