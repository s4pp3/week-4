function cariModus(arr) {
  var modus = 0;
  var unduplicated = [];
  for(var i=0;i<arr.length;i++){
  	if(unduplicated.indexOf(arr[i]) == -1)
  		unduplicated.push(arr[i]);
  }
  for(var i=0;i<unduplicated.length;i++){
  	
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1