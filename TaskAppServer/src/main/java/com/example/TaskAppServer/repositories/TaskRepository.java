package com.example.TaskAppServer.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.TaskAppServer.models.Task;
import com.example.TaskAppServer.models.User;

public interface TaskRepository extends CrudRepository<Task,Long>  {
    
    List<Task> findAll();
}
