package com.bbx2.formacion.BBX2.service.impl;

import com.bbx2.formacion.BBX2.dto.VendorDto;
import com.bbx2.formacion.BBX2.models.Vendor;
import com.bbx2.formacion.BBX2.repository.VendorRepository;
import com.bbx2.formacion.BBX2.service.IVendorService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class VendorServiceImpl implements IVendorService {

    private  final VendorRepository vendorRepository;

    public VendorServiceImpl(VendorRepository vendorRepository) {
        super();
        this.vendorRepository = vendorRepository;
    }

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<VendorDto> getAllVendors() {
        List<Vendor> vendor = vendorRepository.findAll();
        return vendor.stream().map(vnd-> modelMapper.map(vnd, VendorDto.class)).collect(Collectors.toList());

    }

    @Override
    public VendorDto createVendor(VendorDto vendorDto) {
        Vendor vendorRequest = modelMapper.map(vendorDto, Vendor.class);
        Vendor vendor = vendorRepository.save(vendorRequest);
        VendorDto vendorResponse = modelMapper.map(vendor,VendorDto.class);

        return vendorResponse;
    }

    @Override
    public VendorDto getVendorById(long id) {
        Optional<Vendor> vendor = vendorRepository.findById(id);
        VendorDto vendorResponse = modelMapper.map(vendor.get(),VendorDto.class);
        return vendorResponse;
    }

    @Override
    public void deleteVendor(long id) {
        vendorRepository.deleteById(id);
    }
}
