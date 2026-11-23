import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";


const App = () => {


const router = createBrowserRouter([
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
]);

  return (<RouterProvider router={router}/>);
}

export default App;