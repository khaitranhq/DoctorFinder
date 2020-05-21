package com.leoaslan.doctorfinder.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name="DetailAppointment")
public class DetailAppointment {
    @Id
    @GeneratedValue
    private int appointmentID;

    @OneToOne
    @JoinColumn(name="doctorID")
    private UserAccount doctor;

    @OneToOne
    @JoinColumn(name="patientID")
    private UserAccount patient;

    private @NonNull Date time;
}
