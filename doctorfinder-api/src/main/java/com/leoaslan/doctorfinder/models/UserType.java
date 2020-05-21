package com.leoaslan.doctorfinder.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name="UserTypes")
public class UserType {
    @Id
    @GeneratedValue
    private int userTypeID;

    private String userTypeName;
}