export class AppareilService{
    appareils= [
      {
        id: 1,
        name: "Machine à laver",
        status: "éteint"
      },
      {
        id: 2,
        name: "Asus VivoBook",
        status: "allumé"
      },
      {
        id: 3,
        name: "Xbox Serie X",
        status: "allumé"
      },
    ]

    getAppareilById(id: number){
        const appareil = this.appareils.find(
            (appareilObject) =>{
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

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