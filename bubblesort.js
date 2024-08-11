

var array = [5,2,4,6,1,3]

function bubblesort(array) {
    for(i = 0 ; i < array.length ; i++) {
        for(j = array.length - 1 ; j > i ; j --)
            if(array[j] < array[j-1]) {
                var value = array[j]
                array[j] = array[j-1]
                array[j-1] = value
            }

        console.log(array)
    }
}

bubblesort(array)