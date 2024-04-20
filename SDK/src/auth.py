from flask import Flask, render_template, redirect ,request
from flask_socketio import SocketIO


app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        print(email,password)
        if email == 'HR':
            if password == 'HR12':
                return redirect('/HR')
        if email == 'PQ':
            if password == 'PQ12':
                return redirect('/PQ')
        if email == 'SE':
            if password == 'SE12':
                return redirect('/SE')
        if email == 'PC':
            if password == 'PC12':
                return redirect('/PC')

    return render_template('index.html')




@app.route('/login')
def index():
    return render_template('index.html')

@app.route('/')
def dashboard():
    return render_template('data.html')



@app.route('/HR')
def HR():
    return render_template('HR.html')

@app.route('/PQ')
def BM():
    return render_template('BM.html')


@app.route('/SE')
def CS():
    return render_template('CS.html')

@app.route('/PC')
def PC():
    return render_template('PC.html')

  
if __name__ == '__main__':
    socketio.run(app, debug=True)
