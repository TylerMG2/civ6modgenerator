from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('/index.html')

@app.route('/generate', methods=['POST'])
def generate():
    leader_name = request.form.get('leader_name')
    civilization = request.form.get('civilization')
    # Generate SQL query
    query = f"INSERT INTO Leaders (LeaderType, Name, CivilizationType) VALUES ('LEADER_{leader_name.upper()}', '{leader_name}', '{civilization}');"
    return jsonify({"query": query})

if __name__ == '__main__':
    app.run(debug=True)
