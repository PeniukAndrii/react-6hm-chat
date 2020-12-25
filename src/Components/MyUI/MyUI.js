import React, {Component} from 'react';
import MessageOut from "../Message/MessageOut";
import AllService from "../../Service/AllService";
import '../../App.css'


class MyUi extends Component {
    AllService = new AllService()
    Text = React.createRef()
    state={message:[], time:[], joke:[]}


    async componentDidMount() {
        let {id} = this.props
        let getLocal = await this.AllService.getItem(`id${id}`)
        let getLocalTime = await this.AllService.getItem(`TimeId${id}`)
        let getLocalJoke = await this.AllService.getItem(`JokeId${id}`)
        if (getLocal) {
            this.setState({message: getLocal})
            this.setState({time: getLocalTime})
            this.setState({joke: getLocalJoke})
        }
    }

    InputInside = async () =>{
        if(this.Text.current.value===''){
            alert('Введіть повідомлення')
            return
        }
        let {id} = this.props
        let {message, time, joke} = this.state
        await this.AllService.getJoke().then(value=>joke.push(value.value))
        message.push(this.Text.current.value)
        time.push(new Date().toLocaleTimeString())
        this.AllService.setItem(`JokeId${id}`,joke)
        this.AllService.setItem(`id${id}`,message)
        this.AllService.setItem(`TimeId${id}`,time)
        this.Text.current.value = ''
        this.forceUpdate()
    }

    Fixed=(e)=>{
        e.preventDefault()
    }

    render() {
        let {message, joke} = this.state
        return (
            <div>
                {
                    message.map((value,index) => <MessageOut item={value} index={index} key={index} time={this.state.time} id={this.props.id} joke={joke}/>)
                }
                <form onSubmit={this.Fixed} className={'Form'}>
                        <input ref={this.Text} placeholder={'Message...'} className={'Input-Msg'}/>
                        <button onClick={this.InputInside} className={'Form-Btn'}>Send</button>
                </form>
            </div>
        );
    }
}

export default MyUi;
