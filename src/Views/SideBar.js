import { set } from '../index.js';


export let createSideBar = (main) => {
    let form = document.createElement("form");
    form.setAttribute('action', '#');
    form.className = 'rest';
    form.style.paddingLeft = '3%';
    form.style.paddingTop = '5%';

    let selectTitle = document.createElement('span');
    selectTitle.innerHTML = '<h3>SELECT AUTHOR</h3>';
    selectTitle.style.float = 'center';
    form.appendChild(selectTitle);

    //select Field

    let select = document.createElement('Select');
    let option = document.createElement('Option');
    option.setAttribute('value', 'All');
    option.innerHTML = 'All';
    select.appendChild(option);
    set.forEach((i) => {
        let option = document.createElement('Option');
        option.setAttribute('value', i);
        option.innerHTML = i;
        select.appendChild(option);
    });
    select.setAttribute('name', 'category');
    select.addEventListener('change', () => { filter(this); })
    //select.setAttribute('onchange',`filter(this)`);
    form.appendChild(select);

    //Subscribe Button and field
    main.appendChild(form);
}




//Filter feeds based on Category
let filter = (obj) => {
    var obj = document.getElementsByName('category');
    let str = obj[0].value;
    var elements = document.querySelectorAll('.hundred');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].childNodes[1].childNodes[1].innerHTML.split('is ')[1] != str && str != 'All') {
            elements[j].style.display = 'none';
        } else {
            elements[j].style.display = 'flex';
        }
        if (str == 'All') {
            elements[j].style.display = 'flex';
        }
    }
}
