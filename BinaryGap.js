// Find longest sequence of zeros in binary representation of an integer. 

function solution(n) {

	n = n.toString(2); //convert to binary

	var zero = 0;
	var biggestZeroSeq = 0;

	for (var x = 0; x < n.length; x++) {
		if (n[x] == 0) {
			zero++;
		} else {
			if (zero > biggestZeroSeq)
				biggestZeroSeq = zero;
			zero = 0;
		}
	}

	return biggestZeroSeq;
}
