var acc = document.getElementsByClassName("accordion"); 
// берем все элементы аккордион и сохраняем в acc
var i;
for (i = 0; i < acc.length; i++) 
// перебираем все элементы аккордиона
// i++ значит увеличваем число в переменной на 1 при повторении цикла
{
  acc[i].addEventListener("click", function() {
    console.log("made a click")
    // acc[i] - обращаемся к элементу с индексом i console.log - значит юудет вызван, когда на элемент кликнут
    this.classList.toggle("active");
    // обращаемся к этому элементу, если он активен закрываем, если нте, то наооборот
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    // для отображения состояния элемента
  });
}

// alert("9870279604")