
export class UserInfo {
    constructor({ nameElementSelector, jobElementSelector }) {
        this._nameElement = document.querySelector(nameElementSelector);
        this._jobElement = document.querySelector(jobElementSelector);
    };

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
    };

    setUserInfo(name, job) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    };
};