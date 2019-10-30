export { CreateFeedsUsingView } ;
import {set } from '../index.js';

//let articleList=[];

let CreateFeedsUsingView = (articles,story)=>{
    //articleList=articles;
    articles.forEach((article,ind)=>{
        set.add(article.author);
        let oneArticle = article.createView(ind,articles.length);
        story.appendChild(oneArticle);
    });

    return story;
}
