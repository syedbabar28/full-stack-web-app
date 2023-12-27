package com.m3tech.TodoRestApi.auth.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.m3tech.TodoRestApi.dbhelper.UsersJpa;
import com.m3tech.TodoRestApi.model.UserModel;

@Repository
public class UserRepo {

	@Autowired
	private UsersJpa userjpa;
	
	public UserModel findUserByUserName(String userName) {
		return userjpa.findUserByUserName(userName).orElse(null);
	}

	public UserModel register(UserModel model) {
		return userjpa.save(model);
	}

	public UserModel login(String userName) {
		return userjpa.findUserByUserName(userName).orElse(null);
	}

	public List<UserModel> getAllUsers() {
		return userjpa.findAll();
	}

	public boolean deleteUserById(int id) {
		UserModel existingUser = userjpa.findById(id).orElse(null);

		if (existingUser != null) {
			userjpa.delete(existingUser);
			return true;
		} else {
			return false;
		}
	}

}
