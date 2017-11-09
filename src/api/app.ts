import "reflect-metadata";
import express = require('express');
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import { ListController, SettingsController, SonarrController, TraktTVController } from './controllers';
import { TraktTVService, SonarrService, ListService, SettingsService, SyncRunnerService } from './services';
import { TraktTVRepository, SonarrRepository, DBRepository, SettingsDBRepository } from './repositories';


let container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller).to(ListController).whenTargetNamed('ListController');
container.bind<interfaces.Controller>(TYPE.Controller).to(SettingsController).whenTargetNamed('SettingsController');
container.bind<interfaces.Controller>(TYPE.Controller).to(SonarrController).whenTargetNamed('SonarrController');
container.bind<interfaces.Controller>(TYPE.Controller).to(TraktTVController).whenTargetNamed('TraktTVController');
container.bind<TraktTVService>('TraktTVService').to(TraktTVService);
container.bind<TraktTVRepository>('TraktTVRepository').to(TraktTVRepository);
container.bind<SonarrService>('SonarrService').to(SonarrService);
container.bind<SonarrRepository>('SonarrRepository').to(SonarrRepository);
container.bind<DBRepository>('DBRepository').to(DBRepository);
container.bind<ListService>('ListService').to(ListService);
container.bind<SyncRunnerService>('SyncRunnerService').to(SyncRunnerService);
container.bind<SettingsService>('SettingsService').to(SettingsService);
container.bind<SettingsDBRepository>('SettingsDBRepository').to(SettingsDBRepository);

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
});

let app = server.build();
app.listen(9500);

export { app };
