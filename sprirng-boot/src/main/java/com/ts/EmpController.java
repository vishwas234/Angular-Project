package com.ts;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.EmployeeDao;
import com.model.Employee;

@RestController
public class EmpController {	
	@Autowired
	EmployeeDao employeeDao;	
	/*@Autowired
	DepartmentDao deptDao;*/
	
	@RequestMapping("/registerEmp1")
	public String register1(){
		Employee emp1 = new Employee(1, "Pasha", 8888.88,  "M", new Date("01/14/2020"), "1234567890", "INDIA", "pasha123",  "password");
		Employee emp2 = new Employee(2, "Harsha", 7777.77, "M", new Date("02/15/2020"), "1234567891", "CHINA", "harsha123", "password");
		Employee emp3 = new Employee(3, "Venkat", 6666.66, "M", new Date("03/16/2020"), "1234567892", "USA",   "venakt123", "password");		
		employeeDao.register(emp1);
		employeeDao.register(emp2);
		employeeDao.register(emp3);		
		return "Employee records inserted";
	}		
	@RequestMapping("/showAllEmployee")
	public List <Employee> showAllEmployee(){		
		List<Employee> empList = employeeDao.getEmployee();
		return empList;
	}	
	@RequestMapping("/getEmpById/{empId}")
	public Employee getEmpById(@PathVariable("empId") int empId){	
		System.out.println("Data received from angular \nEmplyee ID : " + empId);
		Employee emp = employeeDao.getEmployeeById(empId);
		return emp;
	}
	
	
	/*@RequestMapping("/registerEmp")
	public void register(Employee employee){
		List<Department> deptList = deptDao.getDepartment();
		
		Employee e1 = new Employee();
		e1.setEmpName("PASHA");
		e1.setSalary(8989.89);
		e1.setDepartment(deptList.get(0));
		
		Employee e2 = new Employee();
		e2.setEmpName("HARSHA");
		e2.setSalary(8888.88);
		e2.setDepartment(deptList.get(0));
		
		Employee e3 = new Employee();
		e3.setEmpName("ARUN");
		e3.setSalary(7777.77);
		e3.setDepartment(deptList.get(2));
		
		employeeDao.register(e1);
		employeeDao.register(e2);
		employeeDao.register(e3);		
	}*/
}
