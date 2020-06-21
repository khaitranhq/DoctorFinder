package com.leoaslan.docfind.service;

import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import javax.persistence.PersistenceException;
import java.sql.Timestamp;

@Service
public class DetailAppointmentServiceImp implements DetailAppointmentService{
    @Autowired
    DetailAppointmentRepository detailAppointmentRepository;

    public ResponseEntity<?> insertAppointment(int doctorid, int patientid, Timestamp appointmentDate){
        DetailAppointment detailAppointment = new DetailAppointment();
        detailAppointment.setDoctorid(doctorid);
        detailAppointment.setPatientid(patientid);
        detailAppointment.setAppointmentDate(appointmentDate);
        detailAppointmentRepository.save(detailAppointment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
