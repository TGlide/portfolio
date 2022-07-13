// function that given an array and a number n, divides the array into n arrays of equal length (if possible)
export const divideArray = <T>(array: T[], n: number): T[][] => {
	const result: T[][] = [];
	const chunkSize = Math.floor(array.length / n);
	for (let i = 0; i < n; i++) {
		result.push(array.slice(i * chunkSize, (i + 1) * chunkSize));
	}
	return result;
};
