package com.socialnetwork.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

public class AdminDTO {
	private Integer userId;
	private String userPassword;
	
	@OneToMany
	List<Student>students=new ArrayList<Student>();
	
	@OneToMany
	List<Staff>staff=new ArrayList<Staff>();
	
	@OneToOne
	private PlacementOfficer placementOfficer;
	
	@OneToOne
	private EventManagement eventManagement;
	 
	@OneToMany
	List<OfficeSection>officeSection=new ArrayList<OfficeSection>();

	public AdminDTO() {
		super();
	}

	public AdminDTO(Integer userId, String userPassword, List<Student> students, List<Staff> staff,
			PlacementOfficer placementOfficer, EventManagement eventManagement, List<OfficeSection> officeSection) {
		super();
		this.userId = userId;
		this.userPassword = userPassword;
		this.students = students;
		this.staff = staff;
		this.placementOfficer = placementOfficer;
		this.eventManagement = eventManagement;
		this.officeSection = officeSection;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public List<Staff> getStaff() {
		return staff;
	}

	public void setStaff(List<Staff> staff) {
		this.staff = staff;
	}

	public PlacementOfficer getPlacementOfficer() {
		return placementOfficer;
	}

	public void setPlacementOfficer(PlacementOfficer placementOfficer) {
		this.placementOfficer = placementOfficer;
	}

	public EventManagement getEventManagement() {
		return eventManagement;
	}

	public void setEventManagement(EventManagement eventManagement) {
		this.eventManagement = eventManagement;
	}

	public List<OfficeSection> getOfficeSection() {
		return officeSection;
	}

	public void setOfficeSection(List<OfficeSection> officeSection) {
		this.officeSection = officeSection;
	}
	
	
	
	
}
