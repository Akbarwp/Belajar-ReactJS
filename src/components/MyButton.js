// Class Component
import React from 'react';

class MyButton extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn btn-accent" onClick={() => this.props.clicked()}>{this.props.paragraf()}</button>
        );
    }
}

export default MyButton;