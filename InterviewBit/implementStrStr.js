module.exports = { 
    //param A : string
    //param B : string
    //return an integer
       strStr : function(A, B){
   
           if(A.length === 0 || B.length === 0){
               return -1;
           }
           let i=0,j=0;
           while(i<A.length && j<B.length){
               if(A.charAt(i) === B.charAt(j)){
                   if(j === B.length-1){
                       break;
                   }
                   i++;
                   j++;
               }else{
                   i = i - j + 1;
                   j=0;
               }
           }
           if(j === B.length -1 && i<A.length){
               return i-j;
           }else{
               return -1;
           }
       }
   };
   