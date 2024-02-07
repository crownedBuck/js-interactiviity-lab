const checkingOverDifference = (theDifferences) => {
    let biggestValue = 0;
    let keyWithBiggestValue = 0;
    for (const [key, value] of Object.entries(theDifferences)) {
        if (value > biggestValue) {
            keyWithBiggestValue = Math.floor(key);
        }
    }
     
    console.log("The maximum profit happens from day " + keyWithBiggestValue + " to day " + (keyWithBiggestValue + 1))
}


const checkStockPrices = (arrayOfStockPrices, callback) => {
    const dictionaryOfDifferences = {}
    let previousNumber = 0
    for (let loopingNumber = 0; loopingNumber < arrayOfStockPrices.length; loopingNumber++) {
        if (loopingNumber !== 0) {
            // dictionaryOfDifferences[loopingNumber].key = "" + loopingNumber + "";
            dictionaryOfDifferences[loopingNumber] = (previousNumber - loopingNumber);
        } else {
            // dictionaryOfDifferences[loopingNumber].key = "0";
            dictionaryOfDifferences[loopingNumber] = 0;
        }

        previousNumber = arrayOfStockPrices[loopingNumber]
    }

    callback(dictionaryOfDifferences, )

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 10, 6, 4, 8, 1];
const array3 = [7, 9, 5, 6, 3, 2];

checkStockPrices(array1, checkingOverDifference);
checkStockPrices(array2, checkingOverDifference);
checkStockPrices(array3, checkingOverDifference);