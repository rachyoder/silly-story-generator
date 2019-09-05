//Establish Variables for Page Elements
let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

//Function to Randomize the arrays for dynamic generation
function randomValueFromArray(array) {
    return array[Math.floor(Math.random()*array.length)];
    
}

//Story Elements
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

//Story Generation
function result() {
    console.log('is this working');
    let newStory = storyText;
    //Select random entries from Arrays
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
     
    //Place random entries into story
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
    //Custom Name Setup
    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    
    //Change Region Specific Story Elements
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300 * .07142857) + ' stone';
        let temperature = Math.round((94-32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }
    console.log(newStory);
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
