/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = './js/i-scream.json';
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and convert it to a JSON object using json()
    const iScream = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iScream);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iScream);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    const headerH1 = document.createElement('h1');
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;

    // Inject the complete H1 element into the DOM, inside the HEADER
    header.append(headerH1);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    const topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    topFlavors.forEach(({ name, image, ingredients, calories }) => {
        // STEP 10e: Build HTML elements for the content
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        const pCalories = document.createElement('p');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = name;
        img.setAttribute('src', `./images/${image}`);
        img.setAttribute('alt', `${name} image`);
        pCalories.textContent = `Calories: ${calories}`;

        // STEP 10g: Build a loop for the ingredients array in the JSON
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li); 
        });

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.append(h2, img, pCalories, ul);
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    });
}

// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
