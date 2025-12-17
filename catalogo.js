// ======================================== 
// CARICAMENTO DATI DAL JSON
// ======================================== 
let imgData = {};

// ======================================== 
// DATI DELLE CARTE - VERSIONE PRINCIPALE
// ======================================== 
const cardData = [
    {"nome": "Archer Queen", "descrizione": "Una regina arciera leggendaria", "abilita": "Attacco a lungo raggio", "rarità": "Eroe", "tipo": "Aerea", "danno": "337", "elisir": "5", "categoria": "Truppa", "nomeFile": "archer-queen"},
    {"nome": "Archers", "descrizione": "Unità di arcieri veloci", "abilita": "Attacco veloce", "rarità": "Comune", "tipo": "Terra", "danno": "96", "elisir": "3", "categoria": "Truppa", "evolved": {"nome": "Archers Evolved", "img": "archers-ev1"}, "nomeFile": "archers"},
    {"nome": "Arrows", "descrizione": "Incantesimo di frecce", "abilita": "Danni area", "rarità": "Comune", "tipo": "Incantesimo", "danno": "48", "elisir": "3", "categoria": "Incantesimo", "nomeFile": "arrows"},
    {"nome": "Baby Dragon", "descrizione": "Piccolo drago volante", "abilita": "Volo", "rarità": "Epica", "tipo": "Aerea", "danno": "133", "elisir": "4", "categoria": "Truppa", "nomeFile": "baby-dragon"},
    {"nome": "Balloon", "descrizione": "Mongolfiera esplosiva", "abilita": "Volo", "rarità": "Epica", "tipo": "Aerea", "danno": "432", "elisir": "5", "categoria": "Truppa", "nomeFile": "balloon"},
    {"nome": "Bandit", "descrizione": "Ladra veloce e scattante", "abilita": "Velocità", "rarità": "Leggendaria", "tipo": "Terra", "danno": "160", "elisir": "3", "categoria": "Truppa", "nomeFile": "bandit"},
    {"nome": "Barbarian Barrel", "descrizione": "Botte di barbari", "abilita": "Evocazione", "rarità": "Epica", "tipo": "Incantesimo", "danno": "156", "elisir": "2", "categoria": "Incantesimo", "nomeFile": "barbarian-barrel"},
    {"nome": "Barbarian Hut", "descrizione": "Capanna di barbari", "abilita": "Evocazione continua", "rarità": "Rara", "tipo": "Edificio", "danno": "0", "elisir": "6", "categoria": "Edificio", "nomeFile": "barbarian-hut"},
    {"nome": "Barbarians", "descrizione": "Guerrieri barbari potenti", "abilita": "Carica", "rarità": "Comune", "tipo": "Terra", "danno": "140", "elisir": "5", "categoria": "Truppa", "evolved": {"nome": "Barbarians Evolved", "img": "barbarians-ev1"}, "nomeFile": "barbarians"},
    {"nome": "Bats", "descrizione": "Stormo di pipistrelli", "abilita": "Volo veloce", "rarità": "Comune", "tipo": "Aerea", "danno": "87", "elisir": "2", "categoria": "Truppa", "evolved": {"nome": "Bats Evolved", "img": "bats-ev1"}, "nomeFile": "bats"},
    {"nome": "Battle Healer", "descrizione": "Guerriera curatrice", "abilita": "Cura alleati", "rarità": "Rara", "tipo": "Terra", "danno": "115", "elisir": "4", "categoria": "Truppa", "nomeFile": "battle-healer"},
    {"nome": "Battle Ram", "descrizione": "Ariete da battaglia", "abilita": "Carica distruttiva", "rarità": "Rara", "tipo": "Terra", "danno": "262", "elisir": "4", "categoria": "Truppa", "nomeFile": "battle-ram"},
    {"nome": "Bomb Tower", "descrizione": "Torre bomba", "abilita": "Esplosione", "rarità": "Rara", "tipo": "Edificio", "danno": "250", "elisir": "4", "categoria": "Edificio", "nomeFile": "bomb-tower"},
    {"nome": "Bomber", "descrizione": "Bombarolo", "abilita": "Danni area", "rarità": "Comune", "tipo": "Terra", "danno": "88", "elisir": "2", "categoria": "Truppa", "nomeFile": "bomber"},
    {"nome": "Bowler", "descrizione": "Lanciatore di massi", "abilita": "Danni area", "rarità": "Epica", "tipo": "Terra", "danno": "260", "elisir": "5", "categoria": "Truppa", "nomeFile": "bowler"},
    {"nome": "Cannon Cart", "descrizione": "Carrello cannone", "abilita": "Attacco mobile", "rarità": "Epica", "tipo": "Terra", "danno": "155", "elisir": "5", "categoria": "Truppa", "nomeFile": "cannon-cart"},
    {"nome": "Cannon", "descrizione": "Cannone difensivo", "abilita": "Attacco base", "rarità": "Comune", "tipo": "Edificio", "danno": "140", "elisir": "3", "categoria": "Edificio", "nomeFile": "cannon"},
    {"nome": "Clone", "descrizione": "Incantesimo clone", "abilita": "Clonazione unità", "rarità": "Epica", "tipo": "Incantesimo", "danno": "0", "elisir": "3", "categoria": "Incantesimo", "nomeFile": "clone"},
    {"nome": "Dark Prince", "descrizione": "Principe oscuro", "abilita": "Scudo protettivo", "rarità": "Epica", "tipo": "Terra", "danno": "345", "elisir": "4", "categoria": "Truppa", "nomeFile": "dark-prince"},
    {"nome": "Dart Goblin", "descrizione": "Goblin freccette", "abilita": "Velocità estrema", "rarità": "Rara", "tipo": "Terra", "danno": "150", "elisir": "3", "categoria": "Truppa", "nomeFile": "dart-goblin"},
    {"nome": "Earthquake", "descrizione": "Incantesimo terremoto", "abilita": "Danni area ground", "rarità": "Rara", "tipo": "Incantesimo", "danno": "0", "elisir": "3", "categoria": "Incantesimo", "nomeFile": "earthquake"},
    {"nome": "Electro Dragon", "descrizione": "Drago elettrico", "abilita": "Paralisi e volo", "rarità": "Epica", "tipo": "Aerea", "danno": "245", "elisir": "5", "categoria": "Truppa", "nomeFile": "electro-dragon"},
    {"nome": "Electro Giant", "descrizione": "Gigante elettrico", "abilita": "Paralisi terra", "rarità": "Epica", "tipo": "Terra", "danno": "317", "elisir": "7", "categoria": "Truppa", "nomeFile": "electro-giant"},
    {"nome": "Electro Spirit", "descrizione": "Spirito elettrico", "abilita": "Paralisi volante", "rarità": "Comune", "tipo": "Aerea", "danno": "84", "elisir": "1", "categoria": "Truppa", "nomeFile": "electro-spirit"},
    {"nome": "Electro Wizard", "descrizione": "Mago elettrico leggendario", "abilita": "Paralisi area", "rarità": "Leggendaria", "tipo": "Terra", "danno": "201", "elisir": "4", "categoria": "Truppa", "nomeFile": "electro-wizard"},
    {"nome": "Elite Barbarians", "descrizione": "Barbari d'elite", "abilita": "Danni molto elevati", "rarità": "Comune", "tipo": "Terra", "danno": "260", "elisir": "6", "categoria": "Truppa", "nomeFile": "elite-barbarians"},
    {"nome": "Elixir Collector", "descrizione": "Raccoglitore elisir", "abilita": "Genera elisir", "rarità": "Rara", "tipo": "Edificio", "danno": "0", "elisir": "6", "categoria": "Edificio", "nomeFile": "elixir-collector"},
    {"nome": "Elixir Golem", "descrizione": "Golem elisir", "abilita": "Tank speciale", "rarità": "Rara", "tipo": "Terra", "danno": "238", "elisir": "3", "categoria": "Truppa", "nomeFile": "elixir-golem"},
    {"nome": "Executioner", "descrizione": "Carnefice", "abilita": "Ascia area", "rarità": "Epica", "tipo": "Terra", "danno": "178", "elisir": "5", "categoria": "Truppa", "nomeFile": "executioner"},
    {"nome": "Fire Spirit", "descrizione": "Spirito di fuoco", "abilita": "Fuoco esplosivo", "rarità": "Comune", "tipo": "Terra", "danno": "141", "elisir": "1", "categoria": "Truppa", "nomeFile": "fire-spirit"},
    {"nome": "Fireball", "descrizione": "Sfera infuocata", "abilita": "Danni fuoco area", "rarità": "Rara", "tipo": "Incantesimo", "danno": "286", "elisir": "4", "categoria": "Incantesimo", "nomeFile": "fireball"},
    {"nome": "Firecracker", "descrizione": "Petardiera", "abilita": "Velocità e fuoco", "rarità": "Comune", "tipo": "Terra", "danno": "88", "elisir": "3", "categoria": "Truppa", "evolved": {"nome": "Firecracker Evolved", "img": "firecracker-ev1"}, "nomeFile": "firecracker"},
    {"nome": "Fisherman", "descrizione": "Pescatore", "abilita": "Tira nemici", "rarità": "Leggendaria", "tipo": "Terra", "danno": "205", "elisir": "3", "categoria": "Truppa", "nomeFile": "fisherman"},
    {"nome": "Flying Machine", "descrizione": "Macchina volante", "abilita": "Attacco aereo", "rarità": "Rara", "tipo": "Aerea", "danno": "145", "elisir": "4", "categoria": "Truppa", "nomeFile": "flying-machine"},
    {"nome": "Giant", "descrizione": "Gigante", "abilita": "Tank enorme", "rarità": "Comune", "tipo": "Terra", "danno": "113", "elisir": "5", "categoria": "Truppa", "nomeFile": "giant"},
    {"nome": "Goblin Barrel", "descrizione": "Barile goblin", "abilita": "Evoca goblin", "rarità": "Epica", "tipo": "Incantesimo", "danno": "69", "elisir": "3", "categoria": "Incantesimo", "nomeFile": "goblin-barrel"},
    {"nome": "Goblin Giant", "descrizione": "Gigante goblin", "abilita": "Tank goblin", "rarità": "Epica", "tipo": "Terra", "danno": "185", "elisir": "6", "categoria": "Truppa", "nomeFile": "goblin-giant"},
    {"nome": "Goblins", "descrizione": "Goblin veloci", "abilita": "Velocità elevata", "rarità": "Comune", "tipo": "Terra", "danno": "68", "elisir": "2", "categoria": "Truppa", "nomeFile": "goblins"},
    {"nome": "Golden Knight", "descrizione": "Cavaliere d'oro leggendario", "abilita": "Attacco multiplo", "rarità": "Eroe", "tipo": "Terra", "danno": "250", "elisir": "4", "categoria": "Truppa", "nomeFile": "golden-knight"},
    {"nome": "Golem", "descrizione": "Golem di pietra", "abilita": "Tank massivo", "rarità": "Epica", "tipo": "Terra", "danno": "288", "elisir": "8", "categoria": "Truppa", "nomeFile": "golem"},
    {"nome": "Graveyard", "descrizione": "Cimitero", "abilita": "Evoca scheletri", "rarità": "Leggendaria", "tipo": "Incantesimo", "danno": "0", "elisir": "5", "categoria": "Incantesimo", "nomeFile": "graveyard"},
    {"nome": "Guards", "descrizione": "Guardie", "abilita": "Difesa spade", "rarità": "Epica", "tipo": "Terra", "danno": "153", "elisir": "3", "categoria": "Truppa", "nomeFile": "guards"},
    {"nome": "Hog Rider", "descrizione": "Cavaliere maiale", "abilita": "Carica veloce", "rarità": "Rara", "tipo": "Terra", "danno": "175", "elisir": "4", "categoria": "Truppa", "nomeFile": "hog-rider"},
    {"nome": "Hunter", "descrizione": "Cacciatore", "abilita": "Fucile potente", "rarità": "Epica", "tipo": "Terra", "danno": "272", "elisir": "4", "categoria": "Truppa", "nomeFile": "hunter"},
    {"nome": "Ice Golem", "descrizione": "Golem di ghiaccio", "abilita": "Ralenta e tank", "rarità": "Rara", "tipo": "Terra", "danno": "86", "elisir": "2", "categoria": "Truppa", "nomeFile": "ice-golem"},
    {"nome": "Ice Spirit", "descrizione": "Spirito ghiaccio", "abilita": "Congela nemici", "rarità": "Comune", "tipo": "Aerea", "danno": "0", "elisir": "1", "categoria": "Truppa", "evolved": {"nome": "Ice Spirit Evolved", "img": "ice-spirit-ev1"}, "nomeFile": "ice-spirit"},
    {"nome": "Ice Wizard", "descrizione": "Mago ghiaccio leggendario", "abilita": "Congela area", "rarità": "Leggendaria", "tipo": "Terra", "danno": "90", "elisir": "3", "categoria": "Truppa", "nomeFile": "ice-wizard"},
    {"nome": "Inferno Dragon", "descrizione": "Drago inferno leggendario", "abilita": "Raggi infuocati", "rarità": "Leggendaria", "tipo": "Aerea", "danno": "450", "elisir": "4", "categoria": "Truppa", "nomeFile": "inferno-dragon"},
    {"nome": "Inferno Tower", "descrizione": "Torre inferno", "abilita": "Raggi fuoco", "rarità": "Rara", "tipo": "Edificio", "danno": "350", "elisir": "5", "categoria": "Edificio", "nomeFile": "inferno-tower"},
    {"nome": "Knight", "descrizione": "Cavaliere", "abilita": "Spada fedele", "rarità": "Comune", "tipo": "Terra", "danno": "83", "elisir": "3", "categoria": "Truppa", "evolved": {"nome": "Knight Evolved", "img": "knight-ev1"}, "nomeFile": "knight"},
    {"nome": "Lava Hound", "descrizione": "Mastino lava leggendario", "abilita": "Volo e tank", "rarità": "Leggendaria", "tipo": "Aerea", "danno": "28", "elisir": "7", "categoria": "Truppa", "nomeFile": "lava-hound"},
    {"nome": "Lightning", "descrizione": "Fulmine", "abilita": "Danni fulmine area", "rarità": "Epica", "tipo": "Incantesimo", "danno": "335", "elisir": "6", "categoria": "Incantesimo", "nomeFile": "lightning"},
    {"nome": "Log", "descrizione": "Tronco leggendario", "abilita": "Spinge nemici", "rarità": "Leggendaria", "tipo": "Incantesimo", "danno": "180", "elisir": "2", "categoria": "Incantesimo", "nomeFile": "the-log"},
    {"nome": "Magic Archer", "descrizione": "Arciere magico", "abilita": "Magia area", "rarità": "Leggendaria", "tipo": "Terra", "danno": "176", "elisir": "4", "categoria": "Truppa", "nomeFile": "magic-archer"},
    {"nome": "Mighty Miner", "descrizione": "Minatore potente", "abilita": "Scava underground", "rarità": "Eroe", "tipo": "Terra", "danno": "203", "elisir": "4", "categoria": "Truppa", "nomeFile": "mighty-miner"},
    {"nome": "Miner", "descrizione": "Minatore leggendario", "abilita": "Scava underground", "rarità": "Leggendaria", "tipo": "Terra", "danno": "117", "elisir": "3", "categoria": "Truppa", "nomeFile": "miner"},
    {"nome": "Mini PEKKA", "descrizione": "Mini PEKKA", "abilita": "Attacco brutale", "rarità": "Rara", "tipo": "Terra", "danno": "347", "elisir": "4", "categoria": "Truppa", "nomeFile": "mini-pekka"},
    {"nome": "Minion Horde", "descrizione": "Orda minion", "abilita": "Attacco multiplo", "rarità": "Comune", "tipo": "Aerea", "danno": "63", "elisir": "5", "categoria": "Truppa", "nomeFile": "minion-horde"},
    {"nome": "Minions", "descrizione": "Minion aerei", "abilita": "Volo multiplo", "rarità": "Comune", "tipo": "Aerea", "danno": "54", "elisir": "3", "categoria": "Truppa", "nomeFile": "minions"},
    {"nome": "Mirror", "descrizione": "Specchio", "abilita": "Copia ultima carta", "rarità": "Epica", "tipo": "Incantesimo", "danno": "0", "elisir": "1", "categoria": "Incantesimo", "nomeFile": "mirror"},
    {"nome": "Mortar", "descrizione": "Mortaio", "abilita": "Attacco indiretto", "rarità": "Comune", "tipo": "Edificio", "danno": "160", "elisir": "4", "categoria": "Edificio", "evolved": {"nome": "Mortar Evolved", "img": "mortar-ev1"}, "nomeFile": "mortar"},
    {"nome": "Musketeer", "descrizione": "Moschettiera", "abilita": "Attacco multi-target", "rarità": "Comune", "tipo": "Terra", "danno": "110", "elisir": "4", "categoria": "Truppa", "nomeFile": "musketeer"},
    {"nome": "Night Witch", "descrizione": "Strega notturna leggendaria", "abilita": "Evoca pipistrelli", "rarità": "Leggendaria", "tipo": "Terra", "danno": "110", "elisir": "4", "categoria": "Truppa", "nomeFile": "night-witch"},
    {"nome": "P.E.K.K.A", "descrizione": "P.E.K.K.A robot", "abilita": "Attacco devastante", "rarità": "Epica", "tipo": "Terra", "danno": "381", "elisir": "7", "categoria": "Truppa", "nomeFile": "pekka"},
    {"nome": "Phoenix", "descrizione": "Fenice leggendaria", "abilita": "Volo fuoco", "rarità": "Leggendaria", "tipo": "Aerea", "danno": "262", "elisir": "4", "categoria": "Truppa", "nomeFile": "phoenix"},
    {"nome": "Poison", "descrizione": "Veleno", "abilita": "Danni veleno continui", "rarità": "Epica", "tipo": "Incantesimo", "danno": "82", "elisir": "4", "categoria": "Incantesimo", "nomeFile": "poison"},
    {"nome": "Prince", "descrizione": "Principe", "abilita": "Carica potente", "rarità": "Epica", "tipo": "Terra", "danno": "333", "elisir": "5", "categoria": "Truppa", "nomeFile": "prince"},
    {"nome": "Princess", "descrizione": "Principessa leggendaria", "abilita": "Attacco archi lungo", "rarità": "Leggendaria", "tipo": "Aerea", "danno": "155", "elisir": "3", "categoria": "Truppa", "nomeFile": "princess"},
    {"nome": "Rage", "descrizione": "Rabbia", "abilita": "Velocità area", "rarità": "Epica", "tipo": "Incantesimo", "danno": "0", "elisir": "2", "categoria": "Incantesimo", "nomeFile": "rage"},
    {"nome": "Rascals", "descrizione": "Teppisti", "abilita": "Trio attacco", "rarità": "Comune", "tipo": "Terra", "danno": "68", "elisir": "5", "categoria": "Truppa", "nomeFile": "rascals"},
    {"nome": "Rocket", "descrizione": "Razzo", "abilita": "Danni esplosivi forti", "rarità": "Rara", "tipo": "Incantesimo", "danno": "400", "elisir": "6", "categoria": "Incantesimo", "nomeFile": "rocket"},
    {"nome": "Royal Giant", "descrizione": "Gigante reale", "abilita": "Cannone potente", "rarità": "Comune", "tipo": "Terra", "danno": "210", "elisir": "6", "categoria": "Truppa", "evolved": {"nome": "Royal Giant Evolved", "img": "royal-giant-ev1"}, "nomeFile": "royal-giant"},
    {"nome": "Royal Hogs", "descrizione": "Maiali reali", "abilita": "Attacco rapido", "rarità": "Epica", "tipo": "Terra", "danno": "297", "elisir": "5", "categoria": "Truppa", "nomeFile": "royal-hogs"},
    {"nome": "Royal Recruits", "descrizione": "Reclute reali", "abilita": "Schieramento difesa", "rarità": "Comune", "tipo": "Terra", "danno": "100", "elisir": "7", "categoria": "Truppa", "evolved": {"nome": "Royal Recruits Evolved", "img": "royal-recruits-ev1"}, "nomeFile": "royal-recruits"},
    {"nome": "Skeleton Army", "descrizione": "Armata scheletri", "abilita": "Orda scheletri", "rarità": "Epica", "tipo": "Terra", "danno": "36", "elisir": "3", "categoria": "Truppa", "nomeFile": "skeleton-army"},
    {"nome": "Skeleton King", "descrizione": "Re scheletro leggendario", "abilita": "Evoca scheletri", "rarità": "Eroe", "tipo": "Terra", "danno": "150", "elisir": "4", "categoria": "Truppa", "nomeFile": "skeleton-king"},
    {"nome": "Skeletons", "descrizione": "Scheletri", "abilita": "Attacco group", "rarità": "Comune", "tipo": "Terra", "danno": "26", "elisir": "1", "categoria": "Truppa", "evolved": {"nome": "Skeletons Evolved", "img": "skeletons-ev1"}, "nomeFile": "skeletons"},
    {"nome": "Giant Snowball", "descrizione": "Palla di neve", "abilita": "Congela e spinge", "rarità": "Comune", "tipo": "Incantesimo", "danno": "0", "elisir": "2", "categoria": "Incantesimo", "nomeFile": "giant-snowball"},
    {"nome": "Sparky", "descrizione": "Sparky leggendaria", "abilita": "Raggi laser", "rarità": "Leggendaria", "tipo": "Terra", "danno": "560", "elisir": "6", "categoria": "Truppa", "nomeFile": "sparky"},
    {"nome": "Spear Goblins", "descrizione": "Goblin lanciatori", "abilita": "Attacco distanza", "rarità": "Comune", "tipo": "Terra", "danno": "48", "elisir": "2", "categoria": "Truppa", "nomeFile": "spear-goblins"},
    {"nome": "Tesla", "descrizione": "Tesla torre", "abilita": "Attacco fulmine", "rarità": "Comune", "tipo": "Edificio", "danno": "120", "elisir": "4", "categoria": "Edificio", "nomeFile": "tesla"},
    {"nome": "Three Musketeers", "descrizione": "Tre moschettiere", "abilita": "Triplo attacco", "rarità": "Rara", "tipo": "Terra", "danno": "110", "elisir": "9", "categoria": "Truppa", "nomeFile": "three-musketeers"},
    {"nome": "Tombstone", "descrizione": "Lapide", "abilita": "Genera scheletri", "rarità": "Comune", "tipo": "Edificio", "danno": "0", "elisir": "3", "categoria": "Edificio", "nomeFile": "tombstone"},
    {"nome": "Tornado", "descrizione": "Tornado", "abilita": "Spinge e muove", "rarità": "Epica", "tipo": "Incantesimo", "danno": "0", "elisir": "3", "categoria": "Incantesimo", "nomeFile": "tornado"},
    {"nome": "Wall Breakers", "descrizione": "Sfondamuri", "abilita": "Esplosione muri", "rarità": "Epica", "tipo": "Aerea", "danno": "130", "elisir": "2", "categoria": "Truppa", "nomeFile": "wall-breakers"},
    {"nome": "Witch", "descrizione": "Strega", "abilita": "Evoca scheletri", "rarità": "Epica", "tipo": "Terra", "danno": "70", "elisir": "5", "categoria": "Truppa", "nomeFile": "witch"},
    {"nome": "Wizard", "descrizione": "Mago", "abilita": "Fuoco area", "rarità": "Rara", "tipo": "Terra", "danno": "135", "elisir": "5", "categoria": "Truppa", "nomeFile": "wizard"},
    {"nome": "X-Bow", "descrizione": "X-Bow", "abilita": "Archi rapidi", "rarità": "Epica", "tipo": "Edificio", "danno": "95", "elisir": "6", "categoria": "Edificio", "nomeFile": "x-bow"},
    {"nome": "Zap", "descrizione": "Zap fulmine", "abilita": "Stordisce area", "rarità": "Comune", "tipo": "Incantesimo", "danno": "80", "elisir": "2", "categoria": "Incantesimo", "nomeFile": "zap"}
];

// ======================================== 
// FUNZIONE PER OTTENERE PERCORSO IMMAGINE CARTA
// ======================================== 
function getCardImagePath(card) {
    // Usa il nomeFile personalizzato se disponibile
    if (card && card.nomeFile) {
        return `carte/${card.nomeFile}.png`;
    }
    // Fallback al metodo automatico
    return `carte/${card.nome.toLowerCase().replace(/\s+/g, '-')}.png`;
}

// ========================================
// FUNZIONE PER OTTENERE PERCORSO IMMAGINE MODALE (CON UNDERSCORE)
// ========================================
function getCardModalImagePath(card) {
    // Usa il nomeFile personalizzato se disponibile per la cartella 'chr'
    if (card && card.nomeFile) {
        // Converti trattini in underscore per la modale
        const modalFileName = card.nomeFile.replace(/-/g, '_');
        return `chr/${modalFileName}.png`;
    }
    // Fallback: converti spazi in underscore
    return `chr/${card.nome.toLowerCase().replace(/\s+/g, '_')}.png`;
}




// ======================================== 
// DATI DELLE ARENE - 14 ARENE
// ======================================== 
const arenaData = [
    {"nome": "Training Camp", "descrizione": "La prima arena - Allenamento base", "livello": 1, "elisir": "1", "trofei": "0", "nomeFile": "training-camp"},
    {"nome": "Goblin Stadium", "descrizione": "L'arena dei Goblin", "livello": 2, "elisir": "2", "trofei": "400", "nomeFile": "goblin-stadium"},
    {"nome": "Bone Pit", "descrizione": "L'arena delle ossa", "livello": 3, "elisir": "3", "trofei": "800", "nomeFile": "bone-pit"},
    {"nome": "Barbarian Bowl", "descrizione": "L'arena dei Barbari", "livello": 4, "elisir": "4", "trofei": "1200", "nomeFile": "barbarian-bowl"},
    {"nome": "Pekka Playhouse", "descrizione": "Il parco giochi di P.E.K.K.A", "livello": 5, "elisir": "5", "trofei": "1600", "nomeFile": "pekka-playhouse"},
    {"nome": "Spell Valley", "descrizione": "La valle degli incantesimi", "livello": 6, "elisir": "6", "trofei": "2000", "nomeFile": "spell-valley"},
    {"nome": "Builders Workshop", "descrizione": "L'officina del costruttore", "livello": 7, "elisir": "7", "trofei": "2400", "nomeFile": "builders-workshop"},
    {"nome": "Royal Arena", "descrizione": "L'arena reale", "livello": 8, "elisir": "8", "trofei": "2800", "nomeFile": "royal-arena"},
    {"nome": "Frozen Peak", "descrizione": "Il picco ghiacciato", "livello": 9, "elisir": "9", "trofei": "3200", "nomeFile": "frozen-peak"},
    {"nome": "Jungle Arena", "descrizione": "L'arena della giungla selvaggia", "livello": 10, "elisir": "10", "trofei": "3600", "nomeFile": "jungle-arena"},
    {"nome": "Hog Mountain", "descrizione": "La montagna dei maiali", "livello": 11, "elisir": "11", "trofei": "4000", "nomeFile": "hog-mountain"},
    {"nome": "Electro Valley", "descrizione": "La valle elettrizzante", "livello": 12, "elisir": "12", "trofei": "4400", "nomeFile": "electro-valley"},
    {"nome": "Spooky Town", "descrizione": "La città spettrale", "livello": 13, "elisir": "13", "trofei": "4800", "nomeFile": "spooky-town"}
];


// ======================================== 
// DATI LEGHE - ARENE COMPETITIVE
// ======================================== 
const leagueData = [
    {"nome": "Bronze League", "descrizione": "Lega di bronzo - Competizione base", "trofei": "5600+", "ricompense": "Oro, Oro grezzo", "nomeFile": "bronze-league"},
    {"nome": "Silver League", "descrizione": "Lega di argento - Competizione intermedia", "trofei": "6000+", "ricompense": "Oro, Gemme","nomeFile": "silver-league" },
    {"nome": "Gold League", "descrizione": "Lega d'oro - Competizione avanzata", "trofei": "6500+", "ricompense": "Oro, Gemme, Totem","nomeFile": "gold-league" },
    {"nome": "Master League", "descrizione": "Lega master - Competizione esperti", "trofei": "6800+", "ricompense": "Oro extra, Gemme, Totem raro", "nomeFile": "master-league"},
    {"nome": "Master2 League", "descrizione": "Lega master 2 - Competizione esperti", "trofei": "6900+", "ricompense": "Oro extra, Gemme, Totem raro", "nomeFile": "master2-league"},
    {"nome": "Master3 League", "descrizione": "Lega master 3 - Competizione esperti", "trofei": "6950+", "ricompense": "Oro extra, Gemme, Totem raro", "nomeFile": "master3-league"},
    {"nome": "Champion League", "descrizione": "Lega campioni - Competizione d'élite", "trofei": "7000+", "ricompense": "Oro massimo, Gemme, Totem epico", "nomeFile": "champion-league" },
    {"nome": "Grand Champion League", "descrizione": "Lega gran campione - Competizione suprema", "trofei": "7500+", "ricompense": "Oro massimo, Gemme, Totem epico", "nomeFile": "grand-champion-league" },
    {"nome": "Legendary League", "descrizione": "Lega leggendaria - Competizione elite", "trofei": "7000+", "ricompense": "Oro massimo, Gemme, Totem dorato", "nomeFile": "legendary-league" },
    {"nome": "Ultimate League", "descrizione": "Lega suprema - Per i migliori giocatori", "trofei": "8000+", "ricompense": "Gemme illimitate, Carte leggendarie", "nomeFile": "ultimate-league"}
];



// ======================================== 
// ORDINAMENTO RARITÀ
// ======================================== 
const rarityOrder = {
    'Comune': 1,
    'Rara': 2,
    'Epica': 3,
    'Leggendaria': 4,
    'Eroe': 5
};

const rarityClasses = {
    'Comune': 'comune',
    'Rara': 'rara',
    'Epica': 'epica',
    'Leggendaria': 'leggendaria',
    'Eroe': 'eroe'
};

// ======================================== 
// VARIABILI GLOBALI
// ======================================== 
let filteredCards = [...cardData];
let currentModalCard = null;

// ======================================== 
// FUNZIONE PER OTTENERE PERCORSO IMMAGINE ARENA/LEGA
// ======================================== 
function getArenaImagePath(nomeNormalizzato) {
    return `arenas/${nomeNormalizzato.toLowerCase().replace(/\s+/g, '-')}.png`;
}

// ======================================== 
// CREA HTML CARTA
// ======================================== 
function createCardHTML(card) {
    const rarityClass = rarityClasses[card.rarità] || 'comune';
    let rarityHTML = '';
    
    if (card.rarità === 'Leggendaria') {
        rarityHTML = `<div class="card_rarity leggendaria"><span>LEGGENDARIA</span></div>`;
    } else if (card.rarità === 'Eroe') {
        rarityHTML = `<div class="card_rarity eroe"><span>EROE</span></div>`;
    } else {
        rarityHTML = `<div class="card_rarity ${rarityClass}">${card.rarità.toUpperCase()}</div>`;
    }

    const imageUrl = getCardImagePath(card);

    return `
        <div class="card" onclick="openModal(cardData.find(c => c.nome === '${card.nome.replace(/'/g, "\\'")}'))">
            <div class="elixir-cost">${card.elisir}</div>
            <h2>${card.nome}</h2>
            <p>${card.descrizione}</p>
            <img src="${imageUrl}" alt="${card.nome}" style="width: 200px; height: 200px; object-fit: contain;">
            <p class="categoria">${card.categoria}</p>
            ${rarityHTML}
            <p><strong>Abilità:</strong> ${card.abilita}</p>
            <p><strong>Danno:</strong> ${card.danno} | <strong>Tipo:</strong> ${card.tipo}</p>
        </div>
    `;
}

// ======================================== 
// CREA HTML ARENA
// ======================================== 
function createArenaHTML(arena) {
    const imageUrl = getArenaImagePath(arena.nome);
    
    return `
        <div class="card" style="cursor: default;">
            <img src="${imageUrl}" alt="${arena.nome}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;">
            <h2>${arena.nome}</h2>
            <p>${arena.descrizione}</p>
            <div style="padding: 20px; text-align: center;">
                <p style="font-size: 1.2em; margin: 15px 0;"><strong>Livello:</strong> <span style="color: #32b8c6; font-weight: bold;">${arena.livello}</span></p>
                
                <p style="font-size: 1.1em; margin: 10px 0;"><strong>Trofei:</strong> ${arena.trofei}</p>
            </div>
        </div>
    `;
}

// ======================================== 
// CREA HTML LEGA
// ======================================== 
function createLeagueHTML(league) {
    const imageUrl = getArenaImagePath(league.nome);
    
    return `
        <div class="card" style="cursor: default;">
            <img src="${imageUrl}" alt="${league.nome}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;">
            <h2>${league.nome}</h2>
            <p>${league.descrizione}</p>
            
            
            </div>
        </div>
    `;
}

// ======================================== 
// APPLICA FILTRI E ORDINAMENTO
// ======================================== 
function applyFilters() {
    const rarity = document.getElementById('rarityFilter')?.value || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const minElixir = parseInt(document.getElementById('minElixir')?.value) || 1;
    const maxElixir = parseInt(document.getElementById('maxElixir')?.value) || 9;
    const sortBy = document.getElementById('sortFilter')?.value || 'nome-asc';
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';

    console.log('Applicando filtri:', { rarity, category, minElixir, maxElixir, sortBy, searchQuery });

    filteredCards = cardData.filter(card => {
        const cardElixir = parseInt(card.elisir);
        const matchRarity = !rarity || card.rarità === rarity;
        const matchCategory = !category || card.categoria === category;
        const matchElixir = cardElixir >= minElixir && cardElixir <= maxElixir;
        const matchSearch = !searchQuery || 
            card.nome.toLowerCase().includes(searchQuery) || 
            card.descrizione.toLowerCase().includes(searchQuery) ||
            card.abilita.toLowerCase().includes(searchQuery);
        
        return matchRarity && matchCategory && matchElixir && matchSearch;
    });

    switch(sortBy) {
        case 'nome-asc':
            filteredCards.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case 'nome-desc':
            filteredCards.sort((a, b) => b.nome.localeCompare(a.nome));
            break;
        case 'rarità-asc':
            filteredCards.sort((a, b) => rarityOrder[a.rarità] - rarityOrder[b.rarità]);
            break;
        case 'rarità-desc':
            filteredCards.sort((a, b) => rarityOrder[b.rarità] - rarityOrder[a.rarità]);
            break;
        case 'elisir-asc':
            filteredCards.sort((a, b) => parseInt(a.elisir) - parseInt(b.elisir));
            break;
        case 'elisir-desc':
            filteredCards.sort((a, b) => parseInt(b.elisir) - parseInt(a.elisir));
            break;
    }

    console.log('Risultati filtro:', filteredCards.length);
    displayCards();
}

// ======================================== 
// VISUALIZZA CARTE
// ======================================== 
function displayCards() {
    const container = document.getElementById('cardsContainer');
    const counter = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    if (!container) {
        console.log('Container non trovato');
        return;
    }
    
    console.log('displayCards() - filteredCards:', filteredCards.length);
    
    if (filteredCards.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (counter) counter.textContent = '0';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    if (counter) counter.textContent = filteredCards.length;
    
    container.innerHTML = filteredCards.map(card => createCardHTML(card)).join('');
}

// ======================================== 
// VISUALIZZA ARENE
// ======================================== 
function displayArenas() {
    const container = document.getElementById('arenasContainer');
    if (!container) {
        console.log('Container arene non trovato');
        return;
    }
    container.innerHTML = arenaData.map(arena => createArenaHTML(arena)).join('');
    const counter = document.getElementById('resultsCount');
if (counter) {
    counter.textContent = arenaData.length;  // Mostra 14 arene
}

}

// ======================================== 
// VISUALIZZA LEGHE
// ======================================== 
function displayLeagues() {
    const container = document.getElementById('arenasContainer');
    if (!container) {
        console.log('Container leghe non trovato');
        return;
    }
    container.innerHTML = leagueData.map(league => createLeagueHTML(league)).join('');
    const counter = document.getElementById('resultsCount');
    if (counter) {
        counter.textContent = leagueData.length;  // Mostra 10 leghe
}

}

// ======================================== 
// AGGIORNA RANGE ELISIR
// ======================================== 
function updateElixirRange() {
    const minSlider = document.getElementById('minElixirSlider');
    const maxSlider = document.getElementById('maxElixirSlider');
    
    let minValue = parseInt(minSlider.value);
    let maxValue = parseInt(maxSlider.value);
    
    // Se il minimo è maggiore del massimo, inverti automaticamente
    if (minValue > maxValue) {
        const temp = minValue;
        minValue = maxValue;
        maxValue = temp;
        minSlider.value = minValue;
        maxSlider.value = maxValue;
    }
    
    // Aggiorna i display
    document.getElementById('minElixirDisplay').textContent = minValue;
    document.getElementById('maxElixirDisplay').textContent = maxValue;
    document.getElementById('minElixirValue').textContent = minValue;
    document.getElementById('maxElixirValue').textContent = maxValue;
    
    // Aggiorna gli input nascosti
    document.getElementById('minElixir').value = minValue;
    document.getElementById('maxElixir').value = maxValue;
    
    // Applica il filtro
    applyFilters();
}


// ======================================== 
// RIPRISTINA FILTRI
// ======================================== 
function resetFilters() {
    document.getElementById('rarityFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('minElixir').value = '1';
    document.getElementById('maxElixir').value = '9';
    document.getElementById('elixirSlider').value = '9';
    document.getElementById('sortFilter').value = 'nome-asc';
    document.getElementById('searchInput').value = '';
    const minSlider = document.getElementById('minElixirSlider');
    const maxSlider = document.getElementById('maxElixirSlider');
    if (minSlider) minSlider.value = 1;
    if (maxSlider) maxSlider.value = 9;
    document.getElementById('minElixirValue').textContent = 1;
    document.getElementById('maxElixirValue').textContent = 9;

    
    filteredCards = [...cardData];
    displayCards();
}

// ======================================== 
// TOGGLE FILTRI
// ======================================== 
function toggleFilters() {
    const wrapper = document.getElementById('filtersWrapper');
    if (wrapper) {
        wrapper.classList.toggle('collapsed');
    }
}

// ======================================== 
// SWITCH TAB - CARTE, ARENE, LEGHE
// ======================================== 
function switchTab(tab) {
    const cardsContainer = document.getElementById('cardsContainer');
    const arenasContainer = document.getElementById('arenasContainer');
    const filtersWrapper = document.getElementById('filtersWrapper');
    const searchBar = document.getElementById('searchBar');
    const toggleBtn = document.querySelector('.filter-toggle-container');
    
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
    
    if (tab === 'carte') {
        console.log('Switching to CARTE');
        cardsContainer.style.display = 'grid';
        arenasContainer.style.display = 'none';
        filtersWrapper.style.display = 'block';
        searchBar.style.display = 'block';
        if (toggleBtn) toggleBtn.style.display = 'block';
        applyFilters();
    } else if (tab === 'arene') {
        console.log('Switching to ARENE');
        cardsContainer.style.display = 'none';
        arenasContainer.style.display = 'grid';
        filtersWrapper.style.display = 'none';
        searchBar.style.display = 'none';
        if (toggleBtn) toggleBtn.style.display = 'none';
        displayArenas();
    } else if (tab === 'leghe') {
        console.log('Switching to LEGHE');
        cardsContainer.style.display = 'none';
        arenasContainer.style.display = 'grid';
        filtersWrapper.style.display = 'none';
        searchBar.style.display = 'none';
        if (toggleBtn) toggleBtn.style.display = 'none';
        displayLeagues();
    }
}

// ======================================== 
// MOSTRA VERSIONE EVOLVED
// ======================================== 
function showVariant(evolvedNome, evolvedImg) {
    const imageUrl = `carte/${evolvedImg}.png`;
    document.getElementById('cartaTitolo').textContent = evolvedNome;
    document.getElementById('cartaImmagine').src = imageUrl;
    document.getElementById('variantBtn').innerHTML = 'Versione Base';
    document.getElementById('variantBtn').onclick = function() {
        openModal(currentModalCard);
    };
}

// ======================================== 
// MODAL CARTA
// ======================================== 
function openModal(card) {
    if (!card) {
        console.error('Carta non trovata');
        return;
    }
    
    currentModalCard = card;

    //  ID CORRETTI DALL'HTML
    document.getElementById('cartaTitolo').textContent = card.nome;
    document.getElementById('cartaDescrizione').textContent = card.descrizione;
    document.getElementById('cartaAbilita').textContent = card.abilita;
    document.getElementById('cartaRarit').textContent = card.rarità;
    document.getElementById('cartaTipo').textContent = card.tipo;
    document.getElementById('cartaDanno').textContent = card.danno;
    document.getElementById('cartaElisir').textContent = card.elisir;
    document.getElementById('cartaCategoria').textContent = card.categoria;
    document.getElementById('cartaImmagine').src = getCardModalImagePath(card);

    // Mostra/nascondi bottone evolved
    const variantBtn = document.getElementById('variantBtn');
    if (card && card.evolved) {
        variantBtn.style.display = 'inline-block';
        variantBtn.innerHTML = `Mostra ${card.evolved.nome}`;
        variantBtn.onclick = function() {
            showVariant(card.evolved.nome, card.evolved.img);
        };
    } else {
        variantBtn.style.display = 'none';
    }
    
    document.getElementById('modalContainer').style.display = 'block';
}




function closeModal(event) {
    if (event) event.stopPropagation();
    document.getElementById('modalContainer').style.display = 'none';
}


// ======================================== 
// EVENT LISTENERS
// ======================================== 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    displayCards();
});

