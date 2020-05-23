package com.leoaslan.doctorfinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
// @ComponentScan({"com.delivery.request"})
// @EntityScan("com.delivery.domain")
// @EnableJpaRepositories("com.delivery.repository")
public class DoctorfinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoctorfinderApplication.class, args);
	}

}
