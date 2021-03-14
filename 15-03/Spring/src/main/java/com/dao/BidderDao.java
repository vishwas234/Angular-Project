package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Bidder;
import com.dto.Farmer;

@Service
public class BidderDao {  
	
	
	@Autowired
	BidderRepository  bidderRepository;
	 	
	public Bidder registerBidder(Bidder bidder) { 
		return	 bidderRepository.save(bidder); 
		}
			  
	public Bidder fetchBidderByLoginId(String loginId) { 
		return  bidderRepository.findByLoginId(loginId);
		 }
	
	public Bidder fetchBidderByLoginIdAndPassword(String loginId,String password){ 
		return bidderRepository.findByLoginIdAndPassword(loginId,password);
			  
			 }
			 
}