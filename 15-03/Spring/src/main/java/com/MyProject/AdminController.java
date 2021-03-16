package com.MyProject;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidDao;
import com.dao.LandDao;


@Transactional
@RestController

public class AdminController {
	
	@Autowired
	LandDao landDao;
	
	@Autowired
	BidDao bidDao;


	@PostMapping(path = "/delete")
	public void deleteland(@RequestBody Integer surveyNumber) {
		System.out.println("Data Received from Angular for Delete Land");

		bidDao.deleteBid(surveyNumber);
		landDao.deleteLand(surveyNumber);
	}

}
