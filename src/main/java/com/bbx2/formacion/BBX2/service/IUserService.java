package com.bbx2.formacion.BBX2.service;

import com.bbx2.formacion.BBX2.dto.UserDto;
import com.bbx2.formacion.BBX2.models.User;


import java.util.List;


public interface IUserService {

    User getUserById(long id);
}
