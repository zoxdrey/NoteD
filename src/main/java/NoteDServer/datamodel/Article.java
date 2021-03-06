package NoteDServer.datamodel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Article {
  @Id

  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String article_content;
  private String title;
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

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }
}

