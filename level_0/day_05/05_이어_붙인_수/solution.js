function solution(num_list){
    let odd_str = '';
    let even_str = '';
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even_str += String(num_list[i])
        }
        else{
            odd_str += String(num_list[i])
        }
    }
    return Number(even_str) + Number(odd_str);
}