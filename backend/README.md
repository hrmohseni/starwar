# StarWar People API

This api is created to get StarWar searies characters info from https://swapi.dev and consolidate selected information into single json response.

## Requirement
To run this  you need to install
- NodeJS
- PM2 [Optional if you wish to run app in background]

## Runing Applicattion
To run need run following statement:
``` bash
npm i
npm run start
```

To run in background:
``` bash
pm2 start ecosystem.json
``` 

## Examples
Request:
``` bash
curl --location --request GET 'http://localhost:3000/people/9'
```
Response: 
``` json
{
    "films": [
        {
            "title": "A New Hope",
            "directors": "George Lucas",
            "producers": "Gary Kurtz, Rick McCallum",
            "releaseDate": "1977-05-25"
        }
    ],
    "species": [],
    "name": "Biggs Darklighter",
    "birthYear": "24BBY",
    "gender": "male",
    "hairColor": "black",
    "height": "183",
    "mass": "84",
    "skinColor": "light",
    "homePlant": {
        "title": "Tatooine",
        "population": "200000",
        "terrain": "desert"
    }
}
```
