/*
============================================
; Title: Assignment 3.2 - Restaurant App
; File Name: bill.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the restaurant.html file
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_3.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
;   Function code provided by Prof Krasso.
;   forEach() code provided by Prof Krasso.
;   W3Schools forEach()
;       https://www.w3schools.com/jsref/jsref_foreach.asp
===========================================
*/

export class Bill { // Export Bill class
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._MainCourse = [];
        this._desserts = [];
    }
}

function addBeverage(beverage) { //Function for adding beverages
    this._beverages.push(beverage);
}

function addAppetizer(appetizer) { // Function for adding appetizers
    this._appetizers.push(appetizer);
}

function addMainCourse(mainCourse) { // Function for adding main course
    this._MainCourse.push(mainCourse);
}

function addDessert(dessert) { // Function for adding desserts
    this._desserts.push(dessert);
}

function getTotal() { // Function for adding total
    let total = 0;
    
    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    })

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    })

    let mainCourseTotal = this._MainCourse.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    })
    return total.toFixed(2); // Return total
}
