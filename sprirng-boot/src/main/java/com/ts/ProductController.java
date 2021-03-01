package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProductDao;
import com.model.Product;

@RestController
public class ProductController {
	
	@Autowired //dependency injection
	ProductDao productDao;
	
	@RequestMapping("/register")
	public void register(){
		Product product1 = new Product();
		product1.setProductName("AUDIO SYSTEM");
		product1.setProductPrice(2222.22);

		Product product2 = new Product();
		product2.setProductName("MOBILE");
		product2.setProductPrice(3333.33);
		
		productDao.register(product1);	
		productDao.register(product2);
	}
	
	@RequestMapping("/showAllProducts")
	public List <Product> showAllProducts(){
		List <Product> productList = productDao.getProduct();
		return productList; //browser or any client
	}
	@RequestMapping("/showAllSortedProducts")
	public List <Product> showAllSortedProducts(){
		List <Product> productList = productDao.getSortedProduct();
		return productList; 
	}
	@RequestMapping("/showProductById/{productId}")
	public Product showProductById(@PathVariable("productId") Integer productId){
		Product product = productDao.getProductById(productId);
		return product; //browser or any client
	}
	@RequestMapping("/showProductByName/{productName}")
	public Product showProductById(@PathVariable("productName") String productName){
		Product product = productDao.getProductByName(productName);
		return product; //browser or any client
	}
}
