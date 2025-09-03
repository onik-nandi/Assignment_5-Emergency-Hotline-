1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
<<<<<<< HEAD
getElementByID: use for id.
getElementsByClassName: use to find specific class name in multiple section.It give us data as arry-like html element.Its update automatically when make any change in html
querySelector: for first matching element .
=======

getElementByID: use for id.

getElementsByClassName: use to find specific class name in multiple section.It give us data as arry-like html element.Its update automatically when make any change in html

querySelector: for first matching element .

>>>>>>> 45ce97711cb5d04d9b089c8517c5b738dfb5f80f
querySelectorAll: for all the matching element.it returns node list.doesn't update automatically.

2. How do you **create and insert a new element into the DOM**?

<<<<<<< HEAD
Answer: using .createElement()
example:
const newLi = document.createElement("li");
insert new element in DOM using .appendChild();

example:

document.ul.appendChild("newLi");

3.  What is **Event Bubbling** and how does it work?
    answer: when an event happend it first works on that element after that parent of this element it goes reverse till document.like a reversee tree.

4.  What is **Event Delegation** in JavaScript?Why is it useful?
    Answer: instead of using eventListener in multiple child element we can use one in parent.use event bubbling method to get data.
    usefull because if we use eventlistener in every child it will consume more storage.using event delegation it consume less data.

5.  What is the difference between **preventDefault() and stopPropagation()** methods?
    preventDefault(): blocks default actions like form submit etc.

=======

Answer: using .createElement()

example:
const newLi = document.createElement("li");
insert new element in DOM using .appendChild();

example:

document.ul.appendChild("newLi");

3.  What is **Event Bubbling** and how does it work?

    answer: when an event happend it first works on that element after that parent of this element it goes reverse till document.like a reversee tree.

5.  What is **Event Delegation** in JavaScript?Why is it useful?

    Answer: instead of using eventListener in multiple child element we can use one in parent.use event bubbling method to get data.
    usefull because if we use eventlistener in every child it will consume more storage.using event delegation it consume less data.

6.  What is the difference between **preventDefault() and stopPropagation()** methods?

   
    preventDefault(): blocks default actions like form submit etc.

>>>>>>> 45ce97711cb5d04d9b089c8517c5b738dfb5f80f
    stopPropagation() : stop event bubbling.
