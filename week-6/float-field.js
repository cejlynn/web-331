/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: float-field.js
; Author: Professor Krasso
; Date: 13 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-future-value.html.
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_6.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
;   MDN
;       isNan() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
===========================================
*/

export class FloatField { // Export class FloatField to validator.js
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() { // Validator
        if (isNaN(parseFloat(this.field))) {
            return false;
        } else {
            return true;
        }
    }

    getMessage() { // Output message
        return this.name + " must be a float value. You entered " + this.field;
    }
}