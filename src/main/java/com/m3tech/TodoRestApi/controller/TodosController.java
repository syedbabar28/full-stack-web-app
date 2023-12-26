package com.m3tech.TodoRestApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.m3tech.TodoRestApi.model.CustomResponse;
import com.m3tech.TodoRestApi.model.TodoModel;
import com.m3tech.TodoRestApi.services.TodosServices;

@RestController
public class TodosController {
	
	@Autowired
	private TodosServices service;
	
	@GetMapping("/")
	public String ping() {
		return "Pinging..........";
	}
	
	@GetMapping("/getAllTodos")
	public CustomResponse getAlllTodos() {
		return service.getAllTodos();
	}
	
	@GetMapping("/getTodo/{id}")
	public CustomResponse getTodoById(@PathVariable("id") int id) {
		return service.findTodoById(id);
	}
	
	@GetMapping("/deleteTodo/{id}")
	public CustomResponse deleteTodo(@PathVariable("id") int id) {
		return service.deleteTodo(id);
	}
	
	@PostMapping("/addTodo")
	public CustomResponse addTodo(@RequestBody TodoModel model) {
		return service.addTodo(model);
	}
	
	@PostMapping("/updateTodo/{id}")
	public CustomResponse updateTodo(@RequestBody TodoModel model,@PathVariable("id") int id) {
		return service.updateTodo(id,model);
	}

}
