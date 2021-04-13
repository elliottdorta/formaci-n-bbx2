package com.bbx2.formacion.BBX2.service;



import com.bbx2.formacion.BBX2.models.User;
import com.bbx2.formacion.BBX2.repository.UserRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements  IUserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        super();
        this.userRepository = userRepository;
    }


    @Override
    public User getUserById(long id) {
        Optional<User> result = userRepository.findById(id);
        if(result.isPresent()){
            return  result.get();
        }else {
            return null;
        }


    }
}
