function LosujObrazek() {
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

    const RandomowyIndex = Math.floor(Math.random() * obrazykitsu.length);

    const WybranyObrazek = obrazykitsu[RandomowyIndex];

    document.getElementById('LosowyObraz').src = 'obrazykitsu/' + WybranyObrazek + ".jpg";
}