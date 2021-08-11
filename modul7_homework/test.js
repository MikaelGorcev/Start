/*Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д. */
//7.5.4
/*
class ElectroTool {
    static typeTool = 'unnecessary'
    constructor(power,color) {
        this.power = power,
        this.standbye = 'off',
        this.color = color
    }
    identification(){
        console.log(`It's ${this.typeTool}`)
    }
    present(){
        console.log(`the power of the ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    }
    powerСonsumption(){
        return this.power
    }
    tumbler = (function(){
        return function (){
           if (this.standbye == 'off'){return this.standbye='on'} 
           else return this.standbye='off'
       }  
    })()
}

//вызывая метод тумблер,мы врубаем или вырубаем прибор, изначально всё выключено


class Oven extends ElectroTool{
    static typeTool = 'oven'
    constructor(power,color,heatingTemperature){
        super(power,color)
        this.heatingTemperature = heatingTemperature 
    }
    present() {
        console.log('Level degrees '+this.heatingTemperature)
        console.log(`color is ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    }
}

class Tv extends ElectroTool{
    static typeTool = 'tv'
    constructor(power,color,screen) {
        super(power,color)
        this.screen = screen
    }
    present() {
        console.log('Size screen '+this.screen)
        console.log(`color is ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    }
}


class Lamp extends ElectroTool{
    static typeTool = 'Lamp'
    constructor(bright,power,color){
        super(power,color)
        this.bright=bright
    }
    present() {
        console.log('Power of light '+this.bright)
        console.log(`color is ${this.color}, electric prior is ${this.power}, it works - ${this.standbye}`)
    }
}



let philips = new Tv (230,'black',55);
let sony = new Tv (210,'white',32);

let whiteLamp = new Lamp(1000,120,'green')

let gorenje = new Oven(250,'black',900)

function showConsumedEnergy(){
    let sumEnergy=0;
    for (i=0;i<arguments.length;i++){
        if(arguments[i].standbye=='on'){sumEnergy+=arguments[i].power} 
    }
    console.log('total energy consumption is '+sumEnergy)
}
philips.tumbler()
showConsumedEnergy(philips,sony,gorenje)
*/

/*
function ElectroTool(power,color){
    this.power = power
    this.standbye = 'off'
    this.color = color
    this.typeTool = 'unnecessary'
}
ElectroTool.prototype.present= function(){
    console.log(`the power of the ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
}
ElectroTool.prototype.identification= function(){
    console.log(`It's ${this.typeTool}`)
}
ElectroTool.prototype.powerСonsumption= function(){
    return this.power
}
ElectroTool.prototype.tumbler = (function(){
    return function (){
       if (this.standbye == 'off'){return this.standbye='on'} 
       else return this.standbye='off'
   }  
})()

function Tv(screen,power,color){
    this.screen = screen
    this.power = power
    this.standbye = 'off'
    this.color = color
    this.typeTool = 'TV'
}
Tv.prototype = Object.create(ElectroTool.prototype);
Oven.prototype = Object.create(ElectroTool.prototype);

function Oven (power,color,heatingTemperature){
        this.heatingTemperature = heatingTemperature,
        this.power = power,
        this.standbye = 'off',
        this.color = color,
        this.typeTool = 'OVEN'
    }

function Lamp(bright,power,color){
    this.bright=bright,
    this.power=power,
    this.color=color,
    this.typeTool = 'LAMP'
}


let philips = new Tv(43,220,'white');
let gorenje = new Oven(250,'black',900);

function showConsumedEnergy(){
    let sumEnergy=0;
    for (i=0;i<arguments.length;i++){
        if(arguments[i].standbye=='on'){sumEnergy+=arguments[i].power} 
    }
    console.log('total energy consumption is '+sumEnergy)
}

gorenje.tumbler();
philips.tumbler();
showConsumedEnergy(gorenje,philips)
*/