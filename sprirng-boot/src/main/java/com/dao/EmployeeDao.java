package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Employee;
import com.model.Product;

@Service
public class EmployeeDao {
	
	//dependency injection
	@Autowired
	EmployeeRepository empRepository;
	
	public List<Employee> getEmployee() {
		List <Employee> empList = empRepository.findAll();
		return empList;
	}
	
	public void register(Employee employee) {
		empRepository.save(employee);
	}

	public Employee getEmployeeById(int empId) {
		Employee employee = empRepository.findById(empId).orElse(new Employee());
		return employee;
	}
}
