package com.example.TaskAppServer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TaskAppServer.models.Board;
import com.example.TaskAppServer.services.BoardService;
import com.example.TaskAppServer.services.UserService;

@RestController
@CrossOrigin
public class BoardController {
    
    @Autowired
    UserService userService;
    @Autowired
    BoardService boardService;

    // Get one board 
    @GetMapping("/api/boards/{id}")
    public Board getOneBoard(Long id) {
        return  boardService.getOneBoard(id);
    }

    // Get all boards
    @GetMapping("/api/boards/all")
    public List<Board> getAllBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards;
    }

    // Get recent boards
    @GetMapping("/api/boards/recent")
    public List<Board> getRecentBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards;
    }

    
}

