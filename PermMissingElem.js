//Find the missing element in a given permutation. 

function solution(A) {

	A.sort(function(a, b) {
		return a - b;
	});

	if (A.length == 0)
		return 1;

	if (A[0] != 1)
		return 1;

	for (var x = 0; x < A.length - 1; x++) {

		if (A[x + 1] != A[x] + 1)
			return A[x] + 1;

	}

	return A[A.length - 1] + 1;
}
