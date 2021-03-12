package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Land {

	@Id
	@GeneratedValue
	private int landId;
	private String surveyNumber;
	private int area;
	private String location;
	private double price;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSurveyNumber() {
		return surveyNumber;
	}

	public void setSurveyNo(String surveyNumber) {
		this.surveyNumber = surveyNumber;
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

}
