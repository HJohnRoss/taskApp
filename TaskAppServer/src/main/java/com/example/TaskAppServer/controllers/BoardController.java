package com.example.TaskAppServer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.BindingResult;

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
    public Board getOneBoard(@PathVariable("id") Long id) {
        Board board = boardService.getOneBoard(id);
        return board;
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

    // Create new board
    @PostMapping("/api/boards/new")
    public void createBoard(@RequestBody Board board, BindingResult result) {
        boardService.createBoard(board);
    }

    // Delete board
    @DeleteMapping("/api/boards/delete/{id}")
    public void deleteBoard(@PathVariable("id") Long id) {
        boardService.deleteBoard(id);
    }

}
