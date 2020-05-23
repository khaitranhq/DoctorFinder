package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.login.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class LoginController {
    private final Logger log = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    LoginService loginService;

    @GetMapping("/auth/login")
    ResponseEntity<?> login(HttpServletRequest request) {
         String email = request.getParameter("email");
         String password = request.getParameter("password");

         Boolean isCorrectUser = loginService.validateUser(email, password);
         if (isCorrectUser) return new ResponseEntity<>(HttpStatus.ACCEPTED);
         return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
