package com.leoaslan.docfind.model;

import java.time.LocalDate;

import javax.persistence.*;

import lombok.*;

@Data
@RequiredArgsConstructor
@Entity
@NoArgsConstructor
@Table(schema = "dbo", name = "UserAccounts")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;

    private @NonNull String email;
    private @NonNull String password;

    // For doctor
    public UserAccount(@NonNull String email, @NonNull String password, @NonNull String fullName,
            @NonNull UserType userType, LocalDate birthday, String avatarFileName, @NonNull int phoneNumber,
            @NonNull City city, String detailAddress, Boolean gender, Specialty specialty) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.userType = userType;
        this.birthday = birthday;
        this.avatarFileName = avatarFileName;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.detailAddress = detailAddress;
        this.gender = gender;
        this.specialty = specialty;
    }

    // For patient
    public UserAccount(@NonNull String email, @NonNull String password, @NonNull String fullName,
            @NonNull UserType userType, LocalDate birthday, String avatarFileName, @NonNull int phoneNumber,
            @NonNull City city, String detailAddress, Boolean gender) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.userType = userType;
        this.birthday = birthday;
        this.avatarFileName = avatarFileName;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.detailAddress = detailAddress;
        this.gender = gender;
    }

    @Column(columnDefinition = "nvarchar(100)")
    private @NonNull String fullName;

    @OneToOne
    @JoinColumn(name = "userTypeID")
    private @NonNull UserType userType;

    private LocalDate birthday;
    private String avatarFileName;

    private @NonNull int phoneNumber;

    @OneToOne
    @JoinColumn(name = "cityID")
    private @NonNull City city;

    @Column(columnDefinition = "nvarchar(100)")
    private String detailAddress;

    private Boolean gender;

    @OneToOne
    @JoinColumn(name = "specialtyID")
    private Specialty specialty;
}
