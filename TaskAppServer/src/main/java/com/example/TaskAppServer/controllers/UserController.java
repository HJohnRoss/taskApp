package com.example.TaskAppServer.controllers;

import java.io.Console;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TaskAppServer.models.LoginUser;
import com.example.TaskAppServer.models.User;
import com.example.TaskAppServer.services.UserService;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    // Creates a new User
    @PostMapping("/api/register")
    public ResponseEntity<?> register(@RequestBody User user, BindingResult result, HttpSession session) {
        User newUser = userService.register(user, result);
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }
        return ResponseEntity.ok(newUser);
    }

    // Login
    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody LoginUser user, BindingResult result) {
        // Optional<User> user1 = userService.findUserById(user.getId(), result);
        User loginUser = userService.login(user, result);

        if (loginUser == null) {
            result.rejectValue("userName", "noUserName", "Invalid Login!");
        }

        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Invalid Login!");
        }

        return ResponseEntity.ok(loginUser);
    }

    // Get all Users
    @GetMapping("api/users/all")
    public List<User> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return users;
    }

}
