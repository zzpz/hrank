#!/bin/bash
read -r word;
printf  "Welcome %s" "$word"


# read -r : Do not treat a backslash character in any special way. Consider each backslash to be part of the input file.
# Without setting IFS, by default the sequences of Space and Tab at the beginnging are ignored (trimmed)
# printf over echo: avoid printing empty lines when the line consists of a single -e, -n or -E
