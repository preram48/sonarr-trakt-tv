import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ListDialogComponent } from "../list-dialog/list-dialog.component";
import { ListService, SonarrService } from "../shared/services";
import { ListItem } from '../shared/models';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [ListService, SonarrService]
})
export class ListComponent implements OnInit {
  public list: Array<ListItem>;

  constructor(
    private listService: ListService,
    private sonarrService: SonarrService,
    private dialog: MatDialog
  ) {
    this.list = new Array<ListItem>();
  }

  ngOnInit() {
    this.listService.fetchList().subscribe(list => (this.list = list));
  }

  addList() {
    this.openDialog(new ListItem());
  }

  deleteList(list) {
    if (list.id) {
      this.listService.deleteList(list.id).subscribe(() => {});
    }

    this.list.splice(this.list.findIndex(element => element === list), 1);
  }

  saveList(item, $event) {
    item.enabled = $event.checked;
    this.listService.updateList(item.id, item).subscribe(() => {});
  }

  openDialog(listItem): void {
    let itemCopy = {};
    Object.assign(itemCopy, listItem);
    let dialogRef = this.dialog.open(ListDialogComponent, {
      data: itemCopy
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listService.fetchList().subscribe(list => (this.list = list));
    });
  }
}
