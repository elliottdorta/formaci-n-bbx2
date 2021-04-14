package com.bbx2.formacion.BBX2.service.impl;

import com.bbx2.formacion.BBX2.dto.PriceReductionDto;
import com.bbx2.formacion.BBX2.dto.VendorDto;
import com.bbx2.formacion.BBX2.models.PriceReduction;
import com.bbx2.formacion.BBX2.models.Vendor;
import com.bbx2.formacion.BBX2.repository.PriceReductionRepository;
import com.bbx2.formacion.BBX2.service.IPriceReductionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PriceReductionServiceImpl implements IPriceReductionService {

    private final PriceReductionRepository priceReductionRepository;

    public PriceReductionServiceImpl(PriceReductionRepository priceReductionRepository) {
        super();
        this.priceReductionRepository = priceReductionRepository;
    }

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PriceReductionDto> getAllPriceReduction() {
        List<PriceReduction> priceReduction = priceReductionRepository.findAll();
        return priceReduction.stream().map(prrd-> modelMapper.map(prrd, PriceReductionDto.class)).collect(Collectors.toList());

    }

    @Override
    public PriceReductionDto createPriceReduction(PriceReductionDto priceReductionDto) {
        PriceReduction priceReductionRequest = modelMapper.map(priceReductionDto, PriceReduction.class);
        PriceReduction priceReduction = priceReductionRepository.save(priceReductionRequest);
        PriceReductionDto priceReductionResponse = modelMapper.map(priceReduction,PriceReductionDto.class);

        return priceReductionResponse;
    }

    @Override
    public PriceReductionDto getPriceReductionById(long id) {
        Optional<PriceReduction> priceReduction = priceReductionRepository.findById(id);
        PriceReductionDto priceReductionResponse = modelMapper.map(priceReduction.get(),PriceReductionDto.class);
        return priceReductionResponse;
    }

    @Override
    public void deletePriceReduction(long id) {
        priceReductionRepository.deleteById(id);
    }
}
