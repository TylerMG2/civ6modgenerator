class Localzation:
    locs = [{}]

    def __init__(self, locs):
        if type(locs) == dict:
            self.locs = [locs]
        else:
            self.locs = locs

    def eng_list(self):
        """
        Returns a list of the English names of all items
        """
        return [v['en_US'] for v in self.locs]
    
    def lang_list(self, lang):
        """
        Returns a list of a specified language's names of all items
        """
        return [v[lang] for v in self.locs]