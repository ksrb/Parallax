import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

class Articles extends React.Component {

    constructor() {
        super();
        this.state = {articles: []};
    }

    getArticles = () => {
        return this.props.articles.map((currentValue, index, array) => {
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
            this.setState({articles: data});
        })
    }

    render() {

        var articles = this.state.articles.map((currentValue, index, array) => {
            return (
                <article>
                    <MarkdownRenderer>
                        {currentValue}
                    </MarkdownRenderer>
                </article>
            );
        });
        return (
            <div class="articles">
                {articles}
            </div>
        );
    }
}

export default Articles;