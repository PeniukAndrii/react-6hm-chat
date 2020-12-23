import React, {Component} from 'react';


class MessageOut extends Component {


    render() {
        let {item, time,index}=this.props

        return (
            <div>
                <div>
                    {time[index]} {item}
                </div>
            </div>
        );
    }
}

export default MessageOut;