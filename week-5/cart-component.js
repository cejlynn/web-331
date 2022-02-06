/*
============================================
; Title: Assignment 5.2 - Bob's Automotive Repair Shop
; File Name: cart-component.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-bobs-auto-repair.html file.
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_5.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
;   Font Awesome string provided by Prof Krasso - line 30-32
;   MDN 
;       using custom elements - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
;   GitHub buwebdev/web-330/portfolio
;       customElements - https://github.com/buwebdev/web-330/tree/master/portfolio
===========================================
*/

class CartComponent extends HTMLElement { // Export class CartComponent extending JavaScripts HTMLElement
    constructor() {
        super();
    }

    connectedCallback() { // Function for Font Awesome string
        this.innerHTML = `<div id="iconColor"> 
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
            </div>`; // Font Awesome string provided by Prof Krasso
    }
}

customElements.define("cart-component", CartComponent); // Call customElements.define(), pass in string and class 
