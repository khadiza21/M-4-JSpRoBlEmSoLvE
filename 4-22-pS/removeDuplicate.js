//remove dumplicate form array 
const names = ['khalid', 'babul','babul','dabul','ebul','khalid','hablu','ebul','kabull'];

function removeDuplilcate (names){
    const unique = [];
    // for (let i =0; i<names.length; i++){
    //     const element = names[i];
    //     console.log(element);
    // }
    //for of loop
    for (const element of names){
        //console.log(element);
        if (unique.indexOf(element)== -1){
            unique.push(element);
        }
    }
    return  unique;
}

console.log(removeDuplilcate (names));