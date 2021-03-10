package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Farmer;
@Repository
public interface FarmerRepository extends JpaRepository<Farmer ,Integer> {

}
