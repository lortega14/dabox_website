import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

root_files = ['index.html', '404.html']
root_replacements = {
    'href="/styles.css"': 'href="styles.css"',
    'src="/main.js"': 'src="main.js"',
    'href="/assets/': 'href="assets/',
    'src="/assets/': 'src="assets/',
    'href="/sobre-dabox"': 'href="sobre-dabox"',
    'href="/marco-legal"': 'href="marco-legal"',
    'href="/casos-de-exito"': 'href="casos-de-exito"',
    'href="/centro-de-ayuda"': 'href="centro-de-ayuda"',
    'href="/glosario"': 'href="glosario"',
    'href="/educacion-financiera"': 'href="educacion-financiera"',
    'href="/#"': 'href="index.html#"',
    'href="/#': 'href="index.html#',
    'href="/"': 'href="index.html"'
}

for f in root_files:
    if os.path.exists(f):
        replace_in_file(f, root_replacements)

subfolders = [
    'sobre-dabox', 'marco-legal', 'casos-de-exito',
    'centro-de-ayuda', 'glosario', 'educacion-financiera'
]
sub_replacements = {
    'href="/styles.css"': 'href="../styles.css"',
    'src="/main.js"': 'src="../main.js"',
    'href="/assets/': 'href="../assets/',
    'src="/assets/': 'src="../assets/',
    'href="/sobre-dabox"': 'href="../sobre-dabox"',
    'href="/marco-legal"': 'href="../marco-legal"',
    'href="/casos-de-exito"': 'href="../casos-de-exito"',
    'href="/centro-de-ayuda"': 'href="../centro-de-ayuda"',
    'href="/glosario"': 'href="../glosario"',
    'href="/educacion-financiera"': 'href="../educacion-financiera"',
    'href="/#"': 'href="../index.html#"',
    'href="/#': 'href="../index.html#',
    'href="/"': 'href="../index.html"'
}

for folder in subfolders:
    filepath = os.path.join(folder, 'index.html')
    if os.path.exists(filepath):
        replace_in_file(filepath, sub_replacements)

print("Paths fixed for GitHub Pages.")
