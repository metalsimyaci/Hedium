import Category from "./categoryModel"

export default class CategoryList {
    name: string
    color: string
    items: Array<Category>
    constructor(name: string, color: string, items: Array<Category>) {
        this.name = name;
        this.color = color;
        this.items = items;
    }
}