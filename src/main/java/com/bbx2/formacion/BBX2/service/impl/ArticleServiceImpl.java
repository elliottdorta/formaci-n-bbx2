package com.bbx2.formacion.BBX2.service.impl;

import com.bbx2.formacion.BBX2.dto.ArticleDto;
import com.bbx2.formacion.BBX2.models.Article;
import com.bbx2.formacion.BBX2.repository.ArticleRepository;
import com.bbx2.formacion.BBX2.service.IArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements IArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        super();
        this.articleRepository = articleRepository;
    }

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<ArticleDto> getAllArticles() {
        List<Article> article = articleRepository.findAll();
        return article.stream().map(art -> modelMapper.map(art, ArticleDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDto createArticle(ArticleDto articleDTO) {
        Article articleRequest = modelMapper.map(articleDTO, Article.class);

        Article article = articleRepository.save(articleRequest);

        ArticleDto articleResponse = modelMapper.map(article,ArticleDto.class);

        return articleResponse;
    }

    @Override
    public ArticleDto getArticleById(long id) {

        Optional<Article> article = articleRepository.findById(id);
        ArticleDto articleResponse = modelMapper.map(article.get(),ArticleDto.class);
        return articleResponse;
    }

    @Override
    public void deleteArticle(long id) {
        articleRepository.deleteById(id);
    }
}
