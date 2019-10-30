var set = new Set();

//local Storage Initialization
if(localStorage.getItem('flag')!=0){
    var array1 =[];
    var ob = JSON.stringify(array1);
    localStorage.setItem('flag',0);
    localStorage.setItem('Subscriptions',ob);
}



//Header Only
let headr = document.getElementById("head");
headr.style.background="#11254d";
headr.style.padding="15px";
headr.style.color ="white";
headr.style.fontSize="25px";
headr.style.position="relative";
let head = document.createElement("div");
head.innerHTML = "<b>Newsfeed</b> <I> &emsp; <small>Yet another newsfeed</small></I>";
headr.appendChild(head);


//Read More Box Modal
let box=document.createElement("div");
box.className = "Modal";
box.style.display = "none";
let conTent =document.createElement("div");
conTent.className = "modal-content";
box.appendChild(conTent);
document.body.insertBefore(box, document.body.firstChild);

//Div Main
var data;
let main = document.getElementById("main");
main.className= "article-container";
main.style.border='none';

//Stories Section
let story = document.createElement("div");
story.className= "seventy";

//HTTP Request
var request = new XMLHttpRequest();
request.open('GET','https://devashishg.github.io/HomeTasks/HomeTask2/file.json');
request.onload = ()=>{
    data = JSON.parse(request.responseText);
    loadElement(data);
};
request.send();


//Load Complete Page 
var loadElement = (data)=>{

    //Loop to iterate JSOn data
    for(i=0;i<data.array.length;i++){
        
        //set for select options
        set.add(data.array[i].Category);


        //Story Elements e.g. title, description etc 
        let titleText = document.createElement("h1");
        let timeCatText = document.createElement("small");
        let Descr = document.createElement("p");
        let readMore = document.createElement("button");
        readMore.className = "button1";
        readMore.innerHTML="Continue Reading";
        readMore.id= `${i}`;
        readMore.setAttribute('onclick',`load('${i}')`);
        

        //Json Data Filling 
        titleText.innerHTML = `${data.array[i].title}`;
        Descr.innerHTML = `${data.array[i].Description.substring(0,300)}....`;
        timeCatText.innerHTML = `Posted on ${data.array[i].Date} //  Category:${data.array[i].Category}`;

        //image 
        let storywall = document.createElement("img"); 
        storywall.className= "rest";
        storywall.src='../Resources/pallet.png';
        storywall.style.margin="10px";
        storywall.style.marginRight="15px";
        storywall.setAttribute('width', '80px');
        storywall.setAttribute('height', 'auto');

        //One complete Story with image
        let oneArticle = document.createElement('div');
        oneArticle.className = 'article-container hundred';

        // content only 
        let contentStory = document.createElement("div");  
        contentStory.className="seventy";
        contentStory.appendChild(titleText);
        contentStory.appendChild(timeCatText);
        contentStory.appendChild(Descr);
        contentStory.appendChild(readMore);
 
        
        oneArticle.appendChild(storywall);
        oneArticle.appendChild(contentStory);
        
        
        if(i==data.array.length-1){
            oneArticle.style.border='none';
        }
        story.appendChild(oneArticle);    
    }

    main.appendChild(story);

    ////form section

    let form = document.createElement("form");
    form.setAttribute('action','#');
    form.className = 'rest';
    form.style.paddingLeft= '3%';  
    form.setAttribute('onSubmit',`save(this)`);
    
    let selectTitle =document.createElement('span');
    selectTitle.innerHTML = '<h3>SELECT CATEGORY</h3>';
    form.appendChild(selectTitle);

    //select Field

    let select =document.createElement('Select');
    let option=document.createElement('Option');
    option.setAttribute('value','All');
    option.innerHTML = 'All';
    select.appendChild(option);
    set.forEach((i)=>{
        let option=document.createElement('Option');
        option.setAttribute('value',i);
        option.innerHTML = i;
        select.appendChild(option);
    });
    select.setAttribute('name','category');
    select.setAttribute('onchange',`filter(this)`);
    form.appendChild(select);

    let SubscribeLabel =document.createElement('span');
    SubscribeLabel.innerHTML = '<h3>SUBSCRIBE</h3>';
    form.appendChild(SubscribeLabel);
    
    //Subscribe Button and field
    let inputdiv =document.createElement('div');
    inputdiv.className="form-inline";
    let input =document.createElement('input');
    input.setAttribute("type","email");
    input.setAttribute("name","email");
    input.setAttribute("placeholder","Email Address");
    input.required=true;
    inputdiv.appendChild(input);
    let Subscribe =document.createElement('button');
    Subscribe.innerHTML="SUBSCRIBE";
    inputdiv.appendChild(Subscribe);
    
    form.appendChild(inputdiv);
    main.appendChild(form);
}

//footer
let foot = document.getElementById("foot");
let footer = document.createElement("div");
foot.style.background="#11254d";
footer.style.padding="20px";
footer.style.color ="white";
footer.style.marginTop ="20px";
footer.innerHTML = "<center>© Newsfeed 2019</center>";
foot.appendChild(footer);



//Button onclick method for Modal data using id 
var load = (i)=>{
        let obj=data.array[i];
        //console.log(obj[1]);
        box.style.display = "block";   
        conTent.innerHTML = `<h1>${obj.title}</h1><br/>${obj.Description}`;
}

//closing of popup window
window.onclick = (event)=> {
    if (event.target == box) {
      box.style.display = "none";
    }
  }

//Filter feeds based on Category
let filter = (obj)=>{
    var str=obj.value;
    var elements = document.querySelectorAll('.hundred');
    for (j = 0; j < elements.length; j++) {
        if(elements[j].childNodes[1].childNodes[1].innerHTML.split(':')[1] != str && str!='All'){
            elements[j].style.display = 'none';
        }else{
            elements[j].style.display = 'flex';
        }
        if(str=='All'){
            elements[j].style.display = 'flex';
        }
    }
}


//Save data in local storage where obj1 is form object
let save = (obj1)=> {
    console.log(JSON.parse(localStorage.getItem('Subscriptions')));
    var subsArray = JSON.parse(localStorage.getItem('Subscriptions'));
    subsArray.push(obj1.email.value);
    localStorage.setItem('Subscriptions',JSON.stringify(subsArray));
    alert(`Hi ${obj1.email.value.split("@")[0]}, Thankyou for Subscribing!`);
}









    //Button event listener using classname
    /*var btns = document.querySelectorAll('.button1');
    for (j = 0; j < btns.length; j++) { 
    var id = btns[j].getAttribute('id');
    btns[j].addEventListener('click', ()=> {
        console.log('Triggered');
        box.style.display = "block";   
        conTent.innerHTML = `<h1>${data.array[Number(id)].title}</h1><br/>${data.array[Number(id)].Description}`;
    });}*/