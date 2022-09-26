import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentModel } from './studentModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
student:any=[]
studentobj: StudentModel = new StudentModel;

btnUpdateShow:boolean = false;

btnSaveShow:boolean = true;
constructor(private dialog:MatDialog,private fb:FormBuilder,private http:HttpClient,private router:Router,private snackBar: MatSnackBar,private changeDetectorRefs: ChangeDetectorRef) { }
   studentForm!: FormGroup
  ngOnInit(): void {
    this.getStudent()
    this.studentForm=this.fb.group({
      studentName:['',[Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      year:[''],
      mobileNo:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
     branch:[''],
   
      }) 
      this.getStudent()
     
     }
  
  
  getStudent(){
    this.http.get<any>('http://localhost:8095/students').subscribe(res=>{
      this.student = res;
    })
  }
  
  get f(){  
    return this.studentForm.controls;  
  }
  AddStudent(){
   
    if(this.studentForm.valid){
      this.http.post<any>( 'http://localhost:8095/student',this.studentForm.value).subscribe(res=>{
        alert("Data Saved")
        this.snackBar.open('Student added', 'Undo', {  
          duration: 3000  
        });
        this.getStudent();
        // this.studentForm.reset();
      })
     
     
     }

  }

  EditStudent(data:any){
    this.studentobj.studentId = data.studentId;
    this.studentForm.controls['studentName'].setValue(data.studentName);
    this.studentForm.controls['year'].setValue(data.year);
    this.studentForm.controls['mobileNo'].setValue(data.mobileNo);
    this.studentForm.controls['branch'].setValue(data.branch);
    this.UpdateShowBtn();
  }

  UpdateStudent(){
    this.studentobj.studentId= this.studentobj.studentId,
    this.studentobj.studentName = this.studentForm.value.studentName,
    this.studentobj.year = this.studentForm.value.year,
    this.studentobj.branch = this.studentForm.value.branch,
    this.studentobj.mobileNo = this.studentForm.value.mobileNo,
    
    this.http.put<any>('http://localhost:8095/student',this.studentobj).subscribe(res=>{
   
      alert("Data Updated");
      this.getStudent();
      this.SaveShowBtn();
    })


  }


  DeleteStudent(data:any){
    this.http.delete<any>(`http://localhost:8095/students/${data.studentId}`).subscribe(res=>{
      this.changeDetectorRefs.detectChanges();
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
