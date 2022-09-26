package com.socialnetwork.service;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialnetwork.entity.Student;
import com.socialnetwork.entity.StudentDTO;
import com.socialnetwork.exception.StudentNotFoundException;
import com.socialnetwork.repository.StudentRepository;


@Service
public class StudentImpl implements StudentService {
	
	List<Student> list;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Override
	public Student addStudent(Student student) {
		return this.studentRepo.save(student);
	}
	
	@Override
	public Student updateStudent(StudentDTO studentDTO) throws StudentNotFoundException {
		Optional<Student> studentOpt = this.studentRepo.findById(studentDTO.getStudentId());
		if(studentOpt.isEmpty())
			throw new StudentNotFoundException("Student id does not exist to update. ");
		Student updateStudent = studentOpt.get();
		updateStudent.setStudentName(studentDTO.getStudentName());
		updateStudent.setYear(studentDTO.getYear());
		updateStudent.setMobileNo(studentDTO.getMobileNo());
		updateStudent.setBranch(studentDTO.getBranch());
		return this.studentRepo.save(updateStudent);
		
		
	}
	
	@Override
	public List<Student> showStudents() {
		
		return this.studentRepo.findAll();
	}

	@Override
	public Student getStudentById(@Valid Integer studentId) throws StudentNotFoundException {
		Optional<Student> studentOpt=this.studentRepo.findById(studentId);
		if(studentOpt.isEmpty())
			throw new StudentNotFoundException("Id Not Found ");
		return studentOpt.get();
	}

	@Override
	public Student deleteStudentById(Integer studentId) throws StudentNotFoundException {
		Optional<Student> optstudent = this.studentRepo.findById(studentId);
		if(optstudent.isEmpty())
			throw new StudentNotFoundException("Student Id does not exists to delete.");
		this.studentRepo.deleteById(studentId);
		return optstudent.get();
	}
    	
	

	
}
