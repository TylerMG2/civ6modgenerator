class Civilisation:

    # Basic attributes
    prefix = ""
    name = ""
    color = ""
    icon = ""

    # Init
    def __init__(self, prefix):
        self.prefix = prefix

    # To sql
    def to_sql(self):

        


        return (self.prefix, self.name, self.color, self.icon) + self.type.to_sql()

    # To Json
    def to_json(self):
        return {"name": self.name, "color": self.color, "icon": self.icon, "type": self.type.to_json()}

# Leader class
class Leader:

    # Basic attributes
    prefix = ""
    name = ""
    color = ""
    icon = ""

    # Init
    def __init__(self, prefix):
        self.prefix = prefix

    # To sql
    def to_sql(self):
        return (self.prefix, self.name, self.color, self.icon)

    # To Json
    def to_json(self):
        return {"name": self.name, "color": self.color, "icon": self.icon}


class User:

    # Basic attributes
    prefix = ""
    civ = None
    leaders = []

    # Init
    def __init__(self, prefix):
        self.prefix = prefix
        self.civ = Civilisation(prefix)
        self.leaders = [Leader(prefix)]
    
    # To sql
    def to_sql(self):
        return (self.prefix, self.civ.prefix, self.leaders[0].prefix)
    
    # To Json
    def to_json(self):
        return {"prefix": self.prefix, "civ": self.civ.to_json(), "leaders": [leader.to_json() for leader in self.leaders]}

civType = CivilisationType("prefix", "name")
civ = Civilisation("prefix", civType)