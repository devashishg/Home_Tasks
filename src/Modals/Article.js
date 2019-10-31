export {Article};
import { load } from '../Views/Modal.js';

class Article {
    constructor(articleObj) {

        //console.log(articleObj);
      this.author = articleObj.author;
      this.title = articleObj.title;
      this.description = articleObj.description;
      this.url = articleObj.url;
      this.urlToImage = articleObj.urlToImage;
      this.publishedAt = articleObj.publishedAt;
    }
    
    get authorValue(){
        return this.author;
    }
    get titleValue(){
        return this.title;
    }
    get descriptionValue(){
        return this.description;
    }
    get urlValue(){
        return this.url;
    }
    get urlToImageValue(){
        return this.urlToImage;
    }
    get publishedAtValue(){
        return this.publishedAt;
    }


    set authorValue(author){
        this.author=author;
    }
    set titleValue(title){
        this.title=title;
    }
    set descriptionValue(description){
        this.description=description;
    }
    set urlValue(url){
        this.url=url;
    }
    set urlToImageValue(urlToImage){
        this.urlToImage=urlToImage;
    }
    set publishedAtValue(publishedAt){
        this.publishedAt=publishedAt;
    }


    createView = (ind,ArticlesLength)=>{
        //Story Elements e.g. title, description etc 
        let titleText = document.createElement("h1");
        let timeCatText = document.createElement("small");
        let Descr = document.createElement("p");
        let readMore = document.createElement("button");
        readMore.className = "button1";
        readMore.innerHTML="Continue Reading";
        readMore.id= `${ind}`;
        readMore.addEventListener('click',()=>{load(ind);})
       // readMore.setAttribute('onclick', () => load(ind));
        

        //Json Data Filling 
        titleText.innerHTML = `${this.title}`;
        Descr.innerHTML = `${this.description.substring(0,300)}....`;
        timeCatText.innerHTML = `Posted on ${this.publishedAt} //  Author is ${this.author}`;

        //image Styling
        let storywall = document.createElement("img"); 
        storywall.className= "rest";
        console.log(this.urlToImage);
        storywall.src=this.urlToImage;
        storywall.style.margin="10px";
        storywall.style.marginRight="15px";
        storywall.setAttribute('width', '31%');
        storywall.setAttribute('height', '31%');

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
        
        
        if(ind==ArticlesLength-1){
            oneArticle.style.border='none';
        }
        return oneArticle;
    };
    
  }


