// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this._strength += 5;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
    work(){
      console.log('Yoo.. hoo..');
    }

}

class Human extends superhero {
    constructor(healthpoints, ...superherostuff) {
        super(...superherostuff);
        this._healthpoints = healthpoints;
    }
     set name(name) {
         this._name = name;
     }
     set city(cityName){
       this._city = cityName;
     }
     get city(){
       return this._city ;
     }
     set state(stateName){
       this._state = stateName;
     }
     get state(){
       return this._state ;
     }
     powerUp() {
         this._strength += 2;
     }
     powerDown() {
         this._strength /= 2;
     }
     // work(){
     //   console.log('Yeeeep Human');
     // }

     updateName(){
       this._name=`Mr. ${this._name}`;
     }
}


/////////////////////////////////////////////////////////////////////////
// const details = [20, "Bill", 10, 8]
// const hero3 = new Human(...details);
// undefined
// hero3
// Human {_name: "Bill", _strength: 10, _speed: 8, _healthpoints: 20}
// hero3.city='Hyderabad'
// "Hyderabad"
// hero3.city
// "Hyderabad"
// hero3.state
// undefined
// hero3._state
// undefined
// hero3._city
// "Hyderabad"
// hero3._state='Telangana'
// "Telangana"
// hero3
// Human {_name: "Bill", _strength: 10, _speed: 8, _healthpoints: 20, _city: "Hyderabad", …}_city: "Hyderabad"_healthpoints: 20_name: "Bill"_speed: 8_state: "Telangana"_strength: 10city: (...)state: (...)__proto__: superhero
// hero3.powerDown()
// undefined
// hero3
// Human {_name: "Bill", _strength: 5, _speed: 8, _healthpoints: 20, _city: "Hyderabad", …}
// hero3.powerUp
// ƒ powerUp() {
//          this._strength += 2;
//      }
// hero3.powerUp()
// undefined
// hero3
// Human {_name: "Bill", _strength: 7, _speed: 8, _healthpoints: 20, _city: "Hyderabad", …}_city: "Hyderabad"_healthpoints: 20_name: "Bill"_speed: 8_state: "Telangana"_strength: 7city: "Hyderabad"state: "Telangana"__proto__: superherocity: (...)constructor: class HumanpowerDown: ƒ powerDown()powerUp: ƒ powerUp()state: (...)updateName: ƒ updateName()arguments: (...)caller: (...)length: 0name: "updateName"__proto__: ƒ ()[[FunctionLocation]]: VM1995:32[[Scopes]]: Scopes[2]work: ƒ work()get city: ƒ city()set city: ƒ city(cityName)set name: ƒ name(name)get state: ƒ state()set state: ƒ state(stateName)__proto__: Object
// hero3.updateName()
// undefined
// hero3
// Human {_name: "Mr. Bill", _strength: 7, _speed: 8, _healthpoints: 20, _city: "Hyderabad", …}
