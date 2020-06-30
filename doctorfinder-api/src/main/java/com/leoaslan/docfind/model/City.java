package com.leoaslan.docfind.model;

import javax.persistence.*;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name="cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cityID;

    @Column(columnDefinition = "nvarchar(100)")
    private @NonNull String cityName;
}