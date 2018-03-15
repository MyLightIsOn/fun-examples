
/* I created this function to make more divs. I'll explain what each line does */
function makeNewDiv() {

    /* This line is telling the document, which is the
    * webpage, to use a function that is actually in your broswer.
    * This function called createElement takes one argument. That
    * argument is an HTML element. In this case, I'm telling it to
    * to make a div and store it in the variable mySquare. Keep in
    * mind that this is only creating the div. Later we will tell
    * javascript to actually add it to the page. Right now it's just
    * in memory somewhere.
    * */
    var mySquare = document.createElement('div');

    /*This line is going to give that new element the square
    * class so it takes on the same CSS as the other divs*/
    mySquare.className = 'square';

    /*And lastly we tell javascript to add the element to the
    * body. I am passing in the variable which stores the div*/
    document.body.appendChild(mySquare);
}

/* This will remove the lasts div added */
function removeDiv() {

    /* In this line, the code is getting all element on the
    * page that have the class square and storing it in a variable
    * myDivs. Because it's more than one element, it will put them
     * in an array. An array is multpile objects. */
    var myDivs = document.getElementsByClassName('square');

    /*This line is telling the broswer to move the last element
    * from the document body. Because we are passing in that array
    * it is going to remove the first item in the array. The [0]
    * is what is saying the first element because javascript starts
    * counting at 0 instead of 1*/
    document.body.removeChild(myDivs[0]);
}