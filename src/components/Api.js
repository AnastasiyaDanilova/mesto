class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getProfile() {
       return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => 
            res.ok ? res.json() : Promise.reject(res.status)
        ).catch(console.log);
    }

    getInitialCards() {
       return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => 
            res.ok ? res.json() : Promise.reject(res.status)
        ).catch(console.log);
    }
  
    // другие методы работы с API
  }
  
export const api = new Api({
baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
headers: {
    authorization: '55fe8030-1e94-4e27-b38e-835c06ad700c', // мой токен
    'Content-Type': 'application/json'
}
}); 