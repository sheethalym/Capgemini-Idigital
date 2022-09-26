import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OfficeSectionModel } from './officeSectionModel';

@Component({
  selector: 'app-office-section',
  templateUrl: './office-section.component.html',
  styleUrls: ['./office-section.component.css']
})
export class OfficeSectionComponent implements OnInit {
  student:any=[]
  studentobj: OfficeSectionModel = new OfficeSectionModel;
  
  btnUpdateShow:boolean = false;
  
  btnSaveShow:boolean = true;
  constructor(private dialog:MatDialog,private fb:FormBuilder,private http:HttpClient,private router:Router) { }
     studentForm!: FormGroup
    ngOnInit(): void {
      this.getStudent()
      this.studentForm=this.fb.group({
      documentType:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      endDate:['', [Validators.required,this.dateValidator]],
     
     
        }) 
        this.getStudent()
       
       }
    
    
    getStudent(){
      this.http.get<any>('http://localhost:8095/officeSections').subscribe(res=>{
        this.student = res;
      })
    }
    
    dateValidator(f:FormControl){
      
          const today = new Date();
          const dateToCheck = new Date(f.value);
          return (dateToCheck < today) ?
             {msg:"Date should not be past date"}:null
      
      
      
  }
    AddStudent(){
     
      if(this.studentForm.valid){
        this.http.post<any>('http://localhost:8095/officeSection',this.studentForm.value).subscribe(res=>{
          alert("Data Saved")
          this.getStudent();
          this.studentForm.reset();
        })
       
       
       }
  
    }
  
    EditStudent(data:any){
      this.studentobj.officeId = data.officeId;
      this.studentForm.controls['documentType'].setValue(data.documentType);
      this.studentForm.controls['endDate'].setValue(data.endDate);
      this.UpdateShowBtn();
    }
  
    UpdateStudent(){
      this.studentobj.officeId= this.studentobj.officeId,
      this.studentobj.documentType = this.studentForm.value.documentType,
      this.studentobj.endDate = this.studentForm.value.endDate,
      
      this.http.put<any>('http://localhost:8095/officeSection',this.studentobj).subscribe(res=>{
     
        alert("Data Updated");
        this.getStudent();
        this.SaveShowBtn();
      })
  
  
    }
    get f(){  
      return this.studentForm.controls;  
    }
  
    DeleteStudent(data:any){
      this.http.delete<any>(`http://localhost:8095/officeSection/${data.officeId}`).subscribe(res=>{
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
  