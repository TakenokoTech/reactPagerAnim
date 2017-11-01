import React from 'react';
import _ from 'lodash'

export default class Article extends React.Component {

    constructor(props) {
        super(props)
    }

    // Lifestyle
    componentWillMount() { }
    componentDidMount() { }

    // Render
    render() {
        return (
            <div id="article">{this.props.article}</div>
        )
    }

}
