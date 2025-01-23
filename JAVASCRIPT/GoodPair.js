function goodPair(nums){
let count = 0;
   for(let i = 0; i < nums.length-1; i++){
    for(let j = i+1; j<nums.length; j++){
        if(nums[i] == nums[j]){
            count++;
        }
    }
   }
   return count;
}
nums = [1,2,3];
console.log(goodPair(nums));
