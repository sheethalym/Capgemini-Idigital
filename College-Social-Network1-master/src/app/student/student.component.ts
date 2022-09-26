import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.studentForm=this.fb.group({
  studentName:['',Validators.required],
  year:['',Validators.required],
  mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],

  branch:['',Validators.required],

   }) 
    
  
  }
  home(){
    this.router.navigate(['table'])
  }
  formSubmit(){
    if(this.studentForm.controls['mobileNo']){
    //  this.studentForm.controls['mobileNo'].length
    // this.studentForm.contains('mobileNo').length
    }
    if(this.studentForm.valid){
   this.http.post<any>('http://localhost:8095/student',this.studentForm.value).subscribe(res=>{
    console.log(res,'register')
    this.router.navigate(['table'])
   })
  
  
  }
  
  }
}
