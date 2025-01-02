package com.countryServcie.project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "country_table")
public class CountryDb {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private int id;

    @Column(name = "country_name")
    private String countryDbName;

    @Column(name = "country_capital")
    private String countryDbCapital;
}
