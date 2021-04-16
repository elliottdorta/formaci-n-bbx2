package com.bbx2.formacion.BBX2.models;

import com.bbx2.formacion.BBX2.dto.VendorDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idarticle;
    private String description;
    private float price;
    private String status;
    private String creator;
    private String usermod;
    private String dateup;


    @ManyToMany
    @JoinTable(
            name="article_vendor",
            joinColumns = @JoinColumn(name="idarticle"),
            inverseJoinColumns = @JoinColumn(name="idvendor")
    )
    private Set<Vendor> vendors;







}
