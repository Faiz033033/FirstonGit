//console.log(document.getElementById('header-title'));
//var faiz = document.getElementById('header-title');
//console.log(faiz)
//faiz.style.borderBottom ='solid';
//var faiz1 = document.getElementById('main');
//console.log(faiz1)
//faiz1.style="color:green"
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);

//items[1].style.backgroundColor='green';

//for(var i = 0; i < items.length; i++){
 //   items[i].style.fontWeight='bold';

//}
/* var li = document.getElementsByTagName('li');
console.log(li);
li[1].style.backgroundColor='red' */

/* var header = document.querySelector('main-header');
header.style.borderBottom = 'solid 8px #cccc' ;


var input = document.querySelector('input');
input.value = 'Please Enter Here'
console.log(input); */

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.Color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}


