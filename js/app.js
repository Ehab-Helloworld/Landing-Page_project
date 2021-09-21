/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


// Here i used <-document.createDocumentFragment()-> to improve the performance of the project insted of using div.

const section = document.querySelectorAll('section');//put all my sections in array called section 
const frag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//using a getBoundingClientRect function to know or to tell the browser that we has the view to our section 
// i search about this function and i understand what the getBoundingClientRect done and use getBoundingClientRect to return true or false so i can use it later in active class.
function viewPort(section) {
    const bounding = section.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        return true;
    }
    else {
        return false;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// using for loop to walk through all the section and make  a ul ,and but anside it the Li and it's information 
for (let i = 0; i < section.length; i++) {
    const newEl = document.createElement('li');//creat a new Li
    const neWA = document.createElement('a');
    neWA.innerText = section[i].getAttribute('data-nav');//creat a new Anchor 
    neWA.setAttribute('class', "menu__link"); //using set Attribute to set the class name using a  "menu__link" to give the nav bar a good css style 
    neWA.id = "li-Id" + (i + 1);
    neWA.setAttribute('href', "#" + section[i].getAttribute('id'));//using set Attribute to set the class id 
    neWA.addEventListener('click', function Scroll(event) {  //use the addEventListener and scrollIntoView to make the navbar elements scroll when click on it.
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: "smooth" });//make the transtion smoth by using the behavior .

    });

    newEl.appendChild(neWA);
    frag.appendChild(newEl);

}


document.querySelector('ul#navbar__list').appendChild(frag);


//<------------------------------------------------->
//<------------------------------------------------->
// Add class 'active' to section when near top of viewport
//using addEventListener to check if the section in viewPort or not and if it is change the class to 'your-active-class'.
document.addEventListener('scroll', function () { // 

    for (let i = 0; i < section.length; i++) {
        if (viewPort(section[i])) {
            section[i].classList.add('your-active-class');

        }
        else {
            section[i].classList.remove('your-active-class');

        }
    }


});



// check the viewPort of the navbar items
//make the navbar items active when the section is active 

document.addEventListener('scroll', function () {

    for (let i = 0; i < section.length; i++) {
        if (viewPort(section[i])) {
            document.getElementById('li-Id' + (i + 1)).style.cssText = 'background: #444; '

        }
        else {
            document.getElementById('li-Id' + (i + 1)).style.cssText = 'background: null;'


        }
    }


});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functionss
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


