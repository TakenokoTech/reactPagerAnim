import React from 'react';
import _ from 'lodash'

export default class Preview extends React.Component {

    constructor(props) {
        super(props)
    }

    // Lifestyle
    componentWillMount() { }
    componentDidMount() { }

    // Render
    render() {
        return (
            <div id="preview">
                <p>{this.props.inputText}</p>
            </div>
        )
    }

}
