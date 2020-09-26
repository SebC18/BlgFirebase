import { Subject } from 'rxjs/Subject';

export class AppareilService{
    
    appareilSubject = new Subject<any[]>();

    private appareils = [
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

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }

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
        this.emitAppareilSubject();
    }

    switchOffOne(index: number){
        this.appareils[index].status = "éteint";
        this.emitAppareilSubject();
    }

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = "allumé";
        }
        this.emitAppareilSubject();
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = "éteint";
        }
        this.emitAppareilSubject();
    }
}