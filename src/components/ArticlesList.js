import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

class ArticlesList extends React.Component {

    /**
     * Extract header from markdown
     * @param article
     * @returns {*}
     */
    findHeader(article) {
        /*
         * Capture strings - (...}
         * Beginning with - ^
         * 1 to 6 #'s - #{1,6}
         * Followed by number of characters - .*
         */
        var re = /(^#{1,6}.*)/;
        var results = re.exec(article);
        //Get first header
        return results[1];
    }

    render() {

        var headers = this.props.data.map((currentValue, index, array) => {
            return (
                <MarkdownRenderer key={index}>
                    {this.findHeader(currentValue)}
                </MarkdownRenderer>
            );
        });
        return (
            <div>
                {headers}
            </div>
        );
    }
}

export default ArticlesList;