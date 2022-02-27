package com.app.recruiter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.recruiter.model.Company;



@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}