package com.socialnetwork.service;
import java.util.List;

import javax.validation.Valid;

import com.socialnetwork.entity.OfficeSection;
import com.socialnetwork.entity.Student;
import com.socialnetwork.entity.StudentDTO;
import com.socialnetwork.exception.OfficeSectionNotFoundException;
import com.socialnetwork.exception.StudentNotFoundException;


public interface StudentService {

	public Student addStudent(Student student);

	public Student updateStudent(StudentDTO studentDTO)throws StudentNotFoundException;

	public List<Student> showStudents();

	public Student getStudentById(@Valid Integer StudentId) throws StudentNotFoundException;

	public Student deleteStudentById(Integer studentId) throws StudentNotFoundException;
	

	





}



