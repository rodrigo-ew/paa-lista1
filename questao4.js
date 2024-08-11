const fs = require('fs');
const { performance } = require('perf_hooks');

function findPossiblePrimePair(i) {
    return [(6*i)-1, (6*i)+1]
}

function isPrime(number) {
    for(var i =  Math.floor(Math.sqrt(number)) ; i > 1 ; i--)
        if(number % i == 0)
            return false;
    return true;
}


function findNPrimes(n) {
    var primes = [2, 3]

    for(var i = 1 ;; i++) {
        if(n == 0)
            return []

        if(primes.length == n)
            return primes

        if(primes.length == n+1)
            return primes.slice(0, primes.length - 1)
        
        var newPrimes = findPossiblePrimePair(i) 
        newPrimes.forEach(p => {
            if(!primes.includes(p) && isPrime(p))
                primes.push(p)
        })
    }
}


var writeLine = (line,logger) => logger.write(`\n${line}`);

function writeEmpiricalAnalysisCsv(n) {
    var logger = fs.createWriteStream('file.csv', {
        flags: 'a'
      })

    logger.write('valorN;Tempo')
      
    for(var i = 0; i < n ; i++) {
        var startTime = performance.now()
        findNPrimes(i)
        var endTime = performance.now()
        var executionTime = endTime - startTime

        //console.log("Função executada: " + executionTime)

        writeLine(i + ';' + executionTime, logger)
    }

    logger.end();
}

writeEmpiricalAnalysisCsv(10000, findNPrimes)





