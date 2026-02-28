let car = {
    brand: "Toyota",
    model: "Innova",
    color: "White",
    start: function() {
      console.log(this.brand + " " + this.model + " has started.");
    },
  
    stop: function() {
      console.log(this.brand + " " + this.color + " has stopped.");
    }
  };
  car.start();
  car.stop();
  