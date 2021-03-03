package com.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.Id;
@Entity
public class Farmer {
	
	@Id
	@GeneratedValue
	private  int   farmerId ;
	private  String name;
	private   int   mobile;
	private   String  address;

	private String loginId;
	private  String password;
	
	
	
	@OneToMany(mappedBy="farmer")
	private List<Land> landsList = new ArrayList();
	
	public Farmer() {
		super();
	}

	public int getFarmer_id() {
		return farmerId;
	}

	public void setFarmer_id(int farmer_id) {
		this.farmerId = farmerId;
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

	public void setLogin_id(String loginIid) {
		this.loginId = loginIid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Land> getLandsList() {
		return landsList;
	}

	public void setLandsList(List<Land> landsList) {
		this.landsList = landsList;
	}

	public Farmer(int farmer_id, String name, int mobile, String address, String login_id, String password,
			List<Land> landsList) {
		super();
		this.farmerId = farmerId;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.loginId = loginId;
		this.password = password;
		this.landsList = landsList;
	}

	@Override
	public String toString() {
		return "Farmer [farmerId=" + farmerId + ", name=" + name + ", mobile=" + mobile + ", address=" + address
				+ ", login_id=" + loginId + ", password=" + password + ", landsList=" + landsList + "]";
	}
	
	

	

}
