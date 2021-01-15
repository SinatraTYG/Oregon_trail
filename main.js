class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true; //with an initial value of true, which indicates whether a traveler is sick.
  }
  hunt() {
    this.food += 2; // Increases the traveler's food by 2.
  }
  eat() {
    if (this.food > 0) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
    // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length; // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
  }
  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    } // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them
  }
  shouldQuarantine() {
    // variable number of sick people
    let ill = 0;
    // use a loop to update thr number of sick people
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].isHealthy);
      if (this.passengers[i].isHealthy) {
      } else {
        ill = ill + 1;
      }
    }
    // return true if the number of sick people is 1 or more
    // return false if not
    if (ill >= 1) {
      return true;
    } else {
      return false;
    }
  }
  totalFood() {
    let total = 0;

    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].food);
      total = total + this.passengers[i].food;
    }

    return total;
    // Returns the total amount of food among all passengers in the wagon.
  }
}
