//Find value that occurs in odd number of elements. 

function solution(A) {

	A.sort();

	var ocur = 0;
	var t = 0;
	while (t < A.length) {
		ocur = getNOC(A, t);
		t += ocur;
		if (ocur % 2 != 0)
			return A[t - ocur];
	}

	function getNOC(A, pos) {
		var cont = 0;
		while ((A[pos] ^ A[pos + 1]) == 0) {
			cont++;
			pos++;
		}
		return cont + 1;
	}

}
