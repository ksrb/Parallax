import React from "react";
import Articles from "./components/Articles";
import marked from "marked";

//Polyfills
import "fetch";

React.render(
    <Articles
        articles={
            [
              'data/article-1.md',
              'data/article-2.md',
              'data/article-3.md'
            ]
        }
        />,
    document.getElementById("articles")
);