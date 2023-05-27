package com.example.TaskAppServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.TaskAppServer.services.UserService;

@RestController
@CrossOrigin
public class TaskController {
    
    @Autowired
    UserService userService;

    
}
