//Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum. 

function solution(N, A) {

	var counters = [];
	var biggest = 0;
	var lastMaxCounter = 0;
	const getBiggest = (a, b) => a > b ? a : b;

	for (var x = 0; x < A.length; x++) {
		if (A[x] <= N) {

			const pos = A[x] - 1;

			//increase counter from zero if never used before or then from the lastMaxCounter 
			counters[pos] = getBiggest(lastMaxCounter, counters[pos] === undefined ? 0 : counters[pos]) + 1;

			if (biggest < counters[pos])
				biggest = counters[pos];

		} else {
			//if there are consecutive fill all operations, just execute one of them, the first
			if (x >= 0 && A[x - 1] <= N) {
				lastMaxCounter = biggest;
				biggest = 0;
			}
		}
	}

	//set the values of never used counters to 0 or then lastMaxCounter
	for (var x = 0; x < N; x++)
		counters[x] = getBiggest(lastMaxCounter, counters[x] === undefined ? 0 : counters[x]);

	return counters;
}
