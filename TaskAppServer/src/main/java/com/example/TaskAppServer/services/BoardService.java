package com.example.TaskAppServer.services;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TaskAppServer.models.Board;
import com.example.TaskAppServer.repositories.BoardRepository;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // Get all Baords
    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    // Get one Board
    public Board getOneBoard(Long id) {
        return boardRepository.findById(id).orElse(null);
    }

    // Create board
    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

    // Delete board
    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }

}
