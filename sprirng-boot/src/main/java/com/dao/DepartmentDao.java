package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Department;
import com.model.Product;

@Service
public class DepartmentDao {
	
	//dependency injection
	@Autowired
	DepartmentRepository departmentRepository;
	
	public List<Department> getDepartment() {
		List <Department> deptList = departmentRepository.findAll();
		return deptList;
	}
	
	public void register(Department department) {
		departmentRepository.save(department);
	}
}
