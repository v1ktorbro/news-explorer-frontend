/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable consistent-return */
class NewsApi {
  constructor({ url, apiKey, headers }) {
    this.url = url;
    this.apiKey = apiKey;
    this.headers = headers;
  }

  getResultSearch(reqWords) {
    const today = new Date();
    return fetch(`${this.url}?q=${reqWords}&apiKey=${this.apiKey}&from=${today.getDate() - 7}&to=${today.getDate()}&pageSize=100`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ошибка ${res.status}`);
      });
  }
}

const newsApi = new NewsApi({
  url: 'https://newsapi.org/v2/everything',
  apiKey: '93f559ad46574d7a942016b0b7173fd5',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default newsApi;
