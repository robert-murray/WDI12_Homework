/*
MixUp

Create a function called mixUp. It should take in two strings, 
and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. 
You can assume that the strings are at least 2 characters long. 
For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

 var mixUp =  function(str1, str2){

 		var afterMix1 = str2.slice(0, 2) + str1.slice(2, 100)
 		var afterMix2 = str1.slice(0, 2) + str2.slice(2, 100)
	
		console.log(afterMix1 + " " + afterMix2);

	}


mixUp("mix", "pod");
mixUp("dog", "dinner");
mixUp("sunny", "rain");
mixUp("abcdef", "xyz");