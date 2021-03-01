package com.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

	Optional<Product> findByProductName(String productName);
	
	@Query("from Product order by productName")
	List<Product> findAllSorted(); 	
}
