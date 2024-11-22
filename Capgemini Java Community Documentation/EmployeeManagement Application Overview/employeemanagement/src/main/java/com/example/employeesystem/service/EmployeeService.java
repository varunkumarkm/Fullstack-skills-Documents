package com.example.employeesystem.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.employeesystem.entity.Employee;
import com.example.employeesystem.exception.EmployeeNotFound;
import com.example.employeesystem.to.EmployeeSearchCriteriaTo;

public interface EmployeeService {

	Employee save(Employee employee);
	
	List<Employee> getEmployeeList();
	
	Employee getEmployee(Integer id);
	
	Employee updateEmployee(Integer id, Employee employeeToUpdate) throws EmployeeNotFound;
	
	void updateEmployees(List<Employee> employeeListToUpdate);
	
	void delete(Integer id);

	Page<Employee> getEmployeePagination(Integer pageNumber, Integer pageSize, String sort);
	
	Page<Employee> getEmployeePaginated(EmployeeSearchCriteriaTo employeeSearchCriteriaTo);

	
}
