/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

// Şehirdeki bitki isim listesi
const cityPlants = {
  'Adana': ['Adana Çayı (Sideritis cilicica)', 'Adana Zambağı (Gagea spathacea)', 'Adana Andıçotu (Centaurea adanae)','Alp Orhun'],
  'Adıyaman': ['Adıyaman Çiğdemi (Crocus adiyamanicus)', 'Adıyaman Zambağı (Gagea adiyamanica)', 'Adıyaman Kengeri (Serratula adiyamanica)'],
  'Afyonkarahisar': ['Afyon Çiğdemi (Crocus afyonensis)', 'Afyon İğdesi (Rhamnus afyonica)', 'Afyon Lalesi (Tulipa afyonensis)'],
  'Ağrı': ['Ağrı Dağ Çayı (Sideritis trojana)', 'Ağrı Kengeri (Serratula agriana)', 'Ağrı Kırlangıç Otu (Delphinium agrianum)'],
  'Amasya': ['Amasya Lalesi (Tulipa amasiae)', 'Amasya Çiğdemi (Crocus amasianus)', 'Amasya Fındık Otu (Centaurea amasiae)'],
  'Ankara': ['Ankara Çiğdemi (Crocus ancyrensis)', 'Ankara Papatyası (Anthemis ankarensis)', 'Ankara Biberi (Capsicum annuum var. acuminatum)'],
  'Antalya': ['Antalya Kekik (Thymus antalyae)', 'Antalya Lalesi (Tulipa antalyensis)', 'Antalya Karabaşotu (Ballota pseudodictamnus subsp. lydica)'],
  'Artvin': ['Artvin Dağ Çayı (Sideritis davisiana)', 'Artvin Çam Fıstığı (Pinus sylvestris subsp. hamata)', 'Artvin Zambağı (Gagea artvinensis)'],
  'Aydın': ['Aydın Çiğdemi (Crocus boryi)', 'Aydın Papatyası (Anthemis aydincikensis)', 'Aydın Funda (Paeonia clusii subsp. turcica)'],
  'Balıkesir': ['Balıkesir Çiğdemi (Crocus kosaninii)', 'Balıkesir Papatyası (Anthemis aetolica subsp. lyrata)', 'Balıkesir Kengeri (Serratula balikesirensis)'],
  'Bilecik': ['Bilecik Çiğdemi (Crocus zonatus)', 'Bilecik Yoncası (Lotus biflorus var. laurentinus)', 'Bilecik Kırlangıç Otu (Delphinium bilkis)'],
  'Bingöl': ['Bingöl Kekik (Thymus hirtus subsp. kurdicus)', 'Bingöl Çiğdemi (Crocus longiflorus subsp. pulchricolor)', 'Bingöl Papatyası (Anthemis crymophila)'],
  'Bitlis': ['Bitlis Lalesi (Tulipa armena)', 'Bitlis Çiğdemi'],
  'Bolu': ['Bolu Çiğdemi (Crocus bolensis)', 'Bolu Zambak (Lilium ciliatum)', 'Bolu Funda (Paeonia tenuifolia subsp. banatica)'],
  'Burdur': ['Burdur Çiğdemi (Crocus burduricus)', 'Burdur Lalesi (Tulipa systola)', 'Burdur Karabaşotu (Ballota acetabulosa)'],
  'Bursa': ['Bursa Lalesi (Tulipa bursensis)', 'Bursa Çiğdemi (Crocus bursensis)', 'Bursa Yoncası (Lotus nevadensis)'],
  'Çanakkale': ['Çanakkale Çiğdemi (Crocus candidus subsp. mazziaricus)', 'Çanakkale Lalegülü (Colchicum baytopiorum)', 'Çanakkale Kengeri (Serratula speciosa)'],
  'Çankırı': ['Çankırı Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Çankırı Kengeri (Serratula mertii)', 'Çankırı Karakavak (Populus nigra subsp. betulifolia)'],
  'Çorum': ['Çorum Çiğdemi (Crocus pulchricolor subsp. szovitsii)', 'Çorum İğdesi (Rhamnus coriaria)', 'Çorum Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Denizli': ['Denizli Çiğdemi (Crocus pallasii subsp. pallasii)', 'Denizli Kengeri (Serratula anatolica)', 'Denizli Kantaronu (Hypericum rumeliacum)'],
  'Diyarbakır': ['Diyarbakır Lalesi (Tulipa diyarbakirensis)', 'Diyarbakır Çiğdemi (Crocus diabolicus)', 'Diyarbakır Karabaşotu (Ballota pseudodictamnus subsp. meridionalis)'],
  'Edirne': ['Edirne Çiğdemi (Crocus pallasii subsp. pallasii)', 'Edirne Kengeri (Serratula edirnensis)', 'Edirne Zambağı (Gagea anatolica)'],
  'Elazığ': ['Elazığ Çiğdemi (Crocus elazigensis)', 'Elazığ Kengeri (Serratula elazigensis)', 'Elazığ Papatyası (Anthemis elazigensis)'],
  'Erzincan': ['Erzincan Çiğdemi (Crocus nevadensis subsp. ancyrensis)', 'Erzincan Zambağı (Gagea erzincanica)', 'Erzincan Kengeri (Serratula rizeensis)'],
  'Erzurum': ['Erzurum Kır Çayı (Sideritis montana)', 'Erzurum Papatyası (Anthemis furunculosa)', 'Erzurum Karabaşotu (Ballota macrodonta)'],
  'Eskişehir': ['Eskişehir Çiğdemi (Crocus angustifolius subsp. angustifolius)',],
  'Gaziantep': ['Gaziantep Çiğdemi (Crocus gaziantepensis)', 'Gaziantep Kengeri (Serratula gaziantepensis)', 'Gaziantep Papatyası (Anthemis nurae)'],
  'Giresun': ['Giresun Çayı (Sideritis sermsesianae)', 'Giresun Çiğdemi (Crocus hittitianus)', 'Giresun Karabaşotu (Ballota astragalica)'],
  'Gümüşhane': ['Gümüşhane Lalesi (Tulipa giumushehensis)', 'Gümüşhane Çiğdemi (Crocus ancyrensis subsp. cinarlii)', 'Gümüşhane Kengeri (Serratula ahesteana)'],
  'Hakkari': ['Hakkari Çayı (Sideritis hayekiana)', 'Hakkari Çiğdemi (Crocus boryi subsp. hartvigii)', 'Hakkari Kengeri (Serratula hakkariensis)'],
  'Hatay': ['Hatay Çiğdemi (Crocus antalyensis subsp. caricus)', 'Hatay Kengeri (Serratula hatayensis)', 'Hatay Zeytinotu (Centaurea hyalolepis)'],
  'Iğdır': ['Iğdır Çayı (Sideritis brevibracteata)', 'Iğdır Kengeri (Serratula igerica)', 'Iğdır Papatyası (Anthemis igdirica)'],
  'Isparta': ['Isparta Lalesi (Tulipa isaurica)', 'Isparta Çiğdemi (Crocus antalyensis subsp. antalyensis)', 'Isparta Karabaşotu (Ballota nigra subsp. meridionalis)'],
  'İstanbul': ['İstanbul Lalegülü (Colchicum istanbulicum)', 'İstanbul Zambağı (Gagea istanbulensis)', 'İstanbul Karakafesotu (Linaria istanbulensis)'],
  'İzmir': ['İzmir Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'İzmir Karabaşotu (Ballota chrysophylla)', 'İzmir Papatyası (Anthemis maritima subsp. anatolica)'],
  'Kars': ['Kars Çiğdemi (Crocus reticulatus)', 'Kars Çayı (Sideritis incana subsp. nivea)', 'Kars Kengeri (Serratula magyarica)'],
  'Kastamonu': ['Kastamonu Çiğdemi (Crocus karduchorum)', 'Kastamonu Zambak (Lilium ciliatum subsp. lincolniense)', 'Kastamonu Karabaşotu (Ballota kastamonuensis)'],
  'Kayseri': ['Kayseri Çiğdemi (Crocus baytopiorum)', 'Kayseri Kengeri (Serratula kayserensis)', 'Kayseri Karabaşotu (Ballota mollissima)'],
  'Kırıkkale': ['Kırıkkale Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Kırıkkale Kengeri (Serratula crocifolia)', 'Kırıkkale Karabaşotu (Ballota aucheriana subsp. erdalii)', 'Kırıkkale Çiğdemi (Crocus scharojanii)', 'Kırıkkale Kengeri (Serratula lycopodioides)', 'Kırıkkale Karabaşotu (Ballota hirsuta)'],
  'Kırklareli': ['Kırklareli Çiğdemi (Crocus hadriaticus)', 'Kırklareli Kengeri (Serratula ciceklii)', 'Kırklareli Karabaşotu (Ballota marrubioides)'],
  'Kırşehir': ['Kırşehir Çiğdemi (Crocus olivieri subsp. olivieri)', 'Kırşehir Kengeri (Serratula cilicica)', 'Kırşehir Karabaşotu (Ballota hirsuta)'],
  'Kocaeli': ['Kocaeli Çiğdemi (Crocus ancyrensis subsp. ancyrensis)', 'Kocaeli Kengeri (Serratula galatica)', 'Kocaeli Zeytinotu (Centaurea ptosimopappa)'],
  'Konya': ['Konya Çiğdemi (Crocus pallasii subsp. pallasii)', 'Konya Kengeri (Serratula seiberi)', 'Konya Karabaşotu (Ballota dodanii)'],
  'Kütahya': ['Kütahya Lalesi (Tulipa hungarica subsp. australis)', 'Kütahya Çiğdemi (Crocus paschei)', 'Kütahya Karabaşotu (Ballota acrocephala)'],
  'Malatya': ['Malatya Çiğdemi (Crocus sattarius)', 'Malatya Kengeri (Serratula anatolica)', 'Malatya Kantaronu (Hypericum malatyanum)'],
  'Manisa': ['Manisa Çiğdemi (Crocus kosaninii)', 'Manisa Karabaşotu (Ballota ovatifolia)', 'Manisa Zeytinotu (Centaurea helenioides)'],
  'Kahramanmaraş': ['Kahramanmaraş Çiğdemi (Crocus kotschyanus subsp. broteroi)', 'Kahramanmaraş Kengeri (Serratula thracica)', 'Kahramanmaraş Papatyası (Anthemis fuscocapitata)'],
  'Mardin': ['Mardin Çayı (Sideritis syriaca)', 'Mardin Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Mardin Kengeri (Serratula mardinensis)'],
  'Muğla': ['Muğla Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Muğla Lalesi (Tulipa cypria)', 'Muğla Karabaşotu (Ballota sivasica)'],
  'Muş': ['Muş Çayı (Sideritis incana subsp. davisiana)', 'Muş Çiğdemi (Crocus hyemalis)', 'Muş Kengeri (Serratula seravschanica)'],
  'Nevşehir': ['Nevşehir Çiğdemi (Crocus nevadensis)', 'Nevşehir Kengeri (Serratula candolleana)', 'Nevşehir Karabaşotu (Ballota leucocalyx)'],
  'Niğde': ['Niğde Çiğdemi (Crocus antalyensis subsp. zoelleri)', 'Niğde Kengeri (Serratula haradjianii)', 'Niğde Karabaşotu (Ballota foetida subsp. nepetifolia)'],
  'Ordu': ['Ordu Çiğdemi (Crocus cappadocicus)', 'Ordu Çayı (Sideritis sermsesianae)', 'Ordu Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Rize': ['Rize Çiğdemi (Crocus euboicus)', 'Rize Çayı (Sideritis resitana)', 'Rize Kengeri (Serratula ichayensis)'],
  'Sakarya': ['Sakarya Çiğdemi (Crocus olivieri subsp. balansae)', 'Sakarya Kengeri (Serratula heterochroma)', 'Sakarya Karabaşotu (Ballota pterocalyx)'],
  'Samsun': ['Samsun Çiğdemi (Crocus tauri)', 'Samsun Kengeri (Serratula canescens)', 'Samsun Karabaşotu (Ballota persica)'],
  'Siirt': ['Siirt Çiğdemi (Crocus alatavicus)', 'Siirt Çayı (Sideritis syriaca)', 'Siirt Kengeri (Serratula lasiocarpa)'],
  'Sinop': ['Sinop Çiğdemi (Crocus pallasii subsp. haussknechtii)', 'Sinop Çayı (Sideritis kubinyii)', 'Sinop Kengeri (Serratula hedistejerae)'],
  'Sivas': ['Sivas Çiğdemi (Crocus sivasicus)', 'Sivas Kengeri (Serratula elatior)', 'Sivas Karabaşotu (Ballota yildirimlii)'],
  'Tekirdağ': ['Tekirdağ Çiğdemi (Crocus pallasii subsp. pallasii)', 'Tekirdağ Kengeri (Serratula latebracteata)', 'Tekirdağ Karabaşotu (Ballota astiphanica)'],
  'Tokat': ['Tokat Çiğdemi (Crocus pulchricolor)', 'Tokat Kengeri (Serratula schischkinii)', 'Tokat Karabaşotu (Ballota aucheriana subsp. villosissima)'],
  'Trabzon': ['Trabzon Çiğdemi (Crocus ponticus)', 'Trabzon Çayı (Sideritis cilicica subsp. pontica)', 'Trabzon Karabaşotu (Ballota pontica)'],
  'Tunceli': ['Tunceli Çayı (Sideritis armena)', 'Tunceli Çiğdemi (Crocus tuncelianus)', 'Tunceli Kengeri (Serratula troodi)'],
  'Şanlıurfa': ['Şanlıurfa Çiğdemi (Crocus adiyamanensis)', 'Şanlıurfa Çayı (Sideritis seravschanica)', 'Şanlıurfa Kengeri (Serratula arduennensis)'],
  'Uşak': ['Uşak Çiğdemi (Crocus flavus subsp. helveticus)', 'Uşak Kengeri (Serratula daghestanica)', 'Uşak Karabaşotu (Ballota pseudodictamnus)'],
  'Van': ['Van Çiğdemi (Crocus vanensis)', 'Van Çayı (Sideritis stenopetala)', 'Van Kengeri (Serratula flabellifolia)'],
  'Yozgat': ['Yozgat Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Yozgat Kengeri (Serratula seravschanica)', 'Yozgat Karabaşotu (Ballota platyloma)'],
  'Zonguldak': ['Zonguldak Çiğdemi (Crocus alatavicus subsp. salacinicus)', 'Zonguldak Kengeri (Serratula gorganica)', 'Zonguldak Karabaşotu (Ballota saxatilis)'],
  'Aksaray': ['Aksaray Çiğdemi (Crocus aegeensis subsp. alexandri)', 'Aksaray Kengeri (Serratula pontica)', 'Aksaray Karabaşotu (Ballota stenoptera)'],
  'Bayburt': ['Bayburt Çiğdemi (Crocus baytopiorum)', 'Bayburt Çayı (Sideritis incana)', 'Bayburt Kengeri (Serratula kurdica)'],
  'Karaman': ['Karaman Çiğdemi (Crocus biflorus subsp. pulchricolor)', 'Karaman Kengeri (Serratula cariensis)', 'Karaman Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Kırıkkale': ['Kırıkkale Çiğdemi (Crocus scharojanii)', 'Kırıkkale Kengeri (Serratula lycopodioides)', 'Kırıkkale Karabaşotu (Ballota hirsuta)'],
  'Batman': ['Batman Çiğdemi (Crocus chrysanthus)', 'Batman Kengeri (Serratula karaotensis)', 'Batman Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Şırnak': ['Şırnak Çiğdemi (Crocus aleppicus)', 'Şırnak Çayı (Sideritis zoharyi)', 'Şırnak Kengeri (Serratula absinthioides)'],
  'Bartın': ['Bartın Çiğdemi (Crocus olivieri subsp. balansae)', 'Bartın Kengeri (Serratula souliei)', 'Bartın Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Ardahan': ['Ardahan Çiğdemi (Crocus caucasigenus)', 'Ardahan Çayı (Sideritis davisii)', 'Ardahan Kengeri (Serratula talyschensis)'],
  'Iğdır': ['Iğdır Çiğdemi (Crocus flavus subsp. balansae)', 'Iğdır Kengeri (Serratula coruhensis)', 'Iğdır Karabaşotu (Ballota aucheriana subsp. villosissima)'],
  'Yalova': ['Yalova Çiğdemi (Crocus balansae)', 'Yalova Kengeri (Serratula bozokensis)', 'Yalova Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Karabük': ['Karabük Çiğdemi (Crocus pulchricolor)', 'Karabük Kengeri (Serratula andryalifolia)', 'Karabük Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Kilis': ['Kilis Çiğdemi (Crocus scharojanii)', 'Kilis Çayı (Sideritis leptoclada)', 'Kilis Kengeri (Serratula corymbosa)'],
  'Osmaniye': ['Osmaniye Çiğdemi (Crocus pulchricolor)', 'Osmaniye Kengeri (Serratula aucheri)', 'Osmaniye Karabaşotu (Ballota echinata)']
};

// şehirdeki örnek bitki resmi
const picPlants = {
  'Adana': ['https://upload.wikimedia.org/wikipedia/commons/a/ad/Gagea_spathacea_kz1.jpg'],
  'Adıyaman': ['https://www.tiraj.com.tr/public/uploads/post/5faf7d7e8a0cf_idem%20iei.jpg'],
  'Afyonkarahisar': ['Afyon Çiğdemi (Crocus afyonensis)', 'Afyon İğdesi (Rhamnus afyonica)', 'Afyon Lalesi (Tulipa afyonensis)'],
  'Ağrı': ['Ağrı Dağ Çayı (Sideritis trojana)', 'Ağrı Kengeri (Serratula agriana)', 'Ağrı Kırlangıç Otu (Delphinium agrianum)'],
  'Amasya': ['Amasya Lalesi (Tulipa amasiae)', 'Amasya Çiğdemi (Crocus amasianus)', 'Amasya Fındık Otu (Centaurea amasiae)'],
  'Ankara': ['Ankara Çiğdemi (Crocus ancyrensis)', 'Ankara Papatyası (Anthemis ankarensis)', 'Ankara Biberi (Capsicum annuum var. acuminatum)'],
  'Antalya': ['Antalya Kekik (Thymus antalyae)', 'Antalya Lalesi (Tulipa antalyensis)', 'Antalya Karabaşotu (Ballota pseudodictamnus subsp. lydica)'],
  'Artvin': ['Artvin Dağ Çayı (Sideritis davisiana)', 'Artvin Çam Fıstığı (Pinus sylvestris subsp. hamata)', 'Artvin Zambağı (Gagea artvinensis)'],
  'Aydın': ['Aydın Çiğdemi (Crocus boryi)', 'Aydın Papatyası (Anthemis aydincikensis)', 'Aydın Funda (Paeonia clusii subsp. turcica)'],
  'Balıkesir': ['Balıkesir Çiğdemi (Crocus kosaninii)', 'Balıkesir Papatyası (Anthemis aetolica subsp. lyrata)', 'Balıkesir Kengeri (Serratula balikesirensis)'],
  'Bilecik': ['Bilecik Çiğdemi (Crocus zonatus)', 'Bilecik Yoncası (Lotus biflorus var. laurentinus)', 'Bilecik Kırlangıç Otu (Delphinium bilkis)'],
  'Bingöl': ['Bingöl Kekik (Thymus hirtus subsp. kurdicus)', 'Bingöl Çiğdemi (Crocus longiflorus subsp. pulchricolor)', 'Bingöl Papatyası (Anthemis crymophila)'],
  'Bitlis': ['Bitlis Lalesi (Tulipa armena)', 'Bitlis Çiğdemi'],
  'Bolu': ['Bolu Çiğdemi (Crocus bolensis)', 'Bolu Zambak (Lilium ciliatum)', 'Bolu Funda (Paeonia tenuifolia subsp. banatica)'],
  'Burdur': ['Burdur Çiğdemi (Crocus burduricus)', 'Burdur Lalesi (Tulipa systola)', 'Burdur Karabaşotu (Ballota acetabulosa)'],
  'Bursa': ['Bursa Lalesi (Tulipa bursensis)', 'Bursa Çiğdemi (Crocus bursensis)', 'Bursa Yoncası (Lotus nevadensis)'],
  'Çanakkale': ['Çanakkale Çiğdemi (Crocus candidus subsp. mazziaricus)', 'Çanakkale Lalegülü (Colchicum baytopiorum)', 'Çanakkale Kengeri (Serratula speciosa)'],
  'Çankırı': ['Çankırı Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Çankırı Kengeri (Serratula mertii)', 'Çankırı Karakavak (Populus nigra subsp. betulifolia)'],
  'Çorum': ['Çorum Çiğdemi (Crocus pulchricolor subsp. szovitsii)', 'Çorum İğdesi (Rhamnus coriaria)', 'Çorum Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Denizli': ['Denizli Çiğdemi (Crocus pallasii subsp. pallasii)', 'Denizli Kengeri (Serratula anatolica)', 'Denizli Kantaronu (Hypericum rumeliacum)'],
  'Diyarbakır': ['Diyarbakır Lalesi (Tulipa diyarbakirensis)', 'Diyarbakır Çiğdemi (Crocus diabolicus)', 'Diyarbakır Karabaşotu (Ballota pseudodictamnus subsp. meridionalis)'],
  'Edirne': ['Edirne Çiğdemi (Crocus pallasii subsp. pallasii)', 'Edirne Kengeri (Serratula edirnensis)', 'Edirne Zambağı (Gagea anatolica)'],
  'Elazığ': ['Elazığ Çiğdemi (Crocus elazigensis)', 'Elazığ Kengeri (Serratula elazigensis)', 'Elazığ Papatyası (Anthemis elazigensis)'],
  'Erzincan': ['Erzincan Çiğdemi (Crocus nevadensis subsp. ancyrensis)', 'Erzincan Zambağı (Gagea erzincanica)', 'Erzincan Kengeri (Serratula rizeensis)'],
  'Erzurum': ['Erzurum Kır Çayı (Sideritis montana)', 'Erzurum Papatyası (Anthemis furunculosa)', 'Erzurum Karabaşotu (Ballota macrodonta)'],
  'Eskişehir': ['Eskişehir Çiğdemi (Crocus angustifolius subsp. angustifolius)',],
  'Gaziantep': ['Gaziantep Çiğdemi (Crocus gaziantepensis)', 'Gaziantep Kengeri (Serratula gaziantepensis)', 'Gaziantep Papatyası (Anthemis nurae)'],
  'Giresun': ['Giresun Çayı (Sideritis sermsesianae)', 'Giresun Çiğdemi (Crocus hittitianus)', 'Giresun Karabaşotu (Ballota astragalica)'],
  'Gümüşhane': ['Gümüşhane Lalesi (Tulipa giumushehensis)', 'Gümüşhane Çiğdemi (Crocus ancyrensis subsp. cinarlii)', 'Gümüşhane Kengeri (Serratula ahesteana)'],
  'Hakkari': ['Hakkari Çayı (Sideritis hayekiana)', 'Hakkari Çiğdemi (Crocus boryi subsp. hartvigii)', 'Hakkari Kengeri (Serratula hakkariensis)'],
  'Hatay': ['Hatay Çiğdemi (Crocus antalyensis subsp. caricus)', 'Hatay Kengeri (Serratula hatayensis)', 'Hatay Zeytinotu (Centaurea hyalolepis)'],
  'Iğdır': ['Iğdır Çayı (Sideritis brevibracteata)', 'Iğdır Kengeri (Serratula igerica)', 'Iğdır Papatyası (Anthemis igdirica)'],
  'Isparta': ['Isparta Lalesi (Tulipa isaurica)', 'Isparta Çiğdemi (Crocus antalyensis subsp. antalyensis)', 'Isparta Karabaşotu (Ballota nigra subsp. meridionalis)'],
  'İstanbul': ['İstanbul Lalegülü (Colchicum istanbulicum)', 'İstanbul Zambağı (Gagea istanbulensis)', 'İstanbul Karakafesotu (Linaria istanbulensis)'],
  'İzmir': ['İzmir Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'İzmir Karabaşotu (Ballota chrysophylla)', 'İzmir Papatyası (Anthemis maritima subsp. anatolica)'],
  'Kars': ['Kars Çiğdemi (Crocus reticulatus)', 'Kars Çayı (Sideritis incana subsp. nivea)', 'Kars Kengeri (Serratula magyarica)'],
  'Kastamonu': ['Kastamonu Çiğdemi (Crocus karduchorum)', 'Kastamonu Zambak (Lilium ciliatum subsp. lincolniense)', 'Kastamonu Karabaşotu (Ballota kastamonuensis)'],
  'Kayseri': ['Kayseri Çiğdemi (Crocus baytopiorum)', 'Kayseri Kengeri (Serratula kayserensis)', 'Kayseri Karabaşotu (Ballota mollissima)'],
  'Kırıkkale': ['Kırıkkale Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Kırıkkale Kengeri (Serratula crocifolia)', 'Kırıkkale Karabaşotu (Ballota aucheriana subsp. erdalii)', 'Kırıkkale Çiğdemi (Crocus scharojanii)', 'Kırıkkale Kengeri (Serratula lycopodioides)', 'Kırıkkale Karabaşotu (Ballota hirsuta)'],
  'Kırklareli': ['Kırklareli Çiğdemi (Crocus hadriaticus)', 'Kırklareli Kengeri (Serratula ciceklii)', 'Kırklareli Karabaşotu (Ballota marrubioides)'],
  'Kırşehir': ['Kırşehir Çiğdemi (Crocus olivieri subsp. olivieri)', 'Kırşehir Kengeri (Serratula cilicica)', 'Kırşehir Karabaşotu (Ballota hirsuta)'],
  'Kocaeli': ['Kocaeli Çiğdemi (Crocus ancyrensis subsp. ancyrensis)', 'Kocaeli Kengeri (Serratula galatica)', 'Kocaeli Zeytinotu (Centaurea ptosimopappa)'],
  'Konya': ['Konya Çiğdemi (Crocus pallasii subsp. pallasii)', 'Konya Kengeri (Serratula seiberi)', 'Konya Karabaşotu (Ballota dodanii)'],
  'Kütahya': ['Kütahya Lalesi (Tulipa hungarica subsp. australis)', 'Kütahya Çiğdemi (Crocus paschei)', 'Kütahya Karabaşotu (Ballota acrocephala)'],
  'Malatya': ['Malatya Çiğdemi (Crocus sattarius)', 'Malatya Kengeri (Serratula anatolica)', 'Malatya Kantaronu (Hypericum malatyanum)'],
  'Manisa': ['Manisa Çiğdemi (Crocus kosaninii)', 'Manisa Karabaşotu (Ballota ovatifolia)', 'Manisa Zeytinotu (Centaurea helenioides)'],
  'Kahramanmaraş': ['Kahramanmaraş Çiğdemi (Crocus kotschyanus subsp. broteroi)', 'Kahramanmaraş Kengeri (Serratula thracica)', 'Kahramanmaraş Papatyası (Anthemis fuscocapitata)'],
  'Mardin': ['Mardin Çayı (Sideritis syriaca)', 'Mardin Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Mardin Kengeri (Serratula mardinensis)'],
  'Muğla': ['Muğla Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Muğla Lalesi (Tulipa cypria)', 'Muğla Karabaşotu (Ballota sivasica)'],
  'Muş': ['Muş Çayı (Sideritis incana subsp. davisiana)', 'Muş Çiğdemi (Crocus hyemalis)', 'Muş Kengeri (Serratula seravschanica)'],
  'Nevşehir': ['Nevşehir Çiğdemi (Crocus nevadensis)', 'Nevşehir Kengeri (Serratula candolleana)', 'Nevşehir Karabaşotu (Ballota leucocalyx)'],
  'Niğde': ['Niğde Çiğdemi (Crocus antalyensis subsp. zoelleri)', 'Niğde Kengeri (Serratula haradjianii)', 'Niğde Karabaşotu (Ballota foetida subsp. nepetifolia)'],
  'Ordu': ['Ordu Çiğdemi (Crocus cappadocicus)', 'Ordu Çayı (Sideritis sermsesianae)', 'Ordu Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Rize': ['Rize Çiğdemi (Crocus euboicus)', 'Rize Çayı (Sideritis resitana)', 'Rize Kengeri (Serratula ichayensis)'],
  'Sakarya': ['Sakarya Çiğdemi (Crocus olivieri subsp. balansae)', 'Sakarya Kengeri (Serratula heterochroma)', 'Sakarya Karabaşotu (Ballota pterocalyx)'],
  'Samsun': ['Samsun Çiğdemi (Crocus tauri)', 'Samsun Kengeri (Serratula canescens)', 'Samsun Karabaşotu (Ballota persica)'],
  'Siirt': ['Siirt Çiğdemi (Crocus alatavicus)', 'Siirt Çayı (Sideritis syriaca)', 'Siirt Kengeri (Serratula lasiocarpa)'],
  'Sinop': ['Sinop Çiğdemi (Crocus pallasii subsp. haussknechtii)', 'Sinop Çayı (Sideritis kubinyii)', 'Sinop Kengeri (Serratula hedistejerae)'],
  'Sivas': ['Sivas Çiğdemi (Crocus sivasicus)', 'Sivas Kengeri (Serratula elatior)', 'Sivas Karabaşotu (Ballota yildirimlii)'],
  'Tekirdağ': ['Tekirdağ Çiğdemi (Crocus pallasii subsp. pallasii)', 'Tekirdağ Kengeri (Serratula latebracteata)', 'Tekirdağ Karabaşotu (Ballota astiphanica)'],
  'Tokat': ['Tokat Çiğdemi (Crocus pulchricolor)', 'Tokat Kengeri (Serratula schischkinii)', 'Tokat Karabaşotu (Ballota aucheriana subsp. villosissima)'],
  'Trabzon': ['Trabzon Çiğdemi (Crocus ponticus)', 'Trabzon Çayı (Sideritis cilicica subsp. pontica)', 'Trabzon Karabaşotu (Ballota pontica)'],
  'Tunceli': ['Tunceli Çayı (Sideritis armena)', 'Tunceli Çiğdemi (Crocus tuncelianus)', 'Tunceli Kengeri (Serratula troodi)'],
  'Şanlıurfa': ['Şanlıurfa Çiğdemi (Crocus adiyamanensis)', 'Şanlıurfa Çayı (Sideritis seravschanica)', 'Şanlıurfa Kengeri (Serratula arduennensis)'],
  'Uşak': ['Uşak Çiğdemi (Crocus flavus subsp. helveticus)', 'Uşak Kengeri (Serratula daghestanica)', 'Uşak Karabaşotu (Ballota pseudodictamnus)'],
  'Van': ['Van Çiğdemi (Crocus vanensis)', 'Van Çayı (Sideritis stenopetala)', 'Van Kengeri (Serratula flabellifolia)'],
  'Yozgat': ['Yozgat Çiğdemi (Crocus cancellatus subsp. mazziaricus)', 'Yozgat Kengeri (Serratula seravschanica)', 'Yozgat Karabaşotu (Ballota platyloma)'],
  'Zonguldak': ['Zonguldak Çiğdemi (Crocus alatavicus subsp. salacinicus)', 'Zonguldak Kengeri (Serratula gorganica)', 'Zonguldak Karabaşotu (Ballota saxatilis)'],
  'Aksaray': ['Aksaray Çiğdemi (Crocus aegeensis subsp. alexandri)', 'Aksaray Kengeri (Serratula pontica)', 'Aksaray Karabaşotu (Ballota stenoptera)'],
  'Bayburt': ['Bayburt Çiğdemi (Crocus baytopiorum)', 'Bayburt Çayı (Sideritis incana)', 'Bayburt Kengeri (Serratula kurdica)'],
  'Karaman': ['Karaman Çiğdemi (Crocus biflorus subsp. pulchricolor)', 'Karaman Kengeri (Serratula cariensis)', 'Karaman Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Kırıkkale': ['Kırıkkale Çiğdemi (Crocus scharojanii)', 'Kırıkkale Kengeri (Serratula lycopodioides)', 'Kırıkkale Karabaşotu (Ballota hirsuta)'],
  'Batman': ['Batman Çiğdemi (Crocus chrysanthus)', 'Batman Kengeri (Serratula karaotensis)', 'Batman Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Şırnak': ['Şırnak Çiğdemi (Crocus aleppicus)', 'Şırnak Çayı (Sideritis zoharyi)', 'Şırnak Kengeri (Serratula absinthioides)'],
  'Bartın': ['Bartın Çiğdemi (Crocus olivieri subsp. balansae)', 'Bartın Kengeri (Serratula souliei)', 'Bartın Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Ardahan': ['Ardahan Çiğdemi (Crocus caucasigenus)', 'Ardahan Çayı (Sideritis davisii)', 'Ardahan Kengeri (Serratula talyschensis)'],
  'Iğdır': ['Iğdır Çiğdemi (Crocus flavus subsp. balansae)', 'Iğdır Kengeri (Serratula coruhensis)', 'Iğdır Karabaşotu (Ballota aucheriana subsp. villosissima)'],
  'Yalova': ['Yalova Çiğdemi (Crocus balansae)', 'Yalova Kengeri (Serratula bozokensis)', 'Yalova Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Karabük': ['Karabük Çiğdemi (Crocus pulchricolor)', 'Karabük Kengeri (Serratula andryalifolia)', 'Karabük Karabaşotu (Ballota nigra subsp. anatolica)'],
  'Kilis': ['Kilis Çiğdemi (Crocus scharojanii)', 'Kilis Çayı (Sideritis leptoclada)', 'Kilis Kengeri (Serratula corymbosa)'],
  'Osmaniye': ['Osmaniye Çiğdemi (Crocus pulchricolor)', 'Osmaniye Kengeri (Serratula aucheri)', 'Osmaniye Karabaşotu (Ballota echinata)']
};
// Define a function to get the plant names for a given city
function getPlantsForCity(city) {
  return cityPlants[city] || ['Bitki Yok'];
}

function getPicsForCity(city) {
  return picPlants[city] || ['Resim Yok'];
}

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        const city = event.target.parentNode.getAttribute('data-iladi');
		const plants = getPlantsForCity(city);
		const pics = getPicsForCity(city);
		info.innerHTML = [
			'<div>',
			city,
			'</div>',
			plants.map(plant => '<div>' + plant + '</div>').join(''),
			'<img src="',
			pics.map(pic => pic).join(''),
			'" alt="',
			'bitki adı',
			'">'
		].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}
