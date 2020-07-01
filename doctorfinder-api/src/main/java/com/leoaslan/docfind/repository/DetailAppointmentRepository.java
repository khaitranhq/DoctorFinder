package com.leoaslan.docfind.repository;

import com.leoaslan.docfind.model.DetailAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DetailAppointmentRepository extends JpaRepository<DetailAppointment, Integer> {
    @Query(value = "select da.* from detail_appointment da where da.doctorid=:userID or da.patientid=:userID", nativeQuery = true)
    List<DetailAppointment> findByUserID(@Param("userID") int userID);

    DetailAppointment findByAppointmentID(Integer appointmentID);

    int deleteByAppointmentID(Integer appointmentID);
}
