class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    // проверка ответа от сервера
    _checkServerResponce(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(res.status)
        }
    }

    // изменение и добавление данных 

    // профиль
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    // аватар
    changeAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    // карточки
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    // удаление карточки
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    // добавлние и удаление лайка
    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        }).then((res) =>
            this._checkServerResponce(res)
        )
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
        authorization: ' c6860009-08a1-4ac0-9a26-70cf082caccd',
        'Content-Type': 'application/json'
    }
})