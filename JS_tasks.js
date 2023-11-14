// "use strict";

// Event handling
// element.addEventListener('click', showAlert);


// function showAlert() {
//     alert('Hello from event handler!');
//   }
// const element = document.querySelector('.action');
// element.addEventListener('click', showAlert);


// function changeText(event) {
//     event.target.innerText = 'Clicked';
// }
// // const elements = document.querySelectorAll('.action');
// // elements.forEach((element) => {  
// //     element.addEventListener('click', changeText);
// //   });


// function changeColor(event) {
//     event.target.style.backgroundColor = 'red';
// }


// const elements = document.querySelectorAll('.action');
// elements.forEach((element) => {
//     element.addEventListener('click', changeText);
//     element.addEventListener('click', changeColor);
// });


// №1 
// Alış - veriş siyahısı üçün layout verilmişdir.
// Elə hadisə emal edici əlavə edin ki,
// siyahı elementinə klikləndiyi zaman mətn rəngi açıq boz rəngə dəyişsin.


// function changeColor (lists) {
//     lists.target.style.color = 'lightgray';
// }
// const elements = document.querySelectorAll('.lists');
// elements.forEach ((elements)=>{
//     elements.addEventListener ('click',changeColor);
// })


// function changeText(event) {
//     event.target.innerText = 'Clicked';
// }
// function changeColor(event) {
//     event.target.style.backgroundColor = 'yellow';
//     element.removeEventListener ('click', changeColor);
// }
// const elements = document.querySelectorAll('.action');
// elements.forEach((element) => {
//     element.addEventListener('click', changeText);
//     element.addEventListener('click', changeColor);
// });


// №2
// Alış-veriş siyahısı üçün layout verilmişdir.
// Elə hadisə emal edici əlavə edin ki, 
// siyahı elementinə klikləndiyi zaman mətn üstündən xətt çəkilsin. 
// Siyahı elementinə ilk klikdən sonra hadisə emal edicini silin. 


// function addStrike(event) {
//     event.target.style.textDecoration = 'line-through';
//     event.target.removeEventListener('click', addStrike);
// }

// const buttons = document.querySelectorAll('.shopping-list button');
// buttons.forEach((button) => {
//     button.addEventListener('click', addStrike);
// });


// const elements = document.querySelectorAll('.action');
// elements.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         const text = event.target.innerText;

//         if (text === 'Selected') {
//             event.target.innerText = 'Not selected';
//         } else {
//             event.target.innerText = 'Selected';
//         }
//     });
// });


// const greenBox = document.querySelector('.green-box');

// greenBox.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = 'yellow';
// });

// greenBox.addEventListener('mouseout', (event) => {
//     event.target.style.backgroundColor = 'green';
// });

// greenBox.addEventListener('mousedown', (event) => {
//     event.target.style.backgroundColor = 'red';
// })

// greenBox.addEventListener('mouseup', (event) => {
//     event.target.style.backgroundColor = 'blue';
// })



// document.querySelector('.link').addEventListener('click', (event) => {
//     event.preventDefault();
//     event.target.innerText = 'Clicked';
// });


// document.addEventListener('keyup', (event) => {
//     console.log('Key pressed');
// });

// document.addEventListener('keyup', (event) => {
//     console.log(event.key);
//     console.log(event.keyCode);
// });



// function changeColor(event){
//     event.target.style.backgroundColor = 'red';
//     event.target.style.color = 'yellow';
// }

// let h1 = document.querySelector('h1').addEventListener('click', changeColor);


// function $ (a) {
//     return document.querySelectorAll (a);
// }

// let h1 = document.querySelector('h1');
// h1.onclick = () => {
//     h1.style.color = 'red';
// }

// let list = $('li');

// console.log(list);

// list.forEach(e => {
//     e.addEventListener('click', () => e.style.backgroundColor = 'red')
// })


// let g20 = document.querySelector('.g20');
// let g40 = document.querySelector('.g40');
// let body = document.body;

// function changeColor (e){
//     console.log(e.target);
//     body.style.backgroundColor = 'yellow';
// }

// function changeColor (e){
//     if (e.target.classList.contains('g20')){
//         body.style.backgroundColor = 'yellow';
//     }
//     else if (e.target.classList.contains('g40')){
//         body.style.backgroundColor = 'red';
//     }
// }

// window.addEventListener('keyup',changeColor);
// g40.addEventListener('click',changeColor);


// №3
// Klaviaturada Enter düyməsi basıldıqda konsolda “ENTER” sözünü çıxaran proqram yazın.

// window.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter'){
//     console.log(e.key);
//     }
// })



// d/z +++



















// MELUMAT DAXIL OLUNMA ELEMENTLERI

// №1 
// Mesaj göndərmək üçün aşağıdakı elementlərdən 
// ibarət forma yaradın:
// mətn daxil olunma sahəsi və textarea mesaj mətni ilə;
// mesaj növünü seçmək üçün select elementi: şəxsi, ictimai;
// "Cavab haqqında bildiriş"  qeydi ilə checkbox elementi;
// "Mesaj Göndər" düyməsi.

// let messageIn = document.querySelector('.message');
// let messageTypeSelect = document.querySelector('.messagetype');
// let messageOkButton = document.querySelector('.messageOk');

// messageOkButton.addEventListener('click',() => {
//     alert (messageIn.value);
// })




// const nameInput = document.querySelector('.name');
// const tip = document.querySelector('.tip');

// nameInput.addEventListener('keyup', (e) => {
//   if (e.target.value.length < 3) {
//     tip.style.display = 'block';
//   } else {
//     tip.style.display = 'none';
//   }
// });


// const nameInput = document.querySelector('.name');
// const tip = document.querySelector('.tip');

// nameInput.addEventListener('focus', () => {
//   if (nameInput.value.length < 3) {
//     tip.style.display = 'block';
//   } 
// });


// nameInput.addEventListener('blur', () => {
//     if (nameInput.value.length >= 3) {
//       tip.style.display = 'none';
//     } else {
//       tip.style.display = 'block';
//     }
//   });



// const genderSelect = document.querySelector('.gender');
// const subscribeCheckbox = document.querySelector('.subscribe');

// genderSelect.addEventListener('change', (event) => {
//   alert(`Cins seçildi: ${event.target.value}`);
// });

// subscribeCheckbox.addEventListener('change', (event) => {
//   if (event.target.checked) {
//     alert('Siz abunə oldunuz');
//   } else {
//     alert('Siz abunə siyahısından çıxarılmısınız');
//   }
// });



// №2
// Şərhin göndərilmə forması verilmişdir.
// Elə hadisə emal edici əlavə edin ki, 
// "Şərh göndər" düyməsini kliklədiyiniz zaman 
// bütün daxiletmə sahələrindəki məlumatlar konsola çıxsın.


// let commentIn = document.querySelector('.comment');
// let commentButton = document.querySelector('.commentSb');

// commentButton.addEventListener('click',() =>
//     alert (`comment: ${commentIn.value}`)
// )


// let form = document.querySelector ('form');
// let inputText = document.querySelector ('input[type = "text"]');
// let inputChek = document.querySelector ('input[type = "chekbox"]');
// let inputPass = document.querySelector ('input[type = "password"]');
// let forms = document.querySelectorAll ('input');


// forms [0]. addEventListener('input', () => {
//     // console.clear;
//     console.log(forms[0].value);
// })

// // console.log (inputText);

// form.addEventListener('submit', (e) => {
//     // console.log(inputText.value);
//     e.preventDefault();

//     forms.forEach(e => {
//         if(e.type === 'checkbox'){
//             console.log(e.checked);
//         } else {
//             console.log(e.value);
//         }})
//     })



















// HTML-formlar

// const userForm = document.querySelector('.user-form');

// userForm.addEventListener('submit', (e) => {
//   e.preventDefault();


//   const data = new FormData (e.target);

//   console.log(data.get('firstname'));
//   console.log(data.get('lastname'));
//   console.log(data.get('gender'));
// });




// №1

// Yaş, E - mail və parol daxil etmək üçün sahələri olan forma yaradın. 
// Formanı göndərərkən validasiya əlavə edin:
//  əgər parol uzunluğu 5 simvoldan artıqdırsa, konsola "İçazə verildi" mesajını çıxarın.
//   Əks halda, "Giriş qadağandır" mesajı çıxarın.

// let userForm = document.querySelector ('.user-form');

// userForm.addEventListener('submit', (e) => {
//     e.preventDefault ();

//     const data = new FormData (e.target);

//     if (data.get('password').length > 5){
//         console.log('Icaze verildi');
//     } else {
//         console.log('Girish qadagandir!');
//     }

// })






// HTTP-sorğular və JSON formatı

// const data = '{"id":352, "type":"general","setup":"Why didn\'t the number 4 get into the nightclub?", "punchline":"Because he is 2 square."}'



// const objectData = JSON.parse(data);

// console.log(typeof objectData);



// const objectData = {
//     id:352, 
//     type:'general', 
//     setup:"Why didn't the number 4 get into the nightclub?", 
//     punchline:"Because he is 2 square."
//   }

//   const data = JSON.stringify(objectData);

//   console.log(typeof data);
//   // string




// №1
// JSON formatında dəyərləri olan sətir verilmişdir. 
// Sətiri obyektə çevirin.
// id sahəsinin dəyərini 157-ə dəyişin;
// bu dəyişmiş obyektə əsasən yeni sətir (json) yaradın.

// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';

// const objectData = JSON.parse (data);

// console.log(objectData);

// objectData['id'] = 157;

// console.log(objectData);

// const newData = JSON.stringify(objectData);

// console.log(typeof newData);
// console.log(newData);





















// fetch

// fetch('https://api.chucknorris.io/jokes/random')

//     // .then((response) => {
//     //     console.log(response);
//     //   });

//     .then((response) => {
//         return response.json();
//     })

//     .then((data) => {
//         console.log(data);
//     })


// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(`Произошла ошибка: ${error.message}`);
//   });



// №1
// Bir "Zarafat generatoru" proqramı tərtib edin.
//     Səhifəyə "Zarafat et" düyməsini əlavə edin.
//     Düyməni tıkladığınız zaman səhifədə təsadüfi bir zarafat görünməlidir.
// Zarafat əldə etmək üçün zarafat generatorundan istifadə edin — https://api.chucknorris.io/jokes/random 

// let play = document.querySelector('.play');
// let text = document.querySelector('.text');

// play.addEventListener('click', function() {
//     fetch('https://api.chucknorris.io/jokes/random')
//       .then(response => response.json())
//       .then(data => {
//         // API-dən gələn zarafatı səhifədə göstərin
//         text.textContent = data.value;
//       })
//       .catch(error => {
//         console.error('Xəta baş verdi: ' + error);
//       });
//   });



















// api 

// fetch('https://acb-api.algoritmika.org/api/transaction')
// .then(res => res.json())
// .then(data => {
//   console.log(data);
// })




// №1
// https://acb-api.algoritmika.org/api/transaction serverindən əməliyyatların siyahısını əldə edin və onları 
// “A B-yə XXX rubl ödəniş köçürdü” 
// formatında mətn blokları şəklində ekranda göstərin.



// fetch('https://acb-api.algoritmika.org/api/transaction')
// .then(res => res.json())
// .then(data => {
//       data.forEach(operation => {
//         const operationText = `${operation.from} ${operation.to}-a ${operation.amount} rubl ödəniş köçürdü`;
//         const creatP = document.createElement('p');
//         creatP.textContent = operationText;
//         const opDiv = document.querySelector('.operations');
//         opDiv.appendChild(creatP);
//     })
//     .catch(error => {
//     console.error('Xəta baş verdi: ' + error);
//   })
// })


// fetch('https://acb-api.algoritmika.org/api/transaction?from=John%20Smith')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })




// 2
// https://acb-api.algoritmika.org/api/transaction serverindən
//  istifadəçi John Smith tərəfindən qəbul edilən ödənişlərin siyahısını əldə edin 
//  və onları ekranda göstərin.

// fetch('https://acb-api.algoritmika.org/api/transaction?from=John%20Smith')
//       .then(res => res.json())
//       .then(data => {
//         const opDiv = document.querySelector('.operations');
//         data.forEach(operation => {
//           const creatP = document.createElement('p');
//           creatP.textContent = `${operation.from} ${operation.to}-yə ${operation.amount} rubl ödəniş köçürdü`;
//           opDiv.appendChild(creatP);
//         });
//       })
//       .catch(error => {
//         console.error('Xəta baş verdi: ' + error);
//       });
        














// const info = {
//     from: 'Sam Stone',
//     to: 'Joaquin Phoenix',
//     amount: 200
//   }
//   fetch('https://acb-api.algoritmika.org/api/transaction', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(info)
//   });



// const info = {
//     from: 'John Doe',
//     to: 'Jane Doe',
//     amount: 20000000
//   }
//   fetch('https://acb-api.algoritmika.org/api/transaction/1', {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(info)
//   });
  


// fetch('https://acb-api.algoritmika.org/api/transaction/1', {
//   method: 'DELETE'
// })



// const url = 'https://content.guardianapis.com/search';
// const apiKey = '73e7a3de-3249-4f81-b325-db9cc873f834';


// fetch(`${url}?api-key=${apiKey}`);



// const url = 'https://content.guardianapis.com/search';
// const apiKey = '73e7a3de-3249-4f81-b325-db9cc873f834';


// fetch(`${url}?api-key=${apiKey}`);

// const url = 'https://content.guardianapis.com/search';
// const apiKey = '73e7a3de-3249-4f81-b325-db9cc873f834';
// const query = 'Microsoft';

// fetch(`${url}?q=${query}&api-key=${apiKey}`)


// const url = 'https://content.guardianapis.com/search';
// const apiKey = '73e7a3de-3249-4f81-b325-db9cc873f834';
// const query = encodeURIComponent('Microsoft Google Amazon');


// fetch(`${url}?q=${query}&api-key=${apiKey}`);




// Https sorgular mozusuna aid tapwiriq:

// Personajların Çeviklik və İntellekt dəyərlərini artırın.
// Personajlar haqqında məlumat JSON formatında sətirlər şəklində verilmişdir.
// Onları obyektə çevirin.
// Çevikliyik (agility) və İntellekt (intelligence) dəyərini 20 bal artırın.
// Yenilənmiş dəyərləri olan obyekləri JSON formatına çevirin və onları konsola çıxarın.

// Verilib (JSON-lar):

// const character1 = '{"agility": 15, "intelligence": 15, "strength": 150, "magicPower": 5500, "magicResist": 2000, "armor": true}';
// const character2 = '{"agility": 20, "intelligence": 10, "strength": 150, "magicPower": 5000, "magicResist": 2500, "armor": true}';

// const character1Object = JSON.parse(character1);
// const character2Object = JSON.parse(character2);

// character1Object.agility += 20;
// character1Object.intelligence += 20;
// character2Object.agility += 20;
// character2Object.intelligence += 20;

// const character1Updated = JSON.stringify(character1Object);
// const character2Updated = JSON.stringify(character2Object);

// console.log("character1 yenilənmiş:", character1Updated);
// console.log("character2 yenilənmiş:", character2Updated);


// Həftə içi (iş günləri, 1-5 günlər) və həftə sonu (weekend, 6-7 günlər)  təyin etmək üçün proqram tərtib edin.
// İstifadəçiyə tarix daxil etməyi təklif edən və həmin günün iş günü ve ya weekend olduğunu müəyyən etməyə imkan verən proqram tərtib edin.

// Daha ətraflı:
// 1) İstifadəçiyə tarix daxil etməyi təklif edin və verilmiş tarixlə serverə sorğu göndərin.
// Tarixi yoxlamaq üçün API-dən istifadə edin:  https://isdayoff.ru/YYYYMMDD
// Qeyd: Burda  YYYYMMDD  - sizin daxil etdiyiniz tarixdir.
// 2) Sorğu nəticə olaraq 0 qaytardıqda brauzerdə «İş günüdür» bildiriş mesajı çıxmalıdır.
//     Sorğu nəticə olaraq 1 qaytardıqda brauzerdə «Həftə sonudur» bildiriş mesajı çıxmalıdır.
//     Sorğu nəticə olaraq 100 qaytardıqda brauzerdə «Tarix səhv daxil edilib» bildiriş mesajı çıxmalıdır.
//     Sorğu nəticə olaraq 101 qaytardıqda brauzerdə «Məlumatlar tapılmadı» bildiriş mesajı çıxmalıdır.


// const userInput = prompt("Tarixi daxil edin (YYYYMMDD formatında):");

// fetch(`https://isdayoff.ru/${userInput}`)
//   .then((response) => response.json())
//   .then((data) => {
//     if (data === 0) {
//       alert("İş günüdür.");
//     } else if (data === 1) {
//       alert("Həftə sonudur.");
//     } else if (data === 100) {
//       alert("Tarix səhv daxil edilib.");
//     } else if (data === 101) {
//       alert("Məlumatlar tapılmadı.");
//     }
//   })
//   .catch((error) => {
//     console.error("Sorğu zamanı xəta baş verdi:", error);
//   });





