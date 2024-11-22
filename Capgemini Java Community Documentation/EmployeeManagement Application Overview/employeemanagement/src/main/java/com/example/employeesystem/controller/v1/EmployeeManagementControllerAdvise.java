package com.example.employeesystem.controller.v1;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.example.employeesystem.exception.EmployeeNotFound;
import com.example.employeesystem.exception.ErrorMessage;

@RestControllerAdvice
public class EmployeeManagementControllerAdvise {

	@ExceptionHandler(value = { EmployeeNotFound.class })
	public ResponseEntity<ErrorMessage> employeeNotFoundException(EmployeeNotFound ex, WebRequest request) {
		ErrorMessage message = new ErrorMessage(HttpStatus.NOT_FOUND.value(), new Date(), ex.getMessage(),
				request.getSessionId());

		return new ResponseEntity<ErrorMessage>(message, HttpStatus.NOT_FOUND);
	}
}
