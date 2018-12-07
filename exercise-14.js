function changeVocals (str) {
  var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = [];
  var vocal = "aiueoAIUEO";
  for(var i=0;i<str.length;i++){
  	if(vocal.indexOf(str[i]) != -1){
  		var x = str[i];
  		var y = letter[letter.indexOf(x)+1];
  		result.push(y);
  	}else{
  		result.push(str[i]);
  	}
  }
  return result.join('');
}

function reverseWord (str) {
  var result = [];
  for(var i=str.length;i>=0;i--){
  	result.push(str[i]);
  }
  return result.join('');
}

function setLowerUpperCase (str) {
  var result = [];
  for(var i=0;i<str.length;i++){
  	if(str[i] == str[i].toLowerCase())
  		result.push(str[i].toUpperCase());
  	else
  		result.push(str[i].toLowerCase());
  }
  return result.join('');
}

function removeSpaces (str) {
  var result = [];
  for(var i=0;i<str.length;i++){
  	if(str[i] != ' ')
  		result.push(str[i]);
  }
  return result.join('');
}

function passwordGenerator (name) {
  var changevocal = changeVocals(name);
  var reverseword = reverseWord(changevocal);
  var setlowerupper = setLowerUpperCase(reverseword);
  var removespace = removeSpaces(setlowerupper);
  if(removespace.length < 5)
  	return "'Minimal karakter yang diinputkan adalah 5 karakter'";
  return removespace;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'