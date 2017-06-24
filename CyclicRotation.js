//Rotate an array to the right by a given number of steps

function solution(A, K) {

	for (var x = 0; x < K; x++) {
		A.unshift(A[A.length - 1]);
		A.splice(A.length - 1, 1);
	}
	return A;
	
}
