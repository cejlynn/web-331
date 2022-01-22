/*
============================================
; Title: Assignment 3.2 - Restaurant App
; File Name: bill.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-restaurant.html file
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
    constructor(_beverages, _appetizers, _mainCourse, _desserts) {

        _beverages = [];
        _appetizers = [];
        _mainCourse = [];
        _desserts = [];
    }

    addBeverage(beverage) { //Function for adding beverages
        this._beverages.push(beverage);
    }

    addAppetizer(appetizer) { // Function for adding appetizers
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) { // Function for adding main course
        this._mainCourse.push(mainCourse);
    }

    addDessert(dessert) { // Function for adding desserts
        this._desserts.push(dessert);
    }

    getTotal() { // Function for adding total

        let total = 0;
        
        let beverageTotal = this._beverages.forEach(function(beverage)
        {
            total += parseFloat(beverage.price);
        })

        let appetizerTotal = this._appetizers.forEach(function(appetizer)
        {
            total += parseFloat(appetizer.price);
        })

        let mainCourseTotal = this._mainCourse.forEach(function(mainCourse)
        {
            total += parseFloat(mainCourse.price);
        })

        let dessertTotal = this._desserts.forEach(function(dessert)
        {
            total += parseFloat(dessert.price);
        })
        console.log(total);
        return total.toFixed(2); // Return total
    }
}
