module.exports = { 
    //param A : array of strings
    //return a strings
       longestCommonPrefix : function(A){
   
           let minLen = A.map(a=>a.length).sort((a,b)=>a-b)[0];
           for(let i=0;i<minLen;i++){
               let c = A.map(a=>a.charAt(i));
               for(let j=0;j<c.length-1;j++){
                   if(c[j] !== c[j+1]){
                       return A[0].slice(0,i);
                   }
               }
           }
           return A[0].slice(0,minLen);
       }
   };
   