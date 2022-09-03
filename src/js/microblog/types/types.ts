export class Article {
    title: string;
    content: string;
    likes: number;
    dislikes: number;

    constructor(
        title: string,
        content: string,
        likes: number,
        dislikes: number,
    ) {
        this.title = title;
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}