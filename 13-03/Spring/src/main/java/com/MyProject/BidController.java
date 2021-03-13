package com.MyProject;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidDao;
import com.dto.Bid;


@RestController
public class BidController {
	
	
	@Autowired
	BidDao bidDao;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registerBid")
	public Bid bidRegister(@RequestBody Bid bid) {
		Bid  bidObj = null; 
		bidObj = bidDao.registerBid(bid); 
		System.out.println("hello ...Bid is registered");
		return	bidObj;

	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getAllBids")
	public List<Bid> getAllBids(){
	List<Bid> bidList = bidDao.getAllBids();
		
		return bidList;
	
	}
	
}
