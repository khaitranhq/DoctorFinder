package com.leoaslan.docfind.controller;


import com.leoaslan.docfind.service.deleteAppointment.DeleteAppointmentService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/appointment")
@Log4j2
public class DeleteAppointment {
    @Autowired
    DeleteAppointmentService deleteAppointmentService;

    @DeleteMapping("/delete")
    ResponseEntity<?> deleteAppointment(HttpServletRequest request){
        int appointmentID = Integer.parseInt(request.getParameter("appointmentID"));
        log.info(appointmentID);
        return deleteAppointmentService.delete(appointmentID);
    }
}
