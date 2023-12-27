package com.m3tech.TodoRestApi.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.m3tech.TodoRestApi.auth.services.UsersServices;
import com.m3tech.TodoRestApi.model.CustomResponse;
import com.m3tech.TodoRestApi.model.UserModel;

@RestController
@RequestMapping("/auth/")
public class UsersController {

	@Autowired
	private UsersServices userService;

	@PostMapping("register")
	public CustomResponse register(@RequestBody UserModel model) {
		return userService.register(model);
	}

	@GetMapping("getAllUsers")
	public CustomResponse getAllUsers() {
		return userService.getAllUsers();
	}

	@PostMapping("login")
	public CustomResponse login(@RequestParam String userName,@RequestParam String password) {
		return userService.login(userName, password);
	}

	@DeleteMapping("deleteUser/{id}")
	public CustomResponse deleteUser(@PathVariable("id") int id) {
		return userService.deleteUserById(id);
	}

}
