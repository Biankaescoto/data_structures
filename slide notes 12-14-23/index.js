// Class Circle {
//     constructor ( radius, circumference, area ) {
//     this.circumference = circumference (2 * 3.14 * 'radius');
//     this.area = area (3.14 * 2);
//     this.circleRadius = radius;
//     }
// };

// console.log()





class Circle {
    constructor (radius) {
        this.circleRadius = radius;
    }

    getArea(){
        console.log(`The radius is ${this.circleRadius}`);
        return (Math.PI * this.circleRadius ** 2).toFoxed(2);
    }
    getCircumference () {
        // console.log(`The radius is ${this.circleRadius}`); // or
        return (2 * Math.PI * this.circleRadius).toFixed(2);
    }

    }


let circle1 = new Circle(2);

console.log()
console.log()


circle1.getArea()
circle1.getCircumference();