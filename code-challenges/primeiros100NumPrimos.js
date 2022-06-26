function getFirst100Primes() {
	const primes = [];
	let num = 2;

	while (primes.length < 100) {
		if (isPrime(num)) primes.push(num);
		num++;
	}
	return primes;
}

function isPrime(num) {
	if (num === 2) {
		return true;
	}

	for (let divisor = 3; divisor < num; divisor++) {
		if (num % divisor === 0) {
			return false;
		}
	}

	return true;
}

console.log(getFirst100Primes());
