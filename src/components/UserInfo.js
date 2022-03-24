
export class UserInfo {
    constructor({ nameElementSelector, jobElementSelector, avatarElementSelector }) {
        this._nameElement = document.querySelector(nameElementSelector)
        this._jobElement = document.querySelector(jobElementSelector)
        this._avatarElement = document.querySelector(avatarElementSelector)
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }
    }

    setUserInfo(name, job) {
        this._nameElement.textContent = name
        this._jobElement.textContent = job
    }

    setAvatar (avatar) {
        this._avatarElement.src = avatar
    }
}