package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dto.Bid;
import com.dto.Farmer;

public class BidDao {
	@Autowired
	BidRepository bidRepository;
	public List<Bid> getAllBids(){
		
		return bidRepository.findAll();
	}

}
