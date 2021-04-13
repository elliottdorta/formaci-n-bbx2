package com.bbx2.formacion.BBX2.controller;

import com.bbx2.formacion.BBX2.dto.UserDto;
import com.bbx2.formacion.BBX2.models.User;
import com.bbx2.formacion.BBX2.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private ModelMapper modelMapper;

    private IUserService iUserService;

    public UserController(IUserService iUserService){
        super();
        this.iUserService= iUserService;
    }

    @GetMapping("/users/{id}")
    public UserDto getPostById(@PathVariable(name = "id") Long id) {
        User post = iUserService.getUserById(id);

        // convert entity to DTO
        UserDto postResponse = modelMapper.map(post, UserDto.class);

        return postResponse;
    }


}
