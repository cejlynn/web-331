/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: float-max-field.js
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
===========================================
*/

export class FloatMaxField { // Export class FloatMaxField to validator.js
      constructor(name, field, max) {
          this.name = name;
          this.field = field;
          this.max = max;
      }

      validate() { // Validate if field is less than max, return Boolean
        if (parseFloat(this.field) < this.max) {
              return true;
          } else {
              return false;
          }
      }

      getMessage() { // Output message
          return this.name + " must be less than " + this.max + ". You entered " + this.field;
      }
}