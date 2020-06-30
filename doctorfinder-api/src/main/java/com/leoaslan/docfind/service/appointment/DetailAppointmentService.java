package com.leoaslan.docfind.service.appointment;

import org.springframework.http.ResponseEntity;
import java.util.Map;

public interface DetailAppointmentService {
    ResponseEntity<?> insertAppointment(Map<String, Object> req);
}
