import { Component } from "react";
import './MainPage.css';
import background3 from "./background.jpg"
import { Store } from "@reduxjs/toolkit";
import { useSelector, useStore } from "react-redux";
import { Typography } from "@mui/material";
interface  Props{
}

const MainPage = (props: any) => {
    const store: Store = useStore();
    const globState = store.getState();
    console.log('globSt',globState);
    let auth:boolean = useSelector((state: any) => globState.user.user?.isAuthenticated)
    let textPage;
    console.log('auth',auth);
    if(auth){
        console.log('2');
        textPage = <div>HomePage:) Ваша почта: {globState.user.user.email}</div>;
    }
    else
    textPage =  <div>HomePage:)</div>;  
    
    return (
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                {textPage}
            </Typography>
    )
            
        

    
}

export default MainPage