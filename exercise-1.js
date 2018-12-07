function angkaPrima(angka) {
  if(angka >= 2){
  	for(var i=angka-1;i>=2;i--){
  		if(Number.isInteger(angka/i))
  			return false;
  	}
  	return true;
  }
  return false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false