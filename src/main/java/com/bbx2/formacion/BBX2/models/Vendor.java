package com.bbx2.formacion.BBX2.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idvendor;
    private String name;
    private String country;
    private String description;

    @ManyToMany(mappedBy = "vendor")
    private List<Article> article;
}
