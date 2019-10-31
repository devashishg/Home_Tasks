export{getPromise ,getPromiseForURLArray};



let getPromise = async (url)=>{
  return new Promise(resolve => resolve(fetch(url)),
  reject=>resolve(console.log('request rejected')));
};


let getPromiseForURLArray = async (urlArray)=>{
  return Promise.all(urlArray.map(url => fetch(url)
  .then( res => res instanceof Response ? res.json().catch(err => err) : res )
  .catch(err => console.log(err))
));
};
