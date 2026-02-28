class FirstGameType {
    #imagePool;
    #dislikeHistory = [];
    #likedHistory = [];
    #currentImage;
    #folderPath = 'obrazykitsu/';
    constructor(TableName) {
    
    this.#imagePool = [...TableName];
    
    this.elements = {
        btnStart: document.getElementById('start'),
        btnDislike: document.getElementById('dislike'),
        btnLike: document.getElementById('like'),
        containerDislike: document.getElementById('Dislikowane_Obrazy'),
        containerLike: document.getElementById('Likowane_Obrazy'),
        RandomImage: document.getElementById('LosowyObraz')
    };

    this.init();
    
    }
    init() {
        this.elements.btnStart.style.display = 'block';

        this.elements.btnStart.addEventListener('click', () => this.ShowNextImage());
        this.elements.btnDislike.addEventListener('click', () => this.DisOrLike(dislike));
        this.elements.btnLike.addEventListener('click', () => this.DisOrLike(like));

        this.elements.RandomImage.onload = () => {
            this.elements.btnDislike.style.display = 'block';
            this.elements.btnLike.style.display = 'block';
            this.elements.btnStart.style.display = 'none';
        };


    }

    DisOrLike(type) {
        const fullPath = this.#folderPath + this.#currentImage +".jpg";

        if (type === like) {
            this.#likedHistory.push(fullPath)
            console.log('Liked');
        } else if (type === dislike)
        {
            this.#dislikeHistory.push(fullPath);
            console.log('Disliked');
        }

        if (this.#imagePool.length === 0) {
            this.Results();
        } else {
            this.ShowNextImage();
        }
        
    }

    ShowNextImage() {
        const randomindex = Math.floor(Math.random() * this.#imagePool.length);

        this.#currentImage = this.#imagePool.splice(randomindex, 1)[0];
        
        this.elements.RandomImage.src = this.#folderPath + this.#currentImage + ".jpg";


        console.log("Random Image:", this.#currentImage);
        console.log("Left:", this.#imagePool.length);

    }
    
    
    
    Results(){
        this.elements.btnLike.style.display = 'none';
        this.elements.btnDislike.style.display = 'none';
        this.elements.RandomImage.style.display ='none';
        this.elements.containerDislike.style.display = 'block';
        this.elements.containerLike.style.display = 'block'
        for (let i = 0; i < this.#dislikeHistory.length; i++) {
            const newImage = document.createElement('img');
            console.log(this.#dislikeHistory[i]);
            console.log(i);
            newImage.src = this.#dislikeHistory[i];
            newImage.style.width= '100px';
            newImage.style.height = 'auto';
            this.elements.containerDislike.appendChild(newImage);
            console.log("dislike works");
        }
        for (let i = 0; i < this.#likedHistory.length; i++) {
            const newImage = document.createElement('img');
            console.log(this.#likedHistory[i]);
            console.log(i);
            newImage.src = this.#likedHistory[i];
            newImage.style.width= '100px';
            newImage.style.height = 'auto';
            this.elements.containerLike.appendChild(newImage);
            console.log("like works");
        }
    }


}
class SecondGameType {
    
    #imagePool;
    #ranking = [];
    #WinnersOfCurrentRound = [];
    #currentMatch = [];
    #Round = 1;
    #basePath = 'obrazykitsu/';

    constructor(TableName)
    {
        this.#imagePool = [...TableName];
        this.elements = {
            btnStart: document.getElementById('start2'),
            buttons: [document.getElementById('przycwybierz1'), document.getElementById('przycwybierz2')],
            images: [document.getElementById('LosowyObraz1'), document.getElementById('LosowyObraz2')],
            containerRanking: document.getElementById('Ranking'),
            text: document.getElementById('tekst2tryb')
        }

        this.init();
    
    }
    init() {
        this.elements.btnStart.style.display = 'block';
        this.elements.btnStart.addEventListener('click', () => this.ShowNextMatch());
        this.elements.buttons.forEach((btn, index) => {
            btn.onclick = () => this.Selection(index);
        });

        this.elements.images[1].onload = () => {
            this.elements.btnStart.style.display = 'none';
            this.elements.text.style.display = 'block';
            this.elements.buttons.forEach(btn => btn.style.display = 'inline-block');
        };


    }

    Selection(selectedImage) {
        const winner = this.#currentMatch[selectedImage];
        const loser = this.#currentMatch[selectedImage === 0 ? 1 : 0];

        this.#WinnersOfCurrentRound.push(winner);
        this.#ranking.push({ name: loser, info: ('Odpadł w rundzie: ' + this.#Round)})
        console.log('Works, ', this.#ranking);

        if (this.#imagePool.length >= 2) {
            this.ShowNextMatch();
        } else {
            this.EndRound();
        }
    }

    ShowNextMatch() {
        console.log("Start");
        this.#currentMatch = [this.#drawFromPool(), this.#drawFromPool()];

        this.#currentMatch.forEach((imgName, i) =>{
            this.elements.images[i].src = this.#basePath + imgName + ".jpg";
            console.log(this.#currentMatch[i]);
        });
    }

    #drawFromPool() {
        console.log("Draws From Pool");
        const index = Math.floor(Math.random() * this.#imagePool.length);
        return this.#imagePool.splice(index, 1)[0];
    }

    EndRound() {
        const nextPool = [...this.#WinnersOfCurrentRound, ...this.#imagePool];

        if (nextPool.length > 1) {
            alert("Koniec rundy ", this.#Round);
            this.#imagePool = nextPool;
            this.#WinnersOfCurrentRound = [];
            this.#Round++;
            this.ShowNextMatch();
        } else {
            this.#ranking.push({ name: nextPool[0], info: "Zwycięzca" });
            console.log('Works, ', this.#ranking);
            this.ShowResults();
        }
    }

    ShowResults() {
        console.log('Works, ', this.#ranking);
        Object.values(this.elements).forEach(e1 => {
            if (e1 instanceof HTMLElement) e1.style.display = 'none';
            if (Array.isArray(e1)) e1.forEach(e => e.style.display = 'none');
        });

        this.elements.containerRanking.style.display = 'block';

        [...this.#ranking].reverse().forEach((item, i) => {
            console.log('Works, ', this.#ranking);
            const ImagesResults = document.createElement('img');
            ImagesResults.src = (this.#basePath + item.name + ".jpg");
            ImagesResults.style.width= '100px';
            ImagesResults.style.height = 'auto';
            let rankingText = document.createElement('p');
            rankingText.innerText = "Zajął miejsce: " + (i + 1) + " | " + item.info;
            this.elements.containerRanking.appendChild(ImagesResults);
            this.elements.containerRanking.appendChild(rankingText);
        })
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
    
    BtnType1 = document.getElementById('Tryb1');
    BtnType2 = document.getElementById('Tryb2');
    Types = document.getElementById('Tryby');
    BtnType1.addEventListener('click', () => {
        Types.style.display='none';
        const Start1 = new FirstGameType(obrazykitsu);
    });
    BtnType2.addEventListener('click', () => {
        Types.style.display='none';
        const Start2 = new SecondGameType(obrazykitsu);
    });
    
});