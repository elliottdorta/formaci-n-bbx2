package com.bbx2.formacion.BBX2.service;

import com.bbx2.formacion.BBX2.dto.ArticleDto;
import java.util.List;


public interface IArticleService {

    List<ArticleDto> getAllArticles();
    ArticleDto createArticle(ArticleDto articleDTO);
    ArticleDto getArticleById(long id);
    void deleteArticle(long id);
}
