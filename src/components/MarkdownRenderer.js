import React from "react";
import marked from "marked";

class MarkdownRenderer extends React.Component {
    
    render() {
        var rawMarkup = (this.props.children) ? marked(this.props.children.toString(), {sanitize: true}) : "";
        return (
            <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
        );
    }
}

export default MarkdownRenderer;