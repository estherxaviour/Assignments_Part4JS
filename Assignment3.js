

var animal = {
  pet: function() {
    console.log("I am a pet");
    this.pet = true;
  },
  wild: function() {
    console.log("I am a wild animal");
    this.wild = true;
  }

};

var rabbit = {
  food: "vegetarian",
  color: "white"
};

rabbit.__proto__ = animal;

rabbit.pet();
