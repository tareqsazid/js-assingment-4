
function mindGame(num){
    let num1 = num * 3 + 10;
    let num2 = num1 / 2 - 5;
    return num2;
}


function evenOdd(str) {
    if (typeof (str) === "string") {
    if (str.length % 2 === 0) {
    return "even";
    } else {
    return "odd";
    }
    } else {
    return " Your entered input is not a string, Please input a String to check if it has a even numbered elements or not"
    }
    }

    function isLGSeven(number){
        if (typeof number != 'number'){
            return 'Please give a number as a input';
        }
        else {
            if (number < 7){
                return number -7;
            }
            else {
                return number * 2;
            }
        }
    
    }

    function findingBadData(array) {

        let negatives = [];
        let negative_ind = 0;
  
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                negatives.push(array[i]);
                negative_ind ++;
            }
        }
        return negatives, negative_ind;
    
    }

    function gemsToDiamond(first, second, third) {
        if (typeof (first) === "number"&& typeof (second) === "number"&&typeof (third) === "number") {
        let x = first * 21;
        let y = second * 32;
        let z = third * 43;
        let total = x + y + z;
        if (total >= 2000)
        return total - 2000;
        else
        return total;
        }
        else {
        return "Your inputs are not number, Please input a number.";
        }
        }
   