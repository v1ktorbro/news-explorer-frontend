/* eslint-disable arrow-body-style */
class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getSavedArticlesOfUser() {
    return fetch(`${this.url}/articles`, {
      method: 'GET',
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  }

  saveArticle(dataOfArticle) {
    return fetch(`${this.url}/articles`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        keyword: localStorage.getItem('requestOfUser'),
        title: dataOfArticle.title,
        text: dataOfArticle.description,
        date: dataOfArticle.publishedAt,
        source: dataOfArticle.source.name,
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
      headers: this.headers,
    });
  }
}

const mainApi = new MainApi({
  url: 'http://127.0.0.1:3001',
  headers: {
    Authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json',
  },
});

export default mainApi;
