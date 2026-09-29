export interface MonthCalendarData {
  monthIndex: number; // 1 to 12
  nameMr: string;
  nameEn: string;
  seasonMr: string;
  seasonEn: string;
  climatePuneMr: string;
  climatePuneEn: string;
  tempRange: string;
  rainfallStatusMr: string;
  rainfallStatusEn: string;
  sowingCropsMr: string[];
  sowingCropsEn: string[];
  harvestingCropsMr: string[];
  harvestingCropsEn: string[];
  maintenanceTasksMr: string[];
  maintenanceTasksEn: string[];
  expertTipPuneMr: string;
  expertTipPuneEn: string;
  keyTalukasMr: string;
  keyTalukasEn: string;
}

export const PUNE_CROP_CALENDAR: MonthCalendarData[] = [
  {
    monthIndex: 1,
    nameMr: 'जानेवारी (January)',
    nameEn: 'January',
    seasonMr: 'रब्बी हंगाम (थंड व कोरडा)',
    seasonEn: 'Rabi Season (Cold & Dry)',
    climatePuneMr: 'थंड, कोरडे व निरभ्र हवामान. रात्रीचे तापमान १०° ते १२° से. पर्यंत घसरते. पहाटे धुके व दव पडते.',
    climatePuneEn: 'Crisp cold and dry weather. Night temperatures drop to 10°-12°C. Morning dew and light fog in river valleys.',
    tempRange: '10°C - 28°C',
    rainfallStatusMr: 'पाऊस नाही (निरभ्र आकाश)',
    rainfallStatusEn: 'Dry / No rainfall (Clear skies)',
    sowingCropsMr: [
      'सुरू ऊस लागवड (को. ८६०३२ / फुले २६५)',
      'उन्हाळी भाजीपाला (भेंडी, काकडी, दुधी भोपळा, कारली)',
      'टरबूज व खरबूज मल्चिंगवर लागवड',
      'उन्हाळी भुईमूग शेत पूर्वतयारी'
    ],
    sowingCropsEn: [
      'Suru Sugarcane planting (Co-86032 / Phule 265)',
      'Summer vegetables (Okra, Cucumber, Bottle gourd, Bitter gourd)',
      'Watermelon & Muskmelon on plastic mulch beds',
      'Field preparation for Summer Groundnut'
    ],
    harvestingCropsMr: [
      'तूर (Pigeon pea) शेंगा काढणी व मळणी',
      'रब्बी ज्वारी (मालदांडी) दाणे टपोरे होणे / हुर्डा हंगाम',
      'पुरंदर अंजीर (खट्टा बहार तोडणी सुरू)',
      'ऊस तोडणी (कारखाना गाळप सुरू)'
    ],
    harvestingCropsEn: [
      'Pigeon pea (Tur) pod harvesting & threshing',
      'Rabi Sorghum (Maldandi) grain hardening & Hurda parties',
      'Purandar Fig (Khatta Bahar early picking)',
      'Sugarcane crushing season in full swing'
    ],
    maintenanceTasksMr: [
      'रब्बी कांदा: लागवडीनंतर ३०-४५ दिवसांनी युरियाचा दुसरा हप्ता देणे; गंधकाची फवारणी करणे.',
      'द्राक्षे: मणी फुगवणीच्या अवस्थेत ००:५२:३४ आणि कॅल्शियम नायट्रेट ठिबकमधून देणे.',
      'डाळिंब: आंबे बहार धरणाऱ्या झाडांना पाण्याचा ताण तोडून पहिले पाणी व खते देणे.',
      'गहू: ओंब्या निघताना पाण्याचा ताण पडू न देणे.'
    ],
    maintenanceTasksEn: [
      'Rabi Onion: Second split dose of Nitrogen and foliar Sulphur spray; monitor for thrips.',
      'Grapes: Berry sizing stage fertigation with 00:52:34 and Calcium Nitrate.',
      'Pomegranate: Ambe Bahar stress release with light watering and basal organic manures.',
      'Wheat: Maintain steady root-zone moisture during booting and heading stages.'
    ],
    expertTipPuneMr: 'थंडीच्या लाटेत द्राक्ष घ घड आणि टोमॅटो पिकाचे संरक्षण करण्यासाठी पहाटे हलके सिंचन करावे किंवा बागेच्या बांधावर धूर करावा.',
    expertTipPuneEn: 'During intense cold waves, apply light dawn irrigation or generate safe smoke mulch on borders to shield grape bunches and tomatoes from frost.',
    keyTalukasMr: 'बारामती, इंदापूर (ऊस व गूळ), जुन्नर (टोमॅटो), पुरंदर (अंजीर), हवेली (द्राक्षे)',
    keyTalukasEn: 'Baramati, Indapur (Cane & Jaggery), Junnar (Tomato), Purandar (Fig), Haveli (Grapes)'
  },
  {
    monthIndex: 2,
    nameMr: 'फेब्रुवारी (February)',
    nameEn: 'February',
    seasonMr: 'रब्बी ते उन्हाळी संक्रमण',
    seasonEn: 'Rabi to Summer Transition',
    climatePuneMr: 'थंडी कमी होऊन दुपारचे ऊन वाढू लागते. हवामान कोरडे राहते. हवेतील आर्द्रता ४०-५०% पर्यंत खाली येते.',
    climatePuneEn: 'Winter chill recedes; daytime warmth increases. Dry pleasant winds with relative humidity dropping to 40-50%.',
    tempRange: '14°C - 32°C',
    rainfallStatusMr: 'पाऊस नाही (कोरडे हवामान)',
    rainfallStatusEn: 'Dry / No rainfall',
    sowingCropsMr: [
      'उन्हाळी भुईमूग पेरणी (टीएजी-२४ / टीपीजी-४१ - १ ते १५ फेब्रुवारी सर्वोत्तम काळ)',
      'उन्हाळी बाजरी पेरणी (फुले आदिशक्ती / सबुरी)',
      'उन्हाळी चारा मका व कडवळ पेरणी'
    ],
    sowingCropsEn: [
      'Summer Groundnut sowing (TAG-24 / TPG-41 - prime window Feb 1-15)',
      'Summer Pearl Millet (Bajra - Phule Adishakti)',
      'Summer fodder crops (Maize, Sorghum Kadwal, Lucerne)'
    ],
    harvestingCropsMr: [
      'रब्बी ज्वारी (मालदांडी) कापणी व मळणी',
      'हरभरा (घाटे वाळल्यावर उपटणी व मळणी)',
      'सुरू ऊस तोडणी',
      'द्राक्षे (निर्यातक्षम काढणी सुरू)'
    ],
    harvestingCropsEn: [
      'Rabi Sorghum harvesting and mechanical threshing',
      'Chickpea (Gram) harvest upon pod browning',
      'Sugarcane cutting across sugar mill command areas',
      'Grape harvesting for export and domestic markets'
    ],
    maintenanceTasksMr: [
      'गहू: दाणे भरण्याच्या (Dough stage) संवेदनशील अवस्थेत पाणी देणे.',
      'रब्बी कांदा: लागवडीनंतर ६० दिवसांनंतर नत्र (युरिया) देणे पूर्ण बंद करावे, जेणेकरून डेंगळे फुटणार नाहीत.',
      'डाळिंब: फुलोरा व फळधारणा टिकवण्यासाठी बोरॉन व १३:००:४५ ची फवारणी.',
      'सुरू ऊस: बाळ बांधणी करून मधोमध युरिया व पोटॅश देणे.'
    ],
    maintenanceTasksEn: [
      'Wheat: Crucial terminal irrigation at dough stage to plump up grains.',
      'Rabi Onion: Strictly cease Nitrogen fertilizer post 60 days to prevent thick necks and bolting.',
      'Pomegranate: Foliar Boron and Potassium Nitrate (13:00:45) spray for maximum fruit set.',
      'Sugarcane: Sub-earthing up with split Nitrogen and Potash application.'
    ],
    expertTipPuneMr: 'उन्हाळी भुईमुगासाठी पेरणीपूर्वी बियाण्यास थायरम + रायझोबियम जिवाणू संवर्धकाची बीजप्रक्रिया १००% करावी.',
    expertTipPuneEn: 'Treat summer groundnut seed kernels with Thiram (3g/kg) followed by Rhizobium culture slurry to boost biological nodulation.',
    keyTalukasMr: 'शिरूर, दौंड (ज्वारी व गहू मळणी), बारामती (भुईमूग), नारायणगाव (द्राक्षे व भाजीपाला)',
    keyTalukasEn: 'Shirur, Daund (Jowar & Wheat), Baramati (Groundnut), Narayangaon (Grapes & Veg)'
  },
  {
    monthIndex: 3,
    nameMr: 'मार्च (March)',
    nameEn: 'March',
    seasonMr: 'उन्हाळी हंगाम (उष्ण व कोरडा)',
    seasonEn: 'Summer Season (Hot & Dry)',
    climatePuneMr: 'तापमान वेगाने ३५° से. पार करते. विहिरी आणि कालव्यांमधील पाण्याची पातळी कमी होऊ लागते.',
    climatePuneEn: 'Temperatures climb rapidly past 35°C. Evaporation surges; groundwater and canal levels deplete.',
    tempRange: '18°C - 36°C',
    rainfallStatusMr: 'अत्यंत कोरडे (क्वचित वळवाचा शिडकावा)',
    rainfallStatusEn: 'Dry summer conditions',
    sowingCropsMr: [
      'उन्हाळी मूग व उडीद',
      'हिरवा चारा पिके (मका, चवळी, गवत)',
      'आले व हळद लागवडीसाठी शेत मशागत'
    ],
    sowingCropsEn: [
      'Summer Green Gram (Moong) & Black Gram (Urad)',
      'Fodder crops (Multicut fodder sorghum, Cowpea)',
      'Soil preparation for pre-monsoon Ginger & Turmeric'
    ],
    harvestingCropsMr: [
      'गहू (कपाशी/हार्वेस्टरने कापणी)',
      'रब्बी हरभरा मळणी पूर्ण',
      'द्राक्षे (गोडी छाटणीनंतरचे सर्वोच्च उत्पादन)',
      'पुरंदर अंजीर (मिठ्ठा बहार पिकणे)'
    ],
    harvestingCropsEn: [
      'Wheat mechanical combine harvesting',
      'Chickpea threshing completion',
      'Grape peak harvest for international export and APMC auctions',
      'Purandar Fig (Sweet Mitha Bahar peak season)'
    ],
    maintenanceTasksMr: [
      'उन्हाळी खोल नांगरट: कापणी झालेल्या शेतात ट्रॅक्टरने खोल नांगरट करून माती उन्हात तापू द्यावी.',
      'द्राक्ष बागेत काढणीनंतर विश्रांती काळात वेलींना पाणी कमी करून पाला पिकू देणे.',
      'ठिबक सिंचन: बाष्पीभवन रोखण्यासाठी पिकांभोवती उसाचे पाचट किंवा प्लास्टिक मल्चिंग करणे.',
      'कांदा चाळीची स्वच्छता व निर्जंतुकीकरण करून घेणे.'
    ],
    maintenanceTasksEn: [
      'Deep Summer Tillage: Deep ploughing of harvested fields to expose pests and weed roots to solar heat.',
      'Grape Vineyard: Post-harvest rest period; step down fertigation to harden wood for foundation pruning.',
      'Drip Scheduling: Mulch heavily with crop residues or film to arrest excessive soil moisture evaporation.',
      'Clean and sanitize ventilated wooden onion storage chawls.'
    ],
    expertTipPuneMr: 'गहू मळणीनंतर दाण्यातील ओलावा १०-१२% च्या खाली आल्याची खात्री करूनच साठवणूक करावी, जेणेकरून किडींचा प्रादुर्भाव होणार नाही.',
    expertTipPuneEn: 'Sun-dry harvested wheat kernels below 10-12% moisture before hermetic bin storage to prevent granary weevil infestations.',
    keyTalukasMr: 'पुरंदर (अंजीर मेळावे), जुन्नर (द्राक्षे), हवेली (भाजीपाला), दौंड (गहू)',
    keyTalukasEn: 'Purandar (Fig Festival), Junnar (Grapes), Haveli (Vegetables), Daund (Wheat)'
  },
  {
    monthIndex: 4,
    nameMr: 'एप्रिल (April)',
    nameEn: 'April',
    seasonMr: 'कडक उन्हाळा (Water Stress)',
    seasonEn: 'Peak Summer (Water Stress)',
    climatePuneMr: 'कडक उन्हाळा, दुपारचे तापमान ३८° ते ४०° से. पर्यंत. बाष्पीभवनाचा वेग सर्वाधिक. पाणी टंचाईची चाहूल.',
    climatePuneEn: 'Scorching summer heat with daytime temperatures touching 38°-40°C. Peak evaporation rates.',
    tempRange: '22°C - 39°C',
    rainfallStatusMr: 'कोरडे (महिनाअखेर वळवाचे ढग संभवतात)',
    rainfallStatusEn: 'Dry heat with occasional localized pre-monsoon convective clouds',
    sowingCropsMr: [
      'आले (Ginger) बेणे लागवड (माहीम / रिओ-डी-जनेरो - अक्षय्य तृतीयेच्या मुहूर्तावर)',
      'हळद (Turmeric) लागवड (सेलम / फुले स्वरूपा)',
      'सुरू ऊस लागवड पूर्ण करणे'
    ],
    sowingCropsEn: [
      'Ginger rhizome planting on raised beds (Mahim / Rio de Janeiro)',
      'Turmeric mother rhizome planting (Salem / Phule Swaroopa)',
      'Completion of Suru sugarcane planting'
    ],
    harvestingCropsMr: [
      'रब्बी कांदा काढणी (५०% माना पडल्यावर उपटणी)',
      'कलिंगड व खरबूज तोडणी',
      'उन्हाळी भाजीपाला (टोमॅटो, काकडी, मिरची)'
    ],
    harvestingCropsEn: [
      'Rabi Storage Onion harvesting upon 50% top neck fall',
      'Watermelon & Muskmelon peak harvest',
      'Summer vegetable pickings (Tomato, Cucumber, Hot pepper)'
    ],
    maintenanceTasksMr: [
      'द्राक्षांची एप्रिल खरड छाटणी (Foundation Pruning): १ किंवा २ डोळे ठेवून छाटणी करणे आणि लगेच डोर्मेक्स पेस्ट लावणे.',
      'रब्बी कांदा शेतात ३-४ दिवस पानांखाली झाकून क्युरिंग (Field curing) करणे.',
      'आले-हळद गादीवाफ्यावर शेणखत, निंबोळी पेंड व ट्रायकोडर्मा भरपूर प्रमाणात देणे.',
      'ठिबक सिंचन पाइपलाइनची ॲसिड ट्रीटमेंट (HCl) करून ड्रीपर्स साफ करणे.'
    ],
    maintenanceTasksEn: [
      'Grape Foundation Pruning (April Kharad Chhatni): Back-prune to 1-2 buds; immediately coat cuts with Hydrogen Cyanamide (Dormex).',
      'Cure harvested Rabi onions in field windrows under leaf canopy for 3-4 days.',
      'Generous incorporation of well-rotted FYM, neem cake, and Trichoderma on ginger/turmeric beds.',
      'Execute dilute Hydrochloric Acid flush through drip laterals to dissolve carbonate scales.'
    ],
    expertTipPuneMr: 'द्राक्षांची एप्रिल छाटणी करताना नवीन काडी जोमदार फुटण्यासाठी छाटणीनंतर ४८ तासांच्या आत डोर्मेक्स पेस्ट लावणे अत्यावश्यक आहे.',
    expertTipPuneEn: 'In grapevines, apply Dormex paste within 48 hours of April pruning to ensure uniform bud break and robust cane formation.',
    keyTalukasMr: 'आंबेगाव (मंचर कांदा), खेड (चाकण), जुन्नर (द्राक्ष छाटणी), बारामती (आले)',
    keyTalukasEn: 'Ambegaon (Manchar Onion), Khed (Chakan), Junnar (Grape Pruning), Baramati (Ginger)'
  },
  {
    monthIndex: 5,
    nameMr: 'मे (May)',
    nameEn: 'May',
    seasonMr: 'खरीप पूर्वतयारी हंगाम',
    seasonEn: 'Pre-Kharif Preparation Season',
    climatePuneMr: 'प्रचंड उष्णता, दुपारनंतर ढगांची गर्दी आणि अवकाळी वळवाचा पाऊस (धुळीची चक्रीवादळे व विजांचा कडकडाट).',
    climatePuneEn: 'Intense summer heat. Convective pre-monsoon squalls (Valiv storms) with lightning and gusty winds.',
    tempRange: '24°C - 40°C',
    rainfallStatusMr: 'अवकाळी वळवाचा पाऊस (२० ते ५० मिमी)',
    rainfallStatusEn: 'Pre-monsoon thunderstorms (20 - 50 mm sporadic showers)',
    sowingCropsMr: [
      'खरीप टोमॅटो, मिरची, वांगी रोपवाटिका (प्रोट्रे मध्ये कोकोपीटवर नर्सरी)',
      'खरीप कांदा रोपवाटिका तयार करणे',
      'इंद्रायणी भात धूळवाफ पेरणी पूर्वतयारी (मावळ, मुळशी)',
      'आले-हळद लागवड पूर्ण करणे'
    ],
    sowingCropsEn: [
      'Nursery raising in pro-trays for Kharif Tomato, Chilli, and Brinjal',
      'Kharif Onion nursery bed preparation',
      'Dry-sowing preparation for Indrayani Paddy in Western Ghats',
      'Finalization of Ginger and Turmeric planting'
    ],
    harvestingCropsMr: [
      'उन्हाळी भुईमूग शेंगा काढणी व वाळवणे',
      'उन्हाळी बाजरी मळणी',
      'कांदा चाळीत साठवणूक पूर्ण करणे'
    ],
    harvestingCropsEn: [
      'Summer groundnut pod lifting and drying',
      'Summer Pearl Millet (Bajra) threshing',
      'Grading and loading Rabi onions into ventilated chawls'
    ],
    maintenanceTasksMr: [
      'शेतात शेणखत पसरणे: प्रति एकर ५ ते १० ट्रॉली चांगले कुजलेले शेणखत जमिनीत मिसळावे.',
      'शेततळे अस्तरीकरण: वादळी वाऱ्यापूर्वी शेततळ्याचे प्लास्टिक तपासून दुरुस्त करावे.',
      'बियाणे खरेदी: नामांकित कृषी केंद्रातून महाबीज किंवा प्रमाणित कंपन्यांचे बियाणे अधिकृत पावतीसह खरेदी करावे.',
      'सोयाबीन बियाण्याची घरगुती उगवण क्षमता चाचणी (Germination test) घेणे.'
    ],
    maintenanceTasksEn: [
      'Farmyard Manure Application: Broadcast 5-10 trolleys of well-rotted FYM per acre before monsoons.',
      'Farm Pond Inspection: Secure 500-micron geomembrane plastic anchors before squall storms.',
      'Seed Procurement: Buy certified seeds (Mahabeej / ICAR) only with printed GST receipts.',
      'Conduct home germination tests on saved soybean seed lots (minimum 70% threshold).'
    ],
    expertTipPuneMr: 'सोयाबीन पेरणीपूर्वी स्वतःकडील बियाण्यांचे १०० दाणे गोणपाटावर ओले ठेवून उगवण क्षमता तपासा; ७०% पेक्षा कमी उगवण असल्यास बियाणे दर वाढवावा.',
    expertTipPuneEn: 'Test 100 soybean seeds on wet gunny bag; if germination is under 70%, proportionally increase seed rate during sowing.',
    keyTalukasMr: 'मावळ, मुळशी (भात पूर्वतयारी), जुन्नर (रोपवाटिका), शिरूर (शेणखत पसरणी)',
    keyTalukasEn: 'Maval, Mulshi (Paddy prep), Junnar (Nursery), Shirur (Manure broadcasting)'
  },
  {
    monthIndex: 6,
    nameMr: 'जून (June)',
    nameEn: 'June',
    seasonMr: 'खरीप हंगाम प्रारंभ (मान्सून आगमन)',
    seasonEn: 'Kharif Onset (Monsoon Arrival)',
    climatePuneMr: 'नैऋत्य मान्सूनचे आगमन (साधारण ७ ते १५ जून). मावळ-मुळशीत मुसळधार तर पूर्व भागात मध्यम ते हलका पाऊस.',
    climatePuneEn: 'Southwest monsoon onset (typically June 7-15). Heavy downpours in Sahyadri ghats; moderate showers in eastern talukas.',
    tempRange: '22°C - 31°C',
    rainfallStatusMr: 'मान्सून पाऊस (१०० ते २५० मिमी)',
    rainfallStatusEn: 'Active monsoon (100 - 250 mm cumulative)',
    sowingCropsMr: [
      'सोयाबीन पेरणी (फुले संगम केडीएस-७२६ / फुले किमया - ७५ ते १०० मिमी पाऊस झाल्यावर)',
      'इंद्रायणी भात रोपवाटिका (मावळ, मुळशी, भोर, वेल्हे)',
      'खरीप बाजरी (फुले आदिशक्ती), भुईमूग, तूर, मूग, उडीद पेरणी',
      'खरीप कांदा पुनर्लागवड (गादीवाफ्यावर)'
    ],
    sowingCropsEn: [
      'Soybean sowing (Phule Sangam KDS-726 after 75-100 mm rain)',
      'Indrayani Paddy nursery bed sowing in Western Ghats',
      'Kharif Bajra, Groundnut, Pigeon pea, Green gram, Black gram',
      'Kharif Onion transplanting on raised beds'
    ],
    harvestingCropsMr: [
      'उन्हाळी पिकांचे अवशेष काढणे',
      'पावसाळी हिरवा भाजीपाला पूर्वतोडणी'
    ],
    harvestingCropsEn: [
      'Clearing leftover summer crop stubble',
      'Early monsoon leafy greens picking'
    ],
    maintenanceTasksMr: [
      'बीजप्रक्रिया (Seed Treatment): सोयाबीनसाठी कार्बोक्सिन + रायझोबियम व पीएसबी जिवाणू संवर्धक १००% लावणे.',
      'बीबीएफ (BBF) तंत्रज्ञान: रुंद वरंबा सरी यंत्राने पेरणी करावी, ज्यामुळे अतिवृष्टीत पाणी साचत नाही.',
      'हुमणी अळी नियंत्रण: पावसाच्या पहिल्या सरीनंतर कडुनिंब व बाभळीच्या झाडांवर बसणारे हुमणी भुंगे गोळा करून नष्ट करणे किंवा प्रकाश सापळे लावणे.',
      'आडसाली उसाची शेत पूर्वतयारी.'
    ],
    maintenanceTasksEn: [
      'Mandatory Seed Inoculation: Coat soybean seeds with Carboxin fungicide followed by Rhizobium + PSB bio-fertilizers.',
      'Broad Bed Furrow (BBF): Sow on raised beds with furrows to drain excess torrential rains and conserve moisture.',
      'White Grub IPM: Shake neem and acacia trees after first rain showers to destroy congregating adult beetles.',
      'Field preparation and trench opening for Adsali Sugarcane.'
    ],
    expertTipPuneMr: 'पहिल्याच पावसात घाईघाईत धूळपेरणी करू नये. जमिनीत किमान ३ ते ४ इंच खोल ओलावा पोहोचल्याशिवाय (७५ मिमी पाऊस) सोयाबीन पेरू नये.',
    expertTipPuneEn: 'Do not rush into sowing on the first drizzle. Wait until top 3-4 inches of soil is thoroughly soaked with at least 75-100 mm of rain.',
    keyTalukasMr: 'खेड, आंबेगाव, शिरूर (सोयाबीन व बाजरी), मावळ, मुळशी (भात नर्सरी), जुन्नर (कांदा)',
    keyTalukasEn: 'Khed, Ambegaon, Shirur (Soybean & Bajra), Maval, Mulshi (Paddy), Junnar (Onion)'
  },
  {
    monthIndex: 7,
    nameMr: 'जुलै (July)',
    nameEn: 'July',
    seasonMr: 'भर खरीप हंगाम (मुसळधार पाऊस)',
    seasonEn: 'Peak Kharif (Heavy Monsoons)',
    climatePuneMr: 'संततधार पाऊस, ढगाळ वातावरण, हवेत ९०% पेक्षा जास्त आर्द्रता. पश्चिमेकडील धरणे भरू लागतात.',
    climatePuneEn: 'Continuous monsoon rains, dense cloud cover, >90% humidity. Dams (Khadakwasla, Panshet, Dimbhe) fill rapidly.',
    tempRange: '21°C - 28°C',
    rainfallStatusMr: 'मुसळधार पाऊस (२०० ते ५०० मिमी)',
    rainfallStatusEn: 'Heavy continuous rains (200 - 500 mm in ghats)',
    sowingCropsMr: [
      'आडसाली ऊस लागवड (को. ८६०३२ / फुले २६५ - १५ जुलै ते १५ ऑगस्ट सर्वोत्तम काळ)',
      'इंद्रायणी भात पुनर्लागवड (मावळ, मुळशी, भोर पट्ट्यात चिखलणी करून लावणी)',
      'खरीप टोमॅटो पुनर्लागवड (नारायणगाव-जुन्नर)',
      'दसरा-दिवाळीसाठी झेंडू व शेवंती फूलशेती लागवड'
    ],
    sowingCropsEn: [
      'Adsali Sugarcane planting (Co-86032 / Phule 265 - prime July 15 to Aug 15 window)',
      'Indrayani Paddy puddle transplanting in Western Ghat terraces',
      'Kharif Tomato transplanting on silver-black mulch',
      'Marigold and Chrysanthemum planting targeting Dussehra-Diwali festive peaks'
    ],
    harvestingCropsMr: [
      'पावसाळी कोथिंबीर, मेथी, पालक (गुलटेकडी मार्केटला विक्रमी भाव मिळतात)',
      'काकडी, दुधी भोपळा'
    ],
    harvestingCropsEn: [
      'Fresh leafy greens (Coriander, Fenugreek) commanding high rates at Pune Market Yard',
      'Trellised monsoon gourds'
    ],
    maintenanceTasksMr: [
      'तण नियंत्रण: पेरणीनंतर १५ ते २० दिवसांनी सोयाबीन व भुईमुगामध्ये खुरपणी किंवा शिफारस केलेले तणनाशक फवारणे.',
      'चर काढणे: अतिवृष्टीमुळे शेतात साचलेले पाणी वाहून जाण्यासाठी शेताभोवती निचरा चर काढावेत.',
      'टोमॅटो बांधणी: बांबू व जीआय तारेवर टोमॅटोच्या रोपांची सुतळीने बांधणी करणे.',
      'द्राक्ष बागेत सब-केन (Sub-cane) तयार करणे आणि शेंडा खुडणे.'
    ],
    maintenanceTasksEn: [
      'Weed Management: Post-emergence hand weeding or selective herbicide application 15-20 days after sowing.',
      'Drainage Trenches: Excavate drainage outlets around field boundaries to prevent root-rot in heavy downpours.',
      'Tomato Trellising: Stake bamboo poles and tie tomato branches with twine to keep foliage off wet soil.',
      'Grapes: Cane development, shoot thinning, and pinching sub-canes.'
    ],
    expertTipPuneMr: 'आडसाली उसाची लागवड पट्टा पद्धतीने (५ × २ फूट किंवा ४ × २ फूट) करून बेण्यास कार्बेंडाझिम + इमिडाक्लोप्रिडची बेणे प्रक्रिया आवर्जून करावी.',
    expertTipPuneEn: 'Plant Adsali sugarcane in paired rows (5 × 2 ft) with drip; dip setts in Carbendazim + Imidacloprid solution to eliminate scale insects and smut.',
    keyTalukasMr: 'बारामती, इंदापूर, दौंड (आडसाली ऊस), मावळ, मुळशी (भात लावणी), जुन्नर (टोमॅटो व झेंडू)',
    keyTalukasEn: 'Baramati, Indapur, Daund (Adsali Cane), Maval, Mulshi (Paddy), Junnar (Tomato & Flowers)'
  },
  {
    monthIndex: 8,
    nameMr: 'ऑगस्ट (August)',
    nameEn: 'August',
    seasonMr: 'खरीप वाढ व बहार ताण',
    seasonEn: 'Vegetative Growth & Bahar Stress',
    climatePuneMr: 'रिमझिम पाऊस, हवेत सातत्यपूर्ण गारवा व आर्द्रता. पिकांची जोमदार शाकीय वाढ होते.',
    climatePuneEn: 'Intermittent drizzling rains and breezy cool weather. Peak vegetative lushness across the Deccan plateau.',
    tempRange: '20°C - 27°C',
    rainfallStatusMr: 'मध्यम ते संततधार पाऊस (१५० ते ३०० मिमी)',
    rainfallStatusEn: 'Moderate to continuous monsoon showers (150 - 300 mm)',
    sowingCropsMr: [
      'आडसाली ऊस लागवड पूर्ण करणे',
      'रांगडा कांदा रोपवाटिका (Late Kharif Onion Nursery) तयार करणे',
      'फ्लॉवर, कोबी व ढोबळी मिरची लागवड'
    ],
    sowingCropsEn: [
      'Completion of Adsali Sugarcane planting',
      'Late Kharif (Rangada) Onion nursery sowing',
      'Cauliflower, Cabbage, and Capsicum planting'
    ],
    harvestingCropsMr: [
      'पावसाळी भाजीपाला',
      'कच्ची मका कणसे (गोड मका / स्वीट कॉर्न)'
    ],
    harvestingCropsEn: [
      'Monsoon vegetable harvests',
      'Sweet corn and baby corn harvest'
    ],
    maintenanceTasksMr: [
      'डाळिंब हस्त बहार: सप्टेंबरमध्ये हस्त बहार धरण्यासाठी डाळिंब झाडांना पाण्याचा ताण (Water stress) सुरू करणे.',
      'सोयाबीन: चक्री भुंगा (Girdle beetle) व खोडमाशी नियंत्रणासाठी पिकाचे नियमित सर्वेक्षण करणे.',
      'टोमॅटो: सततच्या ढगाळ हवामानात करपा (Blight) रोखण्यासाठी बुरशीनाशकाची फवारणी करणे.',
      'उसाला युरिया व पोटॅशचा दुसरा हप्ता देऊन मातीची भर लावणे.'
    ],
    maintenanceTasksEn: [
      'Pomegranate Hasta Bahar: Impose strict moisture stress in orchards to trigger defoliation ahead of September flowering.',
      'Soybean IPM: Inspect fields for girdle beetle rings and stem flies; apply recommended bio-fungicides.',
      'Tomato Blight Control: Prophylactic fungicide sprays (Mancozeb / Azoxystrobin) to prevent early and late blight.',
      'Sugarcane: Apply second top dressing and intermediate earthing up.'
    ],
    expertTipPuneMr: 'पुणे जिल्ह्यातील डाळिंब बागायतदारांनी तेल्या रोगाचा धोका टाळण्यासाठी पावसाळी मृग बहार न धरता हस्त बहारासाठी झाडांना ऑगस्टमध्ये कडक ताण द्यावा.',
    expertTipPuneEn: 'Pune pomegranate growers should strictly bypass rain-soaked Mrug Bahar and impose deep moisture stress in August to prime for bacterial-blight-free Hasta Bahar.',
    keyTalukasMr: 'इंदापूर, बारामती (डाळिंब ताण), जुन्नर (टोमॅटो), आंबेगाव (रांगडा कांदा नर्सरी), शिरूर (सोयाबीन)',
    keyTalukasEn: 'Indapur, Baramati (Pomegranate), Junnar (Tomato), Ambegaon (Rangada Onion), Shirur (Soybean)'
  },
  {
    monthIndex: 9,
    nameMr: 'सप्टेंबर (September)',
    nameEn: 'September',
    seasonMr: 'परतीचा मान्सून व काढणी प्रारंभ',
    seasonEn: 'Retreating Monsoon & Harvest Initiation',
    climatePuneMr: 'पावसाचा जोर ओसरू लागतो. दुपारी ऊन व दमटपणा तर संध्याकाळी परतीच्या पावसाच्या जोरदार सरी संभवतात.',
    climatePuneEn: 'Monsoon transitions to afternoon thunderstorms and sunny humid mornings (Retreating monsoon spells).',
    tempRange: '21°C - 30°C',
    rainfallStatusMr: 'परतीचा पाऊस (८० ते १५० मिमी)',
    rainfallStatusEn: 'Retreating monsoon showers (80 - 150 mm)',
    sowingCropsMr: [
      'रांगडा कांदा पुनर्लागवड (Late Kharif Onion)',
      'रब्बी ज्वारी पेरणी पूर्वतयारी (रानबांधणी व समपातळी बांध)',
      'रब्बी कांदा रोपवाटिका (Rabi Nursery for Storage Onion) गादीवाफ्यावर टाकणे'
    ],
    sowingCropsEn: [
      'Late Kharif (Rangada) Onion seedling transplanting',
      'Field preparation and moisture conservation bunding for Rabi Sorghum',
      'Rabi Storage Onion nursery bed sowing'
    ],
    harvestingCropsMr: [
      'सोयाबीन काढणी (पाने पिवळी पडून गळल्यावर आणि शेंगा तपकिरी झाल्यावर)',
      'खरीप बाजरी (कणसे तोडणी व मळणी)',
      'खरीप टोमॅटो (नारायणगाव उपबाजार लिलाव शिगेला)',
      'आले खोडणी सुरू'
    ],
    harvestingCropsEn: [
      'Soybean harvest as leaves turn golden yellow and pods brown',
      'Kharif Pearl Millet (Bajra) earhead harvesting and threshing',
      'Kharif Tomato peak arrivals at Narayangaon wholesale mandi',
      'Early green ginger digging'
    ],
    maintenanceTasksMr: [
      'डाळिंब हस्त बहार ताण सोडणे: झाडांची छाटणी करून बोर्डो पेस्ट लावणे आणि पहिले हलके पाणी व खते देणे.',
      'द्राक्ष गोडी छाटणी पूर्वतयारी: ऑक्टोबर छाटणीसाठी वेलींची पाने काढणे (Defoliation) व खत नियोजन करणे.',
      'सोयाबीन काढणी: दाण्यातील ओलावा १४% च्या खाली आल्यावर तात्काळ मळणी करावी, उशीर केल्यास शेंगा शेतात फुटतात.',
      'रब्बी पिकांसाठी जमिनीतील ओलावा टिकवून ठेवण्यासाठी मशागत करणे.'
    ],
    maintenanceTasksEn: [
      'Pomegranate Hasta Bahar Initiation: Prune twigs, sanitize cuts with Bordeaux paste, apply first irrigation and basal fertilizer.',
      'Grape Fruit Pruning Prep: Foliar defoliation and cane maturation checks ahead of October forward pruning.',
      'Soybean Harvesting: Harvest when seed moisture drops to 14%; avoid over-drying to eliminate field shattering.',
      'Harrowing fallow fields to trap retreating monsoon moisture for Rabi crops.'
    ],
    expertTipPuneMr: 'सोयाबीनची कापणी केल्यानंतर शेतात ढीग करून ठेवू नये. अवकाळी परतीचा पाऊस झाल्यास सोयाबीन काळे पडून भाव घसरतो, म्हणून लगेच मळणी करून कोरड्या गोदामात ठेवावे.',
    expertTipPuneEn: 'Never leave harvested soybean heaps unthreshed in open fields; sudden September rains cause fungal blackening and distress market rates.',
    keyTalukasMr: 'खेड, आंबेगाव, शिरूर (सोयाबीन व बाजरी मळणी), जुन्नर (टोमॅटो सौदे), पुरंदर (हस्त बहार)',
    keyTalukasEn: 'Khed, Ambegaon, Shirur (Soybean & Bajra), Junnar (Tomato), Purandar (Hasta Bahar)'
  },
  {
    monthIndex: 10,
    nameMr: 'ऑक्टोबर (October)',
    nameEn: 'October',
    seasonMr: 'रब्बी पेरणी व ऑक्टोबर हीट',
    seasonEn: 'Rabi Sowing & October Heat',
    climatePuneMr: 'ऑक्टोबर हीट - दिवसा तीव्र कडक ऊन, रात्री अल्हाददायक गारवा. महिनाअखेर गुलाबी थंडीची चाहूल.',
    climatePuneEn: 'October Heat - sharp daytime sunshine and warm afternoons giving way to crisp cool nights by month-end.',
    tempRange: '18°C - 33°C',
    rainfallStatusMr: 'अल्प पाऊस / कोरडे हवामान',
    rainfallStatusEn: 'Minimal rainfall / Mostly dry skies',
    sowingCropsMr: [
      'रब्बी ज्वारी पेरणी (मालदांडी ३५-१ / फुले यशोदा - १५ ऑक्टोबरपूर्वी सर्वोत्तम)',
      'हरभरा पेरणी (विजय / दिग्विजय / जाकी ९२१८)',
      'पूर्वहंगामी ऊस लागवड (को. ८६०३२)',
      'रब्बी कांदा पुनर्लागवड सुरू'
    ],
    sowingCropsEn: [
      'Rabi Sorghum sowing (Maldandi 35-1 / Phule Yashoda before Oct 15)',
      'Chickpea sowing (Vijay / Digvijay / JG-11)',
      'Pre-seasonal Sugarcane planting (Co-86032)',
      'Early Rabi Onion transplanting'
    ],
    harvestingCropsMr: [
      'खरीप कांदा काढणी',
      'खरीप भात काढणी (इंद्रायणी भात - मावळ, मुळशी)',
      'दसरा-दिवाळी झेंडू फुलांची विक्रमी तोडणी',
      'सोयाबीन उर्वरित मळणी'
    ],
    harvestingCropsEn: [
      'Kharif Onion harvesting',
      'Indrayani aromatic paddy harvesting in Western Pune',
      'Peak Marigold harvest for festive Dussehra & Diwali auctions',
      'Final soybean threshing and bagging'
    ],
    maintenanceTasksMr: [
      'द्राक्षांची ऑक्टोबर गोडी छाटणी (Forward / Fruit Pruning): द्राक्ष फळांसाठी मुख्य छाटणी करणे आणि डोळ्यांवर डोर्मेक्स लावणे.',
      'डाळिंब: हस्त बहारात कळ्या निघताना फुलकिडे व मावा नियंत्रणासाठी निंबोळी अर्क व शिफारशीत कीटकनाशक फवारणे.',
      'हरभरा पेरणीवेळी ट्रायकोडर्मा व रायझोबियमची बीजप्रक्रिया आवर्जून करणे.',
      'भाताच्या पेंढ्याची योग्य साठवणूक करणे (जनावरांच्या चाऱ्यासाठी).'
    ],
    maintenanceTasksEn: [
      'Grape Fruit Pruning (October Godi Chhatni): Primary pruning for cluster formation followed by Dormex application on select buds.',
      'Pomegranate: Monitor emerging flower buds for thrips and aphids; apply bio-insecticides.',
      'Chickpea: Treat seeds with Trichoderma viride and Rhizobium to inoculate against Fusarium wilt.',
      'Bale and preserve aromatic Indrayani rice straw for dairy cattle fodder.'
    ],
    expertTipPuneMr: 'द्राक्षांची गोडी छाटणी झाल्यानंतर हवामान ढगाळ झाल्यास डाऊनी मिल्ड्यू (केवडा रोग) रोखण्यासाठी तात्काळ १% बोर्डो मिश्रणाची प्रतिबंधक फवारणी करावी.',
    expertTipPuneEn: 'If overcast conditions or unseasonal drizzle follows October grape pruning, immediately apply 1% neutral Bordeaux spray against Downy Mildew.',
    keyTalukasMr: 'जुन्नर, हवेली (द्राक्ष छाटणी), शिरूर, दौंड (रब्बी ज्वारी पेरणी), पुरंदर (झेंडू व डाळिंब)',
    keyTalukasEn: 'Junnar, Haveli (Grapes), Shirur, Daund (Rabi Jowar), Purandar (Marigold & Orchard)'
  },
  {
    monthIndex: 11,
    nameMr: 'नोव्हेंबर (November)',
    nameEn: 'November',
    seasonMr: 'रब्बी गहू व कांदा मुख्य हंगाम',
    seasonEn: 'Rabi Wheat & Onion Peak Season',
    climatePuneMr: 'थंडी सुरू होते. रात्रीचे तापमान १५° से. खाली येते. निरभ्र आकाश आणि कोरडी स्वच्छ हवा.',
    climatePuneEn: 'Crisp winter chills commence. Night temperatures dip below 15°C. Clear skies and optimal winter sun.',
    tempRange: '12°C - 29°C',
    rainfallStatusMr: 'पाऊस नाही (कोरडी हिवाळी हवा)',
    rainfallStatusEn: 'Dry pleasant winter weather',
    sowingCropsMr: [
      'गहू पेरणी (फुले समाधान NIAW-१९९४ / लोकवन / त्र्यंबक - १ ते १५ नोव्हेंबर सर्वोत्तम काळ)',
      'रब्बी कांदा पुनर्लागवड (भीमा किरण / भीमा शक्ती / एन-२-४-१ साठवणीचा कांदा)',
      'हरभरा पेरणी पूर्ण करणे'
    ],
    sowingCropsEn: [
      'Wheat sowing (Phule Samadhan NIAW-1994 / Lokwan - prime window Nov 1 to 15)',
      'Rabi Storage Onion transplanting on raised beds with drip',
      'Completion of late chickpea sowing'
    ],
    harvestingCropsMr: [
      'इंद्रायणी भात मळणी पूर्ण',
      'रांगडा कांदा तोडणी सुरू',
      'आले खोडणी व धान्य बाजार सौदे'
    ],
    harvestingCropsEn: [
      'Paddy threshing and milling into polished Indrayani rice',
      'Early Rangada onion digging',
      'Ginger harvest and spice market auctions'
    ],
    maintenanceTasksMr: [
      'गहू: पेरणीनंतर २१ दिवसांनी मुकुट मुळे फुटण्याच्या अवस्थेत (CRI stage) पहिले खत (युरिया) व पाणी देणे अत्यंत महत्त्वाचे.',
      'हरभरा: पेरणीनंतर २५-३० दिवसांनी हरभऱ्याचे शेंडे खुडणे (Nipping), ज्यामुळे झाडाला जास्त फुटवे फुटून घाटे भरपूर लागतात.',
      'रब्बी कांदा: लागवडीवेळी १५ किलो गंधक (सल्फर) देणे, ज्यामुळे साठवण क्षमता वाढते.',
      'द्राक्षे: घ घड निघण्याच्या अवस्थेत कॅनॉपी व्यवस्थापन व डिपिंग करणे.'
    ],
    maintenanceTasksEn: [
      'Wheat: Crucial Crown Root Initiation (CRI) stage at 21 days - administer first top-dress Nitrogen and irrigation.',
      'Chickpea: Tip nipping at 25-30 days to encourage extensive lateral branching and heavy pod formation.',
      'Rabi Onion: Incorporate 15 kg/acre elemental Sulphur at transplanting to enhance pungency and cellar shelf-life.',
      'Grapes: Pre-bloom cluster elongation, shoot positioning, and first dipping.'
    ],
    expertTipPuneMr: 'गव्हाची पेरणी १५ नोव्हेंबरनंतर लांबवू नये; उशिरा पेरणी केल्यास मार्चमधील उष्णतेमुळे दाणे बारीक राहून उत्पादनात २५-३०% घट होते.',
    expertTipPuneEn: 'Never delay wheat sowing past November 15; late-sown wheat suffers terminal heat stress in March, resulting in shriveled grains and 25-30% yield loss.',
    keyTalukasMr: 'दौंड, शिरूर, बारामती (गहू व हरभरा), आंबेगाव, खेड, जुन्नर (रब्बी कांदा पुनर्लागवड)',
    keyTalukasEn: 'Daund, Shirur, Baramati (Wheat & Gram), Ambegaon, Khed, Junnar (Rabi Onion)'
  },
  {
    monthIndex: 12,
    nameMr: 'डिसेंबर (December)',
    nameEn: 'December',
    seasonMr: 'कडक हिवाळा व साखर कारखाना गळीत हंगाम',
    seasonEn: 'Peak Winter & Sugar Crushing Season',
    climatePuneMr: 'वर्षातील सर्वात थंड महिना. रात्रीचे तापमान ८° ते १०° से. पर्यंत घसरते. दव आणि थंड वारे.',
    climatePuneEn: 'Coldest month of the year in Pune. Night temperatures plunge to 8°-10°C. Heavy morning dew and crisp northern winds.',
    tempRange: '9°C - 27°C',
    rainfallStatusMr: 'पाऊस नाही (थंड व निरभ्र)',
    rainfallStatusEn: 'Dry cold winter skies',
    sowingCropsMr: [
      'उशिराचा गहू (एमएसीएस-६२२२)',
      'भाजीपाला (वांगी, टोमॅटो, फ्लॉवर, कोबी, नवलकोल)',
      'हिवाळी चारा पिके'
    ],
    sowingCropsEn: [
      'Late-sown wheat (MACS-6222)',
      'Winter vegetables (Brinjal, Tomato, Cauliflower, Cabbage, Knol Khol)',
      'Winter livestock green fodder'
    ],
    harvestingCropsMr: [
      'ऊस तोडणी: साखर कारखाने (सोमेश्वर, माळेगाव, छत्रपती, घोडगंगा) पूर्ण क्षमतेने सुरू',
      'रांगडा कांदा काढणी व चाकण-मंचर बाजारात विक्री',
      'डाळिंब हस्त बहार फळे काढणी सुरू'
    ],
    harvestingCropsEn: [
      'Sugarcane Harvesting: Cooperatives (Someshwar, Malegaon, Chhatrapati) operating at peak crushing capacity',
      'Late Kharif (Rangada) onion harvest and brisk auctions at Chakan & Manchar mandis',
      'Pomegranate Hasta Bahar harvest initiation'
    ],
    maintenanceTasksMr: [
      'रब्बी कांदा: फुलकिडे (Thrips) आणि जांभळा करपा नियंत्रणासाठी फिप्रोनिल + बुरशीनाशक फवारणे.',
      'द्राक्षे: मणी विरळणी (Berry thinning) करणे आणि ब्रिक्स वाढवण्यासाठी पालाशयुक्त खते देणे.',
      'ऊस खोडवा व्यवस्थापन: तोडणीनंतर उसाचे पाचट न जाळता पाचटावर युरिया + सिंगल सुपर फॉस्फेट आणि पाचट कुजवणारे जिवाणू टाकून जमिनीत गाडणे.',
      'गहू: फुटवे फुटण्याच्या (Tillering) अवस्थेत दुसरे पाणी व युरिया देणे.'
    ],
    maintenanceTasksEn: [
      'Rabi Onion: Scout for early thrips and purple blotch; apply Fipronil 5% SC and systemic fungicides.',
      'Grapes: Precision manual berry thinning and GA3 cluster dipping for uniform cylinder bunches.',
      'Sugarcane Ratoon Management: Never burn trash! Shred cane residue in furrows, apply decomposing bio-culture and urea to build organic humus.',
      'Wheat: Tillering stage fertigation and irrigation.'
    ],
    expertTipPuneMr: 'हिवाळ्यात ऊस तोडणीनंतर पाचट जाळल्याने जमिनीतील मित्र जिवाणू मरतात आणि प्रदूषण होते. पाचटाचे मल्चिंग केल्यास ५०% पाण्याची बचत होते आणि खोडव्याचे उत्पादन वाढते.',
    expertTipPuneEn: 'Burning sugarcane trash incinerates valuable soil microflora. Retain trash as in-situ mulch to preserve soil moisture and dramatically increase ratoon crop yields.',
    keyTalukasMr: 'बारामती, इंदापूर, दौंड (ऊस गळीत), खेड, आंबेगाव (रांगडा कांदा), जुन्नर (द्राक्षे मणी फुगवणी)',
    keyTalukasEn: 'Baramati, Indapur, Daund (Sugar Crushing), Khed, Ambegaon (Rangada Onion), Junnar (Grapes)'
  }
];
