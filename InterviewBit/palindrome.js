module.exports = { 
    //param A : string
    //return an integer
       isPalindrome : function(A){
           
           const isAlphaNumeric = c => (c>47 && c<58) || (c>64 && c<91) || (c>96 && c<123);
           A = A.split("").filter(e=> isAlphaNumeric(e.charCodeAt(0)));
           let B = [...A].reverse();
           if(A.join("").toLowerCase()===B.join("").toLowerCase())
               return 1;
           else return 0;
       }
       
       
   };
   