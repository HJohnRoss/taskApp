package com.example.TaskAppServer.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.TaskAppServer.models.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{
    
}
