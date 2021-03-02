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
	private  int   farmer_id ;
	private  String name;
	private   int   mobile;
	private   String  address;

	private String login_id;
	private  String password;
	
	
	
	@OneToMany(mappedBy="farmer")
	private List<Land> landsList = new ArrayList<>();
	
	public Farmer() {
		super();
	}

	public int getFarmer_id() {
		return farmer_id;
	}

	public void setFarmer_id(int farmer_id) {
		this.farmer_id = farmer_id;
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

	public List<Land> getLandsList() {
		return landsList;
	}

	public void setLandsList(List<Land> landsList) {
		this.landsList = landsList;
	}

	public Farmer(int farmer_id, String name, int mobile, String address, String login_id, String password,
			List<Land> landsList) {
		super();
		this.farmer_id = farmer_id;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.login_id = login_id;
		this.password = password;
		this.landsList = landsList;
	}

	@Override
	public String toString() {
		return "Farmer [farmer_id=" + farmer_id + ", name=" + name + ", mobile=" + mobile + ", address=" + address
				+ ", login_id=" + login_id + ", password=" + password + ", landsList=" + landsList + "]";
	}
	
	

	

}
