export default class AllService{

    async getJoke(){
        return await fetch('https://api.chucknorris.io/jokes/random').then(value => value.json().then(value => value))
    }

    getItem(id){
        return JSON.parse(localStorage.getItem(id))
    }

    setItem(id,source){
        localStorage.setItem(id, JSON.stringify(source))
    }
}