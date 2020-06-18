package com.leoaslan.docfind.repository;


import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {

    @Query("SELECT ua.userID FROM UserAccount ua WHERE ua.email=:email AND ua.password=:password")
    List<Integer> findUserID(@Param("email") String email, @Param("password") String password);
    //searchPage
    @Query("SELECT useraccount\n" +
            "FROM UserAccount useraccount, Specialty specialty1\n" +
            "WHERE useraccount.specialty.specialtyID = specialty1.specialtyID AND useraccount.userID = 'doctor' AND useraccount.fullName = :FullName" +
            " AND useraccount.specialty.specialtyID = :SpecialtyID AND useraccount.address = :CityID")
    List<UserAccount> findDoctor(@Param("FullName") String FullName, @Param("CityID") int cityid, @Param("SpecialtyID") int specialtyID);

    UserAccount findAllByEmail(String email);

    @Query("select ua.email from UserAccount ua where ua.email=:email")
    String findEmail(String email);

    @Query(value="insert into user_accounts (address,avatar_file_name,birthday,email,full_name,gender,password,phone_number,specialtyid,user_typeid) " +
            "values (address,avatar_file_name,birthday,email,full_name,gender,password,phone_number,specialtyid,user_typeid)",nativeQuery =true)
    Void InsertUserAccount(String address, String avatarFileName, Date birthday, String email, String name, Boolean gender, String password, int phoneNumber, int specialtyID, int userTypeID );

    UserAccount findByEmail(String email);

}
