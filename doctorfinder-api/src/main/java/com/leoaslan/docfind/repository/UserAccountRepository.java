package com.leoaslan.docfind.repository;

import com.leoaslan.docfind.model.UserAccount;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {
    @Query("SELECT ua.userID FROM UserAccount ua WHERE ua.email=:email AND ua.password=:password")
    List<Integer> findUserID(@Param("email") String email, @Param("password") String password);
    //searchPage
    @Query(value = "SELECT ua.* FROM user_accounts ua WHERE ua.full_name=:FullName AND ua.cityid=:CityID AND ua.specialtyid=:SpecialtyID AND ua.user_typeid=1", nativeQuery = true)
    List<UserAccount> findDoctor(@Param("FullName") String FullName, @Param("CityID") int cityid, @Param("SpecialtyID") int specialtyID);

    UserAccount findAllByEmail(String email);

    @Query("select ua.email from UserAccount ua where ua.email=:email")
    String findEmail(String email);

    @Query(value="insert into user_accounts (address,avatar_file_name,birthday,email,full_name,gender,password,phone_number,specialtyid,user_typeid) " +
            "values (address,avatar_file_name,birthday,email,full_name,gender,password,phone_number,specialtyid,user_typeid)",nativeQuery =true)
    Void InsertUserAccount(String address, String avatarFileName, Date birthday, String email, String name, Boolean gender, String password, int phoneNumber, int specialtyID, int userTypeID );

    UserAccount findByEmail(String email);

    UserAccount findByUserID(Integer userID);

}
