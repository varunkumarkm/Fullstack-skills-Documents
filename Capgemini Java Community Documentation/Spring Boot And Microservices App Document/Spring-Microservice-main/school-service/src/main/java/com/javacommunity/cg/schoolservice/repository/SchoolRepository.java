package com.javacommunity.cg.schoolservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javacommunity.cg.schoolservice.entity.School;

@Repository
public interface SchoolRepository extends JpaRepository<School,Integer> {
}
