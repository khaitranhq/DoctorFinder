package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.searchPage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class searchPageController {
    @Autowired
    UserAccountService userAccountService;

    @PostMapping("/doctor")
    public ResponseEntity<?> getUserAccount(@RequestBody Map<String, Object> req) {
        String fullName = (String) req.get("fullName");
        int cityID = (int) req.get("cityID");
        int specialtyid = (int) req.get("specialtyID");
        return userAccountService.findDoctor(fullName, cityID, specialtyid);
    }
}
