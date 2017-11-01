import React from 'react';
import _ from 'lodash'
import Preview from './Preview.jsx'
import Article from './Article.jsx'

export default class Mainbord extends React.Component {

    constructor(props) {
        super(props)
        // bind function
        this.regist = this.regist.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // init state
        this.state = {
            inputText: null,
            articles: [
                "aaaaaaaaa",
                "bbbbbbbbb"
            ]
        }
    }

    // Lifestyle
    componentWillMount() {}
    componentDidMount() {}

    // Event
    handleChange(event) {
        this.setState( _.merge( {}, this.state, {
            inputText: event.target.value
        } ) );
    }

    regist() {
        console.log(`regist : ${this.state.inputText}`)
    }

    // Render
    render() {
        
        const articles = [];
        for(let i in this.state.articles) {
            articles.push(<Article key={i} article={this.state.articles[i]} />)
        }

        return (
            <div id="mainbord">
                <div>
                    <input ref="inputText" onChange={this.handleChange}></input>
                    <button onClick={() => this.regist()}>投稿</button>
                </div>
                <Preview inputText={this.state.inputText} />
                {articles}
            </div>
        )
    }

}
