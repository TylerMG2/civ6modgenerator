enum Ethnicity {
    ETHNICITY_AFRICAN = "African",
    ETHNICITY_ASIAN = "Asian",
    ETHNICITY_EURO = "European",
    ETHNICITY_MEDIT = "Mediterranean",
    ETHNICITY_SOUTHAM = "South American",
}

interface Geography {
    mountains: string[];
    rivers: string[];
    lakes: string[];
    seas: string[];
    deserts: string[];
    volcanoes: string[];
}

enum Terrain {
    TERRAIN_GRASS = "Grassland",
    TERRAIN_GRASS_HILLS = "Grassland Hills",
    TERRAIN_GRASS_MOUNTAIN = "Grassland Mountain",
    TERRAIN_PLAINS = "Plains",
    TERRAIN_PLAINS_HILLS = "Plains Hills",
    TERRAIN_PLAINS_MOUNTAIN = "Plains Mountain",
    TERRAIN_DESERT = "Desert",
    TERRAIN_DESERT_HILLS = "Desert Hills",
    TERRAIN_DESERT_MOUNTAIN = "Desert Mountain",
    TERRAIN_TUNDRA = "Tundra",
    TERRAIN_TUNDRA_HILLS = "Tundra Hills",
    TERRAIN_TUNDRA_MOUNTAIN = "Tundra Mountain",
    TERRAIN_SNOW = "Snow",
    TERRAIN_SNOW_HILLS = "Snow Hills",
    TERRAIN_SNOW_MOUNTAIN = "Snow Mountain",
    TERRAIN_COAST = "Coast",
    TERRAIN_OCEAN = "Ocean",
}

enum Feature {
    FEATURE_FLOODPLAINS = "Floodplains",
    FEATURE_ICE = "Ice",
    FEATURE_JUNGLE = "Jungle",
    FEATURE_FOREST = "Forest",
    FEATURE_OASIS = "Oasis",
    FEATURE_MARSH = "Marsh",
    FEATURE_BARRIER_REEF = "Barrier Reef",
    FEATURE_CLIFFS_DOVER = "Cliffs of Dover",
    FEATURE_CRATER_LAKE = "Crater Lake",
    FEATURE_DEAD_SEA = "Dead Sea",
    FEATURE_EVEREST = "Mount Everest",
    FEATURE_GALAPAGOS = "Galapagos Islands",
    FEATURE_KILIMANJARO = "Mount Kilimanjaro",
    FEATURE_PANTANAL = "Pantanal",
    FEATURE_PIOPIOTAHI = "Piopiotahi",
    FEATURE_TORRES_DEL_PAINE = "Torres del Paine",
    FEATURE_TSINGY = "Tsingy",
    FEATURE_YOSEMITE = "Yosemite",
}

enum Resource {
    RESOURCE_BANANAS = "Bananas",
    RESOURCE_CATTLE = "Cattle",
    RESOURCE_COPPER = "Copper",
    RESOURCE_CRABS = "Crabs",
    RESOURCE_DEER = "Deer",
    RESOURCE_FISH = "Fish",
    RESOURCE_RICE = "Rice",
    RESOURCE_SHEEP = "Sheep",
    RESOURCE_STONE = "Stone",
    RESOURCE_WHEAT = "Wheat",
    RESOURCE_CITRUS = "Citrus",
    RESOURCE_COCOA = "Cocoa",
    RESOURCE_COFFEE = "Coffee",
    RESOURCE_COTTON = "Cotton",
    RESOURCE_DIAMONDS = "Diamonds",
    RESOURCE_DYES = "Dyes",
    RESOURCE_FURS = "Furs",
    RESOURCE_GYPSUM = "Gypsum",
    RESOURCE_INCENSE = "Incense",
    RESOURCE_IVORY = "Ivory",
    RESOURCE_JADE = "Jade",
    RESOURCE_MARBLE = "Marble",
    RESOURCE_MERCURY = "Mercury",
    RESOURCE_PEARLS = "Pearls",
    RESOURCE_SALT = "Salt",
    RESOURCE_SILK = "Silk",
    RESOURCE_SILVER = "Silver",
    RESOURCE_SPICES = "Spices",
    RESOURCE_SUGAR = "Sugar",
    RESOURCE_TEA = "Tea",
    RESOURCE_TOBACCO = "Tobacco",
    RESOURCE_TRUFFLES = "Truffles",
    RESOURCE_WHALES = "Whales",
    RESOURCE_WINE = "Wine",
    RESOURCE_JEANS = "Jeans",
    RESOURCE_PERFUME = "Perfume",
    RESOURCE_COSMETICS = "Cosmetics",
    RESOURCE_TOYS = "Toys",
    RESOURCE_CINNAMON = "Cinnamon",
    RESOURCE_CLOVES = "Cloves",
    RESOURCE_ALUMINUM = "Aluminum",
    RESOURCE_COAL = "Coal",
    RESOURCE_HORSES = "Horses",
    RESOURCE_IRON = "Iron",
    RESOURCE_NITER = "Niter",
    RESOURCE_OIL = "Oil",
    RESOURCE_URANIUM = "Uranium",
    RESOURCE_ANTIQUITY_SITE = "Antiquity Site",
    RESOURCE_SHIPWRECK = "Shipwreck",
}

interface StartingBias<T> {
    type: T;
    scale: 1 | 2 | 3 | 4 | 5;
}

interface Civilisation {
    name: string;
    description: string;
    adjective: string;
    ethnicity: Ethnicity;
    maleCitizens: string[];
    femaleCitizens: string[];

    geography: Geography;

    startingBiasTerrain: StartingBias<Terrain>[];
    startingBiasFeature: StartingBias<Feature>[];
    startingBiasResource: StartingBias<Resource>[];
    startingBiasRiver: StartingBias<"River">[];
}

export type { Civilisation, Geography, StartingBias };
export { Ethnicity, Terrain, Feature, Resource };