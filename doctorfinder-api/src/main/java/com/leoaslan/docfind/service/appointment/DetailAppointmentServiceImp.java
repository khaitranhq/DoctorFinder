package com.leoaslan.docfind.service.appointment;

import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.repository.*;
import com.leoaslan.docfind.service.appointment.DetailAppointmentService;
import lombok.extern.log4j.Log4j2;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
@Transactional
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

    public ResponseEntity<?> getAppointment(Map<String, Object> req) {
        int userID = Integer.parseInt((String) req.get("userID"));
        List<DetailAppointment> detailAppointmentList = detailAppointmentRepository.findByUserID(userID);
        return ResponseEntity.ok().body(detailAppointmentList);
    }

    public ResponseEntity<?> deleteAppointment(Integer appointmentID){
        DetailAppointment detailAppointment = detailAppointmentRepository.findByAppointmentID(appointmentID);

        if (detailAppointment == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        detailAppointmentRepository.deleteByAppointmentID(appointmentID);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
