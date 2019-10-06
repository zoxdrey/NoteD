package NoteDServer.datamodel;

import javax.persistence.*;

@Entity
public class Article {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String article_content;

  public Article() {
  }

  public Article(String article_content) {
    this.article_content = article_content;
  }

  public void setArticle_content(String article_content) {
    this.article_content = article_content;
  }

  public String getArticle_content() {
    return article_content;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getId() {
    return id;
  }
}
