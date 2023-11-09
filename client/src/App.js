
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import RootLayou from "./Layouts/RootLayou";
import Home from "./Pages/Home";
import Single, { singleProductLoader } from './Components/Single';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayou/>}>
        <Route index element={<Home/>}/>
        <Route path='/product/:id' element={<Single/>} loader={singleProductLoader}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
 
  );
}

export default App;
