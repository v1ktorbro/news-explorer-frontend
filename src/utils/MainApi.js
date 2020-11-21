/* eslint-disable arrow-body-style */
class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getSavedArticlesOfUser() {
    // eslint-disable-next-line no-underscore-dangle
    this._updateToken();
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

  _updateToken() {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem('token', token);
      this.headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      };
    }
  }
}

const mainApi = new MainApi({
  url: 'https://v1ktorbro.students.nomoreparties.xyz',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;
