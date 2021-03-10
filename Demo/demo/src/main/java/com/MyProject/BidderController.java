package com.MyProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidderDao;
import com.dao.FarmerDao;
import com.dto.Bidder;
import com.dto.Farmer;

@RestController

public class BidderController {
	
	@Autowired
	BidderDao bidderDao;
	
	@RequestMapping("/bidderRegister")
    public void register() {
   
		Bidder bidder1  =  new Bidder();
		bidder1.setBidderName("swadeep");
		bidder1.setContactNumber(895645);
		bidder1.setAddress("telangana");
		bidder1.setLoginId("swadeep123");
		bidder1.setPassword("password");
    	
		Bidder bidder2  =  new Bidder();
		bidder2.setBidderName("vishwas");
		bidder2.setContactNumber(7595645);
		bidder2.setAddress("sec");
		bidder2.setLoginId("vishwas123");
		bidder2.setPassword("password");
    	
		bidderDao.register(bidder1);
		bidderDao.register(bidder2);

    }
	
	/*
	 * @RequestMapping("/getAllBidders") public List<Bidder> getAllBidders(){
	 * BidderDao bidderDao = new BidderDao(); List<Bidder> bidderList =
	 * bidderDao.getAllBidders(); return bidderList; }
	 */
	
	/*
	 * @PostMapping("/registerBidder") public void register(Bidder bidder) {
	 * BidderDao bidderDao = new BidderDao(); bidderDao.registerBidder(bidder); }
	 */
}
