package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.Land;

@Service
public class LandDao {

	@Autowired
	LandRepository landRepository;

	public List<Land> getAllLands() {
		return landRepository.findAll();
	}

	public Land registerLand(Land land) {
		return landRepository.save(land);
	}

	public Land fetchLandBySurveyNumber(int tempSurveyNumber) {
		return landRepository.findLandBySurveyNumber(tempSurveyNumber);
	}

	public void deleteLand(int surveyNumber) {
		System.out.println("Dao");

		landRepository.deleteBysurveyNumber(surveyNumber);
	}

	public Land landUpdate(Land land) {
		return landRepository.save(land);
	}
}
