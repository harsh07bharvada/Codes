/*package whatever //do not write package name here */

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner scanner = new Scanner(System.in);
        Integer testcases = Integer.parseInt(scanner.nextLine());
        String[][] arr = new String[testcases][];
        for(int i =0;i<testcases;i++){
            String str = scanner.nextLine();
            String[] arr1 = str.split("\\.");
            
            arr[i] = arr1;
        }
        
        for(int i=0;i<arr.length;i++){
            String res = "";
            for(int j=arr[i].length-1;j>=0;j--)
            {
                res+=(arr[i][j]+".");
            }
            res = res.substring(0,res.length()-1);
            System.out.println(res);
            
        }
        
	}
}