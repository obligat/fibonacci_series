'use strict';

function fibonacci_series(n) {
	var first=0,second=0;
	var array=[0,1];
	for(var i=1;i<n;i++)
	{
		first=array[i];
		second=array[i-1];
		array.push(first+second);
	}
	return array;
}
module.exports = fibonacci_series;
