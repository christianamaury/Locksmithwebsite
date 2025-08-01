import React from "react";
import { useEffect } from "react";

export const ScriptComp = () =>{
    useEffect(() => {

        //Runs once the component has rendered. 
        //Variables for closing menu when the nav link is clicked
        const navLinks = document.querySelectorAll (".nav-menu .nav-link");
        const menuOpenButton = document.querySelector("#menu-open-button");
        const menuClosedButton = document.querySelector("#menu-close-button");

        const handleClick = () => {
            document.body.classList.toggle("show-mobile-menu");
        };

        const handleClosedClick = () => {
            document.body.classList.remove("show-mobile-menu");
        };

        if(menuOpenButton)
        {
            menuOpenButton.addEventListener("click", handleClick);
        }

        if(menuClosedButton){
            menuClosedButton.addEventListener("click", handleClosedClick);
        }

        //Testing: handleClosedClick
        navLinks.forEach(link => {
            link.addEventListener ("click", handleClosedClick);
        });

        //Cleaned up, listener on unamount;
        return () => {
            if(menuOpenButton){
                menuOpenButton.removeEventListener("click", handleClick);
            }

            if(menuClosedButton){
                menuClosedButton.removeEventListener("click", handleClosedClick);
            } 

            //Cleaning up to prevenet any memory leaks; 
            navLinks.forEach(link => {
                link.removeEventListener("click", handleClosedClick);
            })
        };

    }, []);
    
    //No visual output
    return null; 
}