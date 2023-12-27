package com.m3tech.TodoRestApi.auth.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.m3tech.TodoRestApi.auth.repo.UserRepo;
import com.m3tech.TodoRestApi.model.CustomResponse;
import com.m3tech.TodoRestApi.model.UserModel;

@Service
public class UsersServices {

	@Autowired
	private UserRepo userRepo;

	public CustomResponse register(UserModel model) {

		CustomResponse response = new CustomResponse();

		UserModel existingUser = userRepo.findUserByUserName(model.getUserName());

		if (existingUser != null) {
			response.setStatus(false);
			response.setResponseMessage("User already exist");
			response.setData(null);
		} else {

			UserModel user = userRepo.register(model);

			if (user != null) {
				response.setStatus(true);
				response.setResponseMessage("User registered successfully");
				response.setData(null);
			} else {
				response.setStatus(false);
				response.setResponseMessage("Something went wrong please try again!");
				response.setData(null);
			}
		}

		return response;
	}

	public CustomResponse login(String userName, String password) {
		CustomResponse response = new CustomResponse();

		UserModel existingUser = userRepo.findUserByUserName(userName);

		if (existingUser != null) {
			if (userName.equals(existingUser.getUserName()) && password.equals(existingUser.getPassword())) {
				response.setStatus(true);
				response.setResponseMessage("Login successfully");
				response.setData(existingUser);
			} else {
				response.setStatus(false);
				response.setResponseMessage("Invalid username/password");
				response.setData(null);
			}
		} else {
			response.setStatus(false);
			response.setResponseMessage("User doesn't exist");
			response.setData(null);

		}

		return response;
	}

	public CustomResponse getAllUsers() {
		CustomResponse response = new CustomResponse();

		List<UserModel> userList = userRepo.getAllUsers();

		if (userList.size() > 0) {
			response.setStatus(true);
			response.setResponseMessage("Users found");
			response.setData(userList);
		} else {
			response.setStatus(false);
			response.setResponseMessage("No Users found");
			response.setData(userList);
		}
		return response;
	}

	public CustomResponse deleteUserById(int id) {
		CustomResponse response = new CustomResponse();

		boolean status = userRepo.deleteUserById(id);

		if (status) {
			response.setStatus(true);
			response.setResponseMessage("User deleted successfully");
			response.setData(null);
		} else {
			response.setStatus(false);
			response.setResponseMessage("User doesn't exist");
			response.setData(null);
		}

		return response;
	}

}
