package com.leoaslan.docfind.service.deleteAppointment;

import com.leoaslan.docfind.model.DetailAppointment;
import com.leoaslan.docfind.repository.DetailAppointmentRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class DeleteAppointmentService {
    @Autowired
    DetailAppointmentRepository detailAppointmentRepository;

    public ResponseEntity<?> delete(int appointmentId){
        DetailAppointment detailAppointment= detailAppointmentRepository.findByAppointmentID(appointmentId);
        log.info(detailAppointment);
        if(detailAppointment == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else{
            detailAppointmentRepository.deleteByAppointmentID(appointmentId);
//            detailAppointmentRepository.deleteDetailAppointmentByAppointmentID(appointmentId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
