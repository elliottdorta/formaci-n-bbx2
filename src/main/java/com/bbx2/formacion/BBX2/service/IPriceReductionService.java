package com.bbx2.formacion.BBX2.service;



import com.bbx2.formacion.BBX2.dto.PriceReductionDto;

import java.util.List;

public interface IPriceReductionService {

    List<PriceReductionDto> getAllPriceReduction();
    PriceReductionDto createPriceReduction(PriceReductionDto priceReductionDto);
    PriceReductionDto getPriceReductionById(long id);
    void deletePriceReduction(long id);
}
