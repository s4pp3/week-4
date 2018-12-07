function digitPerkalianMinimum(angka) {
  var result = [];
  for(var i=1;i<=angka;i++){
  	if(angka%i == 0 && result.indexOf(Number(angka/i+''+i)) == -1){
  		result.push(Number(i+''+angka/i));
  	}
  }
  result.sort(function(a,b){ return a-b; });
  var jumlah_digit = result[0].toString().length;
  return jumlah_digit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
