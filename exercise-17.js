function kaliTerusRekursif(angka) {
  var str = angka.toString();
  var result = 1;
  for(var i=0;i<str.length;i++){
  	result = result * Number(str[i]);
  }
  if(str.length == 1)
  	return Number(str[0]);
  else
  	return kaliTerusRekursif(result);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6