
package com.MyProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.dao")
@EntityScan(basePackages = "com.dto")
@SpringBootApplication(scanBasePackages = "com")

public class MyProjectApplication {
	public static void main(String[] args) {
		SpringApplication.run(MyProjectApplication.class, args);
	}

}
