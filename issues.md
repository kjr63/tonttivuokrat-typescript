# react-tsc-tuto
# käännös komennolla npx tsc (ilman tiedostonimeä, jolloin kääntäjä käyttää tsconfig.json parametreja)
# käännös tiedostonimellä sivuuttaa tsconfig.json:in
# webpack.configin babel-loader pyyhkii pois kaikki tyypinmäärittelyt eikä kerro "käännösvirheistä" mitään
# Jos haluaa käännösvirheet webpackin kautta : käytettävä ts-loader
# old-router
"react-router-dom": "^6.3.0",
"react": "^16.13.1",
"react-dom": "^16.13.1",


Tehtävää:

- Ennen muutoksia Routeriin, päivitettävä router versioon 6.22
- Päivitettävä sovellus toimimaan uusilla versioilla
- Routerin kautta, suosikit-linkkeihin talletettavat, aktivoitavat sivut (3 kpl):
	* Tonttiarvokartta
	* Koko maan tiedot
	* Tilastosivu, jossa tiedot taulukko- tai graafisessa muodossa, Trading Economicsin tapaan
