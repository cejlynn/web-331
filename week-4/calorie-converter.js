/*
============================================
; Title: Assignment 4.2 - Calorie App
; File Name: calorie-converter.js
; Author: Professor Krasso
; Date: 30 January 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-calorie.html file
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_4.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
;   W3Schools 
;       static methods - https://www.w3schools.com/js/js_class_static.asp
;   MDN class static initialization blocks
;       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks
===========================================
*/

import { FoodModel } from "./food-model.js"; // Import Food Model


export class CalorieConverter { // Export CalorieConverter
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),  
    ]

    static find(string) {
        return this.data.filter(foodModel => foodModel.name.toLowerCase() === string); // Input field compared against string value
    }
}

