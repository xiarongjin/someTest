var numSubarraysWithSum = function(nums, goal) {
  let sum = 0;
  let head = 0;
  let foot = 1;
  let tanums = 0;
  const numslen=nums.length;
  
  
  while(head<nums.length){
      sum = nums.slice(head,foot).reduce((pre,cur)=>{ 
        return pre+cur 
      }
        ,0)
       
      if(sum>goal){
              head += 1;
              foot =head+1
          }else{
              foot +=1;
              if (foot>numslen) {
                head +=1;
                foot =head+1
              }
              if(sum===goal){
                  tanums++
              }
          }     
  }
  return tanums
};