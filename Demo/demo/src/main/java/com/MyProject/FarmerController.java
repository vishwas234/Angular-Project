package com.MyProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidderDao;
import com.dao.FarmerDao;
import com.dto.Bidder;
import com.dto.Farmer;


@RestController
public class FarmerController {
	
	@Autowired
	FarmerDao farmerDao;
	
	@RequestMapping("/farmerRegister")
    public void register() {
    	
		Farmer farmer1  =  new Farmer();
		farmer1.setFarmerName("Bala");
		farmer1.setMobile(1154256);
		farmer1.setAddress("Andhra");
		farmer1.setLoginId("bala123");
		farmer1.setPassword("password");
    	
		Farmer farmer2  =  new Farmer();
		farmer2.setFarmerName("SaiNath");
		farmer2.setMobile(45154256);
		farmer2.setAddress("telangana");
		farmer2.setLoginId("sainath123");
		farmer2.setPassword("password");
    	
		farmerDao.register(farmer1);
		farmerDao.register(farmer2);

    }
	
	@PostMapping("/registerFarmer")
	public void registerFarmer(@RequestBody Farmer farmer) {
		farmerDao.register(farmer);
		
	}

	  
	/*
	 * @PostMapping("/registerFarmer") public void register(Farmer farmer) {
	 * FarmerDao farmerDao = new FarmerDao(); farmerDao.registerFarmer(farmer); }
	 * 
	 */
	/*
	 * @RequestMapping("/getAllFarmers") public List<Farmer> getAllFarmers(){
	 * 
	 * FarmerDao farmerDao = new FarmerDao(); List<Farmer> farmerList =
	 * farmerDao.getAllFarmers(); return farmerList; }
	 */
	
}
/*

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
}*/
