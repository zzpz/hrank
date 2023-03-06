#!/bin/bash

#read input of two lines
n=2
for ((i=0;i<n;i++));do
    read -r line
    nums[$i]=${line[0]}
done

#assign to variables
x=${nums[0]}
y=${nums[1]}

get_cases() {
    #params
    local x=$1
    local y=$2
    if [ "$x" -gt "$y" ]; then
        echo 1
    elif [ "$x" -eq "$y" ]; then
        echo 0
    else
        echo -1
    fi   
}

#case
case $(get_cases "$x" "$y") in
    0)
        echo "X is equal to Y"
        ;;
    1) 
        echo "X is greater than Y"
        ;;
    -1) 
        echo "X is less than Y"
        ;;
esac

