package com.app.recruiter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.recruiter.model.User;
import com.app.recruiter.service.UserService;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	UserService service;
	
	@GetMapping("/Users")
	public List<User> getUsers(){
		return service.getUsers();
	}
	
	@PostMapping("/Users")
	public User addUser(@RequestBody User user) {
		return service.addUser(user);
	}
	
	@PostMapping("/Users/{id}")
	public User updateUser(@RequestBody User user) {
		return service.addUser(user);
	}
	
	@RequestMapping("/Users/{id}")
	public User getUser(@PathVariable(name = "id") Long id) {
		User user = service.get(id);
		return user;
	}
	
	@DeleteMapping("/Users/{id}")
	public void deleteUser(@PathVariable(name = "id") Long id) {
		User user = service.get(id);
		service.delete(user);
	}
}
