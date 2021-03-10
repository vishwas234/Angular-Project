package com.MyProject;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;

import com.dao.LandDao;
import com.dto.Land;


public class LandController {
	
	@RequestMapping("/getLand")
	public Land showLand() {
	Land P = new Land();
	P.setSurveyNo(1);
	P.setArea(125);
	P.setPrice(7500);
	return P;
	
	}
	

	@RequestMapping("/getAllLands")
	public List<Land> getAllLands(){
		
		LandDao LandDao = new LandDao();
		List<Land> landList = LandDao.getAllLands();
		return landList;
	}


}
