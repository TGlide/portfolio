// function that given an array and a number n, divides the array into n arrays
export const divideArray = <T>(array: T[], n: number) => {
	const result: T[][] = [];

	let resultIdx = 0;
	for (let i = 0; i < array.length; i += 1) {
		result[resultIdx] = [...(result[resultIdx] ?? []), array[i]];
		resultIdx = (resultIdx + 1) % n;
	}

	return result;
};
