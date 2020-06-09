package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.searchPage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class searchPageController {
    @Autowired
    UserAccountService userAccountService;

    @PostMapping("/doctor")
    public ResponseEntity<?> getUserAccount(@RequestBody Map<String, Object> req) {
        String fullName = (String) req.get("fullName");
        System.out.println(fullName);
        int cityID = (int) req.get("cityID");
        int specialtyid = (int) req.get("specialtyID");
        // System.out.println(full_name);
        return userAccountService.findDoctor(fullName, cityID, specialtyid);
    }
}
