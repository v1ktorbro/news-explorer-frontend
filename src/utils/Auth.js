/* eslint-disable arrow-body-style */
class Auth {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  register({ email, password, name }) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    }).then((res) => {
      return res.json();
    });
  }

  login({ email, password }) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    });
  }

  getInfoLogin() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  }
}

const auth = new Auth({
  url: 'http://127.0.0.1:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
