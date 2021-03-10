package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Bidder;

@Service
public class BidderDao {  
	
	
	@Autowired
	BidderRepository  bidderRepository;
	
	
	/*
	 * public List<Bidder> getAllBidders(){ List<Bidder> bidderList =
	 * bidderRepository.findAll(); return bidderList;
	 * 
	 * }
	 */
	
	public void register(Bidder bidder){
		bidderRepository.save(bidder);
			}


	

	
}
