# Unexpected Subtraction Results in JavaScript

This repository showcases a subtle yet common JavaScript error related to subtraction.  The code demonstrates how the order of operands in subtraction can lead to unexpected results. The solution provides a robust approach to handle potential issues.  The problem highlights the importance of careful consideration of data types and operator precedence.

## Bug

The `myFunction` subtracts two numbers. The result is correct when the first argument is greater than the second; however, unexpected behavior occurs when the first argument is smaller.  This is due to the standard behavior of the '-' operator. 

## Solution

The solution introduces error handling to address potential issues with data types, ensuring robust behavior.