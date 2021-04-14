package com.bbx2.formacion.BBX2.controller;


import com.bbx2.formacion.BBX2.dto.VendorDto;
import com.bbx2.formacion.BBX2.service.IVendorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VendorController {

    private IVendorService iVendorService;

    public VendorController(IVendorService iVendorService){
        super();
        this.iVendorService = iVendorService;
    }

    @GetMapping("/vendors")
    public List<VendorDto> getAllVendors(){return iVendorService.getAllVendors();}

    @PostMapping("/vendors")
    public VendorDto createVendor(@RequestBody VendorDto vendorDto){
        return iVendorService.createVendor(vendorDto);
    }

    @PutMapping("/vendors")
    public VendorDto updateVendor(@RequestBody VendorDto vendorDto){
        return iVendorService.createVendor(vendorDto);
    }

    @GetMapping("vendors/{id}")
    public VendorDto getVendorById(@PathVariable(name = "id") Long id){
        return iVendorService.getVendorById(id);
    }

    @DeleteMapping("vendors/{id")
    public void deleteVendor(@PathVariable(name = "id") Long id) {

        iVendorService.deleteVendor(id);
    }


}
