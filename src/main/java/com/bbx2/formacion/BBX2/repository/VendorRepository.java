package com.bbx2.formacion.BBX2.repository;

import com.bbx2.formacion.BBX2.models.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor,Long> {

}
