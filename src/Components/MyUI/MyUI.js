import React, {Component} from 'react';
import MessageOut from "../Message/MessageOut";
import AllService from "../../Service/AllService";
import Joke from "../Joke/Joke";



class MyUi extends Component {
    Text = React.createRef()
    AllService = new AllService()
    state={message:[], joke:[], time:[]}


    async componentDidMount() {
        let getLocal = await JSON.parse(localStorage.getItem(`id${this.props.id}`))
        let getLocalTime = await JSON.parse(localStorage.getItem(`TimeId${this.props.id}`))
        if(getLocal){
            this.setState({message:getLocal})
            this.setState({time:getLocalTime})

        }
    }

    InputInside=()=>{
        this.state.message.push(this.Text.current.value)
        this.state.time.push(new Date().toLocaleTimeString())
        localStorage.setItem(`id${this.props.id}`,JSON.stringify(this.state.message))
        localStorage.setItem(`TimeId${this.props.id}`,JSON.stringify(this.state.time))
        this.forceUpdate()
        this.Text.current.value=''
        const PromiseJoke = new Promise(resolve => {
            setTimeout(()=> {
                resolve(this.AllService.getJoke().then(value => value))
                console.log(this.state.joke)
            }, Math.random() * (1500 - 1000) + 1000)
        })
        PromiseJoke.then(value => {
            this.state.joke.push({joke:value.value})
            localStorage.setItem(`JokeId${this.props.id}`,JSON.stringify(this.state.joke))
        })

    }

    Fixed=(e)=>{
        e.preventDefault()
    }

    render() {
        let {message, joke} =this.state
        return (
            <div>
                <form onSubmit={this.Fixed}>
                    <input ref={this.Text}/>
                    <button onClick={this.InputInside}>Send</button>
                </form>
                {
                    message.map((value,index) => <MessageOut item={value} key={index} index={index} time={this.state.time}/>)
                }
                {
                   joke && joke.map((value,index)=><Joke item={value} key={index} index={index}/>)
                }
            </div>
        );
    }
}

export default MyUi;
