export default class UserInfo {
  constructor(configProfile) {
    this._profileName = document.querySelector(configProfile.profileNameSelector);
    this._profileDescription = document.querySelector(configProfile.profileDescriptionSelector);
  }
  // получение данных пользователя со страницы
  getUserInfo() {
    return {
      userName: this._profileName.textContent,
      userDescription: this._profileDescription.textContent
    }
  }
  // добавление данных пользователя на страницу
  setUserInfo({ newName, newDescription }) {
    this._profileName.textContent = newName;
    this._profileDescription.textContent = newDescription;
  }
}
