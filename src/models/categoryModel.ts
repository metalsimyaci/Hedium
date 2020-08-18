export default class Category {

    constructor(title: string, date: string, color: string, link: string) {
        this.title = title;
        this.date = date;
        this.color = color;
        this.link = link;
    }
    title!: string;
    date!: string;
    color!: string;
    link!: string;
}