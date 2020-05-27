package com.leoaslan.docfind.controller;

import java.util.List;

import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.service.master.MasterService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/master")
public class MasterController {
    private final Logger log = LoggerFactory.getLogger(MasterController.class);

    @Autowired
    MasterService masterService;

    @GetMapping("/specialty")
    List<Specialty> getSpecialty(){
        List<Specialty> listSpecialties = masterService.getSpecialty();
        return listSpecialties;
    }

    @GetMapping("/city")
    List<City> getCity(){
        List<City> listCity = masterService.getCiy();
        return listCity;
    }
}