
import './App.css';
import "./helpers/string.helpers"
import BaseScreen from './screens/BaseScreen';
import React , { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingSpinner from "./components/layouts/LoadingSpinner";
const AccountScreen = React.lazy(()=> import ('./screens/AccountScreen'));
const RegisterLoginScreen = React.lazy(()=> import ('./screens/RegisterLoginScreen'));
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
               <Route path="/loginscreen" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <RegisterLoginScreen isLogin/>
               </Suspense>
       } />
              <Route path="/registerscreen" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <RegisterLoginScreen isRegister/>
               </Suspense>
       } />
              <Route path="/accountscreen" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <AccountScreen toValidate/>
               </Suspense>
       } />
                <Route path="/accountscreen/:id" 
               element={<Suspense fallback ={<LoadingSpinner/>}>
               <AccountScreen userLog/>
               </Suspense>
       } />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;