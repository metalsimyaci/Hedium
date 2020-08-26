export default class PostModel {
    constructor(key: string, title: string, subtitle: string, content: string, readCount: number, createDate: string, link: string) {
        this.key = key;
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.readCount = readCount;
        this.createDate = createDate;
        this.link = link;
    }
    
    key: string;
    title: string;
    subtitle: string = "";
    content: string = "";
    readCount: number = 0;
    createDate: string;
    link: string = "";
}