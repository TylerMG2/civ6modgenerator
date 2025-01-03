from Civilization_Config import Civilization

civ = Civilization(prefix='JHA', # Must be english
                   name={'en_US': 'Newport'}, # dict of languages, ENGLISH IS REQUIRED
                   description={'en_US': 'Newport Empire'}, # dict of langs
                   adjective={'en_US': 'Newportians'}, # dict of langs
                   city_names=[{'en_US': 'Newport Station'}, {'en_US': 'Newport Sidings'}],
                   ethnicity='ETHNICITY_EURO'
                    )

with open('./backend/sql_out.sql', 'w+') as file:
    file.write(civ.civilization_config())