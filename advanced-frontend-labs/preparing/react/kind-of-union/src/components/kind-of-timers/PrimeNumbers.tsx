import { useEffect, useState } from "react";

export const PrimeNumbers = () => {
	const [primes, setPrimes] = useState<number[]>([]);

	const isPrime = (num: number): boolean => {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return num > 1;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			let nextPrime = (primes.length === 0) ? 2 : primes[primes.length - 1] + 1;
			while (!isPrime(nextPrime)) {
				nextPrime++;
			}
			setPrimes([...primes, nextPrime]);
			// setPrimes(prevPrimes => prevPrimes.concat(nextPrime));
		}, 1000);

		return () => clearInterval(interval);
	}, [primes]);

	return (
		<div>
			{ JSON.stringify(primes) }
		</div>
	);
};