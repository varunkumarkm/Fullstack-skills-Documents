package com.example.employeesystem.to;

import java.io.Serializable;

import org.springframework.data.domain.Pageable;

import lombok.Data;

@Data
public class EmployeeSearchCriteriaTo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Pageable pageable;
	private String name;
	private String email;
	private String designation;
}
