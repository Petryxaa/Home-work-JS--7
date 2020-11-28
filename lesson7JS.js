// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//let btn  = document.getElementById('newButton')
//let text = document.getElementById("text")
//btn.onclick = ev =>{
//text.hidden
//    ? text.hidden = false
//    :text.hidden = true
//}
//let btn1 = document.createElement('button');
//document.body.appendChild(btn1);
//btn1.innerText ='Кнопка';
//
//let wrap = document.getElementById('wrap')
//btn1.onclick = function even() {
//if(wrap.hidden){
//wrap.hidden = false
//}
//else{
//wrap.hidden = true
//}
//}
//
// =================================================================================================================
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//let button = document.createElement('button');
//document.body.appendChild(button);
//button.innerText = 'Button';
//button.style.backgroundColor = '#4AFB26';
//button.style.width = '300px';
//button.style.height = '50px';
//button.style.borderRadius ='20px';
//
//button.onclick = ev =>{
//button.style.display = 'none';
//}
// =============================================================================================================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//let input = document.createElement('input');
//document.body.appendChild(input);
//
//let button = document.createElement('button');
//document.body.appendChild(button);
//button.innerText = "ok"
//
//button.onclick = function ev (){
//    let value = input.value;
//
//    if(value < 18 ){
//alert('GO home!!')
//
//    }
//else{
//    alert('Hello user')
//
//}
//}
////
////
//===============================================================================================================================================================================================
//
// - Создайте меню, которое раскрывается/сворачивается при клике
// 
// const a1 = document.getElementById('a1')
// const subMenu =document.getElementById('subMenu')
// subMenu.style.display ='none';//---закрите на початку
// 
//  
// let flet = false;
// 
// a1.onclick = ev =>{
// 
    // if(flet){
        // subMenu.style.display = 'block';
        // flet = false;
    // }
        // else{
        // subMenu.style.display = 'none'
        // flet = true
        // }
// 
    // }
//
//================================================================================================================================================
// 
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//let comentarArray = [
//    {title : 'Fin', body:'It only took me 12 days to make a "Hello, World" with this music'},
//    {title : 'Tom', body:'lorem ipsum dolo sit ameti'},
//    {title : 'Ana', body:'lorem ipsum dolo sit ameti'},
//    {title : 'Kristi',body:'lorem ipsum dolo sit ameti'},
//    {title : 'Vova', body:'lorem ipsum dolo sit ameti'},
//    {title : 'Anton', body:'lorem ipsum dolo sit ameti'},
//    {title : 'Oleg', body:'lorem ipsum dolo sit ameti'},
//]
//
//let idcomentar = document.getElementById("comentar");
//
//comentarArray .forEach(element => {
//
//    let div = document.createElement('div')
//    let h2 = document.createElement('h2')
//    let p = document.createElement('p')
//    let button = document.createElement('button');
//
//button.innerText = 'comentar';
//h2.innerText = element.title;
//p.innerText = element.body;
//button.onclick =()=>{
//    p.hidden
//    ? p.hidden = false
//    : p.hidden = true
//}
//div.appendChild(h2)
//div.appendChild(p)
//div.appendChild(button)
//
//idcomentar.appendChild(div);
//
//});
////
// ==============================================================================================================================================================================================
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//let btn = document.getElementById('btn');
//btn.style.width = '350px';
//btn.style.height = '36px'
//btn.style.backgroundColor = '#E2FF0A';
//
//let input1 = document.getElementById('input1');
//let input2 = document.getElementById('input2');
//let input3 = document.getElementById('input3');
//let input4 = document.getElementById('input4');
//
//
//btn.onclick = ev =>{
//    console.log(input1.value)
//    console.log(input2.value)
//    console.log(input3.value)
//    console.log(input4.value)
//}
//
// ======================================================================================================================================================================
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
//// Третій параметр визначає елемент в який потрібно таблицю додати.
//let content = document.getElementById('text')
//function createTable (rows,cols,tag){
//
//            const table = document.createElement('table')
//
//for(let i = 0; i < rows; i++){
//            const tr = document.createElement("tr")
//           
//          
//for(let j = 0; j < cols; j ++){
//    const td = document.createElement('td');
//    td.innerHTML = i + j;
//tr.appendChild (td)
//}
//table.appendChild(tr)
//}
//tag.appendChild(table)
//}
//
//createTable(2,8,content);
//
// ===================================================================================================================================================
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// 
// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let btn = document.getElementById('btn');
// btn.innerText ="oK";
//  
//  function info (rows,cells,contents){
//  let table = document.createElement('table');
// 
//  for(let i = 0; i< rows; i++){
    // const tr = document.createElement("tr")
    // tr = input1;
//  for(let j =0; j< cells;j++){
//  const td = document.createElement('td');
// td = input2;
// 
// tr.appendChild (td)
// table.appendChild(tr)
// contents.appendChild(table)
//  }
//  }
//  }
// 
//  btn.onclick = e =>{
// info(rows.value,cells.value,contents.value)
// 
    // 
//  }
// 

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
//let contentNo = ["s","y",'x'];
//
//
//let input1 = document.createElement('input');
//let btn = document.createElement('button');
//
//document.body.appendChild(btn);
//document.body.appendChild(input1);
//
//input1.style.width = '100px';
//input1.style.height = '30px'
//btn.innerText = 'provirka';
//
//btn.onclick =()=>{
//   if(contentNo.includes(input1.value)) {
//       alert("Не матюкайся бичок!!")
//   }
//}
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//let input = document.forms.censored.text;
//
//let button = document.getElementById('submit-censored')
//let censored_array = ['syk', 'xmm', 'dddd', 'pidd', 'dyr']
//button.onclick = () => {
//    let words = input.value.split(" ");
//    
//    for (let word of words) {
//
//        censored_array.forEach(value => word.includes(value) 
//        ? alert("Не матюкайся бичок") 
//        : null)
//    }
//}


// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
//let arrH2 = document.getElementsByTagName('h2');
//let content = document.getElementById ('content');
//let wrap = document.getElementById ('wrap');
//
//let ul = document.createElement('ul')
//
//for(let i =0; i < arrH2.length;i++){
//    let li = document.createElement('li')
//    let a = document.createElement('a')
//    let yakor = 'yakor' + i;
//    a.href = '#' + yakor;
//    
//arrH2[i].setAttribute('id',yakor);
//a.innerHTML = arrH2[i].innerHTML; 
//li.appendChild(a);
//ul.appendChild(li);
//}
//content.appendChild(ul);
//content.style.width = '30%';
//wrap.style.width = '70%';
//content.style.float = 'left';
//wrap.style.float = 'left';


// -- взять массив пользователей
//let usersWithAddress = [
//                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//            ];
//// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//// 2й - оставляет старше 29 лет включительно
//// 3й - оставляет тех у кого город киев
//// Данные выводить в документ
//
//let cont= document.createElement('div');
//let userDIV = document.createElement('div');
//userDIV.className ='user'
//document.body.appendChild(cont);
//userDIV.appendChild(renderArray(usersWithAddress))
//
//let chek1 = document.getElementById('chek-1');
//let chek2 = document.getElementById('chek-2');
//let chek3 = document.getElementById('chek-3');
//
//
//const input1 = document.createElement('input');
//const input2 = document.createElement('input');
//const input3 = document.createElement('input');
//
//let btn = document.createElement('button');
//
//let lebel1 = document.createElement('label');
//let lebel2 = document.createElement('label');
//let lebel3 = document.createElement('label');
//
//lebel1.innerText = " з статусом false"
//lebel2.innerText = '29 років'
//lebel3.innerText = 'місто Київ'
//
//btn.innerText ="Filter";
//btn.style.marginLeft ="20px"
//btn.style.width = '150px';
//btn.style.backgroundColor = '#28CDFF';
//
//
//input1.type = 'checkbox';
//input1.style.width = '30px';
//input2.type = 'checkbox';
//input2.style.width = '30px';
//input3.type = 'checkbox';
//input3.style.width = '30px';
//
//cont.appendChild(userDIV)
//
//cont.appendChild(input1)
//cont.appendChild(lebel1)
//cont.appendChild(input2)
//cont.appendChild(lebel2)
//cont.appendChild(input3)
//cont.appendChild(lebel3)
//
//cont.appendChild(btn);
//
//function renderArray (array){
//let main = document.createElement('divka');
//
//array.forEach(element => {
//  let div = document.createElement('div');
//
//div.innerHTML = JSON.stringify(element)
//
//main.appendChild(div);
//});
//return main;
//} 
//
//btn.onclick = ev =>{
//    let cont = JSON.parse(JSON.stringify(usersWithAddress))
//if(input1.checked) cont = cont.filter(value =>!value.status);
//if(input2.checked) cont = cont.filter(value =>value.age >= 29);
//if(input3.checked) cont = cont.filter(value =>value.address.city === 'Kyiv');
//
//userDIV.innerHTML = '';
//userDIV.appendChild(renderArray(cont));
//
//}
//
////let filter = usersWithAddress.filter((value => value.status === false && value.age >= 29 && value.address.city === 'Kyiv'))
//(filter);




// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан