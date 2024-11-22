package com.example.employeesystem.controller.v2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
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
import com.example.employeesystem.to.EmployeeSearchCriteriaTo;

@RestController
@RequestMapping("/api/v2")
public class EmployeeV2Controller {

	@Autowired
	EmployeeService employeeService;

	@PostMapping("/employees")
	@ResponseStatus(HttpStatus.CREATED)
	public void createNewEmployee(@RequestBody Employee employee) {
		employeeService.save(employee);
	}

	@PutMapping("/employees")
	public void updateAllEmployee(@RequestBody EmployeeList employeeList) {
		employeeService.updateEmployees(employeeList.getEmployeeList());
	}

	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return employeeService.getEmployeeList();
	}

	@GetMapping("/employees/{id}")
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

	@GetMapping("/employees/{pageNumber}/{pageSize}")
	public List<Employee> getEmployees(@PathVariable Integer pageNumber, @PathVariable Integer pageSize) {
		Page<Employee> data = employeeService.getEmployeePagination(pageNumber, pageSize, null);
		return data.getContent();
	}

	@GetMapping("/employees/{pageNumber}/{pageSize}/{sort}")
	public List<Employee> getEmployees(@PathVariable Integer pageNumber, @PathVariable Integer pageSize,
			@PathVariable String sort) {
		Page<Employee> data = employeeService.getEmployeePagination(pageNumber, pageSize, sort);
		return data.getContent();
	}

	@PostMapping("/employees/search")
	public List<Employee> getEmployeesPaginated(@RequestBody EmployeeSearchCriteriaTo employeeSearchCriteriaTo) {
		Page<Employee> data = employeeService.getEmployeePaginated(employeeSearchCriteriaTo);
		return data.getContent();
	}

}
