function fpb(angka1, angka2) {
  var result = 0;
  var x = angka1,y = angka2;
  if(angka1 > angka2){
  	x = angka2;
  	y = angka1;
  }
  for(var i=x;i>=1;i--){
  	var fpb1 = x/i;
  	var fpb2 = y/i;
  	if(Number.isInteger(fpb1) && Number.isInteger(fpb2))
  		return i;
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1