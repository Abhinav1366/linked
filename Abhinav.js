function linkedList(num){
    let start = {
        val: "val",
        next: null
    }

    for(let i=0; i <=num; i++){
        let x = {
            val: i,
            next: null
        }

        x.next = start
        start = x
    }

    return start;
}

const list = linkedList(5)
console.log(list)