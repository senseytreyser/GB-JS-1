// Четвёртое задание, которое прозвучало на занятии
// Поменять местами значения двух переменных.

// Вариант первый

var x = 100, y = 1050;
console.log("Замена переменных. Вариант 1.  \n1 этап \n"+"x = "+x+"\ny = "+y);
x = x + y;
y = x - y;
x = x - y;
console.log("2 этап \n"+"x = "+x+"\ny = "+y);

//Второй вариант

var a = 304050, b = 12345;
console.log("Замена переменных. Вариант 2.  \n1 этап \n"+"a = "+a+"\nb = "+b);
a = a ^ b;
b = a ^ b;
a = a ^ b; 
console.log("2 этап \n"+"a = "+a+"\nb = "+b);