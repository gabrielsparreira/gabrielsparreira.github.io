//DECLARE VARIABLES HERE//
        
//RESOURCES//
var population = 0;
var populationMax = 10;
var food = 0;
var material = 0;
var luxury = 0;
var science = 0;
var aether = 0;
var military = 0;
var militaryStrength = military;
        
//UNITS//
//INITIAL UNITS//
var villager = 0;
var hunter = 0;
var gatherer = 0;
var builder = 0;
var elder = 0;
var shaman = 0;
var militia = 5;
//AFTER AGRICULTURE//
var farmer = 0;
//AFTER MINING//
var woodcutter = 0;
//AFTER POTTERY//
var collector = 0;
var healer = 0;
//AFTER ANIMAL HUSBANDRY//
var caravan = 0;
var shepard = 0;
//AFTER ARCHERY//
var archer = 0;
//AFTER THE WHEEL//
var wagon = 0;
//AFTER BRONZEWORKING//
var miner = 0;
var spearman = 0;
//AFTER SAILING//
var fisherman = 0;
var sailor = 0;
//AFTER WRITING//
var scholar = 0;
//AFTER CALENDAR//
var prophet = 0;
//AFTER HORSEBACK RIDING//
var horseman = 0;
//AFTER CONSTRUCTION//
var bowman = 0;
var lumberjack = 0;
//AFTER PHILOSOPHY//
var philosopher = 0;
//AFTER CURRENCY//
var merchant = 0;
//AFTER ENGINEERING//
var engineer = 0;
//AFTER IRONWORKING//
var swordsman = 0;
//AFTER THEOLOGY//
var priest = 0;
var mage = 0;
//AFTER CIVIL SERVICE//
var pikeman = 0;
//AFTER METALCASTING//
var blacksmith = 0;
//AFTER COMPASS//
var captain = 0;
var pirate = 0;
//AFTER EDUCATION//
var highscholar = 0;
var archmage = 0;
//AFTER CHIVALRY//
var knight = 0;
var paladin = 0;
//AFTER MACHINERY//
var crossbowman = 0;
//AFTER STEEL//
var longswordsman = 0;
//AFTER ASTRONOMY//
var navigator1 = 0;
//AFTER BANKING//
var banker = 0;
//AFTER GUNPOWDER//
var musketman = 0;
//AFTER NAVIGATION//
var commodore = 0;
//AFTER ECONOMICS//
var economist = 0;
//AFTER METALLURGY//
var lancer = 0;
//AFTER CHEMISTRY//
var chemist = 0;
var alchemist = 0;
//AFTER ARCHEOLOGY//
var explorer = 0;
//AFTER SCIENTIFIC THEORY//
var scientist = 0;
var wizard = 0;
//AFTER INDUSTRIALIZATION//
var gatlinggun = 0;
var operator = 0;
//AFTER RIGLING//
var rifleman = 0;
//AFTER MILITARY SCIENCE//
var warmage = 0;
var cavalry = 0;
//AFTER BIOLOGY//
var herbalist = 0;
//AFTER STEAMPOWER//
var techmage = 0;
//AFTER REPLACEABLE PARTS//
var infantry = 0;
//AFTER FLIGHT//
var pilot = 0;
var aetherpilot = 0;
//AFTER PLASTICS//
var heavyinfantry = 0;
//AFTER BALLISTICS//
var machinegunner = 0;
//AFTER COMBUSTION//
var warwagon = 0;
//AFTER PENICILLIN//
var marine = 0;
//AFTER ATOMIC THEORY//
var atomicmage = 0;
var academic = 0;
//AFTER RADAR//
var advancedpilot = 0;
//AFTER COMBINED ARMS//
var tank = 0;
//AFTER ECOLOGY//
var creationmage = 0;
//AFTER ROCKETRY//
var astronaut = 0;
//AFTER COMPUTERS//
var programmer = 0;
//AFTER NUCLEAR FUSION//
var aethersoldier = 0;

//UNIT COSTS//
var villagerCost = 1;
var hunterCost = 1.5;
var gathererCost = 1.5;
var builderCost = 1.5;
var elderCost = 1.5;
var shamanCost = 1.5;
var militiaCost = 5;
var farmerCost = 2;
var woodcutterCost = 2;
var collectorCost = 2;
var healerCost = 2;
var caravanCost = 2;
var shepardCost = 2;
var archerCost = 2.5;
var wagonCost = 3;
var minerCost = 3;
var spearmanCost = 3;
var fishermanCost = 3;
var sailorCost = 2.5;
var scholarCost = 2.5;
var prophetCost = 3;
var horsemanCost = 4;
var bowmanCost = 3.5;
var lumberjackCost = 4;
var philosopherCost = 5;
var merchantCost = 4;
var engineerCost = 4;
var swordsmanCost = 3.5;
var priestCost = 4;
var mageCost = 5;
var pikemanCost = 5;
var blacksmithCost = 4.5;
var captainCost = 5;
var pirateCost = 5;
var highscholarCost = 7;
var archmageCost = 7;
var knightCost = 7;
var paladinCost = 6.5;
var crossbowmanCost = 6.5;
var longswordsmanCost = 6.5;
var navigatorCost = 7;
var bankerCost = 8;
var musketmanCost = 9;
var commodoreCost = 9;
var economistCost = 10;
var lancerCost = 9;
var chemistCost = 10;
var alchemistCost = 10;
var explorerCost = 10;
var scientistCost = 12;
var wizardCost = 12;
var gatlinggunCost = 12;
var operatorCost = 15;
var riflemanCost = 15;
var warmageCost = 15;
var cavalryCost = 15;
var herbalistCost = 15;
var techmageCost = 20;
var infantryCost = 20;
var pilotCost = 25;
var aetherpilotCost = 30;
var heavyinfantryCost = 30;
var machinegunnerCost = 25;
var warwagonCost = 35;
var marineCost = 30;
var atomicmageCost = 35;
var academicCost = 35;
var advancedpilotCost = 35;
var tankCost = 45;
var creationmageCost = 45;
var astronautCost = 50;
var programmerCost = 50;
var aethersoldierCost = 60;

//BUILDINGS//
//INITIAL BUILDINGS//
var camp = 0;
var hut = 0;
//AFTER AGRICULTURE//
var towncentre = 0;
var farm = 0;
var cottage = 0;
//AFTER MINING//
var mine = 0;
//AFTER POTTERY//
var granary = 0;
var totem = 0;
//AFTER ANIMAL HUSBANDRY//
var livestock = 0;
//AFTER THE WHEEL//
var watermill = 0;
//AFTER BRONZEWORKING//
var barrack = 0;
//AFTER SAILING//
var dock = 0;
//AFTER WRITING//
var library = 0;
//AFTER CALENDAR//
var altar = 0;
var plantation = 0;
//AFTER TRAPPING//
var trap = 0;
//AFTER MASONRY//
var quarry = 0;
//AFTER HORSEBACK RIDING//
var stable = 0;
//AFTER CONSTRUCTION//
var arena = 0;
var lumbermill = 0;
var terracefarm = 0;
//AFTER OPTICS//
var lighthouse = 0;
//AFTER PHILOSOPHY//
var park = 0;
var temple = 0;
//AFTER DRAMA AND POETRY//
var theatre = 0;
//AFTER CURRENCY//
var market = 0;
//AFTER ENGINEERING//
var house = 0;
var fort = 0;
//AFTER IRONWORKING//
var forge = 0;
//AFTER THEOLOGY//
var sanctuary = 0;
var garden = 0;
//AFTER GUILDS//
var tradingpost = 0;
//AFTER METALCASTING//
var workshop = 0;
//AFTER COMPASS//
var harbor = 0;
//AFTER EDUCATION//
var university = 0;
var mageacademy = 0;
//AFTER CHIVALRY//
var castle = 0;
var forthaven = 0;
//AFTER STEEL//
var armory = 0;
//AFTER ASTRONOMY//
var observatory = 0;
var arcanebattery = 0;
//AFTER ACOUSTICS//
var concerthouse = 0;
//AFTER BANKING//
var bank = 0;
//AFTER NAVIGATION//
var seaport = 0;
//AFTER ARQUITECTURE//
var building = 0;
//AFTER ECONOMICS//
var windmill = 0;
//AFTER METALLURGY//
var arsenal = 0;
//AFTER ARCHEOLOGY//
var historicsite = 0;
//AFTER SCIENTIFIC THEORY//
var school = 0;
//AFTER INDUSTRIALIZATION//
var factory = 0;
//AFTER BIOLOGY//
var oilwell = 0;
//AFTER ELECTRICITY//
var hydroplant = 0;
//AFTER RADIO//
var broadcasttower = 0;
//AFTER PLASTICS//
var researchlab = 0;
//AFTER PENICILLIN//
var medicallab = 0;
//AFTER ATOMIC THEORY//
var academy = 0;
//AFTER RADAR//
var airport = 0;
//AFTER NUCLEAR FISSION//
var nuclearplant = 0;
//AFTER ECOLOGY//
var solarplant = 0;
//AFTER ROCKETRY//
var spaceshipfactory = 0;
//AFTER COMPUTERS//
var skyscraper = 0;
//AFTER ADVANCED BALLISTICS//
var hawk9 = 0;
//AFTER SATTELITES//
var genesiscockpit = 0;
//AFTER ROBOTICS//
var hawkheavy = 0;
//AFTER PARTICLE PHYSICS//
var genesisengine = 0;
//AFTER NANOTECHNOLOGY//
var genesisstasis = 0;
//AFTER GENETIC ENGINEERING//
var genesisclinic = 0;

//BUILDING COSTS//
var campCost = 0.5;
var hutCost = 1;
var towncentreCost = 4;
var farmCost = 2;
var cottageCost = 2.5;
var mineCost = 2.5;
var granaryCost = 2.5;
var totemCost = 2.5;
var livestockCost = 2.5;
var watermillCost = 3;
var barrackCost = 3;
var dockCost = 3.5;
var libraryCost = 3.5;
var altarCost = 3.5;
var plantationCost = 3.5;
var trapCost = 3;
var quarryCost = 3.5;
var stableCost = 4;
var arenaCost = 4;
var lumbermillCost = 4.5;
var terracefarmCost = 4.5;
var lighthouseCost = 4.5;
var parkCost = 5;
var templeCost = 5;
var theatreCost = 6;
var marketCost = 6;
var fortCost = 7;
var houseCost = 7;
var forgeCost = 7;
var sanctuaryCost = 7;
var gardenCost = 7;
var tradingpostCost = 9;
var workshopCost = 9;
var harborCost = 9;
var universityCost = 10;
var mageacademyCost = 12;
var castleCost = 12;
var forthavenCost = 14;
var armoryCost = 12;
var observatoryCost = 14;
var arcanebatteryCost = 20;
var concerthouseCost = 20;
var bankCost = 20;
var seaportCost = 20;
var buildingCost = 20;
var windmillCost = 20;
var arsenalCost = 20;
var historicsiteCost = 25;
var schoolCost = 25;
var factoryCost = 30;
var oilwellCost = 30;
var hydroplantCost = 30;
var broadcasttowerCost = 35;
var researchlabCost = 35;
var medicallabCost = 35;
var academyCost = 40;
var airportCost = 40;
var nuclearplantCost = 45;
var solarplantCost = 45;
var spaceshipfactoryCost = 50;
var skyscraperCost = 45;
var hawk9Cost = 60;
var genesiscockpitCost = 70;
var hawkheavyCost = 80;
var genesisengineCost = 80;
var genesisstasisCost = 90;
var genesisclinicCost = 100;
    
//RESEARCH//
var agriculture = 0;
var mining = 0;
var pottery = 0;
var archery = 0;
var animalhusbandry = 0;
var thewheel = 0;
var bronzework = 0;
var sailing = 0;
var writing = 0;
var calendar = 0;
var trapping = 0;
var masonry = 0;
var horseback = 0;
var construction = 0;
var optics = 0;
var mathematics = 0;
var philosophy = 0;
var dramapoetry = 0;
var currency = 0;
var engineering = 0;
var ironworking = 0;
var theology = 0;
var civilservice = 0;
var guilds = 0;
var metalcasting = 0;
var compass = 0;
var education = 0;
var chivalry = 0;
var machinery = 0;
var physics = 0;
var steel = 0;
var astronomy = 0;
var acoustics = 0;
var banking = 0;
var printingpress = 0;
var gunpowder = 0;
var navigation = 0;
var arquitecture = 0;
var economics = 0;
var metallurgy = 0;
var chemistry = 0;
var archeology = 0;
var scientific = 0;
var industrialization = 0;
var rifling = 0;
var militaryscience = 0;
var fertilizer = 0;
var biology = 0;
var electricity = 0;
var steampower = 0;
var dynamite = 0;
var refrigeration = 0;
var radio = 0;
var replaceableparts = 0;
var flight = 0;
var railroad = 0;
var plastics = 0;
var eletronics = 0;
var ballistics = 0;
var combustion = 0;
var penicillin = 0;
var atomictheory = 0;
var radar = 0;
var combinedarms = 0;
var nuclearfission = 0;
var ecology = 0;
var rocketry = 0;
var computers = 0;
var telecom = 0;
var mobiletactics = 0;
var advancedballistics = 0;
var sattelites = 0;
var robotics = 0;
var lasers = 0;
var particlephysics = 0;
var nuclearfusion = 0;
var nanotech = 0;
var stealth = 0;
var genetic = 0;

var researchCost = 150;

//WONDERS//
//ANCIENT ERA//
var artemis = 0;
var zeus = 0;
var stonehenge = 0;
var greatlibrary = 0;
var mausoleum = 0;
var pyramids = 0;
//CLASSICAL ERA//
var colossus = 0;
var greatlighthouse = 0;
var greatwall = 0;
var hanginggardens = 0;
var oracle = 0;
var parthenon = 0;
var petra = 0;
var terracota = 0;
//MEDIEVAL ERA//
var alhambra = 0;
var angkor = 0;
var borobudur = 0;
var chichenitza = 0;
//var (greatmosqueofdjenne) = 0;
var hagiasophia = 0;
var machupicchu = 0;
var notredame = 0;
//RENAISSANCE ERA//
var forbiddenpalace = 0;
var globetheatre = 0;
var himejicastle = 0;
var pisa = 0;
var porcelain = 0;
var redfort = 0;
var sistinechapel = 0;
var tajmahal = 0;
var ufizzi = 0;
//INDUSTRIAL ERA//
var bigben = 0;
var brandenburg = 0;
var louvre = 0;
//MODERN ERA//
var broadway = 0;
var eiffel = 0;
var kremlin = 0;
var neuschwanstein = 0;
var prora = 0;
var statueofliberty = 0;
//var cristo = 0;
//ATOMIC ERA//
var greatfirewall = 0;
var pentagon = 0;
var sidney = 0;
//INFORMATION ERA//
var theinternet = 0;
var CNtower = 0;
var hubble = 0;
var internationalSS = 0;
    
//WONDER COSTS//
//ANCIENT ERA//
var artemisCost = 0;
var zeusCost = 0;
var stonehengeCost = 0;
var greatlibraryCost = 0;
var mausoleumCost = 0;
var pyramidsCost = 0;
//CLASSICAL ERA//
var colossusCost = 0;
var greatlighthouseCost = 0;
var greatwallCost = 0;
var hanginggardensCost = 0;
var oracleCost = 0;
var parthenonCost = 0;
var petraCost = 0;
var terracotaCost = 0;
//MEDIEVAL ERA//
var alhambraCost = 0;
var angkorCost = 0;
var borobudurCost = 0;
var chichenitzaCost = 0;
//var (greatmosqueofdjenne) = 0;
var hagiasophiaCost = 0;
var machupicchuCost = 0;
var notredameCost = 0;
//RENAISSANCE ERA//
var forbiddenpalaceCost = 0;
var globetheatreCost = 0;
var himejicastleCost = 0;
var pisaCost = 0;
var porcelainCost = 0;
var redfortCost = 0;
var sistinechapelCost = 0;
var tajmahalCost = 0;
var ufizziCost = 0;
//INDUSTRIAL ERA//
var bigbenCost = 0;
var brandenburgCost = 0;
var louvreCost = 0;
//MODERN ERA//
var broadwayCost = 0;
var eiffelCost = 0;
var kremlinCost = 0;
var neuschwansteinCost = 0;
var proraCost = 0;
var statueoflibertyCost = 0;
//var cristo = 0;
//ATOMIC ERA//
var greatfirewallCost = 0;
var pentagonCost = 0;
var sidneyCost = 0;
//INFORMATION ERA//
var theinternetCost = 0;
var CNtowerCost = 0;
var hubbleCost = 0;
var internationalSSCost = 0;

//MULTIPLIERS//
var globalMultiplier = 1;
var workerMultiplier = 1;

var unitcostMultiplier = 1.15;
var landunitCostMultiplier = 1.10;
var mountedunitCostMultiplier = 1.25;
var waterunitCostMultiplier = 1.15;
var airunitCostMultiplier = 1.30;
var buildingcostMultiplier = 1.15;

var foodMultiplier = 1;
var materialMultiplier = 1;
var luxuryMultiplier = 1;
var scienceMultiplier = 1;
var populationMultiplier = 1;
var popuMaxMultiplier = 1;
var militaryMultiplier = 1;

var researchMultiplier = 1;
var clickMultiplier = 1;
var wonderMultiplier = 1;

var wonderCount = 0;

// ENEMY //
var enemy = 0;

//COMPOUND VARIABLES//
function compoundVar() {
    aetherMultiplier = 1 + (aether/1000000);
    totalMultiplier = globalMultiplier * aetherMultiplier;
    
    
    foodProduction = ( ( ((villager/10) + (hunter/3) + (builder/20)) * (workerMultiplier)) +/*BUILDINGS*/ ((camp/10) + (0)) +/*WONDERS*/ (0) ) *foodMultiplier*totalMultiplier;
    
    
    materialProduction = ( ( ((villager/15) + (gatherer/3) + (builder/20)) * (workerMultiplier)) +/*BUILDINGS*/ ((camp/10) + (0)) +/*WONDERS*/ (0) ) *materialMultiplier*totalMultiplier;
    
    
    luxuryProduction = ( ( ((0) + (0) + (0)) * (workerMultiplier)) +/*BUILDINGS*/ ((camp/10) + (0)) +/*WONDERS*/ (0) ) *luxuryMultiplier*totalMultiplier;
    
    
    scienceProduction = ( ( ((villager/10) + (hunter/20) + (gatherer/20) + (builder/20)) * (workerMultiplier)) +/*BUILDINGS*/ ((camp/10) + (0)) +/*WONDERS*/ (0) ) *scienceMultiplier*totalMultiplier;
    
    
    aetherProduction = (shaman/15) * globalMultiplier;
    
    militaryStrength = military + (militia) + (archer * 2) + (spearman * 3);
    
    update()
}

//DECLARE BUTTONS HERE//  
function gather() {
    food = food + (1 * foodMultiplier * clickMultiplier * totalMultiplier);
    material = material + (1 * materialMultiplier * clickMultiplier * totalMultiplier);
    science = science + (1 * scienceMultiplier * clickMultiplier * totalMultiplier);
    update()
}
    
//DECLARE PURCHASEABLES HERE//
    //BUILDINGS//    
function buyCamp() {
    if (material >= campCost * buildingcostMultiplier) {
        material = material - campCost * buildingcostMultiplier;
        camp = camp + 1;
        campCost = campCost * buildingcostMultiplier;
        if (buildingcostMultiplier < 1.3) {
        buildingcostMultiplier = buildingcostMultiplier + (buildingcostMultiplier/400);}
        update()
    }
}

function buyHut() {
    if (material >= hutCost * buildingcostMultiplier) {
        material = material - hutCost * buildingcostMultiplier;
        hut = hut + 1;
        hutCost = hutCost * buildingcostMultiplier;
        populationMax = populationMax + (5 * popuMaxMultiplier);
        if (buildingcostMultiplier < 1.3) {
        buildingcostMultiplier = buildingcostMultiplier + (buildingcostMultiplier/400)
        }
        update()
    }
}
    //UNITS//
function buyVillager() {
    if ((population < populationMax) && (food >= villagerCost)) {
        population = population + (1 / populationMultiplier);
        food = food - villagerCost;
        villager = villager + 1;
        villagerCost = villagerCost * unitcostMultiplier;
        update()
    }
}
function buyHunter() {
    if ((food >= hunterCost)&&(population < populationMax)) {
        population = population + (1 / populationMultiplier);
        food = food - hunterCost;
        hunter = hunter + 1;
        hunterCost = hunterCost * unitcostMultiplier;
        update()
        }
}

function buyGatherer() {
    if ((food >= gathererCost)&&(population < populationMax)) {
        population = population + (1 / populationMultiplier);
        food = food - gathererCost;
        gatherer = gatherer + 1;
        gathererCost = gathererCost * unitcostMultiplier;
        update()
    }
}

function buyBuilder() {
    if ((food >= builderCost)&&(population < populationMax)&&(buildingcostMultiplier > 1.05)) {
        population = population + (1 / populationMultiplier);
        food = food - builderCost;
        builder = builder + 1;
        builderCost = builderCost * unitcostMultiplier;
        buildingcostMultiplier = buildingcostMultiplier - (workerMultiplier * (buildingcostMultiplier/150));
    }   
}

function buyElder() {
    
}

function buyShaman() {
    if ((food >= shamanCost)&&(population < populationMax)) {
        population = population + (1 / populationMultiplier);
        food = food - shamanCost;
        shaman = shaman + 1;
        shamanCost = shamanCost * unitcostMultiplier;
        update()
    }
    
}

//MILITARY UNITS//

function buyMilitia() {
    if ((villager >= 1)&&(material >= 5)&&(luxury >= 5)) {
        villager = villager - 1;
        villagerCost = villagerCost / 1.15;
        material = material - 5;
        luxury = luxury - 5;
        militia = militia + 1;
    }
}

function buyArcher() {
    if ((food >= archerCost)&&(material >= archerCost)&&(luxury >= archerCost)&&(population<populationMax)) {
        food = food - archerCost;
        material = material - archerCost;
        luxury = luxury - archerCost;
        population = population + (1 / populationMultiplier);
        archer = archer + 1;
        archerCost = archerCost * unitcostMultiplier;
        update()
    }
}

function buySpearman() {
    
}


    //RESEARCH//    
function buyAgriculture() {
    if ((agriculture < 1)&&(science >= (researchCost * researchMultiplier))) {
        science = science - (researchCost * researchMultiplier);
        researchMultiplier = researchMultiplier * 1.15;
        agriculture = 1;
        clickMultiplier = clickMultiplier * 3;
        update()
    }
}
function buyMining() {
    if ((agriculture > 0)&&(science >= (researchCost * researchMultiplier))&&(mining < 1)) {
        science = science - (researchCost * researchMultiplier);
        researchMultiplier = researchMultiplier * 1.15;
        mining = 1;
        workerMultiplier = workerMultiplier * 1.20;
        update()
    }
}
    //WONDERS//
function buyArtemis() {
    
}

//DECLARE INFO UPDATES HERE//
function update() {
    document.getElementById('populationCount').value = population + "/" + populationMax;
    document.getElementById('foodCount').value = Math.round( food * 10 ) / 10;
    document.getElementById('materialCount').value = Math.round( material * 10 ) / 10;
    document.getElementById('luxuryCount').value = Math.round( luxury * 10 ) / 10;
    document.getElementById('scienceCount').value = Math.round( science * 10 ) / 10;
    document.getElementById('aetherCount').value = Math.round( aether * 10 ) / 10;
    document.getElementById('militaryCount').value = Math.round( militaryStrength * 10 ) / 10;
    document.getElementById('foodPS').value = Math.round(foodProduction*100)/100 + " per second.";
    document.getElementById('materialPS').value = Math.round(materialProduction*100)/100 + " per second.";
    document.getElementById('luxuryPS').value = Math.round(luxuryProduction*100)/100 + " per second.";
    document.getElementById('sciencePS').value = Math.round(scienceProduction*100)/100 + " per second.";
    document.getElementById('aetherPS').value = Math.round(aetherProduction*100)/100 + " per second.";
    document.getElementById('Population').value = "Population";
    document.getElementById('Food').value = "Food";
    document.getElementById('Material').value = "Material";
    document.getElementById('Luxury').value = "Luxuries";
    document.getElementById('Science').value = "Science";
    document.getElementById('Aether').value = "Aether x" + Math.round(aetherMultiplier*100)/100;
    document.getElementById('Military').value = "Military";
    
        //TOOLTIP & DISPLAY UPDATES//
    
    
    //BUILDINGS//
        
        //CAMP//
     if (material < campCost*buildingcostMultiplier) {document.getElementById('campDisplay').innerHTML = Math.round(campCost*buildingcostMultiplier*100)/100 + " materials.";
                                                     document.getElementById('campDisplay').style.color = "red";
                                                     document.getElementById('campDisplay').style.textShadow = "1px 1px 1px black";
                                                    } else {
                                                        document.getElementById('campDisplay').innerHTML = Math.round(campCost*buildingcostMultiplier*100)/100 + " materials.";
                                                     document.getElementById('campDisplay').style.color = "lime";
                                                     document.getElementById('campDisplay').style.textShadow = "1px 1px 1px black";
                                                    }
    document.getElementById('tooltipCamp').innerHTML = "First type of settlement, grants a bit of the main resources. Each camp costs: " + Math.round(campCost*buildingcostMultiplier*100)/100 + " materials. You have: " + camp + " Camps.";
    
        //HUT//
    if (material < hutCost*buildingcostMultiplier) {document.getElementById('hutDisplay').innerHTML = Math.round(hutCost*buildingcostMultiplier*100)/100 + " materials.";
                                                    document.getElementById('hutDisplay').style.color = "red";
                                                    document.getElementById('hutDisplay').style.textShadow = "1px 1px 1px black";
                                                    }  else {
                                                        document.getElementById('hutDisplay').innerHTML = Math.round(hutCost*buildingcostMultiplier*100)/100 + " materials.";
                                                        document.getElementById('hutDisplay').style.color = "lime";
                                                        document.getElementById('hutDisplay').style.textShadow = "1px 1px 1px black";
                                                    }
    document.getElementById('tooltipHut').innerHTML = "A small hut supports 5 population. Each Hut costs: " + Math.round(hutCost*buildingcostMultiplier*100)/100 + " materials. You have: " + hut + " Huts.";
        
    //BASIC UNITS//
    
        //VILLAGER//
    if ((food < villagerCost)||(population == populationMax)) {document.getElementById('villagerDisplay').innerHTML = Math.round(villagerCost*100)/100 + " food.";
                                document.getElementById('villagerDisplay').style.color = "red";
                                document.getElementById('villagerDisplay').style.textShadow = "1px 1px 1px black";
                                                    }  else {
                                                        document.getElementById('villagerDisplay').innerHTML = Math.round(villagerCost*100)/100 + " food.";
                                                        document.getElementById('villagerDisplay').style.color = "lime";
                                                        document.getElementById('villagerDisplay').style.textShadow = "1px 1px 1px black";
                                                            }                         
    document.getElementById('tooltipVillager').innerHTML = "A villager moves in to your city! Each villager costs: " + Math.round(villagerCost*100)/100 + " food and produces: food, material and science. You have: " + villager + " Villagers.";
    
        //HUNTER//
    if ((food < hunterCost)||(population == populationMax)) {document.getElementById('hunterDisplay').innerHTML = Math.round(hunterCost*100)/100 + " food.";
                            document.getElementById('hunterDisplay').style.color = "red";
                            document.getElementById('hunterDisplay').style.textShadow = "1px 1px 1px black";                           
                           } else {
                            document.getElementById('hunterDisplay').innerHTML = Math.round(hunterCost*100)/100 + " food.";
                            document.getElementById('hunterDisplay').style.color = "lime";
                            document.getElementById('hunterDisplay').style.textShadow = "1px 1px 1px black"; 
                           }
    document.getElementById('tooltipHunter').innerHTML = "Skilled in hunting for wild animals. Each hunter costs: " + Math.round(hunterCost*100)/100 + " food. You have: " + hunter + " Hunters.";
    
        //GATHERER//
     document.getElementById('gathererDisplay').innerHTML = Math.round(gathererCost*100)/100 + " food.";
    document.getElementById('tooltipGatherer').innerHTML = "Dedicated to gathering building materials. Each gatherer costs: " + Math.round(gathererCost*100)/100 + " food. You have: " + gatherer + " Gatherers.";
    if ((food < gathererCost)||(population == populationMax)) {
        document.getElementById('gathererDisplay').style.color = "red";
        document.getElementById('gathererDisplay').style.textShadow = "1px 1px 1px black";
    } else {
        document.getElementById('gathererDisplay').style.color = "lime";
        document.getElementById('gathererDisplay').style.textShadow = "1px 1px 1px black";
    }
    
    
        //BUILDER//
    document.getElementById('builderDisplay').innerHTML = Math.round(builderCost*100)/100 + " food.";
    document.getElementById('builderDisplay').style.textShadow = "1px 1px 1px black";
    document.getElementById('tooltipBuilder').innerHTML = "Specialized in building, gives little resources but each builder lower the costs of buildings multiplier in 1%. Each builder costs: " + Math.round(builderCost*100)/100 + " food. You have: " + builder + " Builders. Multiplier is at: " + Math.round(buildingcostMultiplier*100)/100 + " Cannot go below 1.05";
    if ((food < builderCost)||(population == populationMax)) {
        document.getElementById('builderDisplay').style.color = "red";
    } else {
        document.getElementById('builderDisplay').style.color = "lime";
    }

    
        //SHAMAN//
    if ((food < shamanCost)||(population == populationMax)) {
        document.getElementById('shamanDisplay').style.color = "red";
    } else {
        document.getElementById('shamanDisplay').style.color = "lime";
    }
    document.getElementById('shamanDisplay').style.textShadow = "1px 1px 1px black";
    document.getElementById('shamanDisplay').innerHTML = Math.round(shamanCost*100)/100 + " food.";
    document.getElementById('tooltipShaman').innerHTML = "The first type of spiritual leader of your civilization, generates aether. Each shaman costs: " + Math.round(shamanCost*100)/100 + " food. You have: " + shaman + " Shamans."
    
    //MILITARY UNITS//
    
        //MILITIA//
    if ((villager < 1)||(material < 5)||(luxury < 5)) {
                            document.getElementById('militiaDisplay').innerHTML = "1 vil, " + militiaCost + " mat and lux";
                            document.getElementById('militiaDisplay').style.color = "red";
                            document.getElementById('militiaDisplay').style.textShadow = "1px 1px 1px black";
                            }  else {
                            document.getElementById('militiaDisplay').innerHTML = "1 vil, 5 mat and lux";
                            document.getElementById('militiaDisplay').style.color = "lime";
                            document.getElementById('militiaDisplay').style.textShadow = "1px 1px 1px black";
                                                            }                         
    document.getElementById('tooltipMilitia').innerHTML = "The militia is the first type of military unit in game! Each militia costs: 1 villager, 5 material and 5 luxury, each granting military strength. You have: " + militia + " Militia on duty.";
    
        //ARCHER//
    if ((food < archerCost)||(population == populationMax)||(material < archerCost)||(luxury < archerCost)) {
                            document.getElementById('archerDisplay').innerHTML = Math.round(archerCost*100)/100 + " of all.";
                            document.getElementById('archerDisplay').style.color = "red";
                            document.getElementById('archerDisplay').style.textShadow = "1px 1px 1px black";
                            }  else {
                            document.getElementById('archerDisplay').innerHTML = Math.round(archerCost*100)/100 + " of all.";
                            document.getElementById('archerDisplay').style.color = "lime";
                            document.getElementById('archerDisplay').style.textShadow = "1px 1px 1px black";
                                                            }                         
    document.getElementById('tooltipArcher').innerHTML = "A trained archer, ready to defend your village! Each archer costs: " + Math.round(archerCost*100)/100 + " food, material and luxury, each granting military strength. You have: " + archer + " Archers on duty.";
    
    //RESEARCH//
    
         if (science >= researchCost * researchMultiplier) {
        document.getElementById('agricultureDisplay').style.color = "lime"
        document.getElementById('miningDisplay').style.color = "lime"
    } else {
        document.getElementById('agricultureDisplay').style.color = "red"
        document.getElementById('miningDisplay').style.color = "red"
    }
    
        //AGRICULTURE//
     document.getElementById('agricultureDisplay').style.textShadow = "1px 1px 1px black";
    if (agriculture != 1) {
        document.getElementById('agricultureDisplay').innerHTML = Math.round(researchCost*researchMultiplier*100)/100 + " science.";
        document.getElementById('tooltipAgriculture').innerHTML = "The first root of civilization. Costs: " + Math.round(researchCost*researchMultiplier*100)/100 + " science. Boosts your gathering clicks.";
    } else {
        document.getElementById('tooltipAgriculture').innerHTML = "The first root of civilization. Boosts your gathering clicks.";
        document.getElementById('agricultureDisplay').innerHTML = "Owned.";
        document.getElementById('agricultureDisplay').style.color = "blue";
    }   
    
        //MINING//
     document.getElementById('miningDisplay').style.textShadow = "1px 1px 1px black";
     if (mining != 1) {
        document.getElementById('miningDisplay').innerHTML = Math.round(researchCost*researchMultiplier*100)/100 + " science.";
        document.getElementById('tooltipMining').innerHTML = "The ability to extract resources from the earth. Costs: " + Math.round(researchCost*researchMultiplier*100)/100 + " science. Boosts your workers.";
    } else {
        document.getElementById('miningDisplay').innerHTML = "Owned.";
        document.getElementById('miningDisplay').style.color = "blue";
        document.getElementById('tooltipMining').innerHTML = "The ability to extract resources from the earth. Boosts your workers.";
    }
    
    
    if (agriculture == 1) {document.getElementById('miningDiv').style.visibility = "visible";}
    
    //WONDERS//
    
    
        //TEMPLE OF ARTEMIS//  
    
}
    
      
 
//RESOURCE GENERATION//
function generateResource() {
    food += foodProduction;
    material += materialProduction;
    luxury += luxuryProduction;
    science += scienceProduction;
    aether += aetherProduction;
}

//MILITARY AND ENEMIES//
var enemyStrengthGlobal = 0

function enemyAppear() {
    var d = Math.random();
    if (d < 0.33) {
        //var enemyStrength = Math.floor(Math.random() * (militaryStrength * 1.15));
        var enemyStrength = Math.floor(Math.random() * (militaryStrength) * 1.15) + 1;
        enemyStrengthGlobal = enemyStrength;
        document.getElementById('enemy').style.visibility = "visible";
        document.getElementById('enemyStrength').value = enemyStrengthGlobal;
        document.getElementById('enemyStrength').style.visibility = "visible";
        enemy = enemy + 1;
        document.getElementById('enemyCount').value = enemy;
        document.getElementById('enemyCount').style.visibility = "visible";
    }
}

function attackEnemy() {
    if (militaryStrength >= enemyStrengthGlobal) {
    enemy = enemy - 1;
    document.getElementById('enemyCount').value = enemy;
    //var enemyStrength = Math.floor(Math.random() * (militaryStrength * 1.15))
    var enemyStrength = Math.floor(Math.random() * (militaryStrength) * 1.15) + 1;
    enemyStrengthGlobal = enemyStrength;
    document.getElementById('enemyStrength').value = enemyStrengthGlobal;
    if (enemy < 1) {
    document.getElementById('enemy').style.visibility = "hidden";
    document.getElementById('enemyStrength').style.visibility = "hidden";
    document.getElementById('enemyCount').style.visibility = "hidden";
        }
    }
}

function enemyPillage() {
    if (luxury >= (enemy * enemyStrengthGlobal)/4){
        luxury = luxury - (enemy * enemyStrengthGlobal)/4;
        if (luxury < (enemy * enemyStrengthGlobal)/4) {
            luxury = 0;
        }
    }
    else if (material >= (enemy * enemyStrengthGlobal)/4){
        material = material - (enemy * enemyStrengthGlobal)/4;
        if (material < (enemy * enemyStrengthGlobal)/4) {
            material = 0;
        }
    }
    else if (food >= (enemy * enemyStrengthGlobal)/4){
        food = food - (enemy * enemyStrengthGlobal)/4;
        if (food < (enemy * enemyStrengthGlobal)/4) {
            food = 0;
        }
    }
    else {
        enemy = enemy - 1
        document.getElementById('enemyCount').value = enemy;
        //var enemyStrength = Math.floor(Math.random() * (militaryStrength * 1.15))
        var enemyStrength = Math.floor(Math.random() * (militaryStrength) * 1.15) + 1;
        enemyStrengthGlobal = enemyStrength;
        document.getElementById('enemyStrength').value = enemyStrengthGlobal;
        if (enemy < 1) {
        document.getElementById('enemy').style.visibility = "hidden";
        document.getElementById('enemyStrength').style.visibility = "hidden";
        document.getElementById('enemyCount').style.visibility = "hidden";
            }
        }
    }




/*{
    var d = Math.random();
    if (enemy > 0) {
        if (d < 0.1) {
            if (camp > 0) {
            camp = camp - 1;
            campCost = campCost / buildingcostMultiplier;
            buildingcostMultiplier = buildingcostMultiplier - (buildingcostMultiplier/400)
            }
        }
        else if (d < 0.5) {
            if (villager > 0){
            villager = villager - 1;
            villagerCost = villagerCost / unitcostMultiplier;
            population = population - 1;
            }
        }
        else {
            if (food > (10 * enemy)) {
            food = food - (10 * enemy);
            }
            else {
                food = 0;
            }
        }
    }
} */


//TIMER GOES HERE//
            //10 Seconds intervals//
setInterval(enemyAppear, 10000);

            //1 Second intervals//
setInterval(generateResource, 1000);

            //1/4 Second intervals//
setInterval(enemyPillage, 250);
            
            //1/10 Second intervals//
setInterval(compoundVar, 100);