// AVS – Anti-Vergessen-System
// IHK AP1 Fragenkatalog – 40 echte Prüfungsfragen
// Kategorien: Hardware-Kalkulation, Bewertungsaspekte, Netzwerk, IT-Sicherheit

const AVS_QUESTIONS = [
  // ── HARDWARE KALKULATION ──────────────────────────────────────────────────
  {
    id: 1,
    category: "Hardware",
    topic: "Netzteil & Wirkungsgrad",
    difficulty: "mittel",
    question: "Ein Netzteil hat eine Nennleistung von 650W und läuft bei 50% Auslastung. Der Hersteller gibt einen Wirkungsgrad von 90% an. Welche Leistung wird tatsächlich aus der Steckdose bezogen?",
    shortAnswer: "361,1 Watt. Formel: Nutzleistung / Wirkungsgrad = 325W / 0,9 ≈ 361,1W",
    longAnswer: "Rechenweg:\n• Nutzleistung = Nennleistung × Auslastung = 650W × 0,5 = 325W\n• Leistungsaufnahme (Steckdose) = Nutzleistung / Wirkungsgrad\n• 325W / 0,9 = 361,1W\n\nDer Wirkungsgrad (η) beschreibt das Verhältnis zwischen abgegebener Nutzleistung und aufgenommener Wirkleistung.\nVerlustleistung = 361,1W − 325W = 36,1W (wird als Wärme abgegeben)\n\nTipp: Wirkungsgrad < 1 → Aufnahme immer größer als Nutzleistung.",
    tags: ["#Hardware", "#Netzteil", "#Kalkulation", "#AP1"],
    hint: "Formel: P_aufnahme = P_nutz / η"
  },
  {
    id: 2,
    category: "Hardware",
    topic: "Stromkosten",
    difficulty: "mittel",
    question: "Ein Netzteil (650W, 90% Wirkungsgrad, 50% Last) läuft 8 Stunden täglich. Wie hoch sind die monatlichen Stromkosten bei 0,32 €/kWh (30 Tage)?",
    shortAnswer: "27,73 €/Monat. Verbrauch: 361,1W × 8h × 30 = 86,67 kWh × 0,32 € = 27,73 €",
    longAnswer: "Rechenweg:\n• Leistungsaufnahme = 361,1W (aus Aufgabe 1)\n• Tagesverbrauch = 0,3611 kW × 8h = 2,889 kWh\n• Monatsverbrauch = 2,889 kWh × 30 = 86,67 kWh\n• Kosten = 86,67 kWh × 0,32 €/kWh = 27,73 €\n\nTipp: Immer in kW umrechnen (Watt ÷ 1000) bevor du mit kWh rechnest!",
    tags: ["#Hardware", "#Netzteil", "#Stromkosten", "#AP1"],
    hint: "Erst Watt → kW (÷1000), dann × Stunden × Tage × Preis"
  },
  {
    id: 3,
    category: "Hardware",
    topic: "Speicherbedarf Scanner",
    difficulty: "schwer",
    question: "Ein Unternehmen scannt täglich 48.000 Dokumente. Jede Scandatei hat unkomprimiert 4,5 MB. Nach Kompression (30%) sind es 500 KB. Wie viel Speicher wird täglich benötigt?",
    shortAnswer: "ca. 22,89 GB täglich. 48.000 × 500 KB = 24.000.000 KB = 24.000 MB ≈ 22,89 GB",
    longAnswer: "Rechenweg:\n• Dateigröße nach Kompression: 500 KB\n• Tagesbedarf: 48.000 × 500 KB = 24.000.000 KB\n• Umrechnung: 24.000.000 KB ÷ 1024 = 23.437,5 MB ÷ 1024 = 22,89 GB\n\nWichtig: 1 GB = 1024 MB = 1.048.576 KB (binär!)\nAlternativ dezimal: 24.000.000 KB ÷ 1.000.000 = 24 GB (wenn dezimal gefragt)",
    tags: ["#Hardware", "#Speicher", "#Kalkulation", "#AP1"],
    hint: "1 GB = 1024 MB = 1.048.576 KB (binär)"
  },
  {
    id: 4,
    category: "Hardware",
    topic: "Speicher Zeitraum",
    difficulty: "mittel",
    question: "48.000 Scans pro Tag, jede Datei 500 KB nach Kompression. Nach wie vielen Tagen ist eine 2-TB-Festplatte voll?",
    shortAnswer: "ca. 87 Tage. 2 TB = 2.097.152 MB. Täglich: 23.437,5 MB. 2.097.152 / 23.437,5 ≈ 89,5 Tage",
    longAnswer: "Rechenweg:\n• Tagesbedarf: 48.000 × 500 KB = 24.000.000 KB = 23.437,5 MB\n• 2 TB = 2 × 1024 GB = 2048 GB = 2.097.152 MB\n• Tage = 2.097.152 MB / 23.437,5 MB ≈ 89,5 Tage\n\nPraxis: Sicherheitspuffer einplanen → ca. 80 Tage realistisch für Vollauslastung.",
    tags: ["#Hardware", "#Speicher", "#Festplatte", "#AP1"],
    hint: "2 TB = 2 × 1024 × 1024 MB (binär)"
  },
  {
    id: 5,
    category: "Hardware",
    topic: "Amortisation",
    difficulty: "schwer",
    question: "Ein Unternehmen plant die Anschaffung energieeffizienter Server (Kosten: 12.000 €). Die Einsparung beträgt 150 €/Monat. Nach wie vielen Monaten amortisiert sich die Investition?",
    shortAnswer: "80 Monate (6 Jahre 8 Monate). 12.000 € / 150 €/Monat = 80 Monate",
    longAnswer: "Rechenweg:\n• Amortisationszeit = Investitionskosten / monatliche Einsparung\n• 12.000 € / 150 € = 80 Monate\n• In Jahren: 80 / 12 = 6,67 Jahre ≈ 6 Jahre 8 Monate\n\nIHK-Tipp: Die Amortisationszeit sagt aus, wann sich eine Investition 'bezahlt gemacht hat'. Danach ist jede Einsparung reiner Gewinn.\nFormel: t_amor = Investition / Einsparung_pro_Periode",
    tags: ["#Hardware", "#Amortisation", "#Stromkosten", "#AP1"],
    hint: "Amortisation = Investition ÷ Einsparung pro Periode"
  },
  {
    id: 6,
    category: "Hardware",
    topic: "Energieeffizienz Rechenzentrum",
    difficulty: "mittel",
    question: "Ein Rechenzentrum spart durch neue Hardware 200W ein. Betriebsdauer: 180h/Monat, Strompreis: 0,28 €/kWh. Wie hoch ist die jährliche Einsparung?",
    shortAnswer: "120,96 €/Jahr. 0,2 kW × 180h × 0,28 € × 12 Monate = 120,96 €",
    longAnswer: "Rechenweg:\n• Einsparung pro Monat: 0,2 kW × 180h = 36 kWh\n• Kosten pro Monat: 36 kWh × 0,28 €/kWh = 10,08 €\n• Jährliche Einsparung: 10,08 € × 12 = 120,96 €\n\nPraxishinweis: In echten Rechenzentren multipliziert sich dieser Effekt mit hunderten von Servern → erhebliche Kosteneinsparungen.",
    tags: ["#Hardware", "#Amortisation", "#Energieeffizienz", "#AP1"],
    hint: "Erst W → kW, dann × Stunden × Preis × 12 Monate"
  },
  {
    id: 7,
    category: "Hardware",
    topic: "Videodaten Datenmenge",
    difficulty: "schwer",
    question: "Eine Überwachungsanlage mit 4 Kameras nimmt in Full-HD (1920×1080 Pixel) mit 24 Bit Farbtiefe und 30 fps auf. Wie groß ist der unkomprimierte Datenstrom pro Sekunde (alle 4 Kameras)?",
    shortAnswer: "ca. 718 MB/s. 1 Kamera: 1920×1080×24bit×30fps = 1.492.992.000 bit/s ÷ 8 = 186,6 MB/s × 4 = 746,5 MB/s",
    longAnswer: "Rechenweg pro Kamera:\n• Pixel pro Frame: 1920 × 1080 = 2.073.600 Pixel\n• Bits pro Frame: 2.073.600 × 24 Bit = 49.766.400 Bit\n• Bits pro Sekunde: 49.766.400 × 30 fps = 1.492.992.000 Bit/s\n• Bytes pro Sekunde: 1.492.992.000 / 8 = 186.624.000 Byte = 186,6 MB/s\n• 4 Kameras: 4 × 186,6 MB/s = 746,5 MB/s\n\nTipp: Formel = Breite × Höhe × Farbtiefe(Bit) × fps / 8 = Byte/s",
    tags: ["#Hardware", "#Kamera", "#Datenmenge", "#AP1"],
    hint: "Formel: B×H×Farbtiefe×fps ÷ 8 = Byte/s"
  },
  {
    id: 8,
    category: "Hardware",
    topic: "Videospeicher",
    difficulty: "schwer",
    question: "4 Überwachungskameras (1920×1080, 24 Bit, 30 fps) sollen 72 Stunden aufzeichnen. Wie viel Speicher wird benötigt (mit 80% Kompressionsrate)?",
    shortAnswer: "ca. 193 TB unkomprimiert, nach 80% Kompression: ca. 38,6 TB",
    longAnswer: "Rechenweg:\n• Datenstrom: 746,5 MB/s (aus Aufgabe 7)\n• 72 Stunden = 72 × 3600 = 259.200 Sekunden\n• Unkomprimiert: 746,5 MB/s × 259.200s = 193.492.800 MB ≈ 184.540 GB ≈ 180 TB\n• Mit 80% Kompression (nur 20% der Originalgröße): 180 TB × 0,2 = 36 TB\n\nPraxis: Moderne H.265-Kompression erreicht 90%+ → reale Systeme brauchen oft nur 5–10% des Rohwerts.",
    tags: ["#Hardware", "#Kamera", "#Speicher", "#AP1"],
    hint: "Datenstrom × Sekunden = Gesamtgröße, dann × Kompressionsrest"
  },
  {
    id: 9,
    category: "Hardware",
    topic: "Kompression",
    difficulty: "leicht",
    question: "Was bedeutet '30% Kompression' bei der Speicherberechnung von Videodaten – wird die Datei um 30% kleiner oder bleibt 30% übrig?",
    shortAnswer: "Die Datei wird um 30% kleiner → 70% der Originalgröße bleibt übrig.",
    longAnswer: "Begriffsklärung:\n• '30% Kompression' = 30% der Daten werden entfernt → 70% bleiben\n• Formel: Neue Größe = Original × (1 - 0,30) = Original × 0,70\n\nVerwechslungsgefahr:\n• '30% Kompressionsrate' → 70% übrig\n• 'Komprimiert auf 30%' → 30% übrig (70% entfernt)\n\nIHK-Aufgaben formulieren oft 'nach Kompression sind es X KB' → dann direkt X KB verwenden, nicht nochmal rechnen!",
    tags: ["#Hardware", "#Kompression", "#Kalkulation", "#AP1"],
    hint: "30% Kompression = 70% der Originalgröße bleibt"
  },
  {
    id: 10,
    category: "Hardware",
    topic: "HDMI 2.1",
    difficulty: "leicht",
    question: "Welche maximale Bildwiederholrate unterstützt HDMI 2.1 bei 4K-Auflösung (3840×2160)?",
    shortAnswer: "120 Hz bei 4K. HDMI 2.1 unterstützt bis zu 10K@120Hz und 4K@120Hz.",
    longAnswer: "HDMI-Versionen im Vergleich:\n• HDMI 1.4: 4K@30Hz\n• HDMI 2.0: 4K@60Hz\n• HDMI 2.1: 4K@120Hz, 8K@60Hz, 10K@120Hz\n\nBandbreite HDMI 2.1: 48 Gbit/s (vs. 18 Gbit/s bei HDMI 2.0)\n\nPraxisrelevanz: Gaming-Monitore und moderne TVs nutzen HDMI 2.1 für flüssige 4K-Darstellung.",
    tags: ["#Hardware", "#HDMI", "#Ports", "#AP1"],
    hint: "HDMI 2.1 = 4K@120Hz, HDMI 2.0 = 4K@60Hz"
  },
  {
    id: 11,
    category: "Hardware",
    topic: "DisplayPort Dual-Monitor",
    difficulty: "mittel",
    question: "Ein Mitarbeiter möchte zwei 4K-Monitore mit je 60 Hz an seinen Laptop anschließen. Welche Anschlüsse sind geeignet und warum?",
    shortAnswer: "DisplayPort 1.4 (MST), Thunderbolt 3/4, oder zwei separate HDMI 2.0 Ports.",
    longAnswer: "Optionen:\n1. DisplayPort 1.4 mit MST (Multi-Stream Transport): Ein DP-Port kann mehrere Monitore in Reihe schalten\n2. Thunderbolt 3/4: Unterstützt zwei 4K@60Hz über einen einzigen USB-C-Port\n3. Zwei separate HDMI 2.0 Ports: Jeder Port ein Monitor\n\nNicht geeignet:\n• HDMI 1.4 (nur 4K@30Hz)\n• USB-A (kein Videosignal)\n• VGA/DVI (kein 4K)\n\nTipp: Thunderbolt ist die flexibelste Lösung für moderne Laptops.",
    tags: ["#Hardware", "#DisplayPort", "#Monitor", "#AP1"],
    hint: "DisplayPort 1.4 MST oder Thunderbolt 3/4 für Dual-4K"
  },
  {
    id: 12,
    category: "Hardware",
    topic: "USB-C vs Thunderbolt",
    difficulty: "mittel",
    question: "Was unterscheidet einen USB-C-Anschluss von einem Thunderbolt-3-Anschluss, obwohl beide physisch gleich aussehen?",
    shortAnswer: "Thunderbolt 3 hat 40 Gbit/s Bandbreite (vs. USB-C max. 20 Gbit/s) und unterstützt PCIe, Daisy-Chaining und externe GPUs.",
    longAnswer: "Vergleich USB-C vs. Thunderbolt 3:\n\nUSB-C (Stecker):\n• Nur ein Steckerformat, kein Protokoll\n• USB 3.2: bis 20 Gbit/s\n• USB4: bis 40 Gbit/s (kompatibel mit TB3)\n\nThunderbolt 3 (Protokoll + Stecker):\n• 40 Gbit/s Bandbreite\n• PCIe 3.0 x4 Unterstützung\n• Daisy-Chaining bis 6 Geräte\n• Externe GPUs (eGPU)\n• Zwei 4K@60Hz Monitore\n• Erkennbar am Blitz-Symbol ⚡\n\nMerksatz: Jeder TB3-Port ist USB-C, aber nicht jeder USB-C-Port ist Thunderbolt!",
    tags: ["#Hardware", "#USB-C", "#Thunderbolt", "#AP1"],
    hint: "TB3 = USB-C-Stecker + PCIe + 40 Gbit/s + Blitz-Symbol"
  },
  {
    id: 13,
    category: "Hardware",
    topic: "DisplayPort 2.0",
    difficulty: "leicht",
    question: "Welche maximale Übertragungsrate bietet DisplayPort 2.0 und für welche Auflösungen ist er ausgelegt?",
    shortAnswer: "80 Gbit/s Bandbreite. Unterstützt 16K@60Hz, 8K@60Hz HDR, oder drei 4K@144Hz Monitore gleichzeitig.",
    longAnswer: "DisplayPort 2.0 Spezifikationen:\n• Bandbreite: 80 Gbit/s (vs. 32,4 Gbit/s bei DP 1.4)\n• Auflösungen: bis 16K@60Hz\n• Multi-Monitor: 3× 4K@144Hz oder 2× 8K@120Hz\n• HDR-Unterstützung: vollständig\n• Eingeführt: 2019, in Geräten ab 2022\n\nVergleich:\n• DP 1.2: 21,6 Gbit/s\n• DP 1.4: 32,4 Gbit/s\n• DP 2.0: 80 Gbit/s",
    tags: ["#Hardware", "#DisplayPort", "#Ports", "#AP1"],
    hint: "DP 2.0 = 80 Gbit/s, bis 16K@60Hz"
  },
  {
    id: 14,
    category: "Hardware",
    topic: "Scanner Datenmenge",
    difficulty: "schwer",
    question: "Ein Scanner digitalisiert Dokumente im Format A4 mit 300 dpi in Graustufen (8 Bit). Wie groß ist eine unkomprimierte Scandatei?",
    shortAnswer: "ca. 8,4 MB. A4 bei 300 dpi: 2480×3508 Pixel × 8 Bit / 8 = 8.700.160 Byte ≈ 8,3 MB",
    longAnswer: "Rechenweg:\n• A4-Format bei 300 dpi:\n  - Breite: 8,27 Zoll × 300 = 2481 Pixel\n  - Höhe: 11,69 Zoll × 300 = 3507 Pixel\n• Pixel gesamt: 2481 × 3507 = 8.701.467 Pixel\n• Bits: 8.701.467 × 8 Bit = 69.611.736 Bit\n• Bytes: 69.611.736 / 8 = 8.701.467 Byte ≈ 8,3 MB\n\nFarbig (24 Bit): 3× größer ≈ 24,9 MB\nSchwarzweiß (1 Bit): 8× kleiner ≈ 1,04 MB",
    tags: ["#Hardware", "#Scanner", "#Datenmenge", "#AP1"],
    hint: "A4@300dpi ≈ 2480×3508 Pixel × Bit-Tiefe / 8 = Bytes"
  },
  {
    id: 15,
    category: "Hardware",
    topic: "Massenspeicher Scanner",
    difficulty: "mittel",
    question: "48.000 Dokumente werden täglich gescannt. Jede Datei ist 500 KB groß. Wie viel GB werden täglich benötigt?",
    shortAnswer: "ca. 22,89 GB. 48.000 × 500 KB = 24.000.000 KB ÷ 1.048.576 = 22,89 GB",
    longAnswer: "Rechenweg:\n• Gesamtgröße: 48.000 × 500 KB = 24.000.000 KB\n• In MB: 24.000.000 / 1024 = 23.437,5 MB\n• In GB: 23.437,5 / 1024 = 22,89 GB\n\nAlternativ dezimal (wenn Aufgabe 'dezimal' verlangt):\n• 24.000.000 KB / 1.000.000 = 24 GB\n\nMerke: IHK-Aufgaben meinen meist binäre Einheiten (1 GB = 1024 MB), außer es steht explizit 'dezimal'.",
    tags: ["#Hardware", "#Speicher", "#Scanner", "#AP1"],
    hint: "Binär: ÷1024 pro Stufe. Dezimal: ÷1000 pro Stufe"
  },
  {
    id: 16,
    category: "Hardware",
    topic: "80 PLUS Zertifizierung",
    difficulty: "leicht",
    question: "Was ist der Unterschied zwischen 80 PLUS Bronze, Silver, Gold und Platinum bei PC-Netzteilen?",
    shortAnswer: "Wirkungsgrad bei 20/50/100% Last: Bronze ≥82/85/82%, Silver ≥85/88/85%, Gold ≥87/90/87%, Platinum ≥90/92/89%",
    longAnswer: "80 PLUS Zertifizierungsstufen (Wirkungsgrad bei 20%/50%/100% Last):\n\n• 80 PLUS (weiß): 80/80/80%\n• Bronze: 82/85/82%\n• Silver: 85/88/85%\n• Gold: 87/90/87%\n• Platinum: 90/92/89%\n• Titanium: 92/94/90%\n\nPraxistipp: Gold ist das beste Preis-Leistungs-Verhältnis für Desktop-PCs. Titanium lohnt sich nur für Dauerbetrieb (Server).\n\nMerksatz: Je höher die Stufe, desto weniger Strom wird als Wärme verschwendet.",
    tags: ["#Hardware", "#Netzteil", "#Wirkungsgrad", "#AP1"],
    hint: "Gold = 87/90/87% bei 20/50/100% Last"
  },
  {
    id: 17,
    category: "Hardware",
    topic: "Monitor-Ports",
    difficulty: "leicht",
    question: "Welche Ports werden typischerweise für die Bildschirmausgabe an einem modernen Desktop-PC verwendet? Nennen Sie 4 mit Kurzbeschreibung.",
    shortAnswer: "HDMI (digital, weit verbreitet), DisplayPort (PC-Standard, höhere Bandbreite), USB-C/TB (modern, Laptop), DVI (veraltet, digital).",
    longAnswer: "Moderne Bildschirm-Ports:\n\n1. HDMI (High-Definition Multimedia Interface)\n   - Digital, Audio+Video in einem Kabel\n   - Weit verbreitet (TV, Monitor, Beamer)\n   - HDMI 2.1: bis 4K@120Hz\n\n2. DisplayPort (DP)\n   - PC-Standard für Monitore\n   - Höhere Bandbreite als HDMI\n   - MST: mehrere Monitore an einem Port\n\n3. USB-C / Thunderbolt\n   - Modern, Laptops und Ultrabooks\n   - Strom + Daten + Video in einem Kabel\n\n4. DVI (Digital Visual Interface)\n   - Veraltet, nur Video (kein Audio)\n   - Noch in älteren Systemen\n\nVeraltet/selten: VGA (analog), S-Video",
    tags: ["#Hardware", "#Ports", "#Monitor", "#AP1"],
    hint: "HDMI, DisplayPort, USB-C/TB, DVI – in dieser Reihenfolge der Verbreitung"
  },
  {
    id: 18,
    category: "Hardware",
    topic: "Server Stromkosten",
    difficulty: "mittel",
    question: "Ein Server verbraucht 400W im Betrieb. Er läuft 180 Stunden pro Monat. Der Strompreis beträgt 0,28 €/kWh. Wie hoch sind die jährlichen Stromkosten?",
    shortAnswer: "241,92 €/Jahr. 0,4 kW × 180h × 0,28 € × 12 = 241,92 €",
    longAnswer: "Rechenweg:\n• Monatlicher Verbrauch: 0,4 kW × 180h = 72 kWh\n• Monatliche Kosten: 72 kWh × 0,28 €/kWh = 20,16 €\n• Jährliche Kosten: 20,16 € × 12 = 241,92 €\n\nPraxishinweis: Echte Server laufen 24/7 (8.760h/Jahr):\n• 0,4 kW × 8.760h × 0,28 € = 980,16 €/Jahr\n\nDaher ist Energieeffizienz im Rechenzentrum wirtschaftlich entscheidend.",
    tags: ["#Hardware", "#Stromkosten", "#Server", "#AP1"],
    hint: "kW × Stunden × Preis × 12 = Jahreskosten"
  },
  {
    id: 19,
    category: "Hardware",
    topic: "Leistungsbegriffe",
    difficulty: "leicht",
    question: "Was versteht man unter 'Nutzleistung', 'Verlustleistung' und 'aufgenommener Wirkleistung' bei einem Netzteil?",
    shortAnswer: "Nutzleistung = abgegebene Leistung. Verlustleistung = als Wärme verlorene Leistung. Wirkleistung = Nutzleistung + Verlustleistung (aus Steckdose).",
    longAnswer: "Leistungsbegriffe beim Netzteil:\n\n• Nutzleistung (P_nutz):\n  - Die tatsächlich an Komponenten abgegebene Leistung\n  - Beispiel: 325W für CPU, RAM, GPU\n\n• Verlustleistung (P_verlust):\n  - Energie, die als Wärme abgegeben wird\n  - P_verlust = P_aufnahme − P_nutz\n\n• Aufgenommene Wirkleistung (P_aufnahme):\n  - Leistung aus der Steckdose\n  - P_aufnahme = P_nutz / η (Wirkungsgrad)\n\nFormelzusammenhang:\nη = P_nutz / P_aufnahme\nP_aufnahme = P_nutz / η\nP_verlust = P_aufnahme − P_nutz",
    tags: ["#Hardware", "#Netzteil", "#Grundlagen", "#AP1"],
    hint: "η = P_nutz / P_aufnahme → P_aufnahme = P_nutz / η"
  },
  {
    id: 20,
    category: "Hardware",
    topic: "Kamera Datenstrom",
    difficulty: "schwer",
    question: "Eine Überwachungskamera zeichnet in 1920×1080 mit 24 Bit Farbtiefe und 30 fps auf. Wie groß ist der unkomprimierte Datenstrom in Mbit/s?",
    shortAnswer: "ca. 1.492 Mbit/s. 1920×1080×24×30 = 1.492.992.000 bit/s ÷ 1.000.000 ≈ 1.493 Mbit/s",
    longAnswer: "Rechenweg:\n• Pixel pro Frame: 1920 × 1080 = 2.073.600\n• Bits pro Frame: 2.073.600 × 24 = 49.766.400 Bit\n• Bits pro Sekunde: 49.766.400 × 30 = 1.492.992.000 Bit/s\n• In Mbit/s: 1.492.992.000 / 1.000.000 = 1.492,99 Mbit/s\n\nZum Vergleich:\n• H.264-komprimiert: ca. 4–8 Mbit/s (200× kleiner!)\n• H.265-komprimiert: ca. 2–4 Mbit/s (400× kleiner!)\n\nDarum ist Videokompression in der Praxis unverzichtbar.",
    tags: ["#Hardware", "#Kamera", "#Datenstrom", "#AP1"],
    hint: "B×H×Farbtiefe×fps = Bit/s, dann ÷1.000.000 = Mbit/s"
  },

  // ── BEWERTUNGSASPEKTE ─────────────────────────────────────────────────────
  {
    id: 21,
    category: "Bewertungsaspekte",
    topic: "Angebotsbewertung",
    difficulty: "mittel",
    question: "Ein Unternehmen beschafft 40 neue Büroarbeitsplätze. Nennen Sie je zwei Kriterien für funktionale, ökonomische und ökologische Bewertungsaspekte.",
    shortAnswer: "Funktional: Leistungsparameter, Ergonomie. Ökonomisch: Anschaffungskosten, Betriebskosten. Ökologisch: Energieverbrauch, Recyclingfähigkeit.",
    longAnswer: "Funktionale Aspekte:\n• Leistungsparameter: CPU-Takt, RAM, Reaktionszeiten\n• Ergonomie: Bildschirmgröße, höhenverstellbar, Blendschutz (ArbStättV)\n\nÖkonomische Aspekte:\n• Einmalig: Anschaffungspreis, Lieferung, Installation\n• Laufend: Energie, Wartung, Lizenzgebühren, Support\n\nÖkologische Aspekte:\n• Energieverbrauch: Watt im Betrieb/Stand-by, Energy Star\n• Recyclingfähigkeit: RoHS-Konformität, Herstellerrücknahme\n\nNeu ab 2025: Soziale Aspekte (Arbeitsbedingungen in der Lieferkette)",
    tags: ["#Bewertungsaspekte", "#Hardware", "#Beschaffung", "#AP1"],
    hint: "Funktional=Leistung/Ergonomie, Ökonomisch=Kosten, Ökologisch=Energie/Recycling"
  },
  {
    id: 22,
    category: "Bewertungsaspekte",
    topic: "TCO Analyse",
    difficulty: "schwer",
    question: "Was versteht man unter Total Cost of Ownership (TCO) und welche Kostenarten umfasst es bei der Beschaffung von IT-Hardware?",
    shortAnswer: "TCO = alle Kosten über den gesamten Lebenszyklus: Anschaffung + Betrieb + Wartung + Entsorgung.",
    longAnswer: "Total Cost of Ownership (TCO):\n\nDefinition: Gesamtkosten eines IT-Systems über seinen kompletten Lebenszyklus.\n\nKostenarten:\n1. Direkte Kosten:\n   • Anschaffungskosten (Hardware, Software, Lizenzen)\n   • Installationskosten\n   • Schulungskosten\n\n2. Indirekte Kosten:\n   • Energiekosten (Strom, Kühlung)\n   • Wartung und Support\n   • Ausfallzeiten (Downtime)\n   • Entsorgungskosten (WEEE-Richtlinie)\n\n3. Versteckte Kosten:\n   • Produktivitätsverluste bei Ausfällen\n   • Migrationskosten bei Ablösung\n\nIHK-Tipp: TCO immer über 3–5 Jahre berechnen, nicht nur Kaufpreis vergleichen!",
    tags: ["#Bewertungsaspekte", "#TCO", "#Beschaffung", "#AP1"],
    hint: "TCO = Anschaffung + Betrieb + Wartung + Entsorgung (Lebenszyklus)"
  },
  {
    id: 23,
    category: "Bewertungsaspekte",
    topic: "Nutzwertanalyse",
    difficulty: "schwer",
    question: "Erklären Sie das Verfahren der Nutzwertanalyse bei der IT-Beschaffung. Welche Schritte sind notwendig?",
    shortAnswer: "1. Kriterien festlegen, 2. Gewichtung vergeben, 3. Alternativen bewerten (1–10), 4. Gewichtete Punkte berechnen, 5. Summen vergleichen.",
    longAnswer: "Nutzwertanalyse – Schritte:\n\n1. Zielkriterien festlegen\n   • Was ist wichtig? (Leistung, Preis, Support...)\n\n2. Gewichtung vergeben\n   • Summe aller Gewichtungen = 100%\n   • Wichtigstes Kriterium erhält höchste Gewichtung\n\n3. Alternativen bewerten\n   • Jede Alternative pro Kriterium: 1–10 Punkte\n\n4. Gewichteten Nutzwert berechnen\n   • Punkte × Gewichtung = Teilnutzwert\n\n5. Gesamtnutzwert summieren\n   • Höchster Gesamtnutzwert = beste Alternative\n\nBeispiel:\nKriterium | Gewicht | Angebot A | Angebot B\nPreis     | 40%     | 8 → 3,2   | 6 → 2,4\nLeistung  | 60%     | 7 → 4,2   | 9 → 5,4\nGesamt    |         | 7,4       | 7,8 ✓",
    tags: ["#Bewertungsaspekte", "#Nutzwertanalyse", "#Beschaffung", "#AP1"],
    hint: "5 Schritte: Kriterien → Gewichtung → Punkte → Multiplikation → Summe"
  },
  {
    id: 24,
    category: "Bewertungsaspekte",
    topic: "Make-or-Buy",
    difficulty: "mittel",
    question: "Nennen Sie je drei Argumente für 'Make' (Eigenentwicklung) und 'Buy' (Kauf/Lizenz) bei der Entscheidung für eine neue IT-Lösung.",
    shortAnswer: "Make: Individualität, Datenschutz, kein Vendor-Lock-in. Buy: Geringere Kosten, schnellere Verfügbarkeit, bewährte Qualität.",
    longAnswer: "Make (Eigenentwicklung):\n✓ Maßgeschneiderte Lösung für spezifische Anforderungen\n✓ Volle Kontrolle über Daten und Code (Datenschutz, DSGVO)\n✓ Kein Vendor-Lock-in (keine Abhängigkeit vom Hersteller)\n✓ Wettbewerbsvorteil durch einzigartige Features\n✗ Hohe Entwicklungskosten und -zeit\n✗ Wartungsaufwand dauerhaft intern\n\nBuy (Kauf/Lizenz):\n✓ Sofort verfügbar, schnelle Implementierung\n✓ Geringere Initialkosten (oft)\n✓ Bewährte Qualität, Support vom Hersteller\n✓ Regelmäßige Updates inklusive\n✗ Vendor-Lock-in möglich\n✗ Keine 100% Anpassung an Prozesse\n✗ Lizenzkosten dauerhaft",
    tags: ["#Bewertungsaspekte", "#MakeOrBuy", "#Beschaffung", "#AP1"],
    hint: "Make = Kontrolle/Individualität, Buy = Kosten/Geschwindigkeit"
  },
  {
    id: 25,
    category: "Bewertungsaspekte",
    topic: "Datenschutz DSGVO",
    difficulty: "mittel",
    question: "Welche datenschutzrechtlichen Aspekte müssen bei der Beschaffung von Cloud-Diensten beachtet werden?",
    shortAnswer: "DSGVO-Konformität, Serverstandort EU/EWR, Auftragsverarbeitungsvertrag (AVV), Datenkategorien, Löschkonzept.",
    longAnswer: "Datenschutz bei Cloud-Beschaffung:\n\n1. DSGVO-Konformität\n   • Anbieter muss DSGVO einhalten\n   • Datenschutzerklärung prüfen\n\n2. Serverstandort\n   • Bevorzugt EU/EWR\n   • USA: nur mit Standardvertragsklauseln (SCC) oder angemessenem Schutzniveau\n\n3. Auftragsverarbeitungsvertrag (AVV)\n   • Pflicht nach Art. 28 DSGVO\n   • Regelt Verarbeitung personenbezogener Daten\n\n4. Datenkategorien\n   • Welche Daten werden verarbeitet?\n   • Besondere Kategorien (Art. 9) extra schützen\n\n5. Technische Maßnahmen\n   • Verschlüsselung (TLS, AES-256)\n   • Zugriffskontrollen, Logging\n\n6. Löschkonzept\n   • Wann werden Daten gelöscht?\n   • Portabilität (Art. 20 DSGVO)",
    tags: ["#Bewertungsaspekte", "#DSGVO", "#Datenschutz", "#AP1"],
    hint: "DSGVO, Serverstandort EU, AVV (Art. 28), Verschlüsselung, Löschkonzept"
  },
  {
    id: 26,
    category: "Bewertungsaspekte",
    topic: "SLA Service Level Agreement",
    difficulty: "mittel",
    question: "Was ist ein Service Level Agreement (SLA) und welche typischen Kennzahlen enthält es?",
    shortAnswer: "SLA = Vertrag über Qualität einer Dienstleistung. Typische KPIs: Verfügbarkeit (99,9%), Reaktionszeit, Lösungszeit, Support-Zeiten.",
    longAnswer: "Service Level Agreement (SLA):\n\nDefinition: Vertrag zwischen Dienstleister und Kunde, der Qualität, Umfang und Reaktionszeiten einer IT-Dienstleistung verbindlich festlegt.\n\nTypische SLA-Kennzahlen:\n\n1. Verfügbarkeit (Availability)\n   • 99,9% = max. 8,76h Ausfall/Jahr\n   • 99,99% = max. 52,6 Min. Ausfall/Jahr\n\n2. Reaktionszeit (Response Time)\n   • Zeit bis zur ersten Reaktion auf Störung\n   • Kritisch: 15 Min., Normal: 4h\n\n3. Lösungszeit (Resolution Time)\n   • Zeit bis zur Behebung der Störung\n\n4. Support-Zeiten\n   • 8×5 (Mo–Fr, 8–17 Uhr)\n   • 24×7 (rund um die Uhr)\n\n5. Pönale/Vertragsstrafe\n   • Gutschriften bei SLA-Verletzung",
    tags: ["#Bewertungsaspekte", "#SLA", "#Verträge", "#AP1"],
    hint: "SLA = Verfügbarkeit + Reaktionszeit + Lösungszeit + Support-Zeiten"
  },
  {
    id: 27,
    category: "Bewertungsaspekte",
    topic: "Netzwerktopologien",
    difficulty: "mittel",
    question: "Vergleichen Sie Stern-, Ring- und Bus-Topologie hinsichtlich Ausfallsicherheit, Kosten und Erweiterbarkeit.",
    shortAnswer: "Stern: Beste Ausfallsicherheit (nur 1 Gerät betroffen), höhere Kosten (Switch), einfach erweiterbar. Ring: Ausfall unterbricht alles. Bus: Günstig, aber Kollisionen.",
    longAnswer: "Topologie-Vergleich:\n\nStern-Topologie:\n✓ Ausfallsicherheit: Ausfall eines Geräts betrifft nur dieses\n✓ Einfache Fehlerdiagnose\n✓ Einfach erweiterbar\n✗ Zentraler Switch = Single Point of Failure\n✗ Höhere Kabelkosten\n\nRing-Topologie:\n✓ Gleichmäßige Lastverteilung\n✓ Kein Kollisionsproblem (Token-Ring)\n✗ Ausfall eines Geräts unterbricht den gesamten Ring\n✗ Schwer erweiterbar\n\nBus-Topologie:\n✓ Günstig (ein Kabel)\n✓ Einfacher Aufbau\n✗ Kollisionen bei hoher Last (CSMA/CD)\n✗ Ausfall des Kabels = Totalausfall\n✗ Schwer erweiterbar\n\nModerne Praxis: Fast ausschließlich Stern-Topologie (Ethernet).",
    tags: ["#Netzwerk", "#Topologie", "#Infrastruktur", "#AP1"],
    hint: "Stern = sicher + teuer, Ring = Token + fragil, Bus = günstig + kollisionsanfällig"
  },
  {
    id: 28,
    category: "Bewertungsaspekte",
    topic: "IPv4 Subnetting",
    difficulty: "schwer",
    question: "Ein Unternehmen hat das Netz 192.168.10.0/24. Es benötigt 4 Subnetze mit je mindestens 50 Hosts. Welche Subnetzmaske ist geeignet?",
    shortAnswer: "/26 (255.255.255.192). Ergibt 4 Subnetze mit je 62 nutzbaren Hosts.",
    longAnswer: "Subnetting-Rechnung:\n\nAnforderung: 4 Subnetze, je ≥50 Hosts\n\nSchritt 1: Bits für Subnetze\n• 2² = 4 Subnetze → 2 Bits für Subnetz-ID\n• /24 + 2 = /26\n\nSchritt 2: Hosts pro Subnetz\n• Verbleibende Bits: 32 - 26 = 6 Bits\n• Hosts: 2⁶ - 2 = 64 - 2 = 62 Hosts ✓ (≥50)\n\nSchritt 3: Subnetzmaske\n• /26 = 255.255.255.192\n\nSubnetze:\n• 192.168.10.0/26 (Hosts: .1–.62)\n• 192.168.10.64/26 (Hosts: .65–.126)\n• 192.168.10.128/26 (Hosts: .129–.190)\n• 192.168.10.192/26 (Hosts: .193–.254)\n\nMerke: 2^n - 2 (Netz- und Broadcast-Adresse abziehen!)",
    tags: ["#Netzwerk", "#Subnetting", "#IPv4", "#AP1"],
    hint: "2^n Subnetze, 2^m - 2 Hosts. /24+2bits = /26 → 62 Hosts"
  },
  {
    id: 29,
    category: "Bewertungsaspekte",
    topic: "IT-Sicherheit CIA",
    difficulty: "leicht",
    question: "Erklären Sie das CIA-Triad der IT-Sicherheit und nennen Sie je ein Beispiel für eine Bedrohung und eine Schutzmaßnahme.",
    shortAnswer: "C=Vertraulichkeit (Verschlüsselung), I=Integrität (Hashwerte), A=Verfügbarkeit (Backup). Bedrohungen: Abhören, Manipulation, DDoS.",
    longAnswer: "CIA-Triad der IT-Sicherheit:\n\nC – Confidentiality (Vertraulichkeit)\n• Definition: Daten nur für Berechtigte zugänglich\n• Bedrohung: Abhören, Man-in-the-Middle, Datenleck\n• Schutz: Verschlüsselung (TLS, AES), Zugriffsrechte, VPN\n\nI – Integrity (Integrität)\n• Definition: Daten unverändert und korrekt\n• Bedrohung: Manipulation, Ransomware, SQL-Injection\n• Schutz: Hashwerte (SHA-256), digitale Signaturen, Checksums\n\nA – Availability (Verfügbarkeit)\n• Definition: Systeme und Daten jederzeit erreichbar\n• Bedrohung: DDoS, Hardwareausfall, Naturkatastrophen\n• Schutz: Backup, Redundanz, USV, Failover-Cluster\n\nMerksatz: 'CIA schützt deine Daten von allen Seiten'",
    tags: ["#IT-Sicherheit", "#CIA", "#Grundlagen", "#AP1"],
    hint: "C=Vertraulichkeit, I=Integrität, A=Verfügbarkeit"
  },
  {
    id: 30,
    category: "Bewertungsaspekte",
    topic: "Backup-Strategien",
    difficulty: "mittel",
    question: "Erklären Sie den Unterschied zwischen Voll-, Differenziellem und Inkrementellem Backup. Welche Strategie ist für tägliche Sicherungen empfehlenswert?",
    shortAnswer: "Voll=alles, Differenziell=seit letztem Voll-Backup, Inkrementell=seit letztem Backup. Empfehlung: 3-2-1-Regel mit Voll+Inkrementell.",
    longAnswer: "Backup-Typen:\n\n1. Vollbackup\n   • Sichert ALLE Daten\n   • Vorteil: Einfache Wiederherstellung\n   • Nachteil: Viel Speicher, lange Dauer\n\n2. Differenzielles Backup\n   • Sichert alles seit dem letzten VOLLBACKUP\n   • Wächst täglich an\n   • Wiederherstellung: Vollbackup + letztes Diff-Backup\n\n3. Inkrementelles Backup\n   • Sichert nur Änderungen seit dem letzten BACKUP (egal welcher Art)\n   • Kleinste Datenmenge, schnellste Sicherung\n   • Wiederherstellung: Vollbackup + ALLE Inkremente\n\n3-2-1-Regel (Best Practice):\n• 3 Kopien der Daten\n• 2 verschiedene Medien\n• 1 Kopie extern/offsite\n\nEmpfehlung: Wöchentlich Vollbackup + täglich inkrementell",
    tags: ["#IT-Sicherheit", "#Backup", "#Datensicherung", "#AP1"],
    hint: "Voll=alles, Diff=seit Vollbackup, Inkr=seit letztem Backup. 3-2-1-Regel!"
  },
  {
    id: 31,
    category: "Bewertungsaspekte",
    topic: "RAID-Level",
    difficulty: "mittel",
    question: "Vergleichen Sie RAID 0, RAID 1 und RAID 5 hinsichtlich Ausfallsicherheit, Speichereffizienz und Geschwindigkeit.",
    shortAnswer: "RAID 0: Schnell, kein Schutz. RAID 1: Sicher (Spiegelung), 50% Effizienz. RAID 5: Balance aus Sicherheit und Effizienz (1 Festplatte Parity).",
    longAnswer: "RAID-Vergleich:\n\nRAID 0 (Striping):\n• Ausfallsicherheit: KEINE (1 Ausfall = Datenverlust)\n• Speichereffizienz: 100%\n• Geschwindigkeit: 2× schneller (Lesen+Schreiben)\n• Einsatz: Temporäre Daten, Gaming\n\nRAID 1 (Mirroring):\n• Ausfallsicherheit: 1 Festplatte kann ausfallen\n• Speichereffizienz: 50%\n• Geschwindigkeit: Lesen schneller, Schreiben gleich\n• Einsatz: Betriebssystem, kritische Daten\n\nRAID 5 (Striping + Parity):\n• Ausfallsicherheit: 1 Festplatte kann ausfallen\n• Speichereffizienz: (n-1)/n × 100% (z.B. 3 HDD = 67%)\n• Geschwindigkeit: Gut beim Lesen\n• Einsatz: Server, NAS, Dateiserver\n\nMerke: RAID ist KEIN Backup! (kein Schutz vor Feuer, Diebstahl, versehentlichem Löschen)",
    tags: ["#IT-Sicherheit", "#RAID", "#Speicher", "#AP1"],
    hint: "RAID 0=Speed, RAID 1=Mirror 50%, RAID 5=Parity (n-1)/n"
  },
  {
    id: 32,
    category: "Bewertungsaspekte",
    topic: "Projektmanagement Phasen",
    difficulty: "mittel",
    question: "Nennen Sie die 5 Phasen eines IT-Projekts nach klassischem Projektmanagement und beschreiben Sie je eine typische Aktivität.",
    shortAnswer: "1.Initiierung, 2.Planung, 3.Durchführung, 4.Überwachung/Steuerung, 5.Abschluss.",
    longAnswer: "Klassische Projektphasen:\n\n1. Initiierung\n   • Projektauftrag erstellen\n   • Stakeholder identifizieren\n   • Machbarkeit prüfen (Feasibility Study)\n\n2. Planung\n   • Projektstrukturplan (PSP) erstellen\n   • Ressourcen und Budget planen\n   • Zeitplan (Gantt-Diagramm, Meilensteine)\n   • Risikoanalyse\n\n3. Durchführung\n   • Aufgaben umsetzen\n   • Team koordinieren\n   • Qualitätssicherung\n\n4. Überwachung & Steuerung\n   • Fortschritt messen (Soll-Ist-Vergleich)\n   • Abweichungen korrigieren\n   • Änderungsmanagement\n\n5. Abschluss\n   • Abnahme durch Auftraggeber\n   • Projektdokumentation\n   • Lessons Learned\n   • Ressourcen freigeben",
    tags: ["#Projektmanagement", "#Phasen", "#PM", "#AP1"],
    hint: "Initiierung → Planung → Durchführung → Überwachung → Abschluss"
  },
  {
    id: 33,
    category: "Bewertungsaspekte",
    topic: "Scrum Grundlagen",
    difficulty: "mittel",
    question: "Erklären Sie die drei Rollen in Scrum und nennen Sie die wichtigsten Scrum-Events.",
    shortAnswer: "Rollen: Product Owner, Scrum Master, Dev-Team. Events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Retrospektive.",
    longAnswer: "Scrum-Rollen:\n\n1. Product Owner\n   • Verantwortlich für Product Backlog\n   • Priorisiert User Stories\n   • Vertritt Kundenwünsche\n\n2. Scrum Master\n   • Moderiert Scrum-Prozess\n   • Beseitigt Hindernisse (Impediments)\n   • Kein klassischer Projektleiter!\n\n3. Entwicklungsteam\n   • 3–9 Personen, selbstorganisiert\n   • Umsetzt Sprint Backlog\n   • Interdisziplinär\n\nScrum-Events:\n• Sprint: 1–4 Wochen Iteration\n• Sprint Planning: Was wird im Sprint gemacht?\n• Daily Scrum: 15 Min. tägliches Standup\n• Sprint Review: Demo des Increments\n• Sprint Retrospektive: Prozessverbesserung\n\nArtefakte: Product Backlog, Sprint Backlog, Increment",
    tags: ["#Projektmanagement", "#Scrum", "#Agil", "#AP1"],
    hint: "PO+SM+DevTeam. Events: Planning→Daily→Review→Retro"
  },
  {
    id: 34,
    category: "Bewertungsaspekte",
    topic: "Netzwerkprotokolle OSI",
    difficulty: "schwer",
    question: "Ordnen Sie folgende Protokolle den richtigen OSI-Schichten zu: HTTP, IP, TCP, Ethernet, TLS, DNS.",
    shortAnswer: "HTTP=7, TLS=6/5, DNS=7, TCP=4, IP=3, Ethernet=2.",
    longAnswer: "OSI-Modell Protokollzuordnung:\n\nSchicht 7 – Anwendung:\n• HTTP/HTTPS (Webkommunikation)\n• DNS (Namensauflösung)\n• FTP, SMTP, POP3, IMAP\n\nSchicht 6 – Darstellung:\n• TLS/SSL (Verschlüsselung)\n• JPEG, MPEG (Formate)\n\nSchicht 5 – Sitzung:\n• TLS (Sitzungsmanagement)\n• NetBIOS\n\nSchicht 4 – Transport:\n• TCP (verbindungsorientiert, zuverlässig)\n• UDP (verbindungslos, schnell)\n\nSchicht 3 – Vermittlung:\n• IP (IPv4, IPv6)\n• ICMP (Ping)\n• Routing-Protokolle (OSPF, BGP)\n\nSchicht 2 – Sicherung:\n• Ethernet (MAC-Adressen)\n• WLAN (802.11)\n• ARP\n\nSchicht 1 – Bitübertragung:\n• Ethernet (physisch)\n• DSL, Glasfaser\n\nMerksatz: 'Alle Deutschen Schüler Trinken Verschiedene Sorten Bier'",
    tags: ["#Netzwerk", "#OSI", "#Protokolle", "#AP1"],
    hint: "HTTP=7, DNS=7, TLS=6, TCP=4, IP=3, Ethernet=2"
  },
  {
    id: 35,
    category: "Bewertungsaspekte",
    topic: "Virtualisierung",
    difficulty: "mittel",
    question: "Erklären Sie den Unterschied zwischen Typ-1 und Typ-2 Hypervisor und nennen Sie je ein Beispiel.",
    shortAnswer: "Typ-1 (Bare-Metal): Direkt auf Hardware (VMware ESXi, Hyper-V). Typ-2 (Hosted): Auf Betriebssystem (VirtualBox, VMware Workstation).",
    longAnswer: "Hypervisor-Typen:\n\nTyp-1 Hypervisor (Bare-Metal):\n• Läuft direkt auf der Hardware\n• Kein Host-Betriebssystem nötig\n• Bessere Performance und Sicherheit\n• Einsatz: Server, Rechenzentren\n• Beispiele: VMware ESXi, Microsoft Hyper-V, Xen, KVM\n\nTyp-2 Hypervisor (Hosted):\n• Läuft als Anwendung auf Host-OS\n• Einfachere Installation\n• Geringere Performance (OS-Overhead)\n• Einsatz: Entwicklung, Testing, Desktop\n• Beispiele: Oracle VirtualBox, VMware Workstation\n\nVorteile der Virtualisierung:\n• Bessere Hardware-Auslastung\n• Schnelle Bereitstellung (Templates)\n• Einfaches Backup (Snapshots)\n• Isolation zwischen VMs\n• Kostenersparnis (weniger physische Server)",
    tags: ["#Virtualisierung", "#Hypervisor", "#Server", "#AP1"],
    hint: "Typ-1=Bare-Metal (ESXi), Typ-2=Hosted (VirtualBox)"
  },
  {
    id: 36,
    category: "Bewertungsaspekte",
    topic: "Cloud-Modelle",
    difficulty: "leicht",
    question: "Erklären Sie den Unterschied zwischen IaaS, PaaS und SaaS mit je einem konkreten Beispiel.",
    shortAnswer: "IaaS=Infrastruktur (AWS EC2), PaaS=Plattform (Heroku), SaaS=Software (Microsoft 365). Verantwortung nimmt von IaaS→SaaS ab.",
    longAnswer: "Cloud-Service-Modelle:\n\nIaaS – Infrastructure as a Service:\n• Bereitstellung: Virtuelle Maschinen, Speicher, Netzwerk\n• Kunde verwaltet: OS, Middleware, Anwendungen\n• Anbieter verwaltet: Hardware, Virtualisierung\n• Beispiele: AWS EC2, Azure VMs, Google Compute Engine\n• Zielgruppe: IT-Administratoren\n\nPaaS – Platform as a Service:\n• Bereitstellung: Entwicklungsplattform, Datenbanken, Runtime\n• Kunde verwaltet: Anwendungen, Daten\n• Anbieter verwaltet: OS, Middleware, Hardware\n• Beispiele: Heroku, Google App Engine, Azure App Service\n• Zielgruppe: Entwickler\n\nSaaS – Software as a Service:\n• Bereitstellung: Fertige Anwendungen\n• Kunde verwaltet: Nur Daten und Benutzer\n• Anbieter verwaltet: Alles andere\n• Beispiele: Microsoft 365, Salesforce, Google Workspace\n• Zielgruppe: Endanwender\n\nMerksatz: 'Pizza as a Service' – IaaS=Rohzutaten, PaaS=Teig fertig, SaaS=fertige Pizza",
    tags: ["#Cloud", "#IaaS", "#PaaS", "#SaaS", "#AP1"],
    hint: "IaaS=VM, PaaS=Plattform, SaaS=fertige App. Verantwortung ↓"
  },
  {
    id: 37,
    category: "Bewertungsaspekte",
    topic: "Datenbankgrundlagen",
    difficulty: "mittel",
    question: "Was versteht man unter den ACID-Eigenschaften einer Datenbank? Erklären Sie jede Eigenschaft kurz.",
    shortAnswer: "A=Atomarität (alles oder nichts), C=Konsistenz (Regeln einhalten), I=Isolation (Transaktionen unabhängig), D=Dauerhaftigkeit (gespeichert bleibt gespeichert).",
    longAnswer: "ACID-Eigenschaften:\n\nA – Atomicity (Atomarität):\n• Eine Transaktion wird vollständig oder gar nicht ausgeführt\n• Beispiel: Banküberweisung – entweder Abbuchung UND Gutschrift, oder nichts\n\nC – Consistency (Konsistenz):\n• Datenbank ist vor und nach der Transaktion in gültigem Zustand\n• Alle Integritätsregeln werden eingehalten\n• Beispiel: Kontostand kann nicht negativ werden (wenn Regel gesetzt)\n\nI – Isolation (Isolation):\n• Gleichzeitige Transaktionen beeinflussen sich nicht\n• Jede Transaktion sieht konsistenten Zustand\n• Beispiel: Zwei gleichzeitige Buchungen blockieren sich nicht gegenseitig\n\nD – Durability (Dauerhaftigkeit):\n• Abgeschlossene Transaktionen bleiben dauerhaft gespeichert\n• Auch nach Systemabsturz\n• Realisiert durch Write-Ahead-Logging (WAL)\n\nACID ist Standard für relationale Datenbanken (MySQL, PostgreSQL, Oracle).",
    tags: ["#Datenbank", "#ACID", "#SQL", "#AP1"],
    hint: "A=Alles/Nichts, C=Konsistent, I=Isoliert, D=Dauerhaft"
  },
  {
    id: 38,
    category: "Bewertungsaspekte",
    topic: "Netzwerksicherheit Firewall",
    difficulty: "mittel",
    question: "Erklären Sie den Unterschied zwischen Paketfilter-Firewall, Stateful Inspection Firewall und Application Layer Firewall (WAF).",
    shortAnswer: "Paketfilter=IP/Port-Regeln, Stateful=Verbindungszustand, WAF=Anwendungsebene (HTTP-Inhalte analysieren).",
    longAnswer: "Firewall-Typen:\n\n1. Paketfilter-Firewall (Layer 3/4):\n• Prüft: IP-Adressen, Ports, Protokolle\n• Kein Verbindungszustand gespeichert\n• Schnell, aber einfach zu umgehen\n• Beispiel: iptables-Regel: 'Erlaube TCP Port 443'\n\n2. Stateful Inspection Firewall (Layer 3/4):\n• Speichert Verbindungszustand (Connection Tracking)\n• Erkennt, ob Paket zu bestehender Verbindung gehört\n• Schützt vor IP-Spoofing\n• Standard in modernen Firewalls (pfSense, Cisco ASA)\n\n3. Application Layer Firewall / WAF (Layer 7):\n• Analysiert Anwendungsinhalte (HTTP, FTP, DNS)\n• Erkennt SQL-Injection, XSS, CSRF\n• Kann SSL-Verbindungen entschlüsseln und prüfen\n• Beispiele: ModSecurity, Cloudflare WAF, AWS WAF\n\nDMZ-Konzept: Paketfilter außen + Stateful innen + WAF vor Webserver",
    tags: ["#IT-Sicherheit", "#Firewall", "#Netzwerk", "#AP1"],
    hint: "Paketfilter=IP/Port, Stateful=Zustand, WAF=Anwendungsinhalt"
  },
  {
    id: 39,
    category: "Bewertungsaspekte",
    topic: "Wirtschaftlichkeitsrechnung",
    difficulty: "schwer",
    question: "Ein Unternehmen vergleicht zwei Server: Server A kostet 8.000 € (Anschaffung) + 200 €/Monat Betrieb. Server B kostet 15.000 € + 80 €/Monat. Ab wann ist Server B günstiger?",
    shortAnswer: "Nach 58,3 Monaten (ca. 4 Jahre 10 Monate). Gleichung: 8.000 + 200x = 15.000 + 80x → 120x = 7.000 → x ≈ 58,3",
    longAnswer: "Wirtschaftlichkeitsrechnung:\n\nGesucht: Break-Even-Punkt (Monat x)\n\nKosten Server A: 8.000 + 200x\nKosten Server B: 15.000 + 80x\n\nGleichsetzen:\n8.000 + 200x = 15.000 + 80x\n200x - 80x = 15.000 - 8.000\n120x = 7.000\nx = 7.000 / 120\nx = 58,33 Monate ≈ 4 Jahre 10 Monate\n\nPrüfung:\n• Monat 58: A = 8.000 + 11.600 = 19.600 €, B = 15.000 + 4.640 = 19.640 €\n• Monat 59: A = 19.800 €, B = 19.720 € → B günstiger ✓\n\nEntscheidung: Wenn Nutzungsdauer > 58 Monate → Server B wählen",
    tags: ["#Wirtschaftlichkeit", "#Kalkulation", "#Beschaffung", "#AP1"],
    hint: "Gleichung: 8000+200x = 15000+80x → löse nach x auf"
  },
  {
    id: 40,
    category: "Bewertungsaspekte",
    topic: "Netzwerk VLAN",
    difficulty: "mittel",
    question: "Was ist ein VLAN und welche Vorteile bietet es gegenüber einem physisch getrennten Netzwerk?",
    shortAnswer: "VLAN = logische Netztrennung auf einem Switch. Vorteile: Flexibel, kostengünstig, sicher, zentral verwaltbar ohne physische Trennung.",
    longAnswer: "VLAN (Virtual Local Area Network):\n\nDefinition: Logische Segmentierung eines physischen Netzwerks in mehrere unabhängige Broadcast-Domänen.\n\nVorteile gegenüber physischer Trennung:\n\n1. Kostenersparnis\n   • Ein Switch statt mehrerer physischer Switches\n   • Weniger Kabelaufwand\n\n2. Flexibilität\n   • Geräte können per Software VLANs zugewiesen werden\n   • Keine Umverkabelung bei Umzügen\n\n3. Sicherheit\n   • Abteilungen sind logisch getrennt (HR, Buchhaltung, IT)\n   • Broadcast-Stürme bleiben im VLAN\n\n4. Zentrale Verwaltung\n   • Konfiguration über Switch-Management\n   • Schnelle Änderungen möglich\n\nVLAN-Typen:\n• Port-basiert: Physischer Port → VLAN\n• Tagged (802.1Q): Mehrere VLANs über ein Kabel (Trunk)\n\nAnwendung: VLAN 10=IT, VLAN 20=HR, VLAN 30=Gäste-WLAN",
    tags: ["#Netzwerk", "#VLAN", "#Sicherheit", "#AP1"],
    hint: "VLAN = logische Trennung, 802.1Q-Tagging, Broadcast-Domäne"
  }
];

// Hilfsfunktionen
function getQuestionOfTheDay() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return AVS_QUESTIONS[dayOfYear % AVS_QUESTIONS.length];
}

function getQuestionsByCategory(category) {
  return AVS_QUESTIONS.filter(q => q.category === category);
}

function getRandomQuestion(excludeId = null) {
  const pool = excludeId ? AVS_QUESTIONS.filter(q => q.id !== excludeId) : AVS_QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getCategories() {
  return [...new Set(AVS_QUESTIONS.map(q => q.category))];
}

function getStats() {
  const answered = JSON.parse(localStorage.getItem('avs_answered') || '{}');
  const correct = Object.values(answered).filter(v => v === 'correct').length;
  const total = AVS_QUESTIONS.length;
  return { answered: Object.keys(answered).length, correct, total };
}
