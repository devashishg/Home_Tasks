import { Article } from './app/Model/Article';

export const Key =  '827b0ce7adc847d499f5b4ab0d051ebc';
export const Key1 = '061c1d73cc384886a562cd04566c1b58';

export const errorObject:Article = {
    author: 'Error',
    content: 'Error',
    description:  'Start Creating Articles... That will shown here .',
    id:  'Error',
    publishedAt: 'Not Applicable',
    source: {id: 'Error', name:'No Content'},
    title: 'No News Article Created',
    url: 'Error',
    urlToImage: 'assets/missingFile.png'
} ;

export const sourceList = ['the-times-of-india','time','the-new-york-times','My Articles',
  'the-hindu','msnbc','google-news','cnn','bbc-news','bloomberg','buzzfeed','engadget','espn','hacker-news', 'national-geographic','techradar','the-verge','wired'];

export const userList = [{user:'Debian', password : 'rstuvw', role:'user'},
  {user:'Admin', password : 'admin', role:'admin'}];  

export const CommentsList = ['Nice Job !','Thanks for the update :) '];

export let jsonData = {user:'',status:''};