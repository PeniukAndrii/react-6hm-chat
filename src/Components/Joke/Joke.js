import React, {Component} from 'react';

class Joke extends Component {
    render() {
    let {item}=this.props
        return (
            <div>
                {item.joke}
            </div>
            /*
        let getLocalJoke = await JSON.parse(localStorage.getItem(`JokeId${this.props.id}`))
         if(getLocalJoke) {
            console.log(getLocalJoke)
                this.setState({joke: getLocalJoke})
            }
        }


       componentDidUpdate(prevProps, prevState, snapshot) {
            console.log(prevProps)
                const PromiseJoke = new Promise(resolve => {
                    resolve(this.AllService.getJoke().then(value => value.value))
                })
                PromiseJoke.then(value => {
                    this.state.joke.push({joke:value})
                    localStorage.setItem(`JokeId${this.props.id}`, JSON.stringify(this.state.joke))
                })
                console.log('componentUpdate')
            }*/
        );
    }
}

export default Joke;