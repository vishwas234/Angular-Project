package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Bid;

@Service
public class BidDao {

	@Autowired
	BidRepository bidRepository;

	public List<Bid> getAllBids() {
		return bidRepository.findAll();
	}

	public Bid registerBid(Bid bid) {
		return bidRepository.save(bid);
	}

	public void deleteBid(Integer surveyNumber) {

		bidRepository.deleteBysurveyNumber(surveyNumber);
	}

	public Bid bidUpdate(Bid bid) {

		return bidRepository.save(bid);
	}

}
