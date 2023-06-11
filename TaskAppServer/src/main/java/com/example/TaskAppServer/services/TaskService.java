package com.example.TaskAppServer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TaskAppServer.models.Task;
import com.example.TaskAppServer.repositories.TaskRepository;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    // Get all Baords
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get one Task
    public Task getTask(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
