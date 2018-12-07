function ubahHuruf(kata) {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var result = "";
  for(var i=0;i<kata.length;i++){
  	var next_letter = "";
  	for(var j=0;j<letters.length;j++){
  		next_letter = letters[letters.indexOf(kata[i])+1];
  		if(kata[i] == 'z')
  			next_letter = letters[0];
  	}
  	result = result + next_letter;
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('zow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu