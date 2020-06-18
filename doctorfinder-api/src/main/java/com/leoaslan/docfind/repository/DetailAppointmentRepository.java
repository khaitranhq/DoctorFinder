package com.leoaslan.docfind.repository;

import com.leoaslan.docfind.model.DetailAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface DetailAppointmentRepository extends JpaRepository<DetailAppointment, Integer> {
    @Transactional
    void deleteByAppointmentID(int appointmentID);
    DetailAppointment findByAppointmentID(int appointmentID);
    void deleteDetailAppointmentByAppointmentID(int appointmentID);
}
