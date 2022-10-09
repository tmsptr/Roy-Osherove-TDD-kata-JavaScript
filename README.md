
1. If the input string is empty, the result should be 0.
2. If the input string has a single number, the result should be the value of that number.
3. If the input string has two numbers separated by a comma, the result should be the sum of these two numbers.
"1,2" = 3 and "15,22" = 37
4. Add support for the input of an unknown amount of numbers joined by a comma (e.g. three or more numbers).
5. Allow the add method to handle new lines between numbers (instead of commas).
For example, "1\n2,3" = 6
Note: you do not need to support the following INVALID input "1,\n2" (so do not expect or test for it)
6. Add support for different delimiters: to change a delimiter, the beginning of the string will contain a separate line that looks like this "//[delimiter]\n[numbers...]"
For example, "//;\n1;2" == 3 (i.e. the symbol ';' is used as the delimiter)
7. Calling add with a negative number must throw an exception with message “Negatives are not allowed”
and the negative that was passed.
For example, "5,-1,2" -> exception with a message "Negatives are not allowed: -1"
8. If there are multiple negatives, show all of them in the exception message.
9. Numbers bigger than 1000 should be ignored.
For example, "2,1001" = 2
10. Custom delimiters can be of any length when the following format is used: "//[delimiter]\n[numbers...]".
For example, "//[***]\n1***2***3" = 6
11. Allow multiple delimiters with the following format: "//[delim1][delim2]\n[numbers...]". 
For example, "//[*][%]\n1*2%3" = 6
12. Allow multiple delimiters with length longer than one character. 
For example, "//[**][%%]\n1**2%%3" = 6
