/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: required-field.js
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
;   Check variable as string code used
;       https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
===========================================
*/

export class RequiredField { // Export class RequiredField to validator.js
    constructor(name, field) { // params
        this.name = name;
        this.field = field;
    }

    validate() { // Validate if string && return boolean
        if (typeof this.field === "string" || this.field instanceof String) {
            return Boolean(this.field);
        }
    } 
    getMessage() { // Return string
        return this.name + "is a required field.";
    }
}