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
    BoardService boardService;

    // Get one board 
    @GetMapping("/boards/{id}")
    public Board getOneBoard(Long id) {
        Board board = boardService.getOneBoard(id);
        return board;
    }

    // Get all boards
    @GetMapping("/boards/all")
    public List<Board> getAllBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards;
    }

    // Get recent boards
    @GetMapping("/boards/recent")
    public List<Board> getRecentBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards;
    }

    
}
