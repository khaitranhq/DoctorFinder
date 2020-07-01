package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.login.LoginService;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Log4j2
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Map<String, Object> req) {
        if (req.containsKey("token"))
            return loginService.validateUser((String) req.get("token"));

        String email = (String) req.get("email");
        String password = (String) req.get("password");

        return loginService.validateUser(email, password);
    }
}
