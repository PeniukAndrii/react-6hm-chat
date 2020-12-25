import React, {Component} from 'react';
import './Msg.css'

class MessageOut extends Component {


    render() {
        let {item, time,index, joke}=this.props
        return (
            <div className={'Main-Msg'}>
                  <div className={'Message'}>
                      <div className={'Message-Inside'}>{time[index]} {item}</div>
                  </div>
                  <div className={'Joke'}>
                      <div className={'Joke-Inside'}>{time[index]} {joke[index]}</div>
                  </div>
            </div>
        );
    }
}

export default MessageOut;