import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { People } from "./models/people";
import { Film } from "./models/film";
import { Species } from "./models/species";
import { Plant } from "./models/plant";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`StarWar People running on port http://localhost/${port}.`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Star War World!')
})

app.get("/people/:id", async (req: Request, res: Response) => {
  /** Get People ID from params*/
  const peopleId = req.params?.id;//req.query;
  /** Initaite Response objeect*/
  let people: People = new People();
  try {
    /** Get People Info */
    const result: any = await axios.get(`https://swapi.dev/api/people/${peopleId}`).then(res => res.data);

    people.name = result.name;
    people.birthYear = result.birth_year;
    people.gender = result.gender;
    people.hairColor = result.hair_color;
    people.height = result.height;
    people.mass = result.mass;
    people.skinColor = result.skin_color;

    /** Get Plant Info */
    const resHome: any = await axios.get(result.homeworld).then(res => res.data);
    people.homePlant = new Plant();
    people.homePlant.title = resHome.name;
    people.homePlant.population = resHome.population;
    people.homePlant.terrain = resHome.terrain;

    /** Get Films info */
    const reqFilms = result.films.map((i: string) => axios.get(i).then(res => res.data));
    const resFilms = await Promise.all(reqFilms);
    resFilms.map((item: any) => {
      let _film: Film = new Film();
      _film.title = item.title;
      _film.directors = item.director;
      _film.producers = item.producer;
      _film.releaseDate = item.release_date;
      people.films.push(_film);
    });

    /** Get Species Info */
    const reqSpecies = result.species.map((i: string) => axios.get(i).then(res => res.data));
    const resSpecies = await Promise.all(reqSpecies);
    resSpecies.map((item: any) => {
      let _species: Species = new Species();
      _species.name = item.name;
      _species.averageLifeSpan = item.average_lifespan;
      _species.classification = item.classification;
      _species.language = item.language;
      people.species.push(_species);
    });

    /** Return Response */
    res.send(people);
  } catch (error) {
    /** Return Error if got any issue */
    res.status(500).send(error.message);
  }


});