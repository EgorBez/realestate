// function getAJoke(){
//     fetch( 'https://api.chucknorris.io/jokes/random')
//     .then((response)=>{
//       return response.json();
      
//     }).then((data)=>{
//       console.log(data.value);
//    let info = data;
//       return info;
//     })
  
//   }

// fetch('https://catfact.ninja/fact')
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     let fact = document.querySelector('.fact');
//     fact.innerHTML = data.fact;
//     console.log(data);
// })

let button = document.querySelector('.button');

function makeTwo(){
    fetch(' https://emojihub.yurace.pro/api/random/group/face-positive')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        let 
    })
}

function makeThree(){
    fetch(' https://www.boredapi.com/api/activity')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.value)
    })

}
//makeThree()

function makeFour(){
    fetch('https://www.boredapi.com/api/activity')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log('Activity :' + data.activity)
    })
}

//makeFour() 

 function makeFive(){
    fetch('https://www.boredapi.com/api/activity')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.participants) 
    })
 }
//makeFive()

 function makeSix(){
    fetch('https://www.boredapi.com/api/activity')
    .then((response)=>{
        return response.json();    
    }).then((data)=>
        console.log(data.activity, data.price, data.type, data.accessibility)
    )}
 

 //makeSix()

 function jokeOntheScreen(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        let joke = document.querySelector('.joke')
        let text = document.querySelector('.text')
        joke.innerHTML = data.setup;
        text.innerHTML = data.punchline;
        console.log(joke, text);
    })
 }

 //jokeOntheScreen()

 function postQuery(){
    fetch(' https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
           },
           body: JSON.stringify({ 
            title: 'Название изображения', 
            url: 'https://example.com/image.jpg', 
           }),
    }).then((response)=> response.json()
    ).then((data)=> console.log(data))
    }

    //postQuery()
 
    function getFunction(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response)=> response.json()
        ).then((data)=> console.log(data))
    }
  //  getFunction()

//     function postFunction(){
//         fetch('https://jsonplaceholder.typicode.com/posts'), {
//         method: 'POST',
//         headers: { 
//             'Content-Type': 'application/json', 
//            },
//            body: JSON.stringify({ 
//           title: 'Вторник',
//           body: 'Сегодня вторник, 5 марта',
            
//      }).then((response)=> response.json()
//     ).then((data)=> console.log(data))
//     };
// }

function postFunction() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      title: 'Вторник',
      body: 'Сегодня вторник, 5 марта',
     }),
    })
     .then((response) => response.json()) // Переносим обработку промиса вне объекта с опциями
     .then((data) => console.log(data));
   }


    button.addEventListener('click', postFunction)
   

    function putFunction(){
        fetch(' https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json', 
               },
               body: JSON.stringify({ 
                title: 'Название изображения', 
                body: 'https://example.com/image.jpg', 
               }),
        }).then((response)=> response.json()
        ).then((data)=> console.log(data))
        }

        putFunction()
        getFunction()
        