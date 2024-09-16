import { Component, inject, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _snackBar = inject(MatSnackBar);
  phone = "+491794099346"
  email = "maxime.grazzini@gmail.com"
  linkedin = "https://www.linkedin.com/in/m-grazzini/"

  constructor(private matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(`linkedin_icon`,
      domSanitizer.bypassSecurityTrustResourceUrl(`..//src//assets//linkedin_icon_100.svg`))
    this.matIconRegistry.addSvgIcon(`github_icon`,
      domSanitizer.bypassSecurityTrustResourceUrl(`..//src//assets//github_icon_100.svg`))
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, "Ok");
  }

}
