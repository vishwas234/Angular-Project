package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dto.Land;



public class LandDao {
	
	@Autowired
	LandRepository landRepository;
	public List<Land> getAllLands(){
		
		return landRepository.findAll();
	}


}
