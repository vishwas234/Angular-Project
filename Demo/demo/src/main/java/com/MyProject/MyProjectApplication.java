package com.MyProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;


@EnableJpaRepositories(basePackages="com.dao")
@EntityScan(basePackages="com.dto")
@SpringBootApplication(scanBasePackages="com")

public class MyProjectApplication {

	
	@CrossOrigin("localhost:4200")
	public static void main(String[] args) {
		SpringApplication.run(MyProjectApplication.class, args);
	}

}
