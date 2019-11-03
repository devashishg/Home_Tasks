import { Article  } from "./Modals/Article.js";
import { Source } from "./Modals/source.js";
import { getPromise, getPromiseForURLArray } from "./Services.js"
import { CreateFeedsUsingView } from './Views/ArticleView.js';
import { createSideBar } from './Views/SideBar.js';
import { load } from "./Views/Modal.js";
window.load = load;
//Key
export const key='827b0ce7adc847d499f5b4ab0d051ebc';
//export const key = '061c1d73cc384886a562cd04566c1b58';


//Self-Invoking Function Create Header
(function () {
    let headr = document.getElementById("head1");
    let inputdiv =
    `<div id="head" style="position: fixed; top: 0px; right: 4px; left: 4px;">
        <header id="head1" style="background: rgb(17, 37, 77); padding: 20px 3% 45px; color: white; font-size: 35px;"> 
            <span><b>NEWSFEED</b> <i> &emsp; Yet another newsfeed</i></span>
            <div class="form-inline" style="float: right;">
                <input type="email" name="email" placeholder="Email Address" required="">
                <button style="border: none;">SUBSCRIBE</button>
            </div>
        </header>
    </div>`

    headr.innerHTML = inputdiv;
})();



//Elements Initialization/////////////////////

//Div Main
let main = document.getElementById("main");
main.className = "article-container";

//Stories Section
let story = document.createElement("div");
story.className = "seventy";

//For Category Element set
export let set = new Set();
export let articles = [];
let sources = [];
let url = `https://newsapi.org/v2/sources?language=en&country=in&apiKey=${key}`;

//////////////////////////////////////////


//Fetching Sources using function from Services

getPromise(url).then(response => {
    response.json().then(data => {
        if (data.status === 'ok') {
            let sources = [...data.sources];
            let sourceList = [];
            sources.forEach(e => {
                let s1 = new Source(e);
                sourceList.push(s1);
                url = `https://newsapi.org/v1/articles?source=${s1.id}&apiKey=${key}`;
            });

            //Function Call to fetch Articles
            bringArticles(sourceList);
        } else {
            //console.log(data.message);
        }
    })
}
);


//Method to fetch Articles using Source List

let bringArticles = (sourceList) => {
    sources = sourceList;
    let urls = sources.map((ob) => { return `https://newsapi.org/v1/articles?source=${ob.id}&apiKey=${key}` });

    //Function Call to fetch Articles
    getPromiseForURLArray(urls).then(results => {
        let statementVariableDummy = []
        results.map((SourceArtiAll) => {
            return SourceArtiAll.status === 'ok' ? SourceArtiAll.articles : new Array()
        })
            .map((arti) => {
                return statementVariableDummy.push(arti);
            })
        let objectsArticle = []
        statementVariableDummy.map((val) => { return objectsArticle = [...objectsArticle, ...val] });

        //Converting Json Objects to Class Object. 
        objectsArticle.map((article) => { if (article.description.length > 1) { return articles.push(new Article(article)); } });

        //All Articles Fetched and passed to loadArticles to load Data
        main.appendChild(CreateFeedsUsingView(articles, story));
        createSideBar(main);
    });
}


//Self-Invoking Function Create Footer
(function () {
    let foot = document.getElementById("foot");
    let footer = `<div style="padding: 20px; color: white;"><center>© Newsfeed 2019</center></div>`;
    foot.innerHTML = footer;
})();

