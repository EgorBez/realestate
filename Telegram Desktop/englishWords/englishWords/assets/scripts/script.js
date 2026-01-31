
let body = document.querySelector('.body');
let addButton = document.querySelector('.addButton');
let newEnglishWord = document.querySelector('.newEnglishWord');
let newTranscriptionWord = document.querySelector('.newTranscriptionWord');
let newRussianWord = document.querySelector('.newRussianWord');
let newTagWord = document.querySelector('.newTagWord');


addButton.addEventListener('click', function(){
    let newEnglishWordInput = newEnglishWord.value;
    let newTranscriptionWordInput = newTranscriptionWord.value;
    let newRussianWordInput  = newRussianWord.value;
    let newTagWordInput = newTagWord.value;
    let objectForNewWords = {
        english: newEnglishWordInput,
        transcription: newTranscriptionWordInput,
        russian: newRussianWordInput,
        tags: newTagWordInput
    }
    if(objectForNewWords.english || objectForNewWords.transcription   ){

    }
    createNewWord(objectForNewWords);
});


function makeRequest(){

    return fetch('http://itgirlschool.justmakeit.ru/api/words', {
    }).then((res) => res.json())
    .then((data) =>{
    console.log(data);
data.forEach(i => {
   
    createTablesheet(i)
})
    }) 
}
makeRequest()

function createNewWord(object){
    console.log(object);
    return fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
    headers: { 'Content-Type' : 'application/json' },
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(object)
 })
 
}

function createTablesheet(a){
    // Find the every word  from server and keep it in variable id
  let id = a.id; 

    // Create a card element to hold the word information
    let card = document.createElement('div');
    card.classList.add('card');
    body.appendChild(card);
    // Create a container element inside the card
    let container = document.createElement('div');
    container.classList.add('container');
    card.appendChild(container);
    // Create a wrapper element
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container.appendChild(wrapper);
    // Create a container 
    let containerForWords = document.createElement('div');
    wrapper.appendChild(containerForWords);
    containerForWords.classList.add('containerForWords')
    // Create a container for the english word
    let words = document.createElement('div');
    words.classList.add('words');
    containerForWords.appendChild(words);
    words.textContent = a.english;
    // Create an input for editing the english word
    let wordsInput = document.createElement('input');
    wordsInput.classList.add('words-input');
    wordsInput.value = a.english;
    containerForWords.appendChild(wordsInput);
    wordsInput.style.display = 'none';
    // Create a container for trancription word
    let transcription = document.createElement('div');
    transcription.classList.add('trancription');
    transcription.textContent = a.transcription;
    containerForWords.appendChild(transcription);
    // Create an input for editing the trancription
    let trancriptionInput = document.createElement('input');
    trancriptionInput.classList.add('trancription-input');
    trancriptionInput.value = a.transcription;
    containerForWords.appendChild(trancriptionInput);
    trancriptionInput.style.display = 'none';
    // Create a container for russian translation
    let translate = document.createElement('div');
    translate.classList.add('translate');
    translate.textContent = a.russian;
    containerForWords.appendChild(translate);
    
    // Create an input for editing the russian translation
    let russianTranslationInput = document.createElement('input');
    russianTranslationInput.classList.add('translate-input');
    russianTranslationInput.value  = a.russian;
    containerForWords.appendChild(russianTranslationInput);
    russianTranslationInput.style.display = 'none';
    // Create a container for the tag
    let tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = a.tags;
    containerForWords.appendChild(tag);
    // Create an input for editing the tag
    let tagInput = document.createElement('input');
    tagInput.classList.add('tag-input');
    tagInput.value = a.tags;
    containerForWords.appendChild(tagInput);
    tagInput.style.display = 'none';
    // Create a container for butttons
    let wrapperForButtons = document.createElement('div');
    wrapper.appendChild(wrapperForButtons);
    // Create an editButton
    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    wrapperForButtons.appendChild(editButton);
    // Add an image for the editButton
    let editButtonImage = document.createElement('img');
    editButtonImage.classList.add('write');
    editButtonImage.src = 'assets/images/zapis.png';
   editButtonImage.alt = 'Edit';
   editButton.appendChild(editButtonImage);
   editButton.classList.add(`editButton-${id}`);
    //Add Eventlistener to the editButton to show input fields for editing
   editButton.addEventListener('click', function(){
    //Hide the text elements 
    words.style.display = 'none';
    transcription.style.display = 'none';
    translate.style.display = 'none';
    tag.style.display = 'none';
    editButton.style.display = 'none';
    deleteButton.style.display = 'none';
    // Show the input elements
    wordsInput.style.display = 'block';
    trancriptionInput.style.display = 'block';
    russianTranslationInput.style.display = 'block';
    tagInput.style.display = 'block';
   // Create the save button 
   let saveButton = document.createElement('button');
   saveButton.classList.add('saveButton');
   saveButton.textContent = 'Coхранить';
   wrapper.appendChild(saveButton);
    // Add Eventlistener to the saveButton
    saveButton.addEventListener('click', function(){
        // Show the text elements
        words.style.display = 'block';
        transcription.style.display = 'block';
        translate.style.display = 'block';
        tag.style.display = 'block';
        editButton.style.display = 'block';
        deleteButton.style.display = 'block';
        // Hide the inputs
        saveButton.style.display = 'none';
        wordsInput.style.display = 'none';
        trancriptionInput.style.display = 'none';
        russianTranslationInput.style.display = 'none';
        tagInput.style.display = 'none';
        words = words.innerHTML;
        transcription =  transcription.innerHTML;
         translate = translate.innerHTML;
        let firstInputValue = wordsInput.value;
        let secondInputValue = trancriptionInput.value;
        let thirdInputValue = russianTranslationInput.value;
        let objectForInputs = {
         english: firstInputValue,
         transcription: secondInputValue,
         tags: 'tag',
         russian: thirdInputValue,
         id: id
        }
        
        saveWord(objectForInputs);
        wordsInput.remove();
        trancriptionInput.remove();        
        russianWordInput.remove();
        saveButton.remove();
    })


   })

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('remove');
    wrapperForButtons.appendChild(deleteButton);
    let deleteButtonImage = document.createElement('img');
    deleteButtonImage.src = 'assets/images/1696523403_gas-kvas-com-p-kartinki-bak-5.png';
    deleteButtonImage.classList.add('trash');
    deleteButton.appendChild(deleteButtonImage);
    deleteButton.addEventListener('click', function(){
        deleteWord(id);
     })
    
}  


function deleteWord (id) {
    return fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: 'POST',
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
   
}

function saveWord(object) {
console.log(object);
    return fetch(`http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(object),
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
}


let number = '1';
number = parseInt(number);

Number(number);

parseFloat('3.14')

function convertToNumber(a){
a = parseInt(a);
console.log(typeof a);
if(!isNaN(a)){
    return a
} else {
    return 'Please, provide a valid number'
}


}
