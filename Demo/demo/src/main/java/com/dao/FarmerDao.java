package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Farmer;

@Service
public class FarmerDao {

	@Autowired
	FarmerRepository farmerRepository;
	public List<Farmer> getAllFarmers(){
		return farmerRepository.findAll(); 
	}
	
	public void register(Farmer farmer) {
		farmerRepository.save(farmer);		
	}
	

	public void registerFarmer(Farmer farmer) {
		farmerRepository.save(farmer);		
	}
}
