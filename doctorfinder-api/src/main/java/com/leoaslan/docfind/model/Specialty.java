package com.leoaslan.docfind.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name="Specialties")
public class Specialty {
    @Id
    @GeneratedValue
    private int specialtyID;

    private String specialtyName;
}
