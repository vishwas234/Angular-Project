package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;

@Service
public class ProductDao {
	
	//spring dependency injection
	@Autowired
	ProductRepository productRepository;
	
	public void register(Product product) {
		productRepository.save(product);
	}
	public List<Product> getProduct() {
		List <Product> productList = productRepository.findAll();
		return productList;
	}
	public Product getProductById(Integer productId) {
		Product product= productRepository.findById(productId).orElse(new Product());
		return product;
	}
	public Product getProductByName(String productName) {
		Product product= productRepository.findByProductName(productName).orElse(new Product());
		return product;
	}
	public List<Product> getSortedProduct() {
		List <Product> productList = productRepository.findAllSorted();
		return productList;	
	}
}
