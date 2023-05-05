function solution(land) {
    var answer = 0;
let sum = 0;
let index =0;
let indexValue = 0;    
for(let i=0;i<land.length;i++){
   for(let j =0; j<land[i].length;j++){
       if(i===0){
           continue;
       }
       else{
           let arr = land[i-1].slice();
           arr[j] = 0 ;
           land[i][j] += Math.max.apply(null,arr);
           sum  = Math.max(land[i][j],sum);
       }
   }       
}
    return sum;
}