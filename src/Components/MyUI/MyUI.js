import React, {Component} from 'react';
import MessageOut from "../Message/MessageOut";




class MyUi extends Component {
    Text = React.createRef()
    state={message:[], time:[]}


    async componentDidMount() {
        let getLocal = await JSON.parse(localStorage.getItem(`id${this.props.id}`))
        let getLocalTime = await JSON.parse(localStorage.getItem(`TimeId${this.props.id}`))
        if (getLocal) {
            this.setState({message: getLocal})
            this.setState({time: getLocalTime})
        }
        console.log('componentDidMount')
    }

    InputInside=()=> {
        this.state.message.push(this.Text.current.value)
        this.state.time.push(new Date().toLocaleTimeString())
        localStorage.setItem(`id${this.props.id}`, JSON.stringify(this.state.message))
        localStorage.setItem(`TimeId${this.props.id}`, JSON.stringify(this.state.time))
        this.Text.current.value = ''
        this.forceUpdate()
        console.log('InputInside')
    }

    Fixed=(e)=>{
        e.preventDefault()
    }

    render() {
        let {message} =this.state
        return (
            <div>
                {
                    message.map((value,index) => <MessageOut item={value} index={index} key={index} time={this.state.time} id={this.props.id}/>)
                }
                <form onSubmit={this.Fixed} className={'Input-Msg'}>
                    <input ref={this.Text}/>
                    <button onClick={this.InputInside}>Send</button>
                </form>
            </div>
        );
    }
}

export default MyUi;
