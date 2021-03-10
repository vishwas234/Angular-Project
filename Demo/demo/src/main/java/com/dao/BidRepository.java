package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Bid;
@Repository
public interface BidRepository extends JpaRepository<Bid ,Integer> {

}
