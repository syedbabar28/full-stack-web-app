package com.m3tech.TodoRestApi.dbhelper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.m3tech.TodoRestApi.model.TodoModel;
import com.m3tech.TodoRestApi.model.UserModel;

public interface TodosJpa extends JpaRepository<TodoModel, Integer> {

	List<TodoModel> findTodosByUser(UserModel user);
}
