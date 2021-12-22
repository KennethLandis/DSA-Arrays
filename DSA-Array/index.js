/* filtering an array

function arrayFilter(array) {
	let i = 0;
    while( i < array.length) {
        if(array[i] < 5 ) {
            array.splice(i, 1)
            i++
        }
    }
    return array
    }

console.log(arrayFilter([0, 5, 3, 8, 3, 12]))
}

function maxArray(array) {
	let result = 0;
  let max = 0
  for (let i = 0; i < array.length; i++) {
  	max = max + array[i]
    console.log(max)
  	if( max > result ) {
    	result = max
    }
  }
  return result;
}

console.log(maxArray([4, 6, -3, 5, 0, 1]))

function mergeArrays(array1, array2) {
    let index1 = 0;
    let index2 = 0;
    let result = [];

    while (array1[index1] && array2[index2]) {
        if (array1[index1] >= array2[index2]) {
            result.push(array1[index1])
            index1++;
        }
        if (array1[index1] < array2[index2]) {
            result.push(array2[index2])
            index2++;
        }

        if (array1[index1]) {
            result = result.concat(array1.slice[index1])
        } else if (array2[index2]) {
            result = result.concat(array2.slice[index2])
        }
    return result
    }
}

function mergeArrays(array1, array2) {
    let index1 = 0;
    let index2 = 0;
    let result = [];

    while (array1[index1] && array2[index2]) {
      console.log(array1[index1])
        if (array1[index1] <= array2[index2]) {
            result.push(array1[index1])
            index1++;
        }
        
        if (array1[index1] >= array2[index2]) {
            result.push(array2[index2])
            index2++;
        }
    }
    if (array1[index1]) {
    	result = result.concat(array1.slice(index1))
    } else if (array2[index2]) {
    	result = result.concat(array2.slice(index2))
    }
    return result
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10, 12]))

function products(arr) {
  const maxProduct = arr.reduce((acc, val) => {
    acc *= val;
    return acc;
  });
  
  return arr.map(num => maxProduct / num);
}

console.log(products([1,3,9,4]));
*/