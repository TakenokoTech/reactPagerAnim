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
        this.deleteArticle = this.deleteArticle.bind(this)
        // init state
        this.state = {
            inputText: "",
            articles: []
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
        const articles = this.state.articles
        this.state.inputText && articles.push(this.state.inputText)
        this.setState( _.merge( {}, this.state, {
            inputText: null,
            articles: articles
        } ) );
    }

    deleteArticle(i) {
        console.log(`deleteArticle : ${i}`)
        const articles = this.state.articles
        articles.splice( i-1, 1 );
        this.setState( _.merge( {}, this.state, {
            inputText: null,
            articles: articles
        } ) );
    }

    // Render
    render() {

        const articles = []
        for( let i in this.state.articles ) {
            articles.unshift(<Article key={i} article={this.state.articles[i]} delete={() => this.deleteArticle(i)} />)
        }
        
        return (
            <div id="mainbord">
                <h1>けいじばん！！</h1>
                <div>
                    <input id="textbox" ref="inputText" onChange={this.handleChange} value={this.state.inputText}></input>
                    <button id="submitButton" onClick={() => this.regist()}>投稿</button>
                </div>
                { this.state.inputText ? <Preview inputText={this.state.inputText} /> : null }
                <div id="articles">{articles}</div>
            </div>
        )
    }

}
