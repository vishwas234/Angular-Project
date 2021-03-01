package com.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.Id;
@Entity
public class Land {
	
	@Id
	private int survey_no;
	private int area;
	private double price;
	
	@ManyToOne
	@JoinColumn(name="farmer_id")
	Farmer farmer;
	
	@OneToMany(mappedBy="land")
	private List<Bid> bidsList = new ArrayList<Bid>();

	public int getSurvey_no() {
		return survey_no;
	}

	public void setSurvey_no(int survey_no) {
		this.survey_no = survey_no;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}

	public List<Bid> getBidsList() {
		return bidsList;
	}

	public void setBidsList(List<Bid> bidsList) {
		this.bidsList = bidsList;
	}

	public Land(int survey_no, int area, double price, Farmer farmer, List<Bid> bidsList) {
		super();
		this.survey_no = survey_no;
		this.area = area;
		this.price = price;
		this.farmer = farmer;
		this.bidsList = bidsList;
	}

	public Land() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Land [survey_no=" + survey_no + ", area=" + area + ", price=" + price + ", farmer=" + farmer
				+ ", bidsList=" + bidsList + "]";
	}
	
	
	
	
	

}
