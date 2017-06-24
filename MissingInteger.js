//Find the minimal positive integer not occurring in a given sequence. 

function solution(A) {

	A.sort(function(a, b) {
		return a - b;
	});

	A = Array.from(new Set(A));	//remove duplicates

	if (A.length == 1)
		return A[0] == 1 ? 2 : 1;

	if (A.indexOf(1) == -1)
		return 1;

	for (var x = 0; x < A.length; x++) {
		if ((A[x] + 1 != A[x + 1]) && (A[x] + 1 > 0))
			return A[x] + 1;
	}

}
