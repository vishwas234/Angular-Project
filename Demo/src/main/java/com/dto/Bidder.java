package com.dto;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.Id;
@Entity

public class Bidder {
	

	@Id
	@GeneratedValue
	private int bidder_id;	
	private String bidder_name;
	private int mobile;
	private String address;
	private String login_id;
	private String  password;
	
	@OneToMany(mappedBy="bidder")
	private List<Bid> bidsList = new ArrayList<Bid>();

	public int getBidder_id() {
		return bidder_id;
	}

	public void setBidder_id(int bidder_id) {
		this.bidder_id = bidder_id;
	}

	public String getBidder_name() {
		return bidder_name;
	}

	public void setBidder_name(String bidder_name) {
		this.bidder_name = bidder_name;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Bid> getBidsList() {
		return bidsList;
	}

	public void setBidsList(List<Bid> bidsList) {
		this.bidsList = bidsList;
	}

	public Bidder(int bidder_id, String bidder_name, int mobile, String address, String login_id, String password,
			List<Bid> bidsList) {
		super();
		this.bidder_id = bidder_id;
		this.bidder_name = bidder_name;
		this.mobile = mobile;
		this.address = address;
		this.login_id = login_id;
		this.password = password;
		this.bidsList = bidsList;
	}

	@Override
	public String toString() {
		return "Bidder [bidder_id=" + bidder_id + ", bidder_name=" + bidder_name + ", mobile=" + mobile + ", address="
				+ address + ", login_id=" + login_id + ", password=" + password + ", bidsList=" + bidsList + "]";
	}

	public Bidder() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
