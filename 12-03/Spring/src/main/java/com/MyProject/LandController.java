package com.MyProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.LandDao;
import com.dto.Land;

@RestController
public class LandController {
	
	@Autowired
	LandDao landDao;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registerLand")
	public Land registerLand(@RequestBody Land land) throws Exception {
		
		  String tempSurveyNumber = land.getSurveyNumber();
		if (tempSurveyNumber != "" && !"".equals(tempSurveyNumber) ) { 
			Land landObj = landDao.fetchLandBySurveyNumber(tempSurveyNumber); 
			if(landObj != null) {
				throw new Exception("User with" +tempSurveyNumber +"is already Exist"); 
				} 
			} 
		Land  landObj = null; 
		landObj = landDao.registerLand(land); 
		return	landObj;
	}
	

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getAllLands")
	public List<Land> getAllLands(){
		List<Land> landList = landDao.getAllLands();
		
		return landList;
	}



}
