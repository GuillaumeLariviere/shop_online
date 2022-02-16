
import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/header";
import NavBar from "../components/layouts/NavBar";
const BaseScreen = () =>{

    return(

        <>
        <NavBar/>
        <Header/>
        <main className ="container-fluid">
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
};

export default BaseScreen;