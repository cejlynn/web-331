/*
============================================
; Title: Assignment 6.2 - Future Value App
; File Name: finance-calculator.js
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
;   Code provided from Prof Krasso:
;    1) Math.pow(interestRate, months))
;    2) let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
;
===========================================
*/

export class FinanceCalculator { // Export FinanceCalculator class to kerrey-future-value.html
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) { // Future value calculations
        let months = years * this.MONTHS_IN_YEAR; // Assign param
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) { // USD converter
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field); // Return currency to USD
    }
}