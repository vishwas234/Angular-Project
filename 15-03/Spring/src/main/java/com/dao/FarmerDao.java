package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Farmer;

@Service
public class FarmerDao {

	@Autowired
	FarmerRepository farmerRepository;
	
	public Farmer registerFarmer(Farmer farmer) {
	return	farmerRepository.save(farmer);		
	}
	
	public Farmer fetchFarmerByLoginId(String loginId) {
	 return 	farmerRepository.findByLoginId(loginId);
		
	}
	
	public Farmer fetchFarmerByLoginIdAndPassword(String loginId,String password) {
		return farmerRepository.findByLoginIdAndPassword(loginId,password);
		
	}
}
