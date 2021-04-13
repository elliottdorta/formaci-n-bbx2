package com.bbx2.formacion.BBX2.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;
import java.util.Date;

@Data
public class UserDto  {


    private Long iduser;
    private String dni;
    private String name;
    private String surname;
    private String rol;
    private String password;
    private Date dateup;
}

