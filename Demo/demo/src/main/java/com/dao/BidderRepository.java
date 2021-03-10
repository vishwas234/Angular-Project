package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dto.Bidder;
@Repository
public interface BidderRepository extends JpaRepository<Bidder,Integer>{

}
