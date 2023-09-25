from Civilization_Config import Civilization

civ = Civilization('TMG', 'Tylereth', 'Gwinethstine Empire', 'Tylers', ['Spotswood', 'Scienceworks'], 'ETHNICITY_EURO')

with open('./backend/sql_out.sql', 'w+') as file:
    file.write(civ.civilization_config())