let fullName="obito"
function add(...numbers){
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total +=numbers[i];
    }        
     return total;
}
console.log(add(3000,500,2400,232,526));
