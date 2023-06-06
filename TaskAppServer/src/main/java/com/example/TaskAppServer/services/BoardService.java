package com.example.TaskAppServer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TaskAppServer.models.Board;
import com.example.TaskAppServer.repositories.BoardRepository;

@Service
public class BoardService {
    
    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    public Board getOneBoard(Long id) {
        Board board = boardRepository.findById(id).orElse(null);
        return board;
    }

}
