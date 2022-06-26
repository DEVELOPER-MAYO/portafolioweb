
import {Layout, About, PortfolioSection} from "../components"
const Homepage =()=> {

      const technologies = [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind",
        "MongoDB",
        "Express",


      ];



      const quickLinks = [
        {text:"GitHub",href:"https://github.com/hunterbecton"},
        {text:"Youtube",href:"https://www.youtube.com/skillthrive"},
        {text:"Twitter",href:"https://twitter.com/hunterbecton"},
        {text:"Email",href:"mailto:hunter@skillthrive.com"},

      ];

      const portfolioItems = [
        {
        title: "Skillthrive",
        logo: "/skillthrive-logo.png",
        color: "#30bc72",
        description:"Lorem ipsum dolor sit amet. Id dolorem tempora ea velit et deserunt aliquam aut doloremque optio. Sit voluptatem impedit ut praesentium dolores qui explicabo voluptatem hic autem dignissimos aut dolorem eaque non officia consequuntur nam illum expedita.",
        technologies:["Next.js","React", "Tailwind", "Stripe", "Supabase"],
        links: [
          {text: "Site", href:"https://www.skillthrive.com"},
          {text: "YouTube", href:"https://www.youtube.com/skillthrive"}, ],
          
      },

      {
        title: "LeapPage",
        logo: "/leappage-logo.png",
        color: "#3B82F6",
        description:"Lorem ipsum dolor sit amet. Id dolorem tempora ea velit et deserunt aliquam aut doloremque optio. Sit voluptatem impedit ut praesentium dolores qui explicabo voluptatem hic autem dignissimos aut dolorem eaque non officia consequuntur nam illum expedita.",
        technologies:["Next.js","React", "Tailwind", "Stripe", "MongoDB"],
        links: [
          {text: "Site", href:"https://www.leappage.com"} ],
      },

      {
        title: "Mattermix",
        logo: "/mattermix-logo.png",
        color: "#4f46e5",
        description:"Lorem ipsum dolor sit amet. Id dolorem tempora ea velit et deserunt aliquam aut doloremque optio. Sit voluptatem impedit ut praesentium dolores qui explicabo voluptatem hic autem dignissimos aut dolorem eaque non officia consequuntur nam illum expedita.",
        technologies:["Next.js","React", "Lambda", "Stripe", "MongoDB"],
        links: [
          {text: "Site", href:"https://www.mattermix.com"} ],
      }
    ];

      



  return(
    <Layout>
      <About
     profile="/hunter.jpeg"
     profileAlt="Hunter Becton"
     subtitle="Frontend Developer"
     title="Maryorith Samaniego"
     description={"También llamada Programador de Software, Analista- Programador o Developer, es una ocupación dedicada al diseño, producción y mantenimiento de elementos o conjuntos de software que requieran integrarse para elaborar aplicaciones"}
     technologies={technologies}
     quickLinks={quickLinks}

      />
    {portfolioItems.map(
      ({title,logo,color,description,technologies,links})=>(
      <PortfolioSection 
      key={title} 
      title={title}
      logo={logo}
      color={color}
      description={description}
      technologies={technologies}
      links={links}

      />
      
    )
    )}
      
    </Layout>
  )
}
export default Homepage