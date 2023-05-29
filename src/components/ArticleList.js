import React from "react";
import Article from "./Article"

function ArticleList({post}) {

    const articleListArray = post.map((article) => {
        return (
            <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
        )
    })

    return (
        <main>
            {articleListArray}
        </main>
    )
}

export default ArticleList;