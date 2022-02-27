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

import com.app.recruiter.model.Company;
import com.app.recruiter.service.CompanyService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class CompanyController {

	@Autowired
	CompanyService service;

	@GetMapping("/Companies")
	public List<Company> getCompanies() {
		return service.getCompanies();
	}

	@PostMapping("/Companies")
	public Company addCompany(@RequestBody Company company) {
		return service.addCompany(company);
	}

	@PostMapping("/Companies/{id}")
	public Company updateCompany(@RequestBody Company company) {
		return service.addCompany(company);
	}

	@RequestMapping("/Companies/{id}")
	public Company getCompany(@PathVariable(name = "id") Long id) {
		Company company = service.get(id);
		return company;
	}

	@DeleteMapping("/Companies/{id}")
	public void deleteCompany(@PathVariable(name = "id") Long id) {
		Company company = service.get(id);
		service.delete(company);
	}
}
