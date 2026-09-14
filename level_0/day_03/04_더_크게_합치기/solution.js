function solution(a,b){
    const ab= Number(String(a) + String(b))
    const ba= Number(String(b) + String(a))

    if(ab>=ba){
        return ab;
    }
    else{
        return ba;
    }
 
}