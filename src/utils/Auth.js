/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
export const BASE_URL = 'https://v1ktorbro.students.nomoreparties.xyz';

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => {
    if (res.status === 201) {
      return res.json();
    }
  });
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  }).then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
  });
};

export const getInfoLogin = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};
