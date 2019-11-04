export class Article {
    constructor(articleObj) {
        this.author = articleObj.author;
        this.title = articleObj.title;
        this.description = articleObj.description;
        this.url = articleObj.url;
        this.urlToImage = articleObj.urlToImage;
        this.publishedAt = articleObj.publishedAt;
    }

    get authorValue() {
        return this.author;
    }
    get titleValue() {
        return this.title;
    }
    get descriptionValue() {
        return this.description;
    }
    get urlValue() {
        return this.url;
    }
    get urlToImageValue() {
        return this.urlToImage;
    }
    get publishedAtValue() {
        return this.publishedAt;
    }


    set authorValue(author) {
        this.author = author;
    }
    set titleValue(title) {
        this.title = title;
    }
    set descriptionValue(description) {
        this.description = description;
    }
    set urlValue(url) {
        this.url = url;
    }
    set urlToImageValue(urlToImage) {
        this.urlToImage = urlToImage;
    }
    set publishedAtValue(publishedAt) {
        this.publishedAt = publishedAt;
    }


    createView = (ind, ArticlesLength) => {

        let cont = `<img class="rest" src="${this.urlToImage}" width="31%" height="31%" style="margin: 10px 15px 10px 10px;">
        <div class="seventy"><h1>${this.title}</h1><small>Posted on ${this.publishedAt} //  Author is ${this.author}</small>
        <p>${this.description.substring(0, 300)}....</p>
        <input type="button" class='button1' id="${ind}" value ="Continue Reading" onClick="return load(${ind})"/> `;

        //One complete Story with image
        let oneArticle = document.createElement('div');
        oneArticle.className = 'article-container hundred';

        oneArticle.innerHTML = cont;    
        if (ind == ArticlesLength - 1) { oneArticle.style.border = 'none'; }
        return oneArticle;
    };

}