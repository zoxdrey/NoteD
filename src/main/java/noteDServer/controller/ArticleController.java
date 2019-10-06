package NoteDServer.controller;

import NoteDServer.datamodel.Article;
import NoteDServer.services.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class ArticleController {
    @Autowired
    private  ArticleRepository articleRepository;

    @GetMapping(path = "/getarticle")
    public Article getArticle() {

      return articleRepository.getOne(2);
    }

    @PostMapping("/createarticle")
    public void createArticle(@RequestBody Article newArticle) {
      articleRepository.save(newArticle);

    }

    @GetMapping("/getarticles")
    public List<Article> getAllArticles() {
      return articleRepository.findAll();
    }
}
