package com.example.employeesystem.to;

import java.util.List;

import com.example.employeesystem.entity.Employee;

import lombok.Data;

@Data
public class EmployeeList {

	private List<Employee> employeeList;
}
