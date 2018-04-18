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
            <div className="article">
                {this.props.article}
                <div className="deleteArticle" onClick={this.props.delete}>削除</div>
            </div>
        )
    }

}
