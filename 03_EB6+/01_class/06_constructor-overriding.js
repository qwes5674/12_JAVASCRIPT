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

class Deer extends Animal {
    
    constructor(name, weight, legLength){
       
        // 상속 클래스의 생성자에서는 반드시 super(...)를 호출해야 한다.
        // 또한 super(...)는 this를 사용하기 전에 반드시 호출해야 한다.
        // Must call super constructor in derived calss vefore accessing 'this' 
        // this.name = name;
        // this.weight = weight;
        // this.legLength = legLength;

        super(name,weight)
        this.legLength = legLength;
    }
} 

// Must call super constructor in derived calss vefore accessing 'this' 
let deer = new Deer ('슬픈 눈망울의 사슴', 40, 1);
console.log(deer);