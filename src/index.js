import './style/style.css'
import { Article } from "./Modals/Article.js";
import { Source } from "./Modals/source.js";
import { getPromise,getPromiseForURLArray } from "./Services.js"
import { CreateFeedsUsingView } from './Views/ArticleView.js';
import {createSideBar} from './Views/SideBar.js';

//Key
//const key='827b0ce7adc847d499f5b4ab0d051ebc';
export const key = '061c1d73cc384886a562cd04566c1b58';


//Self-Invoking Function Create Header
(function(){
    //headr inner elememt
    let headr = document.getElementById("head1");
    headr.style.background="#11254d";
    headr.style.padding="3%";
    headr.style.paddingBottom="45px";
    headr.style.paddingTop="20px";
    headr.style.color ="white";
    headr.style.fontSize="35px";

    let head = document.createElement("span");
    head.innerHTML = "<b>NEWSFEED</b> <I> &emsp; Yet another newsfeed</I>";

    headr.appendChild(head);
    //headr External elememt
    let headr1 = document.getElementById("head");
    headr1.style.position="fixed";
    headr1.style.top='0';
    headr1.style.right='4px';
    headr1.style.left='4px';



    //Subscribe input Field
    let inputdiv =document.createElement('div');
    inputdiv.className="form-inline";
    let input =document.createElement('input');
    input.setAttribute("type","email");
    input.setAttribute("name","email");
    input.setAttribute("placeholder","Email Address");
    input.required=true;
    inputdiv.style.float='Right';
    inputdiv.appendChild(input);
    let Subscribe =document.createElement('button');
    Subscribe.style.border='none';
    Subscribe.innerHTML="SUBSCRIBE";
    inputdiv.appendChild(Subscribe);
    inputdiv.style.padding="none";

    //append input in header

    headr.appendChild(inputdiv);
})();


//Elements Initialization/////////////////////

//Div Main
let main = document.getElementById("main");
main.className= "article-container";
main.style.border='none';
main.style.marginTop='105px';
main.style.marginBottom='75px'

//Stories Section
let story = document.createElement("div");
story.className= "seventy";

//For Category Element set
export let set=new Set();
export let  articles=[];
let sources=[];
let url = `https://newsapi.org/v2/sources?language=en&country=in&apiKey=${key}`;

//////////////////////////////////////////


//Fetching Sources using function from Services

getPromise(url).then(response => {
    response.json().then(data=>{
        if(data.status === 'ok'){
            let sources=[...data.sources];
            let sourceList=[];
            sources.forEach(e => {
                let s1 = new Source(e);
                sourceList.push(s1);
                url = `https://newsapi.org/v1/articles?source=${s1.id}&apiKey=${key}`;
            });

            //Function Call to fetch Articles
            bringArticles(sourceList);
        }else{
            //console.log(data.message);
    }})}
);


//Method to fetch Articles using Source List

let bringArticles = (sourceList)=>{
    sources=sourceList;
    let urls = sources.map((ob)=>{return `https://newsapi.org/v1/articles?source=${ob.id}&apiKey=${key}`});
    //console.log(urls);

    //Function Call to fetch Articles
    getPromiseForURLArray(urls).then(results => {
        let statementVariableDummy=[]
        results.map((SourceArtiAll) =>{
            return SourceArtiAll.status === 'ok' ? SourceArtiAll.articles : new Array()})
            .map((arti)=>{
                return statementVariableDummy.push(arti);})
        let objectsArticle=[]
        statementVariableDummy.map((val)=>{return objectsArticle=[...objectsArticle,...val]});

        //Converting Json Objects to Class Object. 
        objectsArticle.map((article)=>{if(article.description.length>1){return articles.push(new Article(article));}});
        //console.log(objectsArticle);
        //console.log(articles);

        //All Articles Fetched and passed to loadArticles to load Data
        //loadArticles(articles);
        main.appendChild(CreateFeedsUsingView(articles,story));
        createSideBar(main);
    });
}


//Self-Invoking Function Create Footer
(function(){
    let foot = document.getElementById("foot");
    foot.style.bottom='0';
    foot.style.position="fixed";
    foot.style.background="#11254d";
    foot.style.right='4px';
    foot.style.left='4px';
    let footer = document.createElement("div");
    footer.style.padding="20px";
    footer.style.color ="white";
    footer.innerHTML = "<center>© Newsfeed 2019</center>";
    foot.appendChild(footer);
})();

