package com.countryServcie.project.repository;

import com.countryServcie.project.entity.CountryDb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CountryDbRepository extends JpaRepository<CountryDb, Integer> {


}
