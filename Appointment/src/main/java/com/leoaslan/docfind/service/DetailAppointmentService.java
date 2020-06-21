package com.leoaslan.docfind.service;

import com.leoaslan.docfind.model.DetailAppointment;
import org.springframework.http.ResponseEntity;
import java.sql.Timestamp;

public interface DetailAppointmentService {
    //ResponseEntity<?> insertAppointment(DetailAppointment detailAppointment)
    ResponseEntity<?> insertAppointment(int doctorid, int patientid, Timestamp appointmentDate);
}
