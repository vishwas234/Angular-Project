package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Farmer {

	@Id
	@GeneratedValue
	private int farmerId;
	private String name;
	private String address;
	private double mobile;
	private String loginId;
	private String password;

	public Farmer() {
	}

	public Farmer(int farmerId, String name, String address, double mobile, String loginId, String password) {
		super();
		this.farmerId = farmerId;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.loginId = loginId;
		this.password = password;
	}

	public int getFarmerId() {
		return farmerId;
	}

	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getMobile() {
		return mobile;
	}

	public void setMobile(double mobile) {
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
