package com.app.recruiter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.recruiter.model.User;
import com.app.recruiter.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public List<User> getUsers(){
		return repository.findAll();
	}
	
	public User addUser(User user) {
		return repository.save(user);
	}

	public User get(Long id) {
		return repository.findById(id).get();
	}

	public void delete(User user) {
		repository.delete(user);
	}
}