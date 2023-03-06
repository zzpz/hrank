
read -r -n 1 char

yes=("y" "Y")
case "$char" in
    "${yes[@]}") #@ references all elements of the array
        echo "YES"
        ;;
    *)
        echo "NO"
        ;;
esac
