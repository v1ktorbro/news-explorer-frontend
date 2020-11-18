/* eslint-disable arrow-body-style */
class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  saveArticle(dataOfArticle) {
    return fetch(`${this.url}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        keyword: dataOfArticle.source.id,
        title: dataOfArticle.title,
        text: dataOfArticle.description,
        date: dataOfArticle.publishedAt,
        source: dataOfArticle.source,
        link: dataOfArticle.url,
        image: dataOfArticle.urlToImage,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  deleteArticle(articleId) {
    return fetch(`${this.url}/articles/${articleId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers,
    });
  }
}

const mainApi = new MainApi({
  url: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
