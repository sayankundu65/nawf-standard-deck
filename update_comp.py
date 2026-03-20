import os

with open(r'c:\Users\Sayan Kundu\.gemini\antigravity\scratch\nawf-site\src\sections\ContentProductionSection.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

adset_urls = open(r'c:\Users\Sayan Kundu\.gemini\antigravity\scratch\nawf-site\urls_generated.txt', 'r', encoding='utf-8').read()

adset_component = f"""
function AdSetPhotoBlock({{ index, imageUrl }}: {{ index: number; imageUrl?: string }}) {{
  const [isFull, setIsFull] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 10) * 0.05, duration: 0.6 }}
      className="relative aspect-[3/4] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all overflow-hidden w-full"
    >
      {{imageUrl ? (
        <>
          <img
            src={{imageUrl}}
            alt={{`Ad Set ${{index}}`}}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
          />
          <button
            onClick={{(e) => {{ e.stopPropagation(); setIsFull(true); }}}}
            className="absolute top-2 right-2 p-2 rounded-full bg-[#080f0c]/60 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md"
          >
            <Maximize2 size={{16}} />
          </button>

          {{isFull && (
            <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4" onClick={{() => setIsFull(false)}}>
              <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                <img
                  src={{imageUrl}}
                  alt={{`Ad Set ${{index}} Fullscreen`}}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
                <button
                  onClick={{(e) => {{ e.stopPropagation(); setIsFull(false); }}}}
                  className="absolute top-6 right-6 p-3 rounded-full bg-[#080f0c]/80 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
                >
                  <X size={{24}} />
                </button>
              </div>
            </div>
          )}}
        </>
      ) : (
        <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest writing-mode-vertical group-hover:text-[#7a8c7f]/70 transition-colors">
          AD SET {{String(index + 1).padStart(2, "0")}}
        </span>
      )}}
    </motion.div>
  );
}}
"""

adset_section = """
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-10 mt-20">
          <SubSectionHeading text="AD Sets" />
          <SectionLabel label="Campaigns & Sets" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-20">
          {adSetUrls.map((url, i) => (
             <AdSetPhotoBlock key={i} index={i} imageUrl={url} />
          ))}
        </div>
      </div>
"""

text = text.replace("export function ContentProductionSection() {", adset_component + "\n" + adset_urls + "\n\nexport function ContentProductionSection() {")

target_str = """      {/* Photo Carousel */}
      <HScrollCarousel>
        {photoUrls.map((url, i) => (
          <PhotoBlock key={i} index={i} imageUrl={url} />
        ))}
      </HScrollCarousel>"""

text = text.replace(target_str, target_str + "\n" + adset_section)

with open(r'c:\Users\Sayan Kundu\.gemini\antigravity\scratch\nawf-site\src\sections\ContentProductionSection.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
