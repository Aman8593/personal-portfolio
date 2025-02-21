
import './App.css';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const Body = lazy(()=>import( './components/Body/Body'));
const About = lazy(()=>import('./components/About/About'));
const Contact = lazy(()=>import('./components/Contact/Contact'));
const Work = lazy(()=>import('./components/MyWork/MyWork'));
function App() {
  return (
    <div >
    
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element:(<Suspense fallback={<h1>loading</h1>}>
        <Body />
        </Suspense>)
      },
      {
        path:"/about",
        element:
        (<Suspense fallback={<h1>loading</h1>}>
          <About />
          </Suspense>)
      },
      {
        path:"/mywork",
        element:
        (<Suspense fallback={<h1>loading</h1>}>
          <Work />
          </Suspense>)
      },
      {
        path:"/contact",
        element:
        (<Suspense fallback={<h1>loading</h1>}>
          <Contact />
          </Suspense>)
      }
    ]
  }
])


function main(){
  return(
    <RouterProvider router={appRouter} />
  )
}

export default main;
