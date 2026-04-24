import random
original = [
    'https://lh3.googleusercontent.com/d/1T2SrzELf76DlpwnKTgHeuZMnClOfEfuT', 'https://lh3.googleusercontent.com/d/1lwIhSTT8GeDNLcvjH5hd91LtOgenFeqd',
    'https://lh3.googleusercontent.com/d/1seX8XBTDBs2UpUGFTf7bkIF4CeRrbMhH', 'https://lh3.googleusercontent.com/d/1b54tQlRlpZUl6XhVDRJuexZOlgp9Llnw',
    'https://lh3.googleusercontent.com/d/12ILpN8_GaxStZe-_VHeIG6JKcAcCy1J_', 'https://lh3.googleusercontent.com/d/1wttYz5yaNrho_VHKZIVdpxvafUkT_uxM',
    'https://lh3.googleusercontent.com/d/1FTjlgEaU_dEnldjZqkAyooPS7ldjERwD', 'https://lh3.googleusercontent.com/d/1xCKUjr1vCFBn62xd7AmFDefvyj6GBSHy',
    'https://lh3.googleusercontent.com/d/1mxYTaSgfZ6cbhCIF_SD8kLknCPc_ECCH', 'https://lh3.googleusercontent.com/d/1azwhfivMn9gawE12ATOFuq7kydzbRYrZ',
    'https://lh3.googleusercontent.com/d/1gSgo5SXWjDnpTFZSWI4c-WgfPzqzF3uu', 'https://lh3.googleusercontent.com/d/1nrYpWLqOBnQo1fET_2XK9IYzaGgfT-fo',
    'https://lh3.googleusercontent.com/d/1fV9BT5PmoxM6Qz_PUMe_fpXB8AaiTc87', 'https://lh3.googleusercontent.com/d/15hKbJAyzy46WjGA04zhkZyvGGtKCZ9Ia',
    'https://lh3.googleusercontent.com/d/1jRR8Wpm-Vf0eF-O0GUzZxkDzxVqipJWo', 'https://lh3.googleusercontent.com/d/1Jnkbomy7vHmDva0OuB0t3P4kW6SkLkit',
    'https://lh3.googleusercontent.com/d/16NxyrB762wFiQxwkxHCSJMx7Cpa4G5zV', 'https://lh3.googleusercontent.com/d/1OHlQzlT0xYLh0LOC2NP_VPAUbeXrTWY9',
    'https://lh3.googleusercontent.com/d/1h7_NqRkmGz1F34aBbmuwqlllC8ZMQ6Q-', 'https://lh3.googleusercontent.com/d/1ilLRaw75hHL-9K66wCmsIpM7qup8kuFl',
    'https://lh3.googleusercontent.com/d/1R1fm3dTbLvAhro1n3A9hJ0EP1ACTkkHj', 'https://lh3.googleusercontent.com/d/1nlYfAezg0TR1rY07xwGzxTeYHTkS0MtI',
    'https://lh3.googleusercontent.com/d/1WHuzUzRQaRuku5vTtYVUlFHlODceB-My', 'https://lh3.googleusercontent.com/d/1p5H4g6F2rZ87sB1q0h0_vBOMQIfs1722',
    'https://lh3.googleusercontent.com/d/17yv7z-t3nS5Jz8tL9P4x_lR7c8j9q7kR', 'https://lh3.googleusercontent.com/d/1G7ZJgG1t8X9hQ7GgTqR7RzN3H3x7k7J',
    'https://lh3.googleusercontent.com/d/1xP7iMv6c-8_4yR8wU7sYk8b3H1Qv8n2z', 'https://lh3.googleusercontent.com/d/1sR7A7vX1yF1k7D1zXyD8jZzU7G3z3Zq2',
    'https://lh3.googleusercontent.com/d/1M-8_ZJ7qQW7U2K2vB0K2R0Y4cQ8vM3C', 'https://lh3.googleusercontent.com/d/1I_xQy9K7W9d1w1vH_rK0Z2m7U7xX5x5M',
    'https://lh3.googleusercontent.com/d/1B7n2q_l2B2h6bU4p2n1K2_9F5U0U3u4Y', 'https://lh3.googleusercontent.com/d/1D5Yp6gQ9C2m1Q7F8N6F5N4qX7G9L7Z1T',
    'https://lh3.googleusercontent.com/d/1CVDlKCs5LGbhVeXDnmEUF5UjfojS0O1J', 'https://lh3.googleusercontent.com/d/1pciB1fEkUiYgBe51tA0gYW8Dz-4hamkh',
    'https://lh3.googleusercontent.com/d/1q-XqWcqpPyRGxlytAPQvvl701wPb2e4x', 'https://lh3.googleusercontent.com/d/1wiOOFcXddpoKPG9BcbGidyLp_LC4KAEX',
    'https://lh3.googleusercontent.com/d/1ZlIjEWMxnG17yrP3yo9998rZozrasAHn', 'https://lh3.googleusercontent.com/d/1QiUH2tQw49sEzbq16vF2ohVlDgxa3ztR',
    'https://lh3.googleusercontent.com/d/19K6pzTpUvQeKPiSthcq4C7MwdWOY-bPX', 'https://lh3.googleusercontent.com/d/1kYgd4k8-XywocDJq6v5c_RKod5QAj_u3',
    'https://lh3.googleusercontent.com/d/158-vnKHfKcNXp6ynne4Ikio7qB6C0rdi', 'https://lh3.googleusercontent.com/d/1yG9ac_GL_Y4pMNs1eGLv-b19GQcqJDG1',
    'https://lh3.googleusercontent.com/d/1nqX33l5q35aWR5MnPJQ2vlSkODn1n64M', 'https://lh3.googleusercontent.com/d/1aRHBXjVamaMAkTZU3OxGC4RwlVMOhman',
    'https://lh3.googleusercontent.com/d/1Z_aIRoa8eQaiJjeCh9tUu13uMBtpjqS2', 'https://lh3.googleusercontent.com/d/1m08r5HgDvtUjj2tjdKXN7OksYJ-jtIMZ',
    'https://lh3.googleusercontent.com/d/1hIiiE3N6iAKNKXmtGM4dk13jKENlgc2u', 'https://lh3.googleusercontent.com/d/1__N3S6tPyv0nRprtfmczDQUb4f_dQ2rR',
    'https://lh3.googleusercontent.com/d/1BV_s9vqnkYt6N-EcqqbFefQwSAZxiG6K', 'https://lh3.googleusercontent.com/d/1NXvQHy0TWe48EYiaJP_LG6b_MHfZY_y4',
    'https://lh3.googleusercontent.com/d/1T2lwBttxgIPYXgl9SKpm-sJTQ1sQ-HWf', 'https://lh3.googleusercontent.com/d/1rGVygeBoFE40PU9ruM457-wbo336gRTn',
    'https://lh3.googleusercontent.com/d/1U4Vbovw_qpTQeX9pe2FzXSBfa8WBUH7M', 'https://lh3.googleusercontent.com/d/1R4HSO7nQULObjKni-ypBrc89fg1MCMmH',
    'https://lh3.googleusercontent.com/d/1yk1vDOiY-IraP9W68p_ulRmWKcvfNyh6', 'https://lh3.googleusercontent.com/d/1AQBY6i8aV4dfuVItZTARcMLhoiCMDXom',
    'https://lh3.googleusercontent.com/d/1H2kxQqV19tfF68BlD4sftP76TIb7Rm7Q', 'https://lh3.googleusercontent.com/d/1Qc6KFE2aBDtbrMiIOrO069YlRB80QewQ',
    'https://lh3.googleusercontent.com/d/1jF_mUXc39ntzNsVWXJSBjcjQYz4eHRuc', 'https://lh3.googleusercontent.com/d/1vlKTGc0Tx_DfCnqIZgUHRoxn6y-hb46i',
    'https://lh3.googleusercontent.com/d/1wxyv9MtdwgdbZ9ByY1JevZyIXolCKImI', 'https://lh3.googleusercontent.com/d/1iG91rJ5BR8mng1kZcN51j85DSrQFXTQ_',
    'https://lh3.googleusercontent.com/d/12S_Jnru7vbwShRRb35PQQrt3uIDUVa5p', 'https://lh3.googleusercontent.com/d/169pQwATKewDPFK93i2aWy7lwOKYK_PyV',
    'https://lh3.googleusercontent.com/d/1Mi3A8umhfG4BopibuETvPbXj7A5oO-Pn', 'https://lh3.googleusercontent.com/d/1BcHU1_QGWpc4CqSYwWKYAa2uaMfG9d_8',
    'https://lh3.googleusercontent.com/d/1anhqL-miAbYaQIRE8sv4ZvtMjtCtj2Nr', 'https://lh3.googleusercontent.com/d/1pOt6QaxP8bzDC0Rmlr347Vtcdp0evz04',
    'https://lh3.googleusercontent.com/d/1EOwt9P8eB2DnnMwSC_yDR1iU_GK6A1FS', 'https://lh3.googleusercontent.com/d/1fHxlQ9O8V-sMSFdM8vTd2GZD1Js-_pY6',
    'https://lh3.googleusercontent.com/d/13qwJGFMBpW8RNhw3mM9PHTGB5EFyoPpN', 'https://lh3.googleusercontent.com/d/1FchdNn41ntOeaoOCFEx5PPQmVFkwqh_A',
    'https://lh3.googleusercontent.com/d/1ldtST3GvmtfEOU1npxGg57oTBSIdgniO', 'https://lh3.googleusercontent.com/d/1nwaAheLWT6huXrakTeuwba6VLX3CYWLr',
    'https://lh3.googleusercontent.com/d/1Gm6fFQD5QiUzoYMXfyuiBwo-OGGsyf1K', 'https://lh3.googleusercontent.com/d/1xnG_zR-gO3LNWh-NPsES_JFXFHt_rogv',
    'https://lh3.googleusercontent.com/d/1Ta5aGWvYDDPIVkPeS1ZF7T7_p8uiqngz', 'https://lh3.googleusercontent.com/d/1hHt8cc3UH4o5Fo7Usp5_Cyy4leVuO5Gk',
    'https://lh3.googleusercontent.com/d/1qkH-uNsEddC5vYv7YihxdRXQBmzwyWCR', 'https://lh3.googleusercontent.com/d/1RtST8wZD8VDu8558V4CNZgJImBGbBto4',
    'https://lh3.googleusercontent.com/d/17ofijIo91N5uy6TT_YA8Ln2GobPahbsf', 'https://lh3.googleusercontent.com/d/1NjehlnDARHTmPlnZ1g7qLJUuRGlwaq8u',
    'https://lh3.googleusercontent.com/d/1eZc0ogSWP_HJI_l-nV4nTF1BtEc1Sp8n', 'https://lh3.googleusercontent.com/d/1RDM2a4cb_n2sJcb52szehWhvjLGzXqiH',
    'https://lh3.googleusercontent.com/d/1CxLwcV-x3ibCGh__N1K5juv8vEoeoE4D', 'https://lh3.googleusercontent.com/d/1GAeKMkpir7kElhL0wKvAt1iGqoGavLL5',
    'https://lh3.googleusercontent.com/d/1ENLqKrRjpqnEswl1qFYGixnWxFt3XvEz', 'https://lh3.googleusercontent.com/d/1hmeVcEJOHFxdxUzznlnIHYmVl5GX54T6',
    'https://lh3.googleusercontent.com/d/1DeyZmBFHxZvY4tpDzgRYGzOisZKA0a3M', 'https://lh3.googleusercontent.com/d/1-vRuFIv8Ao9gQE5RoBYpQ_jfp7JxA-7s',
    'https://lh3.googleusercontent.com/d/1LmZazSWNzLDFqiJntmmkDDOIEsF7lLIy', 'https://lh3.googleusercontent.com/d/1qfQB3AWNBTBwN7gx1lSFQyDOmOqCL3-h',
    'https://lh3.googleusercontent.com/d/1c0R5wrvpwfCHz7C-LeeznSumIn-FKII-', 'https://lh3.googleusercontent.com/d/1t0cPjWLUMIzOBfItw6mNfdmRXzEbF9p-',
    'https://lh3.googleusercontent.com/d/1gNCHuytYFSUhqHrQ7bY0crXh6wq48H0b', 'https://lh3.googleusercontent.com/d/1bdXQSbrVZYKDrKaEWXyiwXlDSLPYT6LT',
    'https://lh3.googleusercontent.com/d/11Ie5f11gwqqjnEWyAgD7P9UAvAjiGJQw', 'https://lh3.googleusercontent.com/d/1679KhOfbbCkJo09YnARFy2tVu4bHOwg5',
    'https://lh3.googleusercontent.com/d/1JKHamA1n4Ys9KX7CAW_IQoH33AP1rJQQ', 'https://lh3.googleusercontent.com/d/1FZ0ODwVos6S-Bg5ELlZ63YuNQIWoDqBE',
    'https://lh3.googleusercontent.com/d/1tt2d268ScYA2Ptp8oXoDlgNCIHCIrXZJ', 'https://lh3.googleusercontent.com/d/1DOT26kBZw1aWRC-cbaOxwJIDc5itUFpz',
    'https://lh3.googleusercontent.com/d/1H3l6BuwBd1IdXg9CgDDibRR4D1uLZkk6', 'https://lh3.googleusercontent.com/d/1RWEmDzNFIwnbieKbbierzIvOYxtNg2Ms',
    'https://lh3.googleusercontent.com/d/1g_rIDr1fJufHDgJ1WdURWpj5q-0A6-xx'
]

new_photos = [
    'https://lh3.googleusercontent.com/d/1Pb8uEO5zRuQyvGaBvatlbxySTdg1Ogi-',
    'https://lh3.googleusercontent.com/d/1dpafRwFDBMnAO9eVRai4BjhoaEmCuDaJ',
    'https://lh3.googleusercontent.com/d/1ph-_8wRm6rSiagKLGGNIwBLAfDpr-45l',
    'https://lh3.googleusercontent.com/d/1W-lijHwbK-u0wqlRpcsX1YjxQaqyo_0L',
    'https://lh3.googleusercontent.com/d/12FkodWCts_F576PzaVFyGvmDif_iHbHH',
    'https://lh3.googleusercontent.com/d/1Hm269_Cg_az_TK4-zhUJ4Rt8msvX6s9B',
    'https://lh3.googleusercontent.com/d/1EX6xtaO8hPhoIIfmmATllWxjajFT-BK4',
    'https://lh3.googleusercontent.com/d/10ofgAmj-_aVwZUkKtm-4zD8mCPS65dGj',
    'https://lh3.googleusercontent.com/d/1R6gRudIeWF67_gFZK7_CP9dqSQlSR4l0',
    'https://lh3.googleusercontent.com/d/1LoBuGRkmJk5ubQ_8E3kNSK--K20nu5fQ',
    'https://lh3.googleusercontent.com/d/1xPVPjUNK16GCJZmWxFodwWuBmLBmYOLW',
    'https://lh3.googleusercontent.com/d/16RioDw05Y2mLj0TdkpbPu6AK9SFFBtav',
    'https://lh3.googleusercontent.com/d/1MDjHH_kZsY89c69ptlPl2KK9IxJDnh6N',
    'https://lh3.googleusercontent.com/d/129XwT1W3LL5kfik4DAGL9xGOxbWakAM3',
    'https://lh3.googleusercontent.com/d/1Gj1NKEFsQoPEjizSy-E-kJhdxhppr0WM'
]

combined = original + new_photos
random.seed(42)
random.shuffle(combined)

result = "  const photoUrls = [\n"
for url in combined:
    result += f'    "{url}",\n'
result += "  ];\n"

with open("shuffled_urls.txt", "w") as f:
    f.write(result)
print("Written to shuffled_urls.txt")
