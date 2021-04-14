package com.bbx2.formacion.BBX2.service;

import com.bbx2.formacion.BBX2.dto.VendorDto;

import java.util.List;

public interface IVendorService {
    List<VendorDto> getAllVendors();
    VendorDto createVendor(VendorDto vendorDto);
    VendorDto getVendorById(long id);
    void deleteVendor(long id);
}
