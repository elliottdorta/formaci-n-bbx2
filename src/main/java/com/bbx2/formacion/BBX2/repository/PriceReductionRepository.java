package com.bbx2.formacion.BBX2.repository;

import com.bbx2.formacion.BBX2.models.PriceReduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceReductionRepository extends JpaRepository<PriceReduction, Long> {
}
