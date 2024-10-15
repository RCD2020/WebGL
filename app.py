from flask import Flask, render_template


app = Flask(__name__)


def load_shader(filename):
    with open('shaders/' + filename + '.frag', 'r') as f:
        text = f.read()

    return text


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chapter/<chapter>')
def chapter(chapter):
    return render_template('chapters/' + chapter + '.html')

@app.route('/shaders/<shader>')
def shader(shader):
    return render_template('shader.html', title=shader, shader=load_shader(shader))

@app.route('/code/<shader>')
def code(shader):
    text = load_shader(shader)
    return render_template('code.html', title=shader, text=text)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='24147', debug=True)