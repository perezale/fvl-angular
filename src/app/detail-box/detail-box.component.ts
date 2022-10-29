import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Match } from '../match';
import { Team } from '../team';
import { TeamModalService } from '../team-modal.service';

@Component({
  selector: 'detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.scss'],
})
export class DetailBoxComponent implements OnInit {
  @ViewChild('teamDetail') dialog: ElementRef<HTMLDialogElement>;

  teamData: Team | null = null;
  matchs: Match[] = [];
  flagsEndpoint = 'https://flagcdn.com/h40';
  JSON = JSON;

  constructor(private teamModalService: TeamModalService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.teamModalService.teamData.subscribe((data) => {
      this.teamData = data;

      if (this.teamData) {
        this.orderMatchs();
        this.dialog.nativeElement.showModal();
      }
    });
  }

  orderMatchs() {
    this.matchs = [];
    this.teamData?.matchsLocal?.forEach((data) => this.matchs.push(data));
    this.teamData?.matchsVisitante?.forEach((data) => this.matchs.push(data));
    this.matchs.sort((a, b) => a.id - b.id);
    console.log(this.matchs);
  }

  closeModal() {
    this.dialog?.nativeElement.close();
    this.teamData = null;
  }

  formatCountry() {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(this.teamData?.country ?? 'ar');
  }
}
