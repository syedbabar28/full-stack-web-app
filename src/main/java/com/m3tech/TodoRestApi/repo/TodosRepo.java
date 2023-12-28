package com.m3tech.TodoRestApi.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.m3tech.TodoRestApi.dbhelper.TodosJpa;
import com.m3tech.TodoRestApi.dbhelper.UsersJpa;
import com.m3tech.TodoRestApi.model.TodoModel;
import com.m3tech.TodoRestApi.model.UserModel;

@Repository
public class TodosRepo {

	@Autowired
	private TodosJpa todoJpa;

	@Autowired
	private UsersJpa userJpa;

	public List<TodoModel> getAllTodos() {
		return todoJpa.findAll();
	}

	public List<TodoModel> getTodosByUser(int userId) {
		UserModel user = userJpa.findById(userId).orElse(null);
		if (user != null) {
			return todoJpa.findTodosByUser(user);
		} else {
			return new ArrayList<TodoModel>();
		}
	}

	public TodoModel findTodoById(int id) {
		return todoJpa.findById(id).orElse(null);
	}

	public TodoModel addTodo(int userId, TodoModel todo) {
		UserModel user = userJpa.findById(userId).orElse(null);
		todo.setUser(user);

		return todoJpa.save(todo);
	}

	public boolean updateTodo(int id, int userId, TodoModel todo) {
		TodoModel existingTodo = todoJpa.findById(id).orElse(null);
		UserModel user = userJpa.findById(userId).orElse(null);

		if (existingTodo != null) {
			existingTodo.setId(id);
			existingTodo.setTitle(todo.getTitle());
			existingTodo.setDescription(todo.getDescription());
			existingTodo.setUser(user);
			todoJpa.save(existingTodo);
			return true;
		} else {
			return false;
		}
	}

	public boolean deleteTodo(int id) {
		TodoModel existingTodo = todoJpa.findById(id).orElse(null);

		if (existingTodo != null) {
			todoJpa.delete(existingTodo);
			return true;
		} else {
			return false;
		}
	}

}
