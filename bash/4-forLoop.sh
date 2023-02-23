#!/bin/bash

#seq uses an external call and starts at 1 
END=50
#for VARIABLE in $(seq 1 $END)
#do
#	printf "\n%s" "$VARIABLE"
#done


#for loop construct exists in bash
for ((i=1;i<=END;i++)); do
	printf "%s\n" "$i"
done
