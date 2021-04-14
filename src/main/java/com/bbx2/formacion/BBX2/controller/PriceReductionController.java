package com.bbx2.formacion.BBX2.controller;

import com.bbx2.formacion.BBX2.dto.PriceReductionDto;
import com.bbx2.formacion.BBX2.dto.VendorDto;
import com.bbx2.formacion.BBX2.service.IPriceReductionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PriceReductionController {

    private IPriceReductionService iPriceReductionService;

    private PriceReductionController(IPriceReductionService iPriceReductionService){
        super();
        this.iPriceReductionService=iPriceReductionService;
    }

    @GetMapping("/priceReduction")
    public List<PriceReductionDto> getAllPriceReductions(){return iPriceReductionService.getAllPriceReduction();}

    @PostMapping("/priceReduction")
    public PriceReductionDto createPriceReduction(@RequestBody PriceReductionDto priceReductionDto){
        return iPriceReductionService.createPriceReduction(priceReductionDto);
    }

    @PutMapping("/priceReduction")
    public PriceReductionDto updatePriceReduction(@RequestBody PriceReductionDto priceReductionDto){
        return iPriceReductionService.createPriceReduction(priceReductionDto);
    }

    @GetMapping("priceReduction/{id}")
    public PriceReductionDto getPriceReductionById(@PathVariable(name = "id") Long id){
        return iPriceReductionService.getPriceReductionById(id);
    }

    @DeleteMapping("priceReduction/{id")
    public void deletePriceReduction(@PathVariable(name = "id") Long id) {

        iPriceReductionService.deletePriceReduction(id);
    }
}
