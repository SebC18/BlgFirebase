export class AppareilService{
    appareils= [
        {
          name: "Machine à laver",
          status: "éteint"
      },
      {
        name: "Asus VivoBook",
        status: "allumé"
      },
      {
        name: "Xbox Serie X",
        status: "allumé"
      },
    ]
    switchOnOne(index: number){
        this.appareils[index].status = "allumé";
    }

    switchOffOne(index: number){
        this.appareils[index].status = "éteint";
    }

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = "allumé";
        }
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = "éteint";
        }
    }
}