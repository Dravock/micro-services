import React, { useEffect } from 'react'
import logo from '../../logo.svg';
import Sidebar from '../../components/Sidebar/Sidebar';
import bgImg from '../../includes/img/jpeq/rendering_005-watermark.jpg'

function App() {

  const arr_img_services = [
    { title: "webP Converter", url: "/" },
    { title: "Crop IMG", url: "/services" },
    { title: "Remove BG", url: "/contact-us" },
  ]

  const arr_apps = [
    { title: "PrivMess", url: "https://privmes.keskincoding.de" },
    { title: "todo-app", url: "/services" },
  ]

  const arr_games = [
    { title: "tictactoe", url: "/services" },
  ]

  const bg_setting = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', // You can adjust this property as needed
    backgroundRepeat: 'no-repeat', // You can adjust this property as needed
  };

  const email = 'support@keskincoding.de';  

  const showMainContent = () => {
    const main = document.querySelector('.hide-box');
    main.classList.add('slide-in');
  }

  useEffect(() => {
    setTimeout(() => {
      showMainContent();
    }, 1);
  }, [])


  return (
    <section className="App" style={bg_setting}>
      <div className='App__inner relative flex min-h-screen'>
        <Sidebar arr_img_services={arr_img_services} arr_apps={arr_apps} arr_games={arr_games}/>
        <main className='hide-box absolute min-w-full min-h-screen flex justify-center items-center'>
          <div className='max-w-4xl  bg-white/80 rounded-lg shadow-lg p-8 '>
            <h1 className='text-3xl font-bold text-center mb-4'>Innovation trifft auf Exzellenz: Dein Tor zu digitalen Lösungen</h1>
            <div className='text-justify pt-4'>
              <p><strong>Willkommen auf meiner IT-Projektportfolio-Seite,</strong><br/> einem Schaufenster meiner Leidenschaft für fortschrittliche Technologie und maßgeschneiderte Lösungen. In einer Welt, die von ständigem Wandel und digitaler Transformation geprägt ist, biete ich hier einen Einblick in meine Reise durch die Welt der Informationstechnologie und zeige die Projekte, die ich mit Hingabe und Expertise realisiert habe.<br /><br /></p>
              <p><strong>Als erfahrener IT-Programmierer verfolge ich die Mission,</strong><br/> innovative Technologien in praktische Lösungen zu verwandeln, die Unternehmen dabei unterstützen, ihre Ziele zu erreichen und ihre Visionen zu verwirklichen. Auf dieser Seite finden Sie einen Überblick über meine vielfältigen Projekte, von Softwareentwicklung bis hin zur Systemoptimierung, die alle das Ziel verfolgen, die digitale Welt voranzutreiben und den technologischen Fortschritt zu gestalten.<br /><br /></p>
              <p><strong>Meine berufliche Reise hat mich mit Herausforderungen und Chancen konfrontiert,</strong><br/> die mir die Möglichkeit gegeben haben, mich ständig weiterzuentwickeln und meine Fähigkeiten zu verfeinern. Hier können Sie mehr über meine Expertise, meine Leidenschaft für IT und die erfolgreich abgeschlossenen Projekte erfahren, die die Bandbreite meiner Fähigkeiten und das Engagement für exzellente Arbeit verdeutlichen.<br /><br /></p>
              <p><strong>Ich lade Sie herzlich dazu ein,</strong><br/> diese Seite zu erkunden und mehr über die Projekte zu erfahren, die ich durchgeführt habe. Wenn Sie auf der Suche nach einem kompetenten Partner für Ihr nächstes IT-Projekt sind oder einfach nur Inspiration und Einblicke in die Welt der Informationstechnologie suchen, sind Sie hier genau richtig.<br /><br /></p>
              <p><strong>Vielen Dank für Ihr Interesse und Ihre Neugier. Gemeinsam können wir die Zukunft der Technologie gestalten!</strong></p>
            </div>
            <div className='w-full flex items-center justify-center'>
              <a href={"mailto:" + email} className='block text-center mt-4 text-blue-500 border border-blue-500 w-fit px-8 hover:text-white hover:bg-blue-500'>Mail me !</a>
            </div>
          </div>

        </main>
      </div>
    </section>
  )
}

export default App
