function primeFactors(n){
  let primes = [];
  while (n > 1) {
     if (n % 2 === 0){
       primes.push(2);
       n = n / 2;
     } else {
       primes.push(n);
       n = 0;
     }
   }
  console.log(primes);
}

primeFactors(10) // Prints array of Prime factors, in this case: [2,5]
