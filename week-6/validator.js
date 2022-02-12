/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: validator.js
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
;   Code provided by Prof Krasso:
;       addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
        }
===========================================
*/

// Import statements
import { RequiredField } from "./required-field.js"; 
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator { // Export class Validator to kerrey-future-value.html
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Required fields
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    validate() { // Add error messages
        for (let validator of this.validators) {
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
                return false;
            }
        }
        return true;
    }
}