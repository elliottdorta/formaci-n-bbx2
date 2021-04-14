package com.bbx2.formacion.BBX2.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PriceReductionDto {
    private Long idpricered;
    private String creator;
    private float reducedprice;
    private Date datestart;
    private Date dateend;
}
