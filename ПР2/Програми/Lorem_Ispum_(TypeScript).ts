//--------------------------------Типи------------------------------------------------------------
let loremispum = "Lorem Ispum";
//--------------------------------Інтерфейси та класси--------------------------------------------
interface Guest {
    name: string;
    age: number;
}

class User {
    name: string;
    age: number;
    id: number;

    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const guest:Guest = {
    name: "Lorem Ispum",
    age: 42,
}

const user: User = new User("dolor sit amen", 42, 1);
//-------------------------------Дженерики---------------------------------------------------------
type NumberArray = Array<number>;

interface MyArray<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const MyArray: MyArray<number>;
const object = MyArray.get();
MyArray.add(69);