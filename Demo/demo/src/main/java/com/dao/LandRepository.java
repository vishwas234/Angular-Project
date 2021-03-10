package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Land;

@Repository
public interface LandRepository extends JpaRepository<Land,Integer>{

}
