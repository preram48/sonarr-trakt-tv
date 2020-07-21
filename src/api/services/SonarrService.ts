import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import { SonarrRepository } from '../repositories';

@injectable()
export class SonarrService {

    constructor(@inject("SonarrRepository") private sonarrRepository: SonarrRepository) { }

    public async upsetSeasons(series: Array<any>, settings) {
        //console.log('\n'.repeat(2));
        //console.log('-'.repeat(50));
        //console.log("---------------- Grabbing Seasons ----------------");
        let listOfSeries = new Array<any>();   // list of shows to add or update
        let upd= 0;
        //series here is a list (an array) of shows exported from trackt i think
        //series contain the season's show as an entry with empty attributes


        // ******** constructing listOfSeries to add or update ********
        series.forEach(element => {   //element here is a show
            // the goal of the this loop is to construct a list of shows to add or update
            // based on parsed elements from series (supposdly grabbed from Trakt)
            let elementInList = listOfSeries.find(s => s.tvdbId === element.tvdbId);
            //listOfSeries starts empty and fills up with elementInList
            //adding new element if show is NOT in list
            //and changing seasons for elements that are already in the list
            if (elementInList) {// if the element is already in the list, update the season to monitored
                elementInList.seasons.push({ seasonNumber: element.seasonNumber, monitored:true});
                //console.log("Grabbed: ", element.seasonNumber);
            } else {
                //show not in listOfSeries
                //"add options" for the SHOW to add

                listOfSeries.push({
                    tvdbId: element.tvdbId,
                    title: element.title,
                    titleSlug: element.titleSlug,
                    monitored: true,
                    seasonFolder: true,
                    qualityProfileId: settings.profile,
                    seasons: [{
                        seasonNumber: element.seasonNumber,
                        monitored: true
                    }],
                    path: `${settings.folder}${element.title}`,
                    addOptions:{
                      ignoreEpisodesWithFiles:false,
                      ignoreEpisodesWithoutFiles:false,
                      searchForMissingEpisodes:true,
                    }
                });
                //console.log("Grabbed the season: ", element.seasonNumber);
            }
        });
        //console.log(listOfSeries);

        let currentSeries = await this.sonarrRepository.findAllSeries(); //list of series currently in sonarr's library
        listOfSeries = listOfSeries.map(element => {   // for each show in list of series
            let showInSonarr = currentSeries.find(series => series.tvdbId === element.tvdbId); //checking if show is in sonarr
            if (showInSonarr) {
                //console.log("Show already in Sonarr");
                for (let i of element.seasons){
                      let index=showInSonarr.seasons.indexOf(showInSonarr.seasons.find(x => (x.seasonNumber===i.seasonNumber)));
                      //console.log("index: ", index)
                      if(showInSonarr.seasons[index].monitored===false){
                          showInSonarr.seasons[index].monitored=true;
                          console.log("Added Season: ", i.seasonNumber, " For the show: ", element.title);
                          upd=1;                //update flag used to trigger search missing afterwards
                      }
                }
                return showInSonarr; // there must be an easier way to do this

            } else {    //show not in sonarr's library
                return element;
            }

        });


        for (let series of listOfSeries) {
            if (!series.id) {
                let results = await this.sonarrRepository.searchSeries(series.title);
                if (results && results.length > 0) {
                    let searchResult = results.find(s => s.tvdbId === series.tvdbId);
                    for (let season of searchResult.seasons) {
                        let doesSeasonExist = series.seasons.find(x => x.seasonNumber === season.seasonNumber);
                        if (!doesSeasonExist) {
                            season.monitored = false;
                            series.seasons.push(season);
                        }
                    }
                }
            }
        }



        for (let series of listOfSeries) {
            if (series.id) {
                await this.updateSeasons(series);
            } else {
                await this.createSeasons(series);
            }
        }

        //console.log("update = ", upd);
        //search for missing episodes is not triggered automatically when adding seasons
        if(upd===1){
                  try {
                    await this.sonarrRepository.searchMissing();
                    console.log("-".repeat(50),"\n");
                  } catch (error) {
                      console.log("Failed code 1");
                  }
        }
    }

    public async updateSeasons(show) {
        //console.log("--- Updating the show (adding seasons): ", show.title);
        //console.log("------ Seasons: ",show.seasons);
        //console.log(show);
        try {
            await this.sonarrRepository.updateSeries(show);
        } catch (error) {
            console.log(`Failed to add ${show.title}: ${JSON.stringify(error)}`);
        }

        return show;
    }

    public async createSeasons(show) {
        console.log("--- Adding ", show.title, "  to Sonarr ---");
        //console.log("------ Seasons: ",show.seasons);
        try {
            await this.sonarrRepository.createSeries(show);
        } catch (error) {
            console.log(`Failed to add ${show.title}: ${JSON.stringify(error)}`);
        }

        return show;
    }

    public async upsetShows(series: Array<any>, settings) {
        //console.log('\n'.repeat(3));
        //console.log("---------------- Grabbing Shows ----------------");
        let currentShows = await this.sonarrRepository.findAllSeries();
        //console.log("List of Current Shows :", currentShows);
        let upd=0;


        //series is the list (an Array) of shows to add //i think series is an export of trakt
        for (let show of series) {
            //console.log("\n****     ",show.title,"   *****");
            //showsInSonarr is a list of the shows already in sonarr's library
            let showInSonarr = currentShows.find(series => series.tvdbId === show.ids.tvdb);


            if (showInSonarr){
              //console.log("--- Show already in Sonarr's Library");
              showInSonarr.monitored=true;
              showInSonarr.seasons.map((s)=>{
                if (s.seasonNumber!=0){  //exclude specials
                  if(s.monitored===false){
                      s.monitored=true;
                      console.log("Added Season: ", s.seasonNumber, " For the show: ", showInSonarr.title);
                      upd=1;
                  }
                }
              });
              await this.updateSeasons(showInSonarr);
              //console.log(showInSonarr.seasons,
                //'\n------------------------------------------------------');
            }
            else {
                //console.log("Show not in sonarr list", show.title, show.ids.tvdb);
                //online lookup of show.title in a list of series stored in results
                let results = await this.sonarrRepository.searchSeries(show.title);
                if (results && results.length > 0) { //if lookup is not empty
                    let firstShow = results.find(s => s.tvdbId === show.ids.tvdb);
                    //confirming show by matching ids , return "firstShow" , first show is a series

                    //--------------------------------------
                    //------------add options------------------
                    //Set all seasons in firstshow to monitored
                    firstShow.seasons.map((s)=>{
                        if(s.seasonNumber!=0) // exclude "0" spectials
                            s.monitored = true;
                    });

                    Object.assign(firstShow, {
                        qualityProfileId: settings.profile,
                        path: `${settings.folder}${firstShow.title}`,
                        seasonFolder: true,
                        monitored:true,
                        addOptions:{
                          ignoreEpisodesWithFiles:false,
                          ignoreEpisodesWithoutFiles:false,
                          searchForMissingEpisodes:true,
                        }
                    });
                    await this.createSeasons(firstShow);
                }
            }
        }
        if(upd===1){

              try {
                await this.sonarrRepository.searchMissing();
                console.log("-".repeat(50),"\n");
              } catch (error) {
                  console.log("Failed Code 2");
              }

        }
    }

    public async findPaths() {
        return await this.sonarrRepository.findPaths();
    }

    public async findProfiles(): Promise<Array<any>> {
        return await this.sonarrRepository.findProfiles();
    }
}
