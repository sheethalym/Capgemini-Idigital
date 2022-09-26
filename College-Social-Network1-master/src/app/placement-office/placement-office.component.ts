import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentModel } from '../table/studentModel';
import { PlacementOfficeModel } from './placementOfficeModel';

@Component({
  selector: 'app-placement-office',
  templateUrl: './placement-office.component.html',
  styleUrls: ['./placement-office.component.css']
})
export class PlacementOfficeComponent implements OnInit {
  student:any=[]
  studentobj: PlacementOfficeModel = new PlacementOfficeModel;
  
  btnUpdateShow:boolean = false;
  
  btnSaveShow:boolean = true;
  constructor(private dialog:MatDialog,private fb:FormBuilder,private http:HttpClient,private router:Router) { }
     studentForm!: FormGroup
    ngOnInit(): void {
      this.getStudent()
      this.studentForm=this.fb.group({
      requirements:['',Validators.required],
      placedStudent:['',Validators.required]
     
        }) 
        this.getStudent()
       
       }
    
    
    getStudent(){
      this.http.get<any>('http://localhost:8095/v1/placementofficers').subscribe(res=>{
        this.student = res;
      })
    }
    
    
    AddStudent(){
     
      if(this.studentForm.valid){
        this.http.post<any>('http://localhost:8095/v1/placementOfficer',this.studentForm.value).subscribe(res=>{
          alert("Data Saved")
          this.getStudent();
          this.studentForm.reset();
        })
       
       
       }
  
    }
  
    EditStudent(data:any){
      this.studentobj.studentId = data.studentId;
      this.studentForm.controls['requirements'].setValue(data.requirements);
      this.studentForm.controls['placeStudent'].setValue(data.placeStudent);
      this.UpdateShowBtn();
    }
  
    UpdateStudent(){
      this.studentobj.studentId= this.studentobj.studentId,
      this.studentobj.requirements = this.studentForm.value.requirements,
      this.studentobj.placeStudent = this.studentForm.value.placeStudent,
      this.http.put<any>('http://localhost:8095/v1/placementOfficer',this.studentobj).subscribe(res=>{
     
        alert("Data Updated");
        this.getStudent();
        this.SaveShowBtn();
      })
  
  
    }
    get f(){  
      return this.studentForm.controls;  
    }
  
    DeleteStudent(data:any){
      this.http.delete<any>( `http://localhost:8095/v1/placementOfficer/${data.studentId}`).subscribe(res=>{
        alert("Record Deleted");
        this.getStudent();
      })
  
    }
  
    UpdateShowBtn()
    {
      this.btnUpdateShow = true;
      this.btnSaveShow = false;
    }
    SaveShowBtn()
    {
      this.btnUpdateShow = false;
      this.btnSaveShow = true;
    }
  
  }