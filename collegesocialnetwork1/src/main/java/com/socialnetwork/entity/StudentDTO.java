package com.socialnetwork.entity;
import java.util.ArrayList;

public class StudentDTO {

	
	private Integer studentId;
	private String studentName;
	private Integer year;
	private Long mobileNo;
	private String branch;
	
	
	public StudentDTO() {
		super();
	}


	public StudentDTO(Integer studentId, String studentName, Integer year, Long mobileNo, String branch) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.year = year;
		this.mobileNo = mobileNo;
		this.branch = branch;
	}


	public Integer getStudentId() {
		return studentId;
	}


	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}


	public String getStudentName() {
		return studentName;
	}


	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}


	public Integer getYear() {
		return year;
	}


	public void setYear(Integer year) {
		this.year = year;
	}


	public Long getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getBranch() {
		return branch;
	}


	public void setBranch(String branch) {
		this.branch = branch;
	}
	
}
