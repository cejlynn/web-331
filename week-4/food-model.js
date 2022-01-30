/*
============================================
; Title: Assignment 4.2 - Calorie App
; File Name: food-model.js
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
===========================================
*/

export class FoodModel { // Export Food Model Class
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}