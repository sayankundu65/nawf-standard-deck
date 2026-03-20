with open(r'c:\Users\Sayan Kundu\.gemini\antigravity\scratch\nawf-site\src\sections\ContentProductionSection.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# The bad single-line blob to remove
import re
text = re.sub(r'\r?\n  const adSetUrls = \[\\n.*?\\n  \];\r?\n', '\n', text, flags=re.DOTALL)

# Build proper array string
urls = [
  "https://lh3.googleusercontent.com/d/1TmhbUbg8oFazqLOx5r0_BV0ub2YclnsX",
  "https://lh3.googleusercontent.com/d/1nCAM8l2OOtkdrqkvfE09JD8FaLPiPY67",
  "https://lh3.googleusercontent.com/d/1iT8G5PBcAXVSgsbl_OqrZRD0vBoqVQi7",
  "https://lh3.googleusercontent.com/d/1G_MDO9ZgBTSvkjhhFFE7JWub_oJP3ejj",
  "https://lh3.googleusercontent.com/d/1NeUebPC0gbkIc91NLeUIhy-gZF44m5t1",
  "https://lh3.googleusercontent.com/d/1U9J6K7DR_zuIA97DKflPqpa29Xc8Bbv7",
  "https://lh3.googleusercontent.com/d/1JkTPzNPA2Xs9Xy_dBqSfOojI41ZFuw6p",
  "https://lh3.googleusercontent.com/d/1ZeTEmikxnlt_iyUeHQxV5JPKh-r8R6Of",
  "https://lh3.googleusercontent.com/d/1EdBX-iNkXMU0Qea9bDNoEw29hYgwtwKg",
  "https://lh3.googleusercontent.com/d/1Yzm8bRXY-ag2oIqgzTofgf66ZLAhSAEj",
  "https://lh3.googleusercontent.com/d/15v7neYO5cEGNFvOBsJix6cLZpahuNTIa",
  "https://lh3.googleusercontent.com/d/1AY3JiEQh7akvlBzSdYHTZ2soPxpH_wz1",
  "https://lh3.googleusercontent.com/d/1WRKoEy1vkmKsvClZb9jFOaXHZ2cm5a9s",
  "https://lh3.googleusercontent.com/d/1KIkKtcne-w6ft06Y2P8wUUDVb3xBGdyl",
  "https://lh3.googleusercontent.com/d/1xs1b_WQQugxDGUEqHnjWDtKePvydFfqN",
  "https://lh3.googleusercontent.com/d/1k29JB7u4bmd2P4hyoN1s8IaHTijWEOiO",
  "https://lh3.googleusercontent.com/d/1uV3foan7j46t-ZuMWityAp5xlAKKvkyP",
  "https://lh3.googleusercontent.com/d/1fjitEILNaZjUUbDqKSFdfv8yL_MKDCeo",
  "https://lh3.googleusercontent.com/d/1gOPsTLSNDzLgkml0n4rV9RPWR9bYmoga",
  "https://lh3.googleusercontent.com/d/1bpmjOLGhZ3twieXQZYYhJ9X7INj9l6XG",
  "https://lh3.googleusercontent.com/d/1oVCF7PdvJQS2b18CaWXkmMTULnTTYZGi",
  "https://lh3.googleusercontent.com/d/1sxWmwk64Aoh0xkiAqLkb1hPcuoJ-yFeO",
  "https://lh3.googleusercontent.com/d/1EilNJKM2DuwTBgItqKhmm1_-zrW9a7lX",
  "https://lh3.googleusercontent.com/d/1eqUDyAgAa4OHO65_7uJngU4Of3pkrgFH",
  "https://lh3.googleusercontent.com/d/1XrarG0Sbk58aDnJMEwgS3eykETNDJsk-",
  "https://lh3.googleusercontent.com/d/1OZ3K-zal3uzlY_fAmoLaEdOWt0-kd3t9",
  "https://lh3.googleusercontent.com/d/18CF2bHeRl0nUSMrB5bE5W94Jl6b4_Kyq",
  "https://lh3.googleusercontent.com/d/1pe7m74EJKkOEUTu951WcVR4X46-lbPXR",
  "https://lh3.googleusercontent.com/d/1zvG8M0Wzs2OXqLmF50Zhqfz5OYb0g8d3",
  "https://lh3.googleusercontent.com/d/1H7Oct2wKdwZuvblOD706oLx-A1hKfJja",
  "https://lh3.googleusercontent.com/d/1dA8hGulcwmFzHkm_jcqjxUOw_-gxGFo0",
  "https://lh3.googleusercontent.com/d/18Yoz6wFMs4fW6uxXeiQ5XGt1DuCU2eOq",
  "https://lh3.googleusercontent.com/d/1r_wqVGA97sLeNo_QMOhTHK36uUiCczpt",
  "https://lh3.googleusercontent.com/d/1c-U5Q91HnB6Jr0mPvtZt8rDiYhBlxukJ",
  "https://lh3.googleusercontent.com/d/1RfRM47wYQ8PXxwQhHdozYzgwPnYwI44O",
  "https://lh3.googleusercontent.com/d/1EzW6YwMxMFuycUPyUyeqGUZJcaeIW8tG",
  "https://lh3.googleusercontent.com/d/1xWrvIWjYxz6bmRnfsfKwTtBceHwO7zuk",
  "https://lh3.googleusercontent.com/d/1wRvmJNCDz0DY1rv0uDpwkdkWq7Eslcsh",
  "https://lh3.googleusercontent.com/d/1q460FkdgKFWHxYqELdsgED_Ws-AsearN",
  "https://lh3.googleusercontent.com/d/17URqXMy5W-z1w-EXL2V1orltF7-fH9_Z",
  "https://lh3.googleusercontent.com/d/1cLDJdmM9ycb_X9HdPpnVqOUuCn-SoLe2",
  "https://lh3.googleusercontent.com/d/1ltxhNO_8A3kdCp3tJsph0bgoHwT7J-aX",
  "https://lh3.googleusercontent.com/d/1oZpCXEt9hh-lsNfe_dZ6W94V0TB0DssZ",
  "https://lh3.googleusercontent.com/d/1svDnZjLtXQuLQ1Ic8I4XS6wDd2kRUwuX",
  "https://lh3.googleusercontent.com/d/1uu_DnTxl4Jd52ms-gnTbKlYF0XZ70ngw",
  "https://lh3.googleusercontent.com/d/1hL6_0BsSsiyWAMobFHTxhdgJOWBrxg_u",
  "https://lh3.googleusercontent.com/d/13WdVWp885R8BdFhoJHyg7TFK3CjrqN1I",
  "https://lh3.googleusercontent.com/d/1ThLlXPpwq_6Fyli_VCz6wgUg76SLESyw",
  "https://lh3.googleusercontent.com/d/1NSGVa6Ec3LZq8bkZuGdL2qqNWBDs5FDY",
  "https://lh3.googleusercontent.com/d/1xWeES5r7ZAm1E5-5KtTRX7Ucd9JQZZYo",
  "https://lh3.googleusercontent.com/d/1i30Xroi0LTTPq9grr7C24aPG7M_VDAus",
  "https://lh3.googleusercontent.com/d/1m96_UCVPBovNbqJ3GL3egwAmfhxTbK16",
  "https://lh3.googleusercontent.com/d/1ZG7K7zycmnMGRviwbM4rbLeTIvq_xzh8",
  "https://lh3.googleusercontent.com/d/1VdfhOBTKUiyn9gZP1s8N_K_466snf8QL",
  "https://lh3.googleusercontent.com/d/1VnYHXuM6PRZKj79ePOy0oUq_Nb7Zo9P_",
  "https://lh3.googleusercontent.com/d/1bt0aofxTP8tQ-lUHAAtkiMKqRiU15QJn",
  "https://lh3.googleusercontent.com/d/1QgKkrYdGeyB--fhgkqkTeqRoBJvyXmiU",
  "https://lh3.googleusercontent.com/d/18svTjSgnRvoqH2C0_7CjRB_8oJKZX64M",
  "https://lh3.googleusercontent.com/d/1WehPEo1mTpyD1pXtS5zWtnifwHht7mfk",
  "https://lh3.googleusercontent.com/d/1AcFFhAMNnqSa7y-ZjTLhId4IxAkn72c9",
  "https://lh3.googleusercontent.com/d/1BetgL7GgCIsH_eY9P2A-jKXW3GNkWQXD",
  "https://lh3.googleusercontent.com/d/17n33Dkz2KWQwuMW76Q1SqkfPwMmqG4ie",
  "https://lh3.googleusercontent.com/d/1JrpD3ssatYPk_D7vAtTi7rVeFFhsPjjW",
  "https://lh3.googleusercontent.com/d/1W4fuY-C0szSXo8Es0w43tAGGjuQEqXvO",
  "https://lh3.googleusercontent.com/d/1-6EMucI6nbv7fQrUKpjxfnoflr015A_1",
  "https://lh3.googleusercontent.com/d/1S5mTc4tqObr8LakcXA8Un1x6I5nyt-Zo",
  "https://lh3.googleusercontent.com/d/1RrLA5ITTYAHsAPOukd34d1hEfDjkOuq1",
  "https://lh3.googleusercontent.com/d/1qIddgkyOz_s202yTOR7oFT6itc7sp0EL",
  "https://lh3.googleusercontent.com/d/1o-7fD8alSKlohNIuqklC_Mh1bcLR0LVw",
  "https://lh3.googleusercontent.com/d/1XUfPJaHvgoQuszX3iaE9kpzaS-WRyjwH",
  "https://lh3.googleusercontent.com/d/1xpb7z4JZMDR47oq2I62E6H7U0alJphE0",
  "https://lh3.googleusercontent.com/d/1GwXrBmMMatdOfQaezKsWqjiLxTjLpdPY",
  "https://lh3.googleusercontent.com/d/1HYIVf_b79baFNnVeEw6HIzWkXR-JwOEj",
  "https://lh3.googleusercontent.com/d/14hdenAHuTDQ-VE7vVzYX874rqV9-EbRY",
  "https://lh3.googleusercontent.com/d/12dVUfANSLF9puqlAcDfJldgxyIG7QGZL",
  "https://lh3.googleusercontent.com/d/19DlBHYNNDSaDzVvpZ9DEpEEcIYvRrpA_",
  "https://lh3.googleusercontent.com/d/1ka5u8Vk-_zt7dLgll768RVBI40KO-q9S",
  "https://lh3.googleusercontent.com/d/1X7nXSCqlfEYyiZDEX_B05P3mthSYGoyz",
  "https://lh3.googleusercontent.com/d/14JLZBrrojGm8IoVYBO3NJRn1f9DjX3HO",
  "https://lh3.googleusercontent.com/d/16ixXClzRQTJ1iJhQQaAwN8XJnN2xNBNT",
  "https://lh3.googleusercontent.com/d/13KXBGkJY0JijFYZf8EMagTepPaGSxb4O",
  "https://lh3.googleusercontent.com/d/10I0gYAZA5rM3w0fde3mAikByD2Rt1ANK",
  "https://lh3.googleusercontent.com/d/16doOfPXJ2W-6nFxwyIhtK_ZRA8OtlDIe",
  "https://lh3.googleusercontent.com/d/10YgvdvuWbNUHYEMYNAaXpMTbzYLhlpG4",
  "https://lh3.googleusercontent.com/d/1OCC6Tc7bGMXqTU7JuUL8XeadyilnUDrj",
  "https://lh3.googleusercontent.com/d/1LrVoWaGplk4fjoKnYvnFZ4GliLLMhJZM",
  "https://lh3.googleusercontent.com/d/1CxLwcV-x3ibCGh__N1K5juv8vEoeoE4D",
  "https://lh3.googleusercontent.com/d/1GAeKMkpir7kElhL0wKvAt1iGqoGavLL5",
  "https://lh3.googleusercontent.com/d/1ENLqKrRjpqnEswl1qFYGixnWxFt3XvEz",
  "https://lh3.googleusercontent.com/d/1hmeVcEJOHFxdxUzznlnIHYmVl5GX54T6",
  "https://lh3.googleusercontent.com/d/1DeyZmBFHxZvY4tpDzgRYGzOisZKA0a3M",
  "https://lh3.googleusercontent.com/d/1-vRuFIv8Ao9gQE5RoBYpQ_jfp7JxA-7s",
  "https://lh3.googleusercontent.com/d/1LmZazSWNzLDFqiJntmmkDDOIEsF7lLIy",
  "https://lh3.googleusercontent.com/d/1qfQB3AWNBTBwN7gx1lSFQyDOmOqCL3-h",
  "https://lh3.googleusercontent.com/d/1c0R5wrvpwfCHz7C-LeeznSumIn-FKII-",
  "https://lh3.googleusercontent.com/d/1t0cPjWLUMIzOBfItw6mNfdmRXzEbF9p-",
  "https://lh3.googleusercontent.com/d/1gNCHuytYFSUhqHrQ7bY0crXh6wq48H0b",
  "https://lh3.googleusercontent.com/d/1bdXQSbrVZYKDrKaEWXyiwXlDSLPYT6LT",
  "https://lh3.googleusercontent.com/d/11Ie5f11gwqqjnEWyAgD7P9UAvAjiGJQw",
  "https://lh3.googleusercontent.com/d/1679KhOfbbCkJo09YnARFy2tVu4bHOwg5",
  "https://lh3.googleusercontent.com/d/1JKHamA1n4Ys9KX7CAW_IQoH33AP1rJQQ",
  "https://lh3.googleusercontent.com/d/1FZ0ODwVos6S-Bg5ELlZ63YuNQIWoDqBE",
  "https://lh3.googleusercontent.com/d/1tt2d268ScYA2Ptp8oXoDlgNCIHCIrXZJ",
  "https://lh3.googleusercontent.com/d/1DOT26kBZw1aWRC-cbaOxwJIDc5itUFpz",
  "https://lh3.googleusercontent.com/d/1H3l6BuwBd1IdXg9CgDDibRR4D1uLZkk6",
  "https://lh3.googleusercontent.com/d/1RWEmDzNFIwnbieKbbierzIvOYxtNg2Ms",
  "https://lh3.googleusercontent.com/d/1g_rIDr1fJufHDgJ1WdURWpj5q-0A6-xx",
]

url_lines = '\n'.join(f'    "{u}",' for u in urls)
adset_array = f'  const adSetUrls = [\n{url_lines}\n  ];\n'

# Inject adSetUrls inside the ContentProductionSection function, right after the opening
target = 'export function ContentProductionSection() {\n'
if adset_array not in text:
    text = text.replace(target, target + adset_array)

# Remove the erroneous AdSetPhotoBlock component that was accidentally added before it
# (already done by the adSetUrls removal above, or the component from the old update_comp.py script)

with open(r'c:\Users\Sayan Kundu\.gemini\antigravity\scratch\nawf-site\src\sections\ContentProductionSection.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done")
