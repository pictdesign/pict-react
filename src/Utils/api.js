class Api {
  constructor(url) {
    this._url = url;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _fetch(request) {
    return fetch(this._url + request, {
      mode: "no-cors"
    })
    .then((res) => {
      console.log(res);
      return this._getResponseData(res);
    });
  }

  getInitialCards() {
    return this._fetch("/");
  }
}

export default new Api(
  "http://localhost:3000"
);