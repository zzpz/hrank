#!/bin/bash

#Given two integers, x and y , find their sum, difference, product, and quotient
#input two lines


for ((i=0;i<2;i++));do
	read -r line
	nums[$i]=${line[0]}
done

x=$((nums[0]))
y=$((nums[1]))

sum=$((x + y))
diff=$((x - y))
prod=$((x * y))
quot=$((x / y))

echo $sum 
echo $diff
echo $prod 
echo $quot
