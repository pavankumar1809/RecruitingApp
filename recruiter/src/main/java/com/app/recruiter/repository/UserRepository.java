package com.app.recruiter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.recruiter.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
