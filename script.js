//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	makeSound(sound){
		this.sound=sound;
	}
	get makeSound(sound){
		return this.sound;
	}
}

class Dog extends Animal {
	bark(){
		console.log("bark");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
