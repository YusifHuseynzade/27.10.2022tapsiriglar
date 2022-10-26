/*Task (1): Verilen duplicate array daxilindən duplicate olanları silib unique array formasına salın.*/

let arr = [2,3,3,67,34,34,22,18,67,101,34,22];

let unique = [...new Set(arr)];
console.log(unique);

let uniquefilter = arr.filter((item,index) => arr.indexOf(item) === index)
console.log(unique);

let arr2 = [3,67,44,24,35,111,88,22]

let arr3 = arr.concat(arr2)
let uniqueconcat = arr3.filter((item,index) => arr3.indexOf(item) === index)
console.log(uniqueconcat)

let uniqueReduce = arr.reduce(function(acc, current){
    if(acc.indexOf(current) === -1) {
        acc.push(current)
    }
    return acc
}, [])
console.log(uniqueReduce)

let uniquevalue = Array.from(new Set(arr))
console.log(uniquevalue)

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/*Task (2): Verilen array daxilinden musbet olanlari kvadratından ibaret yeni array return et.*/

let array2 = [2,5,-11,6,-7,-2,9,16,12,-17]

let positivenumbers = array2.reduce(function(acc, current) {
    if(current>0) {
        let number = current**2;
        acc.push(number);
    }
    return acc
}, []);

console.log(positivenumbers);

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/*Task (3): Verilen stringi tersine çevir*/

let string = "Salam Dunya";
let stringreverse = string.split("").reverse().join("");
console.log(stringreverse);

function stringReverse(string2) {
    const arr = [...string2];
    const wordreverse = arr.reduce((viceversa, character) => {
      return character + viceversa;
    }, "");
    return wordreverse;
  }
  
  console.log(stringReverse(string));


