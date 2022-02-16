
import './App.css';
import BaseScreen from './screens/BaseScreen';
import React , { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingSpinner from "./components/layouts/LoadingSpinner";
const ProductScreen = React.lazy(()=> import ('./screens/ProductScreen'));
const HomeScreen = React.lazy(()=> import("./screens/HomeScreen"));
const ContactScreen = React.lazy(()=> import("./screens/ContactScreen"));

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseScreen/>} >
        <Route index
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <HomeScreen/>
               </Suspense>
       } />
        <Route path="/contactscreen" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <ContactScreen/>
               </Suspense>
       } />
               <Route path="/productscreen/:id" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <ProductScreen/>
               </Suspense>
       } />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;