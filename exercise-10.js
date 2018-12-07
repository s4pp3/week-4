function changeMe(arr) {
  if(arr.length > 0){
	  var obj = {};
	  for(var i=0;i<arr.length;i++){
	  	obj['firstName'] = arr[i][0];
	  	obj['lastName'] = arr[i][1];
	  	obj['gender'] = arr[i][2];
	  	if(arr[i][3] == null || arr[i][3] > 2018)
	  		obj['age'] = 'Invalid Birth Year';
	  	else
	  		obj['age'] = 2018 - arr[i][3];
	  	var list_num = i+1;
	  	var result = list_num+". "+arr[i][0]+" "+arr[i][1]+":"+obj;
	  	console.log(result);
	  }
  }else{
 	  console.log('""');
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""