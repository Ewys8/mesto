export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  //метод, который принимает массив и выводит его на страницу
  createDataArray(items){
    items.forEach(item => this._renderer(item));
  }

  //метод, который принимает DOM-элемент и заносит его в контейнер
  addItem(item){
    this._container.prepend(item);
  }
}
