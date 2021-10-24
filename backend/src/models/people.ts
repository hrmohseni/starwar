import { Film } from "./film";
import { Plant } from "./plant";
import { Species } from "./species";

//export type/*interface*/  
export class People {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    gender: string;
    birthYear: string;
    homePlant:Plant;
    films:Film[];
    species:Species[];
    constructor(){
        this.films = [];
        this.species = [];
    }    
}
