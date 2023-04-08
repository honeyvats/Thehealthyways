import { Component } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import{faTwitter} from'@fortawesome/free-brands-svg-icons'
import{faInstagram} from'@fortawesome/free-brands-svg-icons'
import{faFacebook} from'@fortawesome/free-brands-svg-icons'
import{faLocation} from'@fortawesome/free-solid-svg-icons'
import{faPhone} from'@fortawesome/free-solid-svg-icons'
import{faEnvelope} from'@fortawesome/free-solid-svg-icons'
@Component({                                                
  selector: 'app-footer',                                                
  templateUrl: './footer.component.html',                                                
  styleUrls: ['./footer.component.css']                                                
})                                                
export class FooterComponent {
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLocation = faLocation;
  faPhone = faPhone;
  faEnvelope = faEnvelope
  
}
