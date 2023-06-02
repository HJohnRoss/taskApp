package com.example.TaskAppServer.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.example.TaskAppServer.models.User;
import com.example.TaskAppServer.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public User findUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return user;
    }

    public User register(User newUser, BindingResult result) {
        Optional<User> user = userRepository.findByEmail(newUser.getEmail());
        if (user.isPresent()) {
            result.rejectValue("email", "Email", "Email already registered");
        }
        if (result.hasErrors()) {
            return null;
        }
        
        return null;
    }

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

}