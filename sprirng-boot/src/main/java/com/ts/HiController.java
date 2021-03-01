package com.ts;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HiController {
	
	@RequestMapping("/hi")
	public String hi(){
		return "Hi!  Welcome to Spring REST";
	}
}
