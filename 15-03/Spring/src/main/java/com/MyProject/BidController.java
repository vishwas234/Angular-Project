package com.MyProject;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BidDao;
import com.dto.Bid;

@Transactional
@RestController
public class BidController {

	@Autowired
	BidDao bidDao;

	@PostMapping("/registerBid")
	public Bid bidRegister(@RequestBody Bid bid) {
		Bid bidObj = null;
		bidObj = bidDao.registerBid(bid);
		System.out.println("Bid is registered");
		return bidObj;

	}

	@GetMapping("/getAllBids")
	public List<Bid> getAllBids() {
		List<Bid> bidList = bidDao.getAllBids();

		return bidList;

	}

	@PostMapping(path = "/deleteBid")
	public void deleteland(@RequestBody Integer surveyNumber) {
		System.out.println("Data Received from Angular for Delete Land");

		bidDao.deleteBid(surveyNumber);

	}

	@PostMapping("/updateBid")
	public Bid bidUpdate(@RequestBody Bid bid) {
		Bid bidObj = null;
		bidObj = bidDao.bidUpdate(bid);
		System.out.println("Bid is registered");
		return bidObj;

	}

}
