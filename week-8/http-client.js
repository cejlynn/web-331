/*
============================================
; Title: Assignment 8.2 - WhatABook, Part 2
; File Name: http-client.js
; Author: Professor Krasso
; Date: 27 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-whatabook2.html file.
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_8.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
;   Google Dev Fetch API
;       https://developers.google.com/web/updates/2015/03/introduction-to-fetch
;   MDN response.json()
;       https://developer.mozilla.org/en-US/docs/Web/API/Response/json
===========================================
*/

export class HttpClient { // Export class HttpClient

    async get(url, params = "") { // Async function
        url = new URL(url); // Instantiate new URL object
        params = new URLSearchParams(params); // Instantiate new URLSearchParams object
        
        url.search = params; // Assign to search property

        const res = await fetch(url.toString(), { // Code provided by Prof Krasso
            method: "GET",
        })
        
        return res.json(); // Return object literal as JSON object
    }

}