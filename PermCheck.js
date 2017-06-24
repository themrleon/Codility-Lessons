//Check whether array A is a permutation. 

function solution(A) {

	A.sort(function(a, b) {
		return a - b;
	});

	for (var n = 0; n < A.length; n++) {
		if (A[n] != n + 1)
			return 0;
	}

	return 1;
}
