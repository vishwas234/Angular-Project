package com.MyProject;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.FarmerDao;
import com.dto.Farmer;

@Transactional
@RestController
public class FarmerController {

	@Autowired
	FarmerDao farmerDao;

	@PostMapping("/registerFarmer")
	public Farmer registerFarmer(@RequestBody Farmer farmer) throws Exception {
		String tempLoginId = farmer.getLoginId();
		if (tempLoginId != "null" && !"".equals(tempLoginId)) {
			Farmer farmerObj = farmerDao.fetchFarmerByLoginId(tempLoginId);
			if (farmerObj != null) {
				throw new Exception("User with" + tempLoginId + "is already Exist");
			}
		}
		Farmer farmerObj = null;
		farmerObj = farmerDao.registerFarmer(farmer);
		return farmerObj;
	}

	@PostMapping("/loginFarmer")
	public Farmer loginFarmer(@RequestBody Farmer farmer) throws Exception {
		String tempLoginId = farmer.getLoginId();
		String tempPassword = farmer.getPassword();
		Farmer farmerObj = null;
		if (tempLoginId != null && tempPassword != null) {
			farmerObj = farmerDao.fetchFarmerByLoginIdAndPassword(tempLoginId, tempPassword);
		}
		if (farmerObj == null) {
			throw new Exception("Bad Credentials..");
		}
		return farmerObj;
	}

}
