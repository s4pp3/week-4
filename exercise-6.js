function digitPerkalianMinimum(angka) {
  var amount = 0;
  var result = [];
  for(var i=1;i<=angka;i++){
  	if(angka%i == 0 && result.indexOf(angka/i+''+i) == -1){
  		result.push(i+''+angka/i);
  	}
  }
  result.sort();
  var x = result[0].length;
  for(var i=0;i<result.length;i++){
  	if(result[i].length == x)
  		amount++;
  }
  return amount;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2