function multiplicationTable(num){
    
    for(let i = 1; i <= 10; i++){
        let product = i * num;
        console.log(`${num} X ${i} = ${product}`)
    }
}
multiplicationTable(5);