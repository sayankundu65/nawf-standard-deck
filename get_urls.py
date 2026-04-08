import re
with open('urls.py', 'r') as f:
    text = f.read()
matches = re.findall(r'1[a-zA-Z0-9_-]{32}', text)
unique_links = list(dict.fromkeys(matches))
with open('urls.txt', 'w') as f:
    for i in unique_links:
        f.write('"https://lh3.googleusercontent.com/d/' + i + '",\n')
