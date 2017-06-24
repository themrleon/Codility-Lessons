//Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|. 

function solution(A) {

	var min = -1;
	var sumlower = A[0];
	var sumUpper = A.slice(1).reduce(function(total, num) {
		return total + num;
	});

	for (var n = 1; n < A.length; n++) {

		if (min > Math.abs(sumlower - sumUpper) || min == -1) {
			min = Math.abs(sumlower - sumUpper);
		}

		sumlower += A[n];
		sumUpper -= A[n];
	}

	return min;
}
