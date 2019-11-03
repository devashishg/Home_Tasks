import { set } from '../index.js';


export let createSideBar = (main) => {
    let form = document.createElement("form");
    form.setAttribute('action', '#');
    form.className = 'rest';
    form.style.paddingLeft = '2%';
    form.style.paddingTop = '5%';
    form.style.paddingRight = '2%';

    let formContent = `<span><h3>SELECT AUTHOR</h3></span>
    <select name="category">
    <option value="All">All</option>`;
    set.forEach((i) => {
        if (!(i)) {
            formContent += `<option value="${i}">Unknown</option>`;
        } else {
            formContent += `<option value="${i}">${i}</option>`;
        }
    });
    formContent += `</select>`;
    form.innerHTML = formContent;

    //Subscribe Button and field
    main.appendChild(form);
    let selector = document.getElementsByTagName('select')[0];
    selector.addEventListener('change', () => {filter(selector); });
}

//Filter feeds based on Category
export let filter = (obj) => {
    var obj = document.getElementsByName('category');
    let str = obj[0].value;
    var elements = document.querySelectorAll('.hundred');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].children[1].children[1].innerHTML.split('is ')[1] != str && str != 'All') {
            elements[j].style.display = 'none';
        } else {
            elements[j].style.display = 'flex';
        }
        if (str == 'All') {
            elements[j].style.display = 'flex';
        }
    }
}