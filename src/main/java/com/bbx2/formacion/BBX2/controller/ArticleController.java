package com.bbx2.formacion.BBX2.controller;


import com.bbx2.formacion.BBX2.dto.ArticleDto;
import com.bbx2.formacion.BBX2.dto.UserDto;
import com.bbx2.formacion.BBX2.service.IArticleService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ArticleController {

    private IArticleService iArticleService;

    public ArticleController(IArticleService iArticleService){
        super();
        this.iArticleService = iArticleService;
    }

    @GetMapping("/articles/")
    public List<ArticleDto> getAllArticles(){
        return iArticleService.getAllArticles();
    }


    @PostMapping("/articles")
    public ArticleDto createArticle(@RequestBody ArticleDto articleDto){

        return iArticleService.createArticle(articleDto);
    }

    @PutMapping("/articles")
    public ArticleDto updateArticle(@RequestBody ArticleDto articleDto){

        return iArticleService.createArticle(articleDto);
    }

    @GetMapping("/articles/{id}")
    public ArticleDto getArticleById(@PathVariable(name = "id") Long id) {

        return iArticleService.getArticleById(id);
    }

    @DeleteMapping("/articles/{id}")
    public void deleteArticle(@PathVariable(name = "id") Long id) {
        iArticleService.deleteArticle(id);
    }

}
