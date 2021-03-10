package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Bid {
	
	@Id
	@GeneratedValue
	private int bidId; 
	private double bidValue;
	
	
	public Bid() {
		super();
	}
	
	
	public int getBidId() {
		return bidId;
	}
	public void setBidId(int bidId) {
		this.bidId = bidId;
	}
	public double getBidValue() {
		return bidValue;
	}
	public void setBidValue(double bidValue) {
		this.bidValue = bidValue;
	}
	
	
}
