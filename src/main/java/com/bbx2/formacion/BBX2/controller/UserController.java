package com.bbx2.formacion.BBX2.controller;

import com.bbx2.formacion.BBX2.dto.UserDto;
import com.bbx2.formacion.BBX2.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {



    private IUserService iUserService;

    public UserController(IUserService iUserService){
        super();
        this.iUserService= iUserService;
    }

    @GetMapping("/users")
    public List<UserDto> getAllUsers(){
        return iUserService.getAllUsers();
    }


    @PostMapping("/users")
    public UserDto createUser(@RequestBody UserDto userDto){

        return iUserService.createUser(userDto);
    }

    @PutMapping("/users")
    public UserDto updateUser(@RequestBody UserDto userDto){

        return iUserService.createUser(userDto);
    }

    @GetMapping("/users/{id}")
    public UserDto getPostById(@PathVariable(name = "id") Long id) {

        return iUserService.getUserById(id);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id) {
        iUserService.deleteUser(id);
    }


}
