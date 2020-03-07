Flow2Uge2

Note:
I was sick Tuesday and Wednesday, and therefore unable to perform.
Therefor the assignments may seam lackluster, I instead tried to focus on the Friday assignment with the map, because I felt it covered assignments from the previse days.   

Tirsdag
How far you got with a solution:
Assignmet 3 ()
Where the solution to each exercise can be found in your commit:
1 Tirsdag (Folder)
Which of the weekly learnings goals were covered by your solution:
Callback, Map, Filter.   
   
Onssdag:
How far you got with a solution: 

Where the solution to each exercise can be found in your commit: 

Which of the weekly learnings goals were covered by your solution:

Torsdag:
How far you got with a solution: 

Where the solution to each exercise can be found in your commit:

Which of the weekly learnings goals were covered by your solution

Fredag:
How far you got with a solution: 
Done (woud have liked to fix gb and watermasses tho)

Where the solution to each exercise can be found in your commit 
Fredag folder (pls use the word doc to se answers to fridays assingments qustions).
 
Which of the weekly learnings goals were covered by your solution
Same origen, Ajax, fetch data from a Proxy on an Origin Server and provide it as a service

ps.
 if its not possible to open word doc here is the answers in readme:
Answers to questions in Friday assignments:

Explain about the Object Model, and why it’s (very) relevant for modern Web-development
With the modern day Object relational programing or rather object oriented programing (OOP) its more convenient for developers to use API’s to get data (objects) and implement needed data in to own code.  The practice of OOP is commonly used and therefor relevant for modern web-development 

Explain (using an example of your own choice) about JavaScript events, and Event Bubbling
When using JavaScript, we often use callbacks or run function within functions. This is to ensure that event bubbling is preformed: uses the hierarchy to determine which functions to run first. in the function we pass the event (addEventListener) to the function, allowing us to work with the current event at the right time.      

Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are 
implemented on diﬀerent platforms.
Let’s look at JSON as a power converter on your phone charger. even though electricity is all in volts you still need a power converter to let the right amount/structure of volts in to your phone. 
That’s why you can insert part of your charger directly in to your computer, but not the socket on the wall. 
The same goes for programing language, even though code is all in letters, only the right letters will perform correctly. By using Json your put your code through a converter/translator, so to make all data transferable => cross languages. Making it easy to use xml to create pages the uses transferable data.     
      

Explain the topic AJAX and how it has changed the way modern web-applications are created
AJAX gives us the opportunity to use tools as JavaScript asynchronously, meaning we are allowed to:
-	Update a web page without reloading the page
-	Request data from a server - after the page has loaded
-	Receive data from a server - after the page has loaded
-	Send data to a server - in the background
Thereby retrieving small amount of date and implementing changes to areas of the page, without having to refresh the page.  

Explain the Same Origin Policy (for AJAX), and different ways to work around it
The two main ways to get around it is to either allow it on the hosts side or to fetch the data needed within your own backend and there after implement it into your own code.

Assignment 2 
For the previous task it was possible to obtain data right from restcountries.eu via an AJAX call made from within your Browser (as sketched to the right). Use Chrome Developer tools to explain (with focus on the Same Origin Policy) why this is possible.
By using my own backend to get the data from the http://restcountries.eu/rest/v1/alpha?codes=de I crated at path with my backend before using it on the server, therefor making the request come from the one origins and not from my server. 
