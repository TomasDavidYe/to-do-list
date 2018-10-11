import { Pipe, PipeTransform} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'displayHtml'})
export class DisplayHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(value: string, highlight: boolean) {
        if(highlight) value = "<span style=\"color:red\">" +value + "</span>";
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}