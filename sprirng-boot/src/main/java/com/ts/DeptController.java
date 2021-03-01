package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.DepartmentDao;
import com.model.Department;
import com.model.Product;

@RestController
public class DeptController {
	
	@Autowired
	DepartmentDao deptDao;
	
	@RequestMapping("/registerDept")
	public void register(){
		Department d1 = new Department();
		d1.setDeptName("CIVIL");
		d1.setLocation("LOCATION1");
		
		Department d2 = new Department();
		d2.setDeptName("COMPUTERS");
		d2.setLocation("LOCATION2");
		
		Department d3 = new Department();
		d3.setDeptName("MECH");
		d3.setLocation("LOCATION3");
		
		deptDao.register(d1);
		deptDao.register(d2);
		deptDao.register(d3);
	}

	@RequestMapping("/showAllDepartment")
	public List <Department> showAllDepartment(){
		List <Department> deptList = deptDao.getDepartment();
		return deptList; //browser or any client
	}
}
