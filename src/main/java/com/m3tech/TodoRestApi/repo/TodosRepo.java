package com.m3tech.TodoRestApi.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.m3tech.TodoRestApi.dbhelper.TodosJpa;
import com.m3tech.TodoRestApi.model.TodoModel;

@Repository
public class TodosRepo {

	@Autowired
	private TodosJpa todoJpa;

	public List<TodoModel> getAllTodos() {
		return todoJpa.findAll();
	}

	public TodoModel findTodoById(int id) {
		return todoJpa.findById(id).orElse(null);
	}

	public TodoModel addTodo(TodoModel todo) {
		return todoJpa.save(todo);
	}

	public boolean updateTodo(int id, TodoModel todo) {
		TodoModel existingTodo = todoJpa.findById(id).orElse(null);

		if (existingTodo != null) {
			existingTodo.setId(id);
			existingTodo.setTitle(todo.getTitle());
			existingTodo.setDescription(todo.getDescription());
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
