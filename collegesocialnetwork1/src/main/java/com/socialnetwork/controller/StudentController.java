package com.socialnetwork.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialnetwork.entity.OfficeSection;
import com.socialnetwork.entity.Student;
import com.socialnetwork.entity.StudentDTO;
import com.socialnetwork.exception.OfficeSectionNotFoundException;
import com.socialnetwork.exception.StudentNotFoundException;
import com.socialnetwork.service.StudentService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping("student")
	public Student addstudent(@Valid@RequestBody StudentDTO studentDTO){
		Student student = new Student(studentDTO.getStudentId(), studentDTO.getStudentName(), studentDTO.getYear(), studentDTO.getMobileNo(), studentDTO.getBranch(), null, null, null, null);
				return this.studentService.addStudent(student);
	}

	@PutMapping("student")
	public Student updatestudent(@RequestBody StudentDTO studentDTO) throws StudentNotFoundException {
		return this.studentService.updateStudent(studentDTO);
	}
	
	@GetMapping("students")
	public List<Student> getAllStudents(){
		return this.studentService.showStudents();
	}
	
	@GetMapping("student/{id}")
	public Student getStudentsDetailsById(@Valid@PathVariable("id") Integer studentId) throws StudentNotFoundException {
		return this.studentService.getStudentById(studentId);
		
	}
	
	@DeleteMapping("/students/{studentId}")
	public Student deleteStudentById(@PathVariable("studentId") Integer studentId) throws StudentNotFoundException
	{
	    return this.studentService.deleteStudentById(studentId);    
	    
	}

	
}

