class PierwszyTryb {
    constructor(obrazykitsu) {
    this.ListaObrazow = [...obrazykitsu];
    this.historiadislike = [];
    this.ostatnieZdjecie;

    this.przyc_start = document.getElementById('start')
    this.przyc_dislike = document.getElementById('dislike');
    this.przyc_like = document.getElementById('like');
    this.dislikowaneObrazy = document.getElementById('Dislikowane_Obrazy');
    
    this.LosObr = document.getElementById('LosowyObraz');
    
    
    
    this.init();
    
    }
    init() {
        this.przyc_start.addEventListener('click', () => this.ZacznijGre());
        this.przyc_dislike.addEventListener('click', () => this.Dislikuj());
        this.przyc_like.addEventListener('click', () => this.Likuj());

        this.LosObr.onload = () => {
            this.przyc_dislike.style.display = 'block';
            this.przyc_like.style.display = 'block';
            this.przyc_start.style.display = 'none';
        };


    }
    ZacznijGre() {

        this.RandomowyIndex = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[this.RandomowyIndex] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(this.RandomowyIndex, 1);
    }
    Dislikuj() {
        if (this.ListaObrazow.length === 0)
        {
            this.przyc_like.style.display = 'none';
            this.przyc_dislike.style.display = 'none';
            this.LosObr.style.display ='none';
            return;
        }
        let NowyIndeks;
        
        NowyIndeks = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(NowyIndeks, 1)[0];

        console.log("Wylosowano:", this.ostatnieZdjecie);
        console.log("Pozostało w puli:", this.ListaObrazow.length);
        
    }
    Likuj() {
        if (this.ListaObrazow.length === 0)
        {
            this.przyc_like.style.display = 'none';
            this.przyc_dislike.style.display = 'none';
            this.LosObr.style.display ='none';
            return;
        }
        let NowyIndeks;
        
        NowyIndeks = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(NowyIndeks, 1)[0];

        console.log("Wylosowano:", this.ostatnieZdjecie);
        console.log("Pozostało w puli:", this.ListaObrazow.length);
        
    }

}

document.addEventListener('DOMContentLoaded', () =>{
     const obrazykitsu = [
        'kitsu1',
        'kitsu2',
        'kitsu3',
        'kitsu4',
        'kitsu5',
        'kitsu6',
        'kitsu7',
        'kitsu8',
        'kitsu9',
        'kitsu10',
        'kitsu11',
        'kitsu12',
        'kitsu13',
        'kitsu14',
        'kitsu15',
        'kitsu16',
        'kitsu17',
        'kitsu18'
    ];
    const startgry = new PierwszyTryb(obrazykitsu);
});