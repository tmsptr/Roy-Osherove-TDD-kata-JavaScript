import React from "react";
import { render } from "@testing-library/react-native";

const stringCalculator = require('./stringCalculator');

// Requirement 1
  test('If the input string is empty, the result should be 0', () => {
    expect(stringCalculator("")).toBe(0);
  });

// Requirement 2
  test('If the input string has a single number, the result should be the value of that number', () => {
    expect(stringCalculator("1")).toBe(1);
  });
  test('If the input string has a single number, the result should be the value of that number', () => {
    expect(stringCalculator("888")).toBe(888);
  });

// Requirement 3
    test('If the input string has two numbers separated by a comma, the result should be the sum of these two numbers', () => {
    expect(stringCalculator("2,5")).toBe(7);
  });
  test('If the input string has two numbers separated by a comma, the result should be the sum of these two numbers', () => {
    expect(stringCalculator("24,16")).toBe(40);
  });

// Requirement 4
  test('support for the input of an unknown amount of numbers joined by a comma', () => {
    expect(stringCalculator("2,5,6")).toBe(13);
  });
  test('support for the input of an unknown amount of numbers joined by a comma', () => {
    expect(stringCalculator("24, 16, 4, 5")).toBe(49);
  });

// Requirement 5
    test('Allow the add method to handle new lines between numbers (instead of commas)', () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

// Requirement 6
  test('Add support for different delimiters: to change a delimiter', () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

// Requirement 7
  test('Add support for different delimiters: to change a delimiter', () => {
    expect(stringCalculator("5,-1,2" )).toBe("Negatives are not allowed:-1");
  });

// Requirement 8
  test('If there are multiple negatives, show all of them in the exception message.', () => {
    expect(stringCalculator("5,-1,-3,2" )).toBe("Negatives are not allowed:-1,-3");
  });
  test('If there are multiple negatives, show all of them in the exception message.', () => {
    expect(stringCalculator("5,-6,-3,2,-9" )).toBe("Negatives are not allowed:-6,-3,-9");
  });

  // Requirement 9
  test('Numbers bigger than 1000 should be ignored', () => {
    expect(stringCalculator("2,1001")).toBe(2);
  });
  test('Numbers bigger than 1000 should be ignored', () => {
    expect(stringCalculator("2,9,2000")).toBe(11);
  });

  // Requirement 10
  test('Custom delimiters can be of any length', () => {
    expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
  });

  // Requirement 11
  test('Allow multiple delimiters with the following format: "//[delim1][delim2]\n[numbers...]"', () => {
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
  });

  // Requirement 12
  test('Allow multiple delimiters with length longer than one character', () => {
    expect(stringCalculator("//[**][%%]\n1**2%%3")).toBe(6);
  });

