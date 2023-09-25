from package import *

class Civilization:
    
    prefix = ''
    name = ''
    var_name = ''
    description = ''
    adjective = ''
    ethnicity = ''
    city_names = []
    citizen_male_names = []
    citizen_female_names = []
    named_mountains = []
    named_rivers = []
    named_lakes = []
    named_seas = []
    named_deserts = []
    named_volcanoes = []
    pedia_location = ''
    pedia_size = ''
    pedia_population = ''
    start_terrains = {} # {terrain: tier1-5}    eg {'TERRAIN_COAST': 2}
    start_features = {}
    start_resources = {}
    start_rivers = 0

    # Init
    def __init__(self, prefix, name, description='', adjective='', city_names=[], ethnicity=''):
        self.prefix = prefix.upper()
        self.name = name
        self.var_name = name.replace("'", "").replace(' ', '_').upper()
        self.description = description
        self.adjective = adjective
        self.city_names = city_names
        self.ethnicity = ethnicity

    def civilization_config(self):
        """
        Creates all tables for the Civilization_Config.sql file
        """

        tables = [
            # Civilization Type
            Table('Types', 
                  ['Type', 'Kind'], 
                  [[f'CIVILIZATION_{self.prefix}_{self.var_name}', 'KIND_CIVILIZATION']], 
                  'Adds the Civilization into Types'
                  ).__str__(),

            # Civilization Init
            Table('Civilizations', 
                  ['CivilizationType', 'Name', 'Description', 'Adjective', 'StartingCivilizationLevelType', 'RandomCityNameDepth', 'Ethnicity'], 
                  [[f'CIVILIZATION_{self.prefix}_{self.var_name}', f'LOC_CIVILIZATION_{self.prefix}_{self.var_name}_NAME', f'LOC_CIVILIZATION_{self.prefix}_{self.var_name}_DESCRIPTION', f'LOC_CIVILIZATION_{self.prefix}_{self.var_name}_ADJECTIVE', 'CIVILIZATION_LEVEL_FULL_CIV', str(self.city_names.__len__()), self.ethnicity]], 
                  'Adds the Civilization Info into Civilizations'
                  ).__str__(),
            
            # City Names - Delete this if leader city names is just better
            Table('CityNames',
                  ['CivilizationType', 'CityName'],
                  [[f'CIVILIZATION_{self.prefix}_{self.var_name}', f'LOC_CITY_NAME_{self.prefix}_{self.var_name}_{c_name.replace(" ", "_").replace(chr(39), "").upper()}'] for c_name in self.city_names],
                  'Adds city names to the Civilization'
                  ).__str__(),
        ]

        return '\n\n'.join(tables)
