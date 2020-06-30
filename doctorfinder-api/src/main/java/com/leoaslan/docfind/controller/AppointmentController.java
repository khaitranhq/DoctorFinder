package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.repository.DetailAppointmentRepository;
import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.service.appointment.DetailAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
    @Autowired
    DetailAppointmentService detailAppointmentService;

    @PostMapping("/appointment")
    ResponseEntity<?> insertAppointment(@RequestBody Map<String, Object> req){
        return detailAppointmentService.insertAppointment(req);
    }
}
