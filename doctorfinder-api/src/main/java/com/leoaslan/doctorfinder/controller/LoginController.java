package com.leoaslan.doctorfinder.controller;

import com.leoaslan.doctorfinder.models.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    UserAccount user;

    @PostMapping("/auth/login")
    ResponseEntity<?> login()
}
