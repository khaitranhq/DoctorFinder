package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.signup.SignUpService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
@Log4j2
public class SignupPageController {
    @Autowired
    SignUpService signUpService;

    @PostMapping("/signup")
    ResponseEntity<?> signup(SignupPageDTO sPC) {
        return signUpService.signup(sPC);
    }
}
