(function() {

//получаем элемент с классом "class1", устанавливаем ему цвет blue, font-size: 14px, text-decoration: underline;
let myClass = document.querySelector(".class1");
myClass.style.color = "blue";
myClass.style.fontSize = "14px";
myClass.style.textDecoration = "underline";

//добавляем к существующем классу, класс с именем "newclass"
myClass.classList.add("newclass");

//выводим в концоль все все стиди что есть у данного класса
console.log(myClass.style.cssText)

//получаем элемент с идентификаторм "id1" и устанавливаем ему цвет "red"
let myId = document.querySelector("#id1");
myId.style.color = "red";

//добавляем элементу с идентификаторм "id1" свойства marginTop с значением 10px и background с значением "red"
myId.style.marginTop = "10px"
myId.style.backgroundColor = "#ff6781";

	})();


