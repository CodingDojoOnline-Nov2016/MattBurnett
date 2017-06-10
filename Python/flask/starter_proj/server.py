from flask import Flask, redirect, render_template, request, session

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

        superpowers = [
        {'name': 'bruce wayne',
        'abilities': ['money', 'cool suit', 'Alfred']
        'hero_name': 'batman',
        'nemesis': 'the joker'
        },
        {'name': 'clark kent',
        'abilities': ['laser vision', 'flight', 'x-ray vision']
        'nemesis': 'lex luthor'
        }
        ]



return render_template ('index.html')
