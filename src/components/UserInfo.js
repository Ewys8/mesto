export default class UserInfo {
  constructor(configProfile) {
    this._profileName = document.querySelector(configProfile.profileNameSelector);
    this._profileDescription = document.querySelector(configProfile.profileDescriptionSelector);
    this._profileAvatar = document.querySelector(configProfile.profileAvatarSelector);
  }
  // получение данных пользователя со страницы
  getUserInfo() {
    return {
      newName: this._profileName.textContent,
      newDescription: this._profileDescription.textContent,
      avatar: this._profileAvatar.src
    }
  }
  // добавление данных пользователя на страницу
  setUserInfo({ newName, newDescription}) {
    this._profileName.textContent = newName;
    this._profileDescription.textContent = newDescription
  }

  // добавление аватара пользователя на страницу
  setUserAvatar({avatar}) {
    this._profileAvatar.src = avatar;
  };

  setId(id){
    this._id = id;
  };
}
