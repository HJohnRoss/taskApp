package com.example.TaskAppServer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TaskAppServer.models.Board;
import com.example.TaskAppServer.models.Task;
import com.example.TaskAppServer.services.BoardService;
import com.example.TaskAppServer.services.TaskService;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    TaskService taskService;
    @Autowired
    BoardService boardService;

    // Get one Task
    @GetMapping("/api/tasks/{id}")
    public Task getOneBoard(@PathVariable("id") Long id) {
        Task Task = taskService.getTask(id);
        return Task;
    }

    // Get all tasks
    @GetMapping("/api/tasks/all")
    public List<Task> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return tasks;
    }

    // Get recent tasks
    @GetMapping("/api/tasks/recent")
    public List<Task> getRecentTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return tasks;
    }

    // Create new Task
    @PostMapping("/api/tasks/new")
    public Task createTasks(@RequestBody Task task, BindingResult result) {
        Board board = boardService.getOneBoard(task.getBoardIdd());
        task.setBoard(board);
        return taskService.createTask(task);
    }

    // Delete Task
    @DeleteMapping("/api/tasks/{id}")
    public void deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
    }

}
