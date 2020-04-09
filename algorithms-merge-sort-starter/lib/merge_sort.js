function merge(arr1, arr2) {
    let result = [];

    while(arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] > arr2[0]) {
            result.push(arr2[0]);
            arr2.shift();
        } else {
            result.push(arr1[0]);
            arr1.shift();
        }
    }

    while(arr1.length > 0) {
        result.push(arr1[0]);
        arr1.shift();
    }

    while (arr2.length > 0) {
        result.push(arr2[0]);
        arr2.shift();
    }

    return result.concat(arr1).concat(arr2);
    //return[...result, ...arr1, ...arr2];
}

function mergeSort(array) {
    if(array.length <= 1) return array;

    const midIndex = Math.floor(array.length/2);
    const l1 = array.slice(0, midIndex);
    const l2 = array.slice(midIndex);

    const sortedl1 = mergeSort(l1);
    const sortedl2 = mergeSort(l2);

    return merge(sortedl1, sortedl2);
}


// function merge(array1, array2) {
  // var result as array
  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while

  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  // return result
// }

// function mergeSort(array) {
  // if ( n == 1 ) return a

  // /* Split the array into two */
  // var l1 as array = a[0] ... a[n/2]
  // var l2 as array = a[n/2+1] ... a[n]

  // l1 = mergesort( l1 )
  // l2 = mergesort( l2 )

  // return merge( l1, l2 )
// }

module.exports = {
  merge,
  mergeSort
};
