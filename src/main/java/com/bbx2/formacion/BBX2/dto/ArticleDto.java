package com.bbx2.formacion.BBX2.dto;

import lombok.Data;

@Data
public class ArticleDto {
    private Long idarticle;
    private String description;
    private float price;
    private String status;
    private String creator;
    private String usermod;
}
