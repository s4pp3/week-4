function checkAB(num) {
  var x = 0;
  for(var i=0;i<num.length;i++){
  	if(num[i] == 'a' || num[i] == 'b'){
  		for(var j=i;j<num.length;j++){
  			if(num[j+4] == 'b' || num[j+4] == 'a')
  				return true;
  			else 
  				return false
  		}
  	}
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false