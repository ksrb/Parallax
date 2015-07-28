import React from "react";
import Articles from "./components/Articles";
import ArticlesList from "./components/ArticlesList";

//Polyfills
import "fetch";

class App extends React.Component {

    constructor() {
        super();
        this.state = {data: []};
        this.articles = [
            'data/article-1.md',
            'data/article-2.md',
            'data/article-3.md'
        ];
    }

    getArticles = () => {
        return this.articles.map((currentValue, index, array) => {
            return fetch(currentValue).then((response) => {
                return response.text();
            }).then((data) => {
                return data;
            });
        });
    };

    componentDidMount() {
        var promiseAll = Promise.all(this.getArticles());
        promiseAll.then((data) => {
            this.setState({data: data});
        });
    }

    render() {
        return (
            <div className="col twelve">
                <div className="col eight">
                    <Articles data={this.state.data}/>
                </div>
                <aside id="sidebar" className="col four">
                    <ArticlesList data={this.state.data}/>
                </aside>
            </div>
        );
    }
}

React.render(
    <App/>,
    document.getElementById("container")
);