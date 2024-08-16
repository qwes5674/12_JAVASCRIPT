// 클래스 상속

class Animal {
    
    constructor(name, weight){

    this.name = name;
    this.weight = weight;

    }
    
    // 먹으면 살찌는
    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}는 ${foodWeight}kg이 되었습니다.`);
    }

    //움직여서 살빼기
    move(lostWeight){
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}는 움직임으로 인해 ${lostWeight}kg 감량되어
            ${this.weight}kg이 되었습니다. `);

    }
}

let animal = new Animal("구찌", 10);

animal.eat(1);
animal.move(0.5);


// 상속은 extends 키워드를 사용한다.
class Human extends Animal{

    develop(language){
        console.log(`${this.name}는 ${language}로 개발을 합니다. 정말 즐겁습니다 ^^`);
    }
}

let Human = new Human('태근', 80);

console.log(human);

human.eat(1);
human.move(5);
human.develop