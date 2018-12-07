function urutkanAbjad(str) {
  var sorted_asc = [];
  for(var i=0;i<str.length;i++){
  	sorted_asc.push(str[i]);
  }
  sorted_asc.sort();
  return "'"+result.join('')+"'";
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
