package com.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
@Entity
public class Bid {
	
	@Id
	@GeneratedValue
	private int b_id; 
	private double bid_value;

	@ManyToOne
	@JoinColumn(name="bidder_id")
	Bidder bidder;
	
	@ManyToOne
	@JoinColumn(name="survey_no")
	Land land;

	public int getB_id() {
		return b_id;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}

	public double getBid_value() {
		return bid_value;
	}

	public void setBid_value(double bid_value) {
		this.bid_value = bid_value;
	}

	public Bidder getBidder() {
		return bidder;
	}

	public void setBidder(Bidder bidder) {
		this.bidder = bidder;
	}

	public Land getLand() {
		return land;
	}

	public void setLand(Land land) {
		this.land = land;
	}

	public Bid(int b_id, double bid_value, Bidder bidder, Land land) {
		super();
		this.b_id = b_id;
		this.bid_value = bid_value;
		this.bidder = bidder;
		this.land = land;
	}

	@Override
	public String toString() {
		return "Bid [b_id=" + b_id + ", bid_value=" + bid_value + ", bidder=" + bidder + ", land=" + land + "]";
	}

	public Bid() {
		super();
		// TODO Auto-generated constructor stub
	}



	
}
