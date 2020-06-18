package com.leoaslan.docfind.model;

import java.util.Date;

import javax.persistence.*;

import lombok.*;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(schema = "dbo", name="UserAccounts")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;

    private @NonNull String email;
    private @NonNull String password;

//    @Column(name="name")
    private  String fullName;

    @OneToOne
    @JoinColumn(name="user_typeid")
    private @NonNull UserType userType;


//    @Column (name="userTypeID")
//    private @NonNull int userTypeID;


//    @Column(name="birthday")
    private Date birthdate;
//    @Column(name="avatar")
    private String avatarFileName;

 //   @Column(name = "phoneNumber")
    private @NonNull int phoneNumber;
    private String  address;
    private Boolean gender;

    @OneToOne
    @JoinColumn(name="specialtyID")
    private  Specialty specialty;
//
//    public UserAccount(
//        String email,
//        String password,
//        String fullName,
////        UserType userType,
//        int phoneNumber,
//        Specialty specialty
//    ) {
//        this.email = email;
//        this.password = password;
//        this.fullName = fullName;
////        this.userType = userType;
//        this.phoneNumber = phoneNumber;
//        this.specialty = specialty;
//    }
}
