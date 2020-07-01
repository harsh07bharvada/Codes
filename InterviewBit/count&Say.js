module.exports = { 
    //param A : integer
    //return a strings
       countAndSay : function(count){
           
           const breakUp = A =>{
               let res = [],index=0;
               for(let i=0;i<A.length-1;i++){
                   if(A[i] !== A[i+1]){
                       res.push(A.slice(index,i+1));
                       index = i+1;
                   }
               }
               if(index !== A.length){
                   res.push(A.slice(index));
               }
               return res;
           }
           let cur = [1],result = [];
           for(let i=1;i<count;i++){
               result = [];
               let bUp = breakUp(cur);
               for(let j=0;j<bUp.length;j++){
                   result.push(bUp[j].length);
                   result.push(bUp[j][0]);
               }
               cur = result;
           }
           return cur.join("");
   
       }
   };
   