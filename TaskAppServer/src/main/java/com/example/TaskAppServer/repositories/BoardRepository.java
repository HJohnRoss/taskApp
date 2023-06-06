package com.example.TaskAppServer.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.TaskAppServer.models.Board;

public interface BoardRepository extends CrudRepository<Board, Long> {
    List<Board> findAll();
}
