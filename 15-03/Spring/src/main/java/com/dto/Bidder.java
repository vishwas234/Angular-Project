package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Bidder {

	@Id
	@GeneratedValue
	private int bidderId;
	private String name;
	private int mobile;
	private String address;
	private String loginId;
	private String password;

	public Bidder() {
		super();
	}

	public Bidder(int bidderId, String name, int mobile, String address, String loginId, String password) {
		super();
		this.bidderId = bidderId;
		this.name = name;
		this.mobile = mobile;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
