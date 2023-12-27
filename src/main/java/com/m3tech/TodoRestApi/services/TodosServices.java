package com.m3tech.TodoRestApi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.m3tech.TodoRestApi.model.CustomResponse;
import com.m3tech.TodoRestApi.model.TodoModel;
import com.m3tech.TodoRestApi.repo.TodosRepo;

@Service
public class TodosServices {

	@Autowired
	private TodosRepo todoRepo;

	public CustomResponse getAllTodos() {
		CustomResponse response = new CustomResponse();

		List<TodoModel> todosList = todoRepo.getAllTodos();

		if (todosList.size() > 0) {
			response.setStatus(true);
			response.setResponseMessage("Todos found");
			response.setData(todosList);
		} else {
			response.setStatus(false);
			response.setResponseMessage("Todos not found");
			response.setData(todosList);
		}

		return response;
	}

	public CustomResponse findTodoById(int id) {

		CustomResponse response = new CustomResponse();

		TodoModel existingTodo = todoRepo.findTodoById(id);

		if (existingTodo != null) {
			response.setStatus(true);
			response.setResponseMessage("Todo found");
			response.setData(existingTodo);
		} else {
			response.setStatus(false);
			response.setResponseMessage("Todo not exist");
			response.setData(null);
		}

		return response;
	}

	public CustomResponse deleteTodo(int id) {

		CustomResponse response = new CustomResponse();

		boolean status = todoRepo.deleteTodo(id);

		if (status) {
			response.setStatus(true);
			response.setResponseMessage("Todo deleted successfully");
			response.setData(null);
		} else {
			response.setStatus(false);
			response.setResponseMessage("Todo not exist");
			response.setData(null);
		}

		return response;
	}
	
	public CustomResponse addTodo(TodoModel todo) {

		CustomResponse response = new CustomResponse();

		TodoModel updatedTodo = todoRepo.addTodo(todo);

		if (updatedTodo!=null) {
			response.setStatus(true);
			response.setResponseMessage("Todo added successfully");
			response.setData(updatedTodo);
		} else {
			response.setStatus(false);
			response.setResponseMessage("Todo can't added! please try again");
			response.setData(null);
		}

		return response;
	}

	public CustomResponse updateTodo(int id,TodoModel todo) {

		CustomResponse response = new CustomResponse();

		boolean status = todoRepo.updateTodo(id,todo);

		if (status) {
			response.setStatus(true);
			response.setResponseMessage("Todo updated successfully");
			response.setData(null);
		} else {
			response.setStatus(false);
			response.setResponseMessage("Todo can't update! please try again");
			response.setData(null);
		}

		return response;
	}

}
