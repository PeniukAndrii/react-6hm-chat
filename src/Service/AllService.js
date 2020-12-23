export default class AllService{

    async getJoke(){
        return await fetch('https://api.chucknorris.io/jokes/random').then(value => value.json())
    }

}