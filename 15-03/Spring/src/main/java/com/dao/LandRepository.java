package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Land;

@Repository
public interface LandRepository extends JpaRepository<Land, Integer> {
	public Land findLandBySurveyNumber(int surveyNumber);

	public void deleteBysurveyNumber(int surveyNumber);

	public List<Land> findAllByLoginId(String loginId);
}
