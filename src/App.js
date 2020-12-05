import React from 'react';

import logo from './logo.png';

import "./Navigation.scss"
import "./Accordion.scss"
import "./App.css"
import { Markup } from 'interweave';
import rp from "request-promise";
import cheerio from "cheerio";










class App extends React.Component {
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }




  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    this.state = {
      isLoading: true,
      showAbout: false,
      showHome: true,
      links:[],
      content_makro:[],
      title_makro:[],

      content_appliedmicro:[],
      title_appliedmicro:[],

      content_empmak:[],
      title_empmak:[],

      content_empwifo:[],
      title_empwifo:[],

      content_enecon:[],
      title_enecon:[],

      content_cure:[],
      title_cure:[],

      content_energy:[],
      title_energy:[],

      content_lef:[],
      title_lef:[],

      content_fiwipo:[],
      title_fiwipo:[],

      content_health:[],
      title_health:[],

      content_inno:[],
      title_inno:[],

      content_iwb:[],
      title_iwb:[],

      content_rdw:[],
      title_rdw:[],

      content_statoek:[],
      title_statoek:[],

      content_scrape:[],
      title_scrape:[],
      subcontent_scrape:[],
      subcontent_title_scrape:[],


    }
        this.display=this.display.bind(this);
        this.handleAbout = this.handleAbout.bind(this);
  }





  async componentDidMount() {



  const CORS_PROXY = "https://corsrubhub.herokuapp.com/"









 let links = ["https://www.ruhr-uni-bochum.de/mak/lehre/master/index.html.de" ,"https://www.ruhr-uni-bochum.de/mak/lehre/master/ss.html.de",];
 links.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {

  let content_makro = this.state.content_makro;
  let title_makro = this.state.title_makro;
  let $ = cheerio.load(html);

   let content = $.html($('#inhaltsbereich')) + $.html($('#col3'))
   let title = $('#headerbackground > h2:nth-child(6)').text()+ " - " + $('#inhaltsbereich > h2:nth-child(2)').text()
   content = content.replaceAll("/mak/mam/", "http://ruhr-uni-bochum.de/mak/mam/" )

   content_makro.push(content);
   title_makro.push(title);

  this.setState({content_makro: content_makro})
  this.setState({title_makro: title_makro})

  })

 }
 )


 //Applied Microeconomics

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/appliedmicro/")
 .then(html => {
 const links_appliedmicro = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(1) > a:nth-child(1)').attr("href");

 links_appliedmicro.push(link)
 //Grab link of teaching page and crawl contents
 links_appliedmicro.forEach(link =>   {

 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_appliedmicro;
  let titles = this.state.title_appliedmicro;
  let $ = cheerio.load(html);
   let content = $.html($('#col3_content'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()
   contents.push(content);
   titles.push(title);
  this.setState({content_appliedmicro: contents})
  this.setState({title_appliedmicro: titles})

  })
 })

 })


 //Empirische makroökonomik

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.rub.de/empmak/lehre/index.html.de")
 .then(html => {
 const links_empmak = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#inhalt > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1) ').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('#inhalt > ul:nth-child(4) > li:nth-child(3) > a:nth-child(1)').attr("href")
 links_empmak.push(link,link2)
 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_empmak.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_empmak;
  let titles = this.state.title_empmak;
  let $ = cheerio.load(html);
   let content = $.html($('#col3_content'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()
   contents.push(content);
   titles.push(title);
  this.setState({content_empmak: contents})
  this.setState({title_empmak: titles})

  })
 })

 })


 //Empirical Economics

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.rub.de/empwifo/lehre/index.html.en")
 .then(html => {
 const links_empwifo = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#inhalt > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)').attr("href")
 console.log("test")
 links_empwifo.push(link)
 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_empwifo.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_empwifo;
  let titles = this.state.title_empwifo;
  let $ = cheerio.load(html);
   let content = $.html($('#col3_content'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()
   contents.push(content);
   titles.push(title);
  this.setState({content_empwifo: contents})
  this.setState({title_empwifo: titles})

  })
 })

 })

 //Honorarprofessur für Energieökonomik & -politik

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/enecon/index.html.de")
 .then(html => {
 const links_enecon = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').attr("href")
 console.log()
 links_enecon.push(link)
 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_enecon.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_enecon;
  let titles = this.state.title_enecon;
  let $ = cheerio.load(html);
   let content = $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()
  content = content.replaceAll("/enecon/mam/", "https://www.wiwi.ruhr-uni-bochum.de/enecon/mam/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_enecon: contents})
  this.setState({title_enecon: titles})

  })
 })

 })

 //Centrum für Umweltmanagement, Ressourcen und Energie

 //Grab link of teaching page
 rp(CORS_PROXY + "https://www.wiwi.ruhr-uni-bochum.de/cure/lehre/index.html.de")
 .then(html => {
 const links_cure = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').attr("href")
 console.log()
 links_cure.push(link)
 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_cure.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_cure;
  let titles = this.state.title_cure;
  let $ = cheerio.load(html);
   let content = $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  content = content.replaceAll("/mam/content/cure", "https://www.wiwi.ruhr-uni-bochum.de/mam/content/cure/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_cure: contents})
  this.setState({title_cure: titles})

  })
 })

 })

 //Apl.-Professur für Energy Economics and Applied Econometrics

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/energy/lehre/")
 .then(html => {
 const links_energy = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(1) > a:nth-child(1)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(2) > a:nth-child(1)').attr("href")
 console.log()

 links_energy.push(link,link2)


 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_energy.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_energy;
  let titles = this.state.title_energy;
  let $ = cheerio.load(html);
   let content = $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  content = content.replaceAll("/energy/mam/", "https://www.wiwi.ruhr-uni-bochum.de/energy/mam/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_energy: contents})
  this.setState({title_energy: titles})

  })
 })

 })

 //Lehrstuhl für Entwicklungsforschung

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/lef/lehre/")
 .then(html => {
 const links_lef = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').attr("href")

 console.log(link)

 links_lef.push(link)


 // links_empmak.push(link2)
 //Grab link of teaching page and crawl contents
 links_lef.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_lef;
  let titles = this.state.title_lef;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  content = content.replaceAll("/lef/mam/content/", "https://www.wiwi.ruhr-uni-bochum.de/lef/mam/content/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_lef: contents})
  this.setState({title_lef: titles})

  })
 })

 })

 //Lehrstuhl für Finanzwissenschaft und Wirtschaftspolitik

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/fiwipo/")
 .then(html => {
 const links_fiwipo = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').attr("href")


 links_fiwipo.push(link,link2)
 // crawl contents
 links_fiwipo.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_fiwipo;
  let titles = this.state.title_fiwipo;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  // content = content.replaceAll("/fiwipo/", "https://www.wiwi.ruhr-uni-bochum.de/fiwipo/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_fiwipo: contents})
  this.setState({title_fiwipo: titles})

  })
 })

 })

 //Lehrstuhl für Apl.-Professur für Health Economics

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/health/lehre/")
 .then(html => {
 const links_health = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#inhalt > a:nth-child(5)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('#inhalt > a:nth-child(8)').attr("href")
 console.log(link + link2)

 links_health.push(link,link2)
 // crawl contents
 links_health.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_health;
  let titles = this.state.title_health;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  content = content.replaceAll("/mam/content/", "https://www.wiwi.ruhr-uni-bochum.de/mam/content/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_health: contents})
  this.setState({title_health: titles})

  })
 })

 })

 //Lehrstuhl für Innovationsökonomik und -politik am CEIT

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/inno/lehre/")
 .then(html => {
 const links_inno = []
 let $ = cheerio.load(html);
 let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('#seitennavigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').attr("href")
 console.log(link + link2)

 links_inno.push(link,link2)
 // crawl contents
 links_inno.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_inno;
  let titles = this.state.title_inno;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

  // content = content.replaceAll("/inno/", "https://www.wiwi.ruhr-uni-bochum.de/inno/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_inno: contents})
  this.setState({title_inno: titles})

  })
 })

 })


 //Lehrstuhl für internationale Wirtschaftsbeziehungen

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/iwb/master.html.de")
 .then(html => {
 const links_iwb = []
 let $ = cheerio.load(html);
 let link=  $('.liste_mit_typrechts > li:nth-child(1) > a:nth-child(1)').attr("href")


 links_iwb.push(link)
 // crawl contents
 links_iwb.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_iwb;
  let titles = this.state.title_iwb;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

 content = content.replaceAll("/mam/", "https://www.wiwi.ruhr-uni-bochum.de/mam/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_iwb: contents})
  this.setState({title_iwb: titles})

  })
 })

 })



 //Lehrstuhl für Recht der Wirtschaft

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/rdw/lehre/")
 .then(html => {
 const links_rdw = []
 let $ = cheerio.load(html);
 let link =  "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(1) > a:nth-child(1)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(2) > a:nth-child(1)').attr("href")


 links_rdw.push(link,link2)
 // crawl contents
 links_rdw.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_rdw;
  let titles = this.state.title_rdw;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h2:nth-child(2)').text()

   content = content.replaceAll("/mam/", "https://www.wiwi.ruhr-uni-bochum.de/mam/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_rdw: contents})
  this.setState({title_rdw: titles})

  })
 })

 })


 //Lehrstuhl für Quantitative Analyse (Statistik / Ökonometrie)

 //Grab link of teaching page
 rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/statoek/lehre/")
 .then(html => {
 const links_statoek = []
 let $ = cheerio.load(html);
 let link =  "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(1) > a:nth-child(1)').attr("href")
 let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(2) > a:nth-child(1)').attr("href")


 links_statoek.push(link,link2)
 // crawl contents
 links_statoek.forEach(link =>   {
 rp(CORS_PROXY + link )
 .then(html => {
  let contents = this.state.content_statoek;
  let titles = this.state.title_statoek;
  let $ = cheerio.load(html);
   let content =  $.html($('#inhalt'))
   let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()+ " - " + $('#inhalt > h3:nth-child(3)').text()

   content = content.replaceAll("/mam/", "https://www.wiwi.ruhr-uni-bochum.de/mam/" )
   contents.push(content);
   titles.push(title);
  this.setState({content_statoek: contents})
  this.setState({title_statoek: titles})

  })
 })

 })
 setTimeout(
        function() {
         this.setState({ isLoading: false });
        }.bind(this),
       2000
     );

}

handleChange(event) {


  this.setState({value: event.target.value});

}

 handleSubmit(event) {


 }





display = () => {


  const content_makro = this.state.content_makro;
  const title_makro = this.state.title_makro;
  const content_appliedmicro = this.state.content_appliedmicro;
  const title_appliedmicro = this.state.title_appliedmicro;
  const content_empmak = this.state.content_empmak;
  const title_empmak = this.state.title_empmak;
  const content_empwifo = this.state.content_empwifo;
  const title_empwifo = this.state.title_empwifo;
  const content_enecon = this.state.content_enecon;
  const title_enecon = this.state.title_enecon;
  const content_cure = this.state.content_cure;
  const title_cure = this.state.title_cure;
  const content_energy = this.state.content_energy;
  const title_energy = this.state.title_energy;
  const content_lef = this.state.content_lef;
  const title_lef = this.state.title_lef;
  const content_fiwipo = this.state.content_fiwipo;
  const title_fiwipo = this.state.title_fiwipo;
  const content_health = this.state.content_health ;
  const title_health = this.state.title_health;
  const content_inno = this.state.content_inno ;
  const title_inno = this.state.title_inno;
  const content_iwb = this.state.content_iwb ;
  const title_iwb = this.state.title_iwb;
  const content_rdw = this.state.content_rdw ;
  const title_rdw = this.state.title_rdw;
  const content_statoek = this.state.content_statoek ;
  const title_statoek = this.state.title_statoek;

  // const content_scrape = this.state.content_scrape;
  // const title_scrape = this.state.title_scrape;
  // const subcontent_scrape = this.state.subcontent_scrape;
  // const subcontent_title_scrape = this.state.subcontent_title_scrape





  var content_mak = content_makro.map(function(_, i) {
  return {
  content : content_makro[i] ,
  title: title_makro[i],
  };
  });

  var content_am = content_appliedmicro.map(function(_, i) {
  return {
  content : content_appliedmicro[i] ,
  title: title_appliedmicro[i],
  };

  });

  var content_empm = content_empmak.map(function(_, i) {
  return {
  content : content_empmak[i] ,
  title: title_empmak[i],
  };

  });

  var content_empwi = content_empwifo.map(function(_, i) {
  return {
  content : content_empwifo[i] ,
  title: title_empwifo[i],
  };

  });

  var content_eneco = content_enecon.map(function(_, i) {
  return {
  content : content_enecon[i] ,
  title: title_enecon[i],
  };

  });

  var content_cur = content_cure.map(function(_, i) {
  return {
  content : content_cure[i] ,
  title: title_cure[i],
  };

  });



  var content_energ = content_energy.map(function(_, i) {
  return {
  content : content_energy[i] ,
  title: title_energy[i],
  };

  });


  var content_le = content_lef.map(function(_, i) {
  return {
  content : content_lef[i] ,
  title: title_lef[i],
  };

  });

  var content_fiwip = content_fiwipo.map(function(_, i) {
  return {
  content : content_fiwipo[i] ,
  title: title_fiwipo[i],
  };

  });

  var content_healt = content_health.map(function(_, i) {
  return {
  content : content_health[i] ,
  title: title_health[i],
  };

  });

  var content_inn = content_inno.map(function(_, i) {
  return {
  content : content_inno[i] ,
  title: title_inno[i],
  };

  });

  var content_iw = content_iwb.map(function(_, i) {
  return {
  content : content_iwb[i] ,
  title: title_iwb[i],
  };

  });

  var content_rd = content_rdw.map(function(_, i) {
  return {
  content : content_rdw[i] ,
  title: title_rdw[i],
  };

  });

  var content_statoe = content_statoek.map(function(_, i) {
  return {
  content : content_statoek[i] ,
  title: title_statoek[i],
  };

  });


     return (


       <div>

       <section>
         <details>
           <summary>Lehrstuhl für Makroökonomik!</summary>
           {content_mak.map((a, index) => (
         <div  key={index}>
         <section>
           <details>
             <summary>{a.title}</summary>
             <div>
                 <Markup content={a.content} />
             </div>
           </details>
         </section>

             </div>
              ))}
              </details>
            </section>

            <section>
              <details>
                <summary>Chair of Applied Microeconomics</summary>
              {content_am.map((b, index) => (
            <div  key={index}>
            <section>
              <details>
                <summary>{b.title}</summary>
                <div>
                    <Markup content={b.content} />
                </div>
              </details>
            </section>
                </div>

                 ))}
                 </details>
               </section>

               <section>
                 <details>
                   <summary>Lehrstuhl für Empirische Makroökonomik</summary>
                 {content_empm.map((c, index) => (
               <div  key={index}>
               <section>
                 <details>
                   <summary>{c.title}</summary>
                   <div>
                       <Markup content={c.content} />
                   </div>
                 </details>
               </section>
                   </div>

                    ))}
                    </details>
                  </section>

                  <section>
                    <details>
                      <summary>Lehrstuhl für Empirische Wirtschaftsforschung</summary>
                    {content_empwi.map((d, index) => (
                  <div  key={index}>
                  <section>
                    <details>
                      <summary>{d.title}</summary>
                      <div>
                          <Markup content={d.content} />
                      </div>
                    </details>
                  </section>
                      </div>

                       ))}
                       </details>
                     </section>

                     <section>
                       <details>
                         <summary>Honorarprofessur für Energieökonomik & -politik </summary>
                       {content_eneco.map((e, index) => (
                     <div  key={index}>
                     <section>
                       <details>
                         <summary>{e.title}</summary>
                         <div>
                             <Markup content={e.content} />
                         </div>
                       </details>
                     </section>
                         </div>

                          ))}
                          </details>
                        </section>

                        <section>
                          <details>
                            <summary>Honorarprofessur für Energierecht und -wirtschaft  </summary>
                          {content_cur.map((f, index) => (
                        <div  key={index}>
                        <section>
                          <details>
                            <summary>{f.title}</summary>
                            <div>
                                <Markup content={f.content} />
                            </div>
                          </details>
                        </section>
                            </div>

                             ))}
                             </details>
                           </section>

                           <section>
                             <details>
                               <summary>Apl.-Professur für Energy Economics and Applied Econometrics  </summary>
                             {content_energ.map((g, index) => (
                           <div  key={index}>
                           <section>
                             <details>
                               <summary>{g.title}</summary>
                               <div>
                                   <Markup content={g.content} />
                               </div>
                             </details>
                           </section>
                               </div>

                                ))}
                                </details>
                              </section>

                              <section>
                                <details>
                                  <summary>Lehrstuhl für Entwicklungsforschung</summary>
                                {content_le.map((h, index) => (
                              <div  key={index}>
                              <section>
                                <details>
                                  <summary>{h.title}</summary>
                                  <div>
                                      <Markup content={h.content} />
                                  </div>
                                </details>
                              </section>
                                  </div>

                                   ))}

                                   </details>
                                 </section>

                                 <section>
                                   <details>
                                     <summary>Lehrstuhl für Finanzwissenschaft und Wirtschaftspolitik </summary>
                                   {content_fiwip.map((i, index) => (
                                 <div  key={index}>
                                 <section>
                                   <details>
                                     <summary>{i.title}</summary>
                                     <div>
                                         <Markup content={i.content} />
                                     </div>
                                   </details>
                                 </section>
                                     </div>

                                      ))}
                                      </details>
                                    </section>

                                    <section>
                                      <details>
                                        <summary>Apl.-Professur für Health Economics </summary>
                                      {content_healt.map((j, index) => (
                                    <div  key={index}>
                                    <section>
                                      <details>
                                        <summary>{j.title}</summary>
                                        <div>
                                            <Markup content={j.content} />
                                        </div>
                                      </details>
                                    </section>
                                        </div>

                                         ))}
                                         </details>
                                       </section>

                                       <section>
                                         <details>
                                           <summary>Lehrstuhl für Innovationsökonomik und –politik </summary>
                                         {content_inn.map((k, index) => (
                                       <div  key={index}>
                                       <section>
                                         <details>
                                           <summary>{k.title}</summary>
                                           <div>
                                               <Markup content={k.content} />
                                           </div>
                                         </details>
                                       </section>
                                           </div>

                                            ))}
                                            </details>
                                          </section>
                                          <section>
                                            <details>
                                              <summary>Lehrstuhl für internationale Wirtschaftsbeziehungen </summary>
                                            {content_iw.map((l, index) => (
                                          <div  key={index}>
                                          <section>
                                            <details>
                                              <summary>{l.title}</summary>
                                              <div>
                                                  <Markup content={l.content} />
                                              </div>
                                            </details>
                                          </section>
                                              </div>

                                               ))}
                                               </details>
                                             </section>

                                             <section>
                                               <details>
                                                 <summary>Lehrstuhl für Recht der Wirtschaft </summary>
                                               {content_rd.map((m, index) => (
                                             <div  key={index}>
                                             <section>
                                               <details>
                                                 <summary>{m.title}</summary>
                                                 <div>
                                                     <Markup content={m.content} />
                                                 </div>
                                               </details>
                                             </section>
                                                 </div>

                                                  ))}
                                                  </details>
                                                </section>

                                                <section>
                                                  <details>
                                                    <summary>Lehrstuhl für Quantitative Analyse (Statistik / Ökonometrie) </summary>
                                                  {content_statoe.map((n, index) => (
                                                <div  key={index}>
                                                <section>
                                                  <details>
                                                    <summary>{n.title}</summary>
                                                    <div>
                                                        <Markup content={n.content} />
                                                    </div>
                                                  </details>
                                                </section>
                                                    </div>

                                                     ))}
                                                     </details>
                                                   </section>
                                                   </div>
     );


}

handleAbout = () => {

    this.setState(state => ({ showHome: false, showAbout: true,   }));

    }

handleHome = () => {

     this.setState(state => ({ showHome: true, showAbout: false,   }));
     console.log("home clicked" + this.state.showHome)
     }


  render() {
     let { isLoading } = this.state;
     let showHome = this.state.showHome;
     let showAbout = this.state.showAbout;

     if (showHome) {
     return (
  <div>
         {isLoading ? (
           <div class="loader">
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       	<div></div>
       <p>LOADING</p>
       </div>
         ) : (
        <div class = "App">

          <nav role="navigation" class="primary-navigation">
      <ul>
        <li><a href="#" onClick={this.handleHome}>Lehre VWL</a></li>

        <li><a href="#" onClick={this.handleAbout}>Über</a></li>
        <li><a href="#">Kontakt</a></li>
        </ul>

        </nav>

             {this.display()}
        </div>
         )}

         </div>
     );
   }
   if (showAbout) {
        return (
     <div>
            {isLoading ? (
              <div class="loader">
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          	<div></div>
          <p>LOADING</p>
          </div>
            ) : (
           <div class = "App">

             <nav role="navigation" class="primary-navigation">
             <ul>
               <li><a href="#" onClick={this.handleHome}>Lehre VWL</a></li>

               <li><a href="#" onClick={this.handleAbout}>Über</a></li>
               <li><a href="#">Kontakt</a></li>
               </ul>
           </nav>
           <img src={logo} alt="Logo" width="200" height="142" />
           <div class ="about">
                Weil das Studium schon hart genug ist. Muss es nicht auch noch die Semesterplanung sein.
                <ul>
               <li>ReactJS Webapp</li>
               <li>Webcrawler versucht von allen VWL-Lehrstühlen der Ruhr Universität Bochum die aktuellsten Informationen zur Lehre zu bekommen</li>
               <li>Projekt zum vertiefen meiner JavaScript Fähigkeiten.</li>
               <li>Code: <a href="https://github.com/mltn123/rubhub">github.com/mltn123/rubhub</a>  </li>
              </ul>
          </div>
           </div>
            )}

            </div>
        );
      }
}




}





export default App;
