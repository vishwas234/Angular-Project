package com.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Land {

	@Id
	@GeneratedValue
	private int landId;
	private int surveyNumber;
	private int area;
	private String location;
	private double price;

	public int getLandId() {
		return landId;
	}

	public void setLandId(int landId) {
		this.landId = landId;
	}

	public void setSurveyNumber(int surveyNumber) {
		this.surveyNumber = surveyNumber;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getSurveyNumber() {
		return surveyNumber;
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

	@Override
	public String toString() {
		return "Land [landId=" + landId + ", surveyNumber=" + surveyNumber + ", area=" + area + ", location=" + location
				+ ", price=" + price + "]";
	}

}
