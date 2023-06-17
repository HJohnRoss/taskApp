package com.example.TaskAppServer.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.example.TaskAppServer.models.LoginUser;
import com.example.TaskAppServer.models.User;
import com.example.TaskAppServer.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findUserById(Long id, BindingResult result) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            result.rejectValue("email", "Email", "Email already registered");
        }

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

        return userRepository.save(newUser);
    }

    public User login(LoginUser newLoginObject, BindingResult result) {
        // System.out.println(newLoginObject.getUserName());

        User loginUser = userRepository.findByUserName(newLoginObject.getUserName()).orElse(null);

        if (loginUser == null) {
            result.rejectValue("UserName", "no UserName", "Invalid Login!");
        }

        if (loginUser != null) {

            if (!newLoginObject.getPassword().equals(loginUser.getPassword())) {
                result.rejectValue("password", "matches", "Invalid Login!");
            }
            if (result.hasErrors()) {
                return null;
            }
        }
        return loginUser;
    }

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

}
