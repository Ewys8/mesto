export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }
    _sendRequest(url, options) {
        return fetch(url, options)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Что-то пошло не так...')
        })
    };
    getUserData() {
        return this._sendRequest(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
    };

    getCards() {
        return this._sendRequest(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
    };
    createCard(cardData) {
        return this._sendRequest(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
    };
    editUserData(userData) {
        return this._sendRequest(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.newName,
                about: userData.newDescription
            })
        })
    };

    editUserAvatar(data) {
        return this._sendRequest(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
    };

    deleteCard(cardId) {
        return this._sendRequest(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
    };

    addLike(cardId){
        return this._sendRequest(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
    }
    deleteLike(cardId){
        return this._sendRequest(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
    }
}