const CARCOLOR = Symbol();
const CARMAKE = Symbol();
const CARMODEL = Symbol();
class NewCar2 {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    get CARCOLOR(){
      return this[CARCOLOR]
    }
	  set CARCOLOR(colr){
      this[CARCOLOR]=colr;
    }
    get CARMAKE(){
      return this[CARMAKE]
    }
    set CARMAKE(make){
      this[CARMAKE]=make;
    }
    get CARMODEL(){
      return this[CARMODEL]
    }
    set CARMODEL(model){
      this[CARMODEL]=model;
    }
}
