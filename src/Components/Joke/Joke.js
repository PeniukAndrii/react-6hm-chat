import React, {Component} from 'react';

class Joke extends Component {
    render() {
        let{item}=this.props
        return (
            <div>
                {item}
            </div>
        );
    }
}

export default Joke;