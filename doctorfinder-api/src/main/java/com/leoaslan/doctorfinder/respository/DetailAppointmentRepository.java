package com.leoaslan.doctorfinder.respository;

import com.leoaslan.doctorfinder.models.DetailAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailAppointmentRepository extends JpaRepository<DetailAppointment, Integer> {
}
