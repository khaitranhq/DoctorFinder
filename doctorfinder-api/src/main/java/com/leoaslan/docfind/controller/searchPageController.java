package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.searchPage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class searchPageController {
    @Autowired
    UserAccountService userAccountService;

    @GetMapping("/doctor")

    ResponseEntity<?> getUserAccount(HttpServletRequest request) {
        String full_name = request.getParameter("fullName");
        int cityID = Integer.parseInt(request.getParameter("cityID"));
        int specialtyid = Integer.parseInt(request.getParameter("specialtyID"));
        System.out.println(full_name);
        return userAccountService.findDoctor(full_name, cityID, specialtyid);
    }

}
