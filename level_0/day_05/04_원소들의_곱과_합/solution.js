function solution(num_list){
    let mul_value = 1; 
    let plus_value = 0;

    for(let i = 0; i<num_list.length; i++){
        mul_value *= num_list[i]
        plus_value += num_list[i]
    }
    return mul_value < plus_value ** 2 ? 1: 0; 
}