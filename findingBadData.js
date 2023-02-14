let myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

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
console.log(findingBadData(myArray));