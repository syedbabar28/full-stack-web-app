package com.m3tech.TodoRestApi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TodoModel {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String title;
	
	private String description;

	public void setId(int id) {
		this.id = id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public String toString() {
		return "TodoModel [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
}
