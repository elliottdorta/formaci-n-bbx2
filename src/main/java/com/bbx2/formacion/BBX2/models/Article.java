package com.bbx2.formacion.BBX2.models;

import com.bbx2.formacion.BBX2.dto.VendorDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @JoinTable(
            name = "rel_article_vendors",
            joinColumns = @JoinColumn(name = "FK_ARTICLE", nullable = false),
            inverseJoinColumns = @JoinColumn(name ="FK_VENDOR", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Vendor> vendors;

    public void addVendor(Vendor vendor){
        if(this.vendors == null){
            this.vendors = new ArrayList<>();
        }

        this.vendors.add(vendor);
    }

}
