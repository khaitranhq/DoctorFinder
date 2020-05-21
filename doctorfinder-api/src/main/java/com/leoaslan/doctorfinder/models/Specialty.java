package com.leoaslan.doctorfinder.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Specialty")
public class Specialty {
    @Id
    @GeneratedValue
    private int specialtyID;

    private String specialtyName;
}