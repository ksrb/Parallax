import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

class Articles extends React.Component {

    render() {
        var articles = this.props.data.map((currentValue, index, array) => {
            return (
                <article key={index}>
                    <MarkdownRenderer>
                        {currentValue}
                    </MarkdownRenderer>
                </article>
            );
        });
        return (
            <div className="articles">
                {articles}
            </div>
        );
    }
}

export default Articles;