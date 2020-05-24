package com.leoaslan.docfind.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@NoArgsConstructor
@Table(schema = "dbo", name="UserAccounts")
public class UserAccount {
    @Id
    @GeneratedValue
    private int userID;

    private @NonNull String email;
    private @NonNull String password;
    private @NonNull String fullName;

    @OneToOne
    @JoinColumn(name="userTypeID")
    private @NonNull UserType userType;

    private Date birthDate;
    private String avatarFileName;

    private @NonNull Long phoneNumber;
    private String city;
    private Boolean gender;

    @OneToOne
    @JoinColumn(name="specialtyID")
    private Specialty specialty;
}
