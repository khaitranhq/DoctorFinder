package com.leoaslan.docfind.model;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name="UserTypes")
public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userTypeID;

    @Column(columnDefinition = "nvarchar(100)")
    private @NonNull String userTypeName;
}
