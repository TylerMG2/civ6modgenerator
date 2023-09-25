class Table:

    name = ''
    columns = []
    rows = [[]]
    comment = ''

    # Init
    def __init__(self, name, columns, rows, comment=''):
        self.name = name
        self.columns = columns
        self.rows = rows
        if comment == '':
            self.comment = self.name.title()
        else:
            self.comment = comment

    #def __str__(self):
    #    return f"-- {self.comment}" + "\n" f"Table: {self.name}" + "\n" + ',\t'.join(self.columns) + "\n" + '\n'.join([',\t'.join(row) for row in self.rows])

    def __str__(self):
        return self.table_comment(self.comment) + self.table_header_insert(self.name, self.columns) + self.table_rows_insert(self.rows)

    def table_comment(self, comment: str):
        """
        Adds an SQL comment to be used before a table
        """
        return f"-- {comment}" + "\n\n"

    def table_header_insert(self, table_name: str, column_headers: list) -> str:
        """
        Creates the heading and column titles for INSERT tables
        """

        # Put each column value into tab separated values
        column_headers_str = ',\t'.join(column_headers)

        return f'INSERT INTO {table_name}\n\t\t\t({column_headers_str})\nVALUES\t\t'

    def table_rows_insert(self, rows: list):
        ### Turns a list of lists into SQL format

        # Convert each row list to string with .join
        row_strings = []
        for row in rows:
            # Add strings to values
            row = [self.add_strings_to_value(item) for item in row]
            row_string = ',\t'.join(row)
            row_strings.append(row_string)

        # Define the table string
        table_str = ''

        # Add Brackets, New lines, and indents for each row EXCEPT the last
        for row in row_strings[0:-1]:
            table_str += "(" + row + "),\n\t\t\t"
        
        # Add the final row, with a semicolon
        table_str += "(" + row_strings[-1] + ");"

        return table_str

    def add_strings_to_value(self, value: str):
        ### Check value if it requires a string in SQL

        if value.isdecimal():
            return value
        if value == 'null':
            return value

        value.replace("'", "''")
        return "'" + value + "'"

if __name__ == "__main__":
    t = Table('types', ['civ', 'kind'], [['altona', 'kind_civ']], comment='adds civ to ting')
    print(t)