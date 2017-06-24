//Count minimal number of jumps from position X to Y. 

function solution(X, Y, D) {
	return Math.ceil((Y-X)/D);
}
