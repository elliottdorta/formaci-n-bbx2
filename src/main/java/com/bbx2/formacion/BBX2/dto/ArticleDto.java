package com.bbx2.formacion.BBX2.dto;

import lombok.Data;

import java.util.Set;

@Data
public class ArticleDto {
    private Long idarticle;
    private String description;
    private float price;
    private String status;
    private String creator;
    private String usermod;
    private String dateup;
    private Set<VendorDto> vendors;
}
