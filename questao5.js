
function maxMin1(vetor) {
    var max;    
    var min;

    for(var i = 0; i < vetor.length ; i++) {
        if(i == 0) {
            max = vetor[i]
            min = vetor[i]
        }

        if(vetor[i] > max)
            max = vetor[i]
        if(vetor[i] < min)
            min = vetor[i]
    }
    return [min, max]
}


function maxMin2(vetor) {
    var max;    
    var min;

    for(var i = 0; i < vetor.length ; i++) {
        if(i == 0) {
            max = vetor[i]
            min = vetor[i]
        }

        if(vetor[i] > max)
            max = vetor[i]
        else if(vetor[i] < min)
            min = vetor[i]
    }
    return [min, max]
}

function maxMin3(vetor) {
    var maiores = []
    var menores = []

    for(var i = 0; i < vetor.length; i = i + 2) {
        if (vetor[i] > vetor[i+1]) {
            maiores.push(vetor[i])
            menores.push(vetor[i+1])
        } else {
            maiores.push(vetor[i+1])
            menores.push(vetor[i])
        }
    }

    return [min(menores), max(maiores)]
}


function max(vetor) {
    var max = vetor[0]
    for(valor of vetor) {
        if(valor > max)
            max = valor
    }
    return max
}

function min(vetor) {
    var min = vetor[0]
    for(valor of vetor) {
        if(valor < min)
            min = valor
    }
    return min
}


function minRec(vetor, n) {
    if(n == 1)
        return vetor[0]    

    return min([vetor[n-1]].concat(minRec(vetor, n-1)))
}

function maxRec(vetor, n) {
    if(n == 1)
        return vetor[0]

    return max([vetor[n-1]].concat(maxRec(vetor, n-1)))
}

function MinMax4(vetor) {
    return [
        minRec(array, array.length),
        maxRec(array, array.length)
    ]
}




var array = [3,1,6,7,9,56,2,34,11,14,56,73,4]

console.log(maxMin1(array))
//console.log(max(array))
//console.log(min(array))
console.log(maxMin3(array))
console.log(MinMax4(array))