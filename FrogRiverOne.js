//Find the earliest time when a frog can jump to the other side of a river. 

function solution(X, A) {

	var arr = [];
	arr[0] = 0; //frog starts on position 0, so position 0 has leaf on 0 seconds

	//organize the array in the opposite way, A[position]=second leaf fell
	for (var x = 0; x < A.length; x++) {
		arr[A[x]] = arr[A[x]] < x ? arr[A[x]] : x;
	}

	//if some position is missing return -1
	for (var x = 0; x < arr.length; x++) {
		if (arr[x] === undefined)
			return -1;
	}

	//if the path is smaller than X+1
	if (arr.length < X + 1)
		return -1;

	arr.sort(function(a, b) {
		return a - b;
	});

	return arr[arr.length - 1];
}
