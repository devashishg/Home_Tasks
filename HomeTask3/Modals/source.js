
export {Source};

class Source {
    constructor(s) {
      this.id =s.id ,
      this.name =s.name
      
    }
    
    get idInput(){
      return this.id;
    }
    get nameInput(){
      return this.name;
    }
    set idInput(id){
      this.id= id;
    }
    set nameInput(name){
      this.name= name;
    }
    
  }



