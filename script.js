function linkedList(num){
    let start = {
        val: "val",
        next: "null"
    }
    let current = start

    for(let i=0; i < num; i++){
        let x = {
            val: i,
            next: "null"
        }

        current.next = start
        current = x
    }

    return current;
}

const list = linkedList(5)
console.log(list)