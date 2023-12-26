package com.m3tech.TodoRestApi.dbhelper;

import org.springframework.data.jpa.repository.JpaRepository;

import com.m3tech.TodoRestApi.model.TodoModel;

public interface TodosJpa extends JpaRepository<TodoModel, Integer>{

}
