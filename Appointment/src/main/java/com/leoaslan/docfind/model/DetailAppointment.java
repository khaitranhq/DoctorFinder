package com.leoaslan.docfind.model;

import lombok.*;
import javax.persistence.*;
import java.sql.Timestamp;


//@Getter
//@Setter
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "detail_appointment")

public class DetailAppointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @NonNull int appointmentid;
    private @NonNull int doctorid;
    private @NonNull int patientid;
    private @NonNull Timestamp appointmentDate;

    public int getAppointmentid() {
        return appointmentid;
    }

    public void setAppointmentid(int appointmentid) {
        this.appointmentid = appointmentid;
    }

    public int getDoctorid() {
        return doctorid;
    }

    public void setDoctorid(int doctorid) {
        this.doctorid = doctorid;
    }

    public int getPatientid() {
        return patientid;
    }

    public void setPatientid(int patientid) {
        this.patientid = patientid;
    }

    public Timestamp getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(Timestamp appointmentDate) {
        this.appointmentDate = appointmentDate;
    }
}
