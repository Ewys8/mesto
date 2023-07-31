export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  //метод, который принимает массив и выводит его на страницу
  createDataArray(){
    this._items.forEach(item => { this.addItem(this._renderer(item)) });
  }

  //метод, который принимает DOM-элемент и заносит его в контейнер
  addItem(item){
    this._container.prepend(item);
  }
}
