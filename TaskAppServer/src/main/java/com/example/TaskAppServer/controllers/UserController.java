package com.example.TaskAppServer.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TaskAppServer.models.User;
import com.example.TaskAppServer.services.UserService;

import lombok.Getter;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    // Creates a new User
    @PostMapping("/api/register")
    public void register(@RequestBody User user, BindingResult result, HttpSession session) {
        Optional<User> newUser = userService.register(user, result);
    }

    // Login
    @GetMapping("/api/login")
    public String login(@RequestBody User user, BindingResult result, HttpSession session) {

        Optional<User> user1 = userService.findUserById(user.getId(), result);
        if (result.hasErrors()) {
            return "redirect:/login";
        }
        session.setAttribute("userId", user.getId());

        return "redirect:/landing";
    }

    // Get all Users
    @GetMapping("api/users/all")
    public List<User> getAllUsers(){
    List<User> users = userService.getAllUsers();
    return users;
    }

}
