package com.app.recruiter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.recruiter.model.Company;
import com.app.recruiter.repository.CompanyRepository;

@Service
public class CompanyService {

	@Autowired
	private CompanyRepository repository;
	
	public List<Company> getCompanies(){
		return repository.findAll();
	}
	
	public Company addCompany(Company company) {
		return repository.save(company);
	}

	public Company get(Long id) {
		return repository.findById(id).get();
	}

	public void delete(Company company) {
		repository.delete(company);
	}
}
