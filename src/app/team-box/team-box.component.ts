import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Match } from '../match';
import { Team } from '../team';
import { TeamModalService } from '../team-modal.service';

@Component({
  selector: 'detail-box',
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss'],
})
export class TeamBoxComponent implements OnInit {
  box: HTMLDialogElement;
  data: Team | null = null;
  matchs: Match[] = [];
  flagsEndpoint = 'https://flagcdn.com/h20';

  constructor(private teamModalService: TeamModalService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.teamModalService.teamData.subscribe((data) => {
      if (!data) return;

      this.data = data;
      this.orderMatchs();
      this.box.showModal();
    });
  }

  @ViewChild('teamDetail')
  set boxRef(ref: ElementRef<HTMLDialogElement>) {
    this.box = ref.nativeElement;
  }

  orderMatchs() {
    this.data?.matchsLocal?.forEach((data) => this.matchs.push(data));
    this.data?.matchsVisitante?.forEach((data) => this.matchs.push(data));
    this.matchs.sort((a, b) => a.id - b.id);
  }

  closeModal() {
    this.box.close();
    this.data = null;
    this.matchs = [];
  }

  formatCountry() {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(this.data?.country ?? 'ar');
  }
}
