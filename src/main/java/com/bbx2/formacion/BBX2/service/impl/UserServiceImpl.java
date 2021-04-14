package com.bbx2.formacion.BBX2.service.impl;



import com.bbx2.formacion.BBX2.dto.UserDto;
import com.bbx2.formacion.BBX2.models.User;
import com.bbx2.formacion.BBX2.repository.UserRepository;
import com.bbx2.formacion.BBX2.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        super();
        this.userRepository = userRepository;
    }

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<UserDto> getAllUsers() {
        List<User> user = userRepository.findAll();
        return user.stream().map(usr -> modelMapper.map(usr, UserDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto createUser(UserDto userDto) {

        User userRequest = modelMapper.map(userDto, User.class);
        User user = userRepository.save(userRequest);
        UserDto userResponse = modelMapper.map(user,UserDto.class);
        return userResponse;
    }


    @Override
    public UserDto getUserById(long id) {
        Optional<User> user = userRepository.findById(id);
        UserDto userResponse = modelMapper.map(user.get(), UserDto.class);
        return userResponse;
    }

    @Override
    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }
}
