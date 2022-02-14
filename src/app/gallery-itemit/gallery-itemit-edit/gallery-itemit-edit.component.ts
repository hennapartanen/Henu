import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { GalleryItemitService } from '../gallery-itemit.service'; 


@Component({ 

  selector: 'app-gallery-itemit-edit', 
  templateUrl: './gallery-itemit-edit.component.html', 
  styleUrls: ['./gallery-itemit-edit.component.css'] 

}) 

export class GalleryItemitEditComponent implements OnInit { 

  id: number; 
  editMode = false; 
  toinenitemForm: FormGroup; 

 

  constructor(private route: ActivatedRoute, 
              private galleryItemitService: GalleryItemitService, 
              private router: Router) { 

  } 

 
  ngOnInit() { 

    this.route.params 
      .subscribe( 
        (params: Params) => { 
          this.id = +params['id']; 
          this.editMode = params['id'] != null; 
          this.initForm(); 

        } 
      ); 
  } 

  onSubmit() { 

    if (this.editMode) { 
      this.galleryItemitService.updateItem(this.id, this.toinenitemForm.value); 
    } else { 
      this.galleryItemitService.addItem(this.toinenitemForm.value); 
    } 
    this.onCancel(); 

  } 

  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 

  } 

 
 

  private initForm() { 
    let itemName = ''; 
    let itemImagePath = ''; 
    let itemDescription = ''; 


    if (this.editMode) { 
      const item = this.galleryItemitService.getItem(this.id); 
      itemName = item.name; 
      itemImagePath = item.imagePath; 
      itemDescription = item.description;


    } 


    this.toinenitemForm = new FormGroup({ 
      'name': new FormControl(itemName, Validators.required), 
      'imagePath': new FormControl(itemImagePath, Validators.required), 
      'description': new FormControl(itemDescription, Validators.required), 

    }); 

  } 

 
} 