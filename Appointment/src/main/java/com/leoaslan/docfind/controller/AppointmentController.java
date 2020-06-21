package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.service.*;
import com.leoaslan.docfind.repository.DetailAppointmentRepository;
import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.repository.DetailAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;

@RestController
@RequestMapping("/api")
@ResponseBody
public class AppointmentController {


    @Autowired
    DetailAppointmentService detailAppointmentService;
    @Autowired
    DetailAppointmentRepository detailAppointmentRepository;

    @PostMapping("/appointment")
    ResponseEntity<?> insertAppointment(@RequestParam("doctorid") int doctorid, @RequestParam("patientid") int patientid, @RequestParam("appointmentDate") Timestamp appointmentDate){
        DetailAppointment detailAppointment = new DetailAppointment();
        detailAppointment.setDoctorid(doctorid);
        detailAppointment.setPatientid(patientid);
        detailAppointment.setAppointmentDate(appointmentDate);
        detailAppointmentRepository.save(detailAppointment);
        //return detailAppointmentService.insertAppointment(doctorid,patientid, appointmentDate);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
