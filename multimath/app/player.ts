import { Person } from './person';

export class Player implements Person {
    public name: string;    
    public age?: number;
    public highScore: number;

    public formatName() {
        return this.name.toUpperCase();
    };
}