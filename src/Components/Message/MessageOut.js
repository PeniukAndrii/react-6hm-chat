import React, {Component} from 'react';
import AllService from "../../Service/AllService";
import './Msg.css'

class MessageOut extends Component {
    AllService = new AllService()
    state={joke:[]}

    async componentDidMount() {
        await this.AllService.getJoke().then(value => this.setState({joke:value.value}))


        console.log('5')
        console.log(this.state.joke)
        console.log('6')
    }

    JokeDo=()=>{
        console.log('1')
         this.state.joke.push(this.state.jokes)
        console.log('2')
         localStorage.setItem(`JokeId${this.props.id}`,JSON.stringify(this.state.joke))
        console.log('3')
    }


    render() {
        let {joke}=this.state
        let {item, time,index}=this.props

        return (
            <div className={'Main-Msg'}>
                  <div className={'Message'}>
                      <div className={'Message-Inside'} >{time[index]} {item}</div>
                  </div>
                  <div className={'Joke'}>
                      <div className={'Joke-Inside'}>{joke}</div>
                  </div>
            </div>
        );
    }
}

export default MessageOut;