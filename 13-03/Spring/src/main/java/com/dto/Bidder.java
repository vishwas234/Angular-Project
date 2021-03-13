package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Bidder {

	@Id
	@GeneratedValue
	private int bidderId;
	private String bidderName;
	private int contactNumber;
	private String address;
	private String loginId;
	private String password;

	public Bidder() {
		super();
	}

	public Bidder(int bidderId, String bidderName, int contactNumber, String address, String loginId, String password) {
		super();
		this.bidderId = bidderId;
		this.bidderName = bidderName;
		this.contactNumber = contactNumber;
		this.address = address;
		this.loginId = loginId;
		this.password = password;
	}

	public int getBidderId() {
		return bidderId;
	}

	public void setBidderId(int bidderId) {
		this.bidderId = bidderId;
	}

	public String getBidderName() {
		return bidderName;
	}

	public void setBidderName(String bidderName) {
		this.bidderName = bidderName;
	}

	public int getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
