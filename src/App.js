import React, { Component } from 'react';
import useState from 'react';
import axios from 'axios';
import "./App.css"
import "./Accordion.scss"
import { Markup } from 'interweave';
import rp from "request-promise";
import cheerio from "cheerio";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
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

      content_scrape:[],
      title_scrape:[],

    }
  }


  async componentDidMount() {
    function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    function uuid_2() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 17 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    function formatText(input){
    let n = 0;
    input = input.replace(/(\.+|\:|\!|\?|\s)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, (m, i, og) => {
    return (n++ % 2) ? m : '. \n\n';
    });
    return input
  }






    const CORS_PROXY = "http://localhost:8080/"
    let Parser = require('rss-parser');
    let parser = new Parser();









//makroökonomik



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
console.log()
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

//Centrum für Umweltmanagement, Ressourcen und Energie

//Grab link of teaching page
rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/energy/lehre/")
.then(html => {
const links_energy = []
let $ = cheerio.load(html);
let link= "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(1) > a:nth-child(1)').attr("href")
// let link2 = "http://www.wiwi.ruhr-uni-bochum.de" + $('.hauptmenu-ausgeklappt > li:nth-child(2) > a:nth-child(1)').attr("href")
console.log()

links_energy.push(link)

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

    content = content.replaceAll("/mam/content/cure", "https://www.wiwi.ruhr-uni-bochum.de/mam/content/cure/" )
     contents.push(content);
     titles.push(title);
    this.setState({content_energy: contents})
    this.setState({title_energy: titles})

    })
})

})


rp(CORS_PROXY + "http://www.wiwi.ruhr-uni-bochum.de/fakultaet/vwl.html.de")
.then(html => {
const links_crawl = []
let $ = cheerio.load(html);
$('#inhalt > table:nth-child(n) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1),#hauptmenu > ul:nth-child(n) > li:nth-child(n) > ul:nth-child(n) > li:nth-child(n) > a:nth-child(n)').each(function (i, e) {
links_crawl.push($(this).attr("href"))
});
  links_crawl.forEach(link =>   {
    rp(CORS_PROXY + link )
      .then(html => {
        const links_crawl2=[]
        var link
        let $ = cheerio.load(html);
        $('#seitennavigation > ul:nth-child(n) > li:nth-child(n) > a:nth-child(n)' ).each(function (i, e) {

        link =  "https://www.wiwi.ruhr-uni-bochum.de/" + $(this).attr("href")

        // if (link.includes("teaching") || link.includes("lehre") | link.includes("lehrveranstaltung") | link.includes("lehre")) {
        //   links_crawl2.push(link);
        //   }
        // });
        if (link.includes("teaching") || link.includes("lehre") | link.includes("lehrveranstaltung") | link.includes("wise")) {
          links_crawl2.push(link);
          }
        });





    console.log(links_crawl2)

        links_crawl2.forEach(link =>   {
        rp(CORS_PROXY + link )
          .then(html => {
            let contents = this.state.content_scrape;
            let titles = this.state.title_scrape;
             let $ = cheerio.load(html);
             let content = $.html($('#inhalt'))
             let title = $('#ueberschrift > p:nth-child(1) > span:nth-child(5)').text()
             content = content.replaceAll("/empmak/", "http://wiwi.ruhr-uni-bochum.de/empmak/" )
              content = content.replaceAll("/empwifo/", "http://wiwi.ruhr-uni-bochum.de/empwifo/" )
              content = content.replaceAll("/enecon/", "http://wiwi.ruhr-uni-bochum.de/enecon/" )
              content = content.replaceAll("/energy/", "http://wiwi.ruhr-uni-bochum.de/energy/" )
              content = content.replaceAll("/health/", "http://wiwi.ruhr-uni-bochum.de/health/" )
              content = content.replaceAll("/uipol/", "http://wiwi.ruhr-uni-bochum.de/uipol/" )
              content = content.replaceAll("/wipooek/", "http://wiwi.ruhr-uni-bochum.de/wipooek/" )
              contents.push(content);
              titles.push(title);
             this.setState({content_scrape: contents})
             this.setState({title_scrape: titles})
           })
         })
       })
     })
   })
}








  render() {

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
    const content_scrape = this.state.content_scrape;
    const title_scrape = this.state.title_scrape;





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

var content_scrap = content_scrape.map(function(_, i) {
  return {
    content : content_scrape[i] ,
    title: title_scrape[i],
  };

});



const divStyle = (src) => ({
  backgroundImage: 'url(' + src + ')'
})



    return (




      <div className="container" >
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

                             {content_scrap.map((h, index) => (
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

</div>
    );
  }

}
export default App;
