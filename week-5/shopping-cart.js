/*
============================================
; Title: Assignment 5.2 - Bob's Automotive Repair Shop
; File Name: shopping-cart.js
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
;   MDN
;       push - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
;       iterators and generators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
;   CodeBurst
;       iterator - https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
===========================================
*/

export class ShoppingCart { // Export class ShoppingCart
    constructor() {
        
        this.products = [];
    }
    
    count() {
        return this.products.length; // Get length
    }

    addProduct(product) {
        this.products.push(product); // Add product to products array
    }

    *[Symbol.iterator]() { // Iterator over shoppingCart 
        for(let product of this.products) {
            yield product;
        }
    }
}