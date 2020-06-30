package com.leoaslan.docfind.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="DetailAppointment")
public class DetailAppointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appointmentID;

    @OneToOne
    @JoinColumn(name="doctorID")
    private @NonNull UserAccount doctor;

    @OneToOne
    @JoinColumn(name="patientID")
    private @NonNull UserAccount patient;

    private @NonNull LocalDateTime appointmentTime;
}
