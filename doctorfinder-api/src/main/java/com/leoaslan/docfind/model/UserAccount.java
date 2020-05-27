package com.leoaslan.docfind.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.*;

@Data
@RequiredArgsConstructor
@Entity
@NoArgsConstructor
@Table(schema = "dbo", name="UserAccounts")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;

    private @NonNull String email;
    private @NonNull String password;
    private @NonNull String fullName;

    @OneToOne
    @JoinColumn(name="userTypeID")
    private @NonNull UserType userType;

    private Date birthDate;
    private String avatarFileName;

    private @NonNull int phoneNumber;

    @OneToOne
    @JoinColumn(name="cityID")
    private @NonNull City city;
    private Boolean gender;

    @OneToOne
    @JoinColumn(name="specialtyID")
    private Specialty specialty;

    public UserAccount(
        String email, 
        String password,
        String fullName,
        UserType userType,
        int phoneNumber,
        Specialty specialty
    ) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.userType = userType;
        this.phoneNumber = phoneNumber;
        this.specialty = specialty;
    }
}
