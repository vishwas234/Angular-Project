package com.MyProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidderDao;
import com.dao.FarmerDao;
import com.dao.FarmerRepository;
import com.dto.Bidder;
import com.dto.Farmer;


@RestController
public class FarmerController {
	
	@Autowired
	FarmerDao farmerDao;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registerFarmer")
	public Farmer registerFarmer(@RequestBody Farmer farmer) throws Exception {
		String tempLoginId = farmer.getLoginId();
		if (tempLoginId != "null" && !"".equals(tempLoginId) ) {
			Farmer farmerObj = farmerDao.fetchFarmerByLoginId(tempLoginId);
			if(farmerObj != null) {
				throw new Exception("User with" +tempLoginId +"is already Exist");
			}
		}
		Farmer farmerObj = null;
		farmerObj = farmerDao.registerFarmer(farmer);
		return farmerObj;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/loginFarmer")
	public Farmer loginFarmer(@RequestBody Farmer farmer) throws Exception {
		String tempLoginId = farmer.getLoginId();
		String tempPassword = farmer.getPassword();
		Farmer farmerObj =null;
		if(tempLoginId != null && tempPassword!= null) {
			farmerObj = farmerDao.fetchFarmerByLoginIdAndPassword(tempLoginId, tempPassword);
		}
		if(farmerObj == null) {
			throw new Exception ("Bad Credentials..");
		}
		return farmerObj;
	}

	 	
		/*
		 * @PostMapping("/registerFarmer") public void registerFarmer(@RequestBody
		 * Farmer farmer) { System.out.println("data received from Angular");
		 * System.out.println(farmer);
		 * 
		 * farmerDao.register(farmer); farmerDao.register(farmer);
		 * 
		 * }
		 * 
		 */	  
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
