package com.countryServcie.project.bean;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Country {

    private int id;
    private String countryName;
    private String countryCapital;

    public Country(int id, String countryName, String countryCapital) {
        this.id = id;
        this.countryName = countryName;
        this.countryCapital = countryCapital;
    }

    @Override
    public String toString() {
        return "Country{" +
                "id=" + id +
                ", countryName='" + countryName + '\'' +
                ", countryCapital='" + countryCapital + '\'' +
                '}';
    }
}
