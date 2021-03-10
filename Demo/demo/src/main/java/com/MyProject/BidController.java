package com.MyProject;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;

import com.dao.BidDao;
import com.dto.Bid;


public class BidController {
	
	@RequestMapping("/getBid")
    public Bid  getBid() {
    	Bid b  =  new Bid();
    	b.setBidId(1);
    	b.setBidValue(15000);
    	return b;

    }
	

	@RequestMapping("/getAllBids")
	public List<Bid> getAllBids(){
		BidDao bidDao = new BidDao();
		List<Bid> bidList = bidDao.getAllBids();
		return bidList;
	}

}
