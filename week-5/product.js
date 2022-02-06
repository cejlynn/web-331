/*
============================================
; Title: Assignment 5.2 - Bob's Automotive Repair Shop
; File Name: product.js
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
;   Random value code provided by Prof Krasso - line 23
===========================================
*/

export class Product { // Export Product Class
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); // Random value generator code provided by Prof Krasso
    }
}
