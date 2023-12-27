package com.m3tech.TodoRestApi.dbhelper;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.m3tech.TodoRestApi.model.UserModel;

public interface UsersJpa extends JpaRepository<UserModel, Integer> {

	Optional<UserModel> findUserByUserName(String userName);
}
