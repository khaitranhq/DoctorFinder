package com.leoaslan.docfind.service.appointment;

import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.repository.*;
import com.leoaslan.docfind.service.appointment.DetailAppointmentService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Map;

@Service
public class DetailAppointmentServiceImp implements DetailAppointmentService {

    @Autowired
    DetailAppointmentRepository detailAppointmentRepository;

    @Autowired
    UserAccountRepository userAccountRepository;

    public ResponseEntity<?> insertAppointment(Map<String, Object> req) {
        DetailAppointment detailAppointment = new DetailAppointment();

        UserAccount doctor = userAccountRepository.findByUserID((int) req.get("doctorID"));
        UserAccount patient = userAccountRepository.findByUserID((int) req.get("patientID"));

        detailAppointment.setDoctor(doctor);
        detailAppointment.setPatient(patient);
        detailAppointment.setAppointmentTime(LocalDateTime.parse((String) req.get("appointmentTime")));
        detailAppointmentRepository.save(detailAppointment);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
