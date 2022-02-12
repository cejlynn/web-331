/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: float-min-field.js
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
;       parseFloat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
===========================================
*/

export class FloatMinField { // Export class FloatMinField to validator.js
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() { // Validate if field is greater than min, return Boolean
        if (parseFloat(this.field) > this.min) { 
            return true;
        } else {
            return false;
            }
        }

    getMessage() { // Output message
        return this.name + " must be more than " + this.min + ". You entered " + this.field;
    }
}