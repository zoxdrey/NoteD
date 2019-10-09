export class Article {
  article_content: string;
  id: number;
  title: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.article_content = content;
  }

}
