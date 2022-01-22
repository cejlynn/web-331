/*
============================================
; Title: Assignment 3.2 - Restaurant App
; File Name: main-course.js
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
;   MainCourse provided by Prof Krasso.
===========================================
*/

import { Product } from "./product.js"; // Import product class

export class MainCourse extends Product // Export MainCourse class
{
    constructor(name, price)
    {
        super(name, price);
    }
}