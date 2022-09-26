import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
updateForm!:FormGroup
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA)public editData:any,private http:HttpClient,
  private dialogRef:MatDialogRef<EditComponent>) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
   studentName:['',Validators.required],
   year:['',Validators.required],
   mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
 
   branch:['',Validators.required],
 
    }) 
    if(this.editData){
      // this.updateForm.controls['studentId'].setValue(this.editData.studentId);
      this.updateForm.controls['studentName'].setValue(this.editData.studentName);
      this.updateForm.controls['mobileNo'].setValue(this.editData.mobileNo);
      this.updateForm.controls['branch'].setValue(this.editData.branch);
      this.updateForm.controls['year'].setValue(this.editData.year);

}
     
   
   }
   formSubmit(){
    const body={
      studentId:this.editData.studentId,
      studentName:this.updateForm.value.studentName,
      mobileNo:this.updateForm.value.mobileNo,
      branch:this.updateForm.value.branch,
      year:this.updateForm.value.year,
    }
    if(this.editData.mobileNo.toString().length <10){
      window.alert('Mobile No should contain 10 digit');
      return;
    }
    this.http.put<any>('http://localhost:8095/student',body).subscribe(res =>{
      // this.updateForm.reset()
      this.dialogRef.close()
    })
   }

}
