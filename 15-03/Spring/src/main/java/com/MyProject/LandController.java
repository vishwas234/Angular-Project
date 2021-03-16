package com.MyProject;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.LandDao;
import com.dto.Land;

@Transactional
@RestController
public class LandController {

	@Autowired
	LandDao landDao;

	@PostMapping("/registerLand")
	public Land registerLand(@RequestBody Land land) throws Exception {

		int tempSurveyNumber = land.getSurveyNumber();
		if (tempSurveyNumber != 0 && !"".equals(tempSurveyNumber)) {
			Land landObj = landDao.fetchLandBySurveyNumber(tempSurveyNumber);
			if (landObj != null) {
				throw new Exception("User with" + tempSurveyNumber + "is already Exist");
			}
		}
		Land landObj = null;
		landObj = landDao.registerLand(land);
		return landObj;
	}

	@GetMapping("getAllLands")
	public List<Land> getAllLands() {
		List<Land> landList = landDao.getAllLands();

		return landList;
	}

	@PostMapping(path = "/deleteland")
	public void deleteland(@RequestBody Integer surveyNumber) {
		System.out.println("Data Received from Angular for Delete Land");

		landDao.deleteLand(surveyNumber);

	}

	@PostMapping("/updateland")
	public Land bidUpdate(@RequestBody Land land) {
		Land landObj = null;
		landObj = landDao.landUpdate(land);
		System.out.println("Land Updated");
		return landObj;

	}
	
	@PostMapping("/getLandById")
	public List<Land> getLand(@RequestBody String loginId){
		List<Land> landList = landDao.getLands(loginId);
		return landList;
	}
}
