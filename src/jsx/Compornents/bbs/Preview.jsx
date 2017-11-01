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
            <div id="preview" style={{borderColor:"#ccc", borderWidth:1}}>{this.props.inputText}</div>
        )
    }

}
