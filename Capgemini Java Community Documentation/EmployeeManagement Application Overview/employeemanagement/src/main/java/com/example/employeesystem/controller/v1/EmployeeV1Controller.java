package com.example.employeesystem.controller.v1;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.employeesystem.entity.Employee;
import com.example.employeesystem.exception.EmployeeNotFound;
import com.example.employeesystem.service.EmployeeService;
import com.example.employeesystem.to.EmployeeList;

@RestController
@RequestMapping("/api/v1")
public class EmployeeV1Controller {

	@Autowired
	EmployeeService employeeService;

	@PostMapping("/createNewEmployee")
	@ResponseStatus(HttpStatus.CREATED)
	public Employee createNewEmployee(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}

	@PutMapping("/bulkupdateemployees")
	public void updateAllEmployee(@RequestBody EmployeeList employeeList) {
		employeeService.updateEmployees(employeeList.getEmployeeList());
	}

	@GetMapping(value="/getAllEmployees", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> getAllEmployees() {
		return employeeService.getEmployeeList();
	}

	@GetMapping("/employee/{id}")
	public Employee getEmployee(@PathVariable Integer id) {
		return employeeService.getEmployee(id);
	}

	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable Integer id, @RequestBody Employee employeeToUpdate)
			throws EmployeeNotFound {
		return employeeService.updateEmployee(id, employeeToUpdate);
	}

	@DeleteMapping("/employees/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteEmployeeById(@PathVariable Integer id) {
		employeeService.delete(id);
	}

}
