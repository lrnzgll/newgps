module TownSeed
    class Seed
        require 'csv'

        def self.get_data
            file = File.read('lib/assets/italian_town.csv')
            csv = CSV.parse(file, headers: false)

            #country
            italia = Country.create(name: "Italia", slug:"IT")

            #region
            abruzzo = Region.create(name: "Abruzzo", slug:"abruzzo", country: italia)
            basilicata = Region.create(name: "Basilicata", slug:"basilicata", country: italia)
            calabria = Region.create(name: "Calabria", slug:"calabria", country: italia)
            campania = Region.create(name: "Campania", slug:"campania", country: italia)
            emiliaromagna = Region.create(name: "Emilia-Romagna", slug:"emiliaromagna", country: italia)
            friuliveneziagiulia = Region.create(name: "Friuli-Venezia Giulia", slug:"friuliveneziagiulia", country: italia)
            lazio = Region.create(name: "Lazio", slug:"lazio", country: italia)
            liguria = Region.create(name: "Liguria", slug:"liguria", country: italia)
            lombardia = Region.create(name: "Lombardia", slug:"lombardia", country: italia)
            marche = Region.create(name: "Marche", slug:"marche", country: italia)
            molise = Region.create(name: "Molise", slug:"molise", country: italia)
            piemonte = Region.create(name: "Piemonte", slug:"piemonte", country: italia)
            puglia = Region.create(name: "Puglia", slug:"puglia", country: italia)
            sardegna = Region.create(name: "Sardegna", slug:"sardegna", country: italia)
            sicilia = Region.create(name: "Sicilia", slug:"sicilia", country: italia)
            toscana = Region.create(name: "Toscana", slug:"toscana", country: italia)
            trentinoaltoadige = Region.create(name: "Trentino-Alto Adige", slug:"trentinoaltoadige", country: italia)
            umbria = Region.create(name: "Umbria", slug:"umbria", country: italia)
            valledaosta = Region.create(name: "Valle d'Aosta", slug:"valledaosta", country: italia)
            veneto = Region.create(name: "Veneto", slug:"veneto", country: italia)

            #county
            counties = [["Padova", "PD", "Veneto"], ["Lodi", "LO", "Lombardia"], ["Lecco", "LC", "Lombardia"], ["Siena", "SI", "Toscana"], ["Oristano", "OR", "Sardegna"], ["Pescara", "PE", "Abruzzo"], ["Milano", "MI", "Lombardia"], ["Pistoia", "PT", "Toscana"], ["Potenza", "PZ", "Basilicata"], ["Ragusa", "RG", "Sicilia"], ["Foggia", "FG", "Puglia"], ["Cuneo", "CN", "Piemonte"], ["Matera", "MT", "Basilicata"], ["L'Aquila", "AQ", "Abruzzo"], ["Rieti", "RI", "Lazio"], ["Salerno", "SA", "Campania"], ["Napoli", "NA", "Campania"], ["Catania", "CT", "Sicilia"], ["Frosinone", "FR", "Lazio"], ["Cosenza", "CS", "Calabria"], ["Brescia", "BS", "Lombardia"], ["Pesaro e Urbino", "PU", "Marche"], ["Cremona", "CR", "Lombardia"], ["Mantova", "MN", "Lombardia"], ["Viterbo", "VT", "Lazio"], ["Lecce", "LE", "Puglia"], ["Vibo Valentia", "VV", "Calabria"], ["Ascoli Piceno", "AP", "Marche"], ["Terni", "TR", "Umbria"], ["Campobasso", "CB", "Molise"], ["Bari", "BA", "Puglia"],["Isernia", "IS", "Molise"], ["Caltanissetta", "CL", "Sicilia"], ["Messina", "ME", "Sicilia"], ["Alessandria", "AL", "Piemonte"], ["Bergamo", "BG", "Lombardia"], ["Rovigo", "RO", "Veneto"], ["Verona", "VR", "Veneto"], ["Roma Capitale","RM", "Lazio"], ["Reggio Calabria", "RC", "Calabria"], ["Piacenza", "PC", "Emilia-Romagna"], ["Sassari", "SS", "Sardegna"], ["Enna", "EN", "Sicilia"], ["Asti", "AT", "Piemonte"], ["Torino", "TO", "Piemonte"], ["Belluno", "BL", "Veneto"], ["Varese", "VA", "Lombardia"], ["Monza e Brianza", "MB", "Lombardia"], ["Novara", "NO", "Piemonte"], ["Agrigento", "AG", "Sicilia"], ["Ancona", "AN", "Marche"], ["Vicenza", "VI", "Veneto"], ["Udine", "UD", "Friuli-Venezia Giulia"], ["Avellino", "AV", "Campania"], ["Caserta", "CE", "Campania"], ["Biella", "BI", "Piemonte"], ["Benevento", "BN", "Campania"], ["Imperia", "IM", "Liguria"], ["Trento", "TN", "Trentino-Alto Adige"], ["Pavia", "PV", "Lombardia"], ["Vercelli", "VC", "Piemonte"], ["Savona", "SV", "Liguria"], ["Teramo", "TE", "Abruzzo"], ["Sondrio", "SO", "Lombardia"], ["Parma", "PR", "Emilia-Romagna"], ["Como", "CO", "Lombardia"], ["Catanzaro", "CZ", "Calabria"], ["Reggio Emilia", "RE", "Emilia-Romagna"], ["Trapani", "TP", "Sicilia"], ["Bolzano/Bozen", "BZ", "Trentino-Alto Adige"], ["Ravenna", "RA", "Emilia-Romagna"], ["Palermo", "PA", "Sicilia"], ["Valle d'Aosta", "AO", "Valle d'Aosta"], ["Fermo", "FM", "Marche"], ["Chieti", "CH", "Abruzzo"], ["Treviso", "TV", "Veneto"], ["Bologna", "BO", "Emilia-Romagna"], ["Lucca", "LU", "Toscana"], ["La Spezia", "SP", "Liguria"], ["Pordenone", "PN", "Friuli-Venezia Giulia"], ["Barletta-Andria-Trani", "BT", "Puglia"], ["Arezzo", "AR", "Toscana"], ["Venezia", "VE", "Veneto"], ["Verbano Cusio Ossola", "VB", "Piemonte"], ["Macerata", "MC", "Marche"], ["Latina", "LT", "Lazio"], ["Sud Sardegna", "SU", "Sardegna"], ["Grosseto", "GR", "Toscana"], ["Genova", "GE", "Liguria"], ["Ferrara", "FE", "Emilia-Romagna"], ["Nuoro", "NU", "Sardegna"], ["Cagliari", "CA", "Sardegna"], ["Perugia", "PG", "Umbria"], ["Siracusa", "SR", "Sicilia"], ["Massa e Carrara", "MS", "Toscana"], ["Taranto", "TA", "Puglia"], ["Firenze", "FI", "Toscana"], ["Forlì-Cesena", "FC", "Emilia-Romagna"], ["Modena", "MO", "Emilia-Romagna"], ["Rimini", "RN", "Emilia-Romagna"], ["Crotone", "KR", "Calabria"], ["Livorno", "LI", "Toscana"], ["Pisa", "PI", "Toscana"], ["Brindisi", "BR", "Puglia"], ["Prato", "PO", "Toscana"], ["Gorizia", "GO", "Friuli-Venezia Giulia"], ["Trieste", "TS", "Friuli-Venezia Giulia"]]

            counties.each do |c|
                region = Region.find_by(name: c[2])
                raise 'no region' if region.nil?

                County.create(name: c[0], slug: c[1], region: region)
            end

            csv.each do |row|
                binding.pry
                county = County.find_by(name: row[3])

                raise 'no county' if county.nil?

                Town.create(name: row[1], county: county)
            end
        end
    end
end