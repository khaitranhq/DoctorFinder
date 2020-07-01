package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.dto.UserAccountDTO;
import com.leoaslan.docfind.service.auth.AuthService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Log4j2
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Map<String, Object> req) {
        if (req.containsKey("token"))
            return authService.validateUser((String) req.get("token"));

        String email = (String) req.get("email");
        String password = (String) req.get("password");

        return authService.validateUser(email, password);
    }

    @PostMapping("/signup")
    ResponseEntity<?> signup(@RequestBody Map<String, Object> req) {
        return authService.signup(new UserAccountDTO(req));
    }
}
