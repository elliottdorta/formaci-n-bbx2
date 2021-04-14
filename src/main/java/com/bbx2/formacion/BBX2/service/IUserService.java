package com.bbx2.formacion.BBX2.service;

import com.bbx2.formacion.BBX2.dto.UserDto;



import java.util.List;


public interface IUserService {

    List<UserDto> getAllUsers();
    UserDto createUser(UserDto userDto);
    UserDto getUserById(long id);
    void deleteUser(long id);
}
