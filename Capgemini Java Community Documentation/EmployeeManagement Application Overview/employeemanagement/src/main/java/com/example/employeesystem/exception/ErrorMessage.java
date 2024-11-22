package com.example.employeesystem.exception;

import java.util.Date;

import lombok.Data;

@Data
public class ErrorMessage {

	private int code;
	private Date timestamp;
	private String message;
	private String description;

	public ErrorMessage(int code, Date timestamp, String message, String description) {
		this.code = code;
		this.timestamp = timestamp;
		this.message = message;
		this.description = description;
	}
}
