# Decoder Ring

This project was one asigned to me by Thinkful. 
The goal of the program is to encode and decode messages in three separate ways.

## Caesar Shift

The first method shifts the given message up the alphabet by a given number of places
For example, a shift value of 1 shifts an 'a' to a 'b'.
When set to decode the value is converted to a negative value behind the scenes and the shift is undone.

## Polybius 

Consider a 5 x 5 square.
Then give each letter a unique value pair within the square, going acrross the top and then starting again on the next line.
I and J share a box.
This is the premise for a polybius cypher and it is what the program completes, both encoding and decoding.
Messages that are impossible to decode (odd amount of characters, not including puncuation) throw an error.

0 | 1 | 2 | 3 | 4 | 5  
1 | A | B | C | D | E  
2 | F | G | H (I/J) K  
3 | L | M | N | O | P  
4 | Q | R | S | T | U  
5 | V | W | X | Y | Z

## Substitution

This shift is very simple.
The user gives a new alphabet and a message. 
Each letter of the message is then replaced with a letter in the new alphabet that shares the same position.
The program throws an error if the given alphabet is less than 26 characters.
In order to decode the message, the user must have the substitue alphabet that was used to encode the message.
