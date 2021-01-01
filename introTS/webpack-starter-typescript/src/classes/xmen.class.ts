function printTerminal(constructorClass:Function){
    console.log(constructorClass);
}
@printTerminal
export class Xmen{
    constructor(
        public name:string,
        public power:string)
        {
    }
    print(){
        console.log(`${this.name} have the of ${this.power}`);
    }

}