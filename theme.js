/*
============================================
; Title: Assignment 1.3 - Environment Setup
; File Name: theme.js
; Author: Professor Krasso
; Date: 9 January 2022
; Modified By: Seth Kerrey
; Description:
;   Script for the index.html file.
; Resources:
;   Class names, ids, & variable names provided by Prof Krasso.
;   JavaScript provided by Prof Krasso
;       https://github.com/buwebdev/web-330/blob/master/week-0/theme.js
===========================================
*/

// Get local storage theme & bind to HTML 
// Light theme set as default if none has been set in browser localStorage
function setDefaultTheme()
{
    // Get value from local storage for theme mode
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}
 

// Set theme according to user preference, default of light theme
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}