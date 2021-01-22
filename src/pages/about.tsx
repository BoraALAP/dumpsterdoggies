import React from 'react'
import styled from 'styled-components'
import ButtonCards from '../components/ButtonCards'
import Container from '../components/Container'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Volunteers from '../components/Volunteers'
import Letter from '../components/Letter'

const ButtonCardData = [
  {
    title: 'Become a Volunteer',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/volunteer/',
  },
  {
    title: 'Sponsor a Doggie',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/sponsor/',
  },
]

const About = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="About" description={description} />
      <Head>
        <Header>
          Dumpster Doggies is a non-profit charity that acts for stray dogs in
          northern Turkey.
        </Header>
        <Text>
          <p>
            We are volunteers who work hard to help the strays doggies on our
            spare time.
          </p>
          <p>
            We provide food, medication and shelter to stray dogs in the
            Kastamonu area.
          </p>
          <p>
            We will will use every bit of our energy and and every penny you
            give us to support the doggies.
          </p>
          <p>Take action and support us today!</p>
        </Text>
      </Head>
      <ButtonCards data={ButtonCardData} />
      <Volunteers
        sabahat={data.sabahat.childImageSharp.fluid}
        burak={data.burak.childImageSharp.fluid}
        cigdem={data.cigdem.childImageSharp.fluid}
        ender={data.ender.childImageSharp.fluid}
        duska={data.duska.childImageSharp.fluid}
      />
      <Letter title="Letter from Our Founter">
        <h4>SABAHAT’S STORY</h4>

        <h5>THAN & NOW</h5>

        <p>
          I live in Kastamonu city in Turkey. This is a small city in the
          underdeveloped part of Turkey where most of the population is cruel
          and ignorant towards stray animals. There is a lot of hatred and fear
          among people due to the current political climate and the last thing
          people care about is “filthy street animals”.
        </p>

        <p>
          My own family was similar. My grandfather used to throw stray cats to
          the river. However, karma has caught up with his evil deeds. On his
          dying breath, he kept saying “Get these cats off of me”.
        </p>

        <p>
          I became very involved with stray animals six years ago. I am an
          accountant by profession, but about 6 years ago I started working as a
          traveling salesman. I would go house to house and sell everyday
          household products. During this time while I was on the road, I
          realized that there were hundreds if not thousands of poor animals in
          terrible conditions battling hunger, disease, and cold trying to
          survive on the roadsides and edges of the forests. On another day,
          when I was traveling to Inebolu city, I saw dogs trying to survive in
          a nearby dumpster area and my heart ached.
        </p>

        <p>
          I had recognized that something had to be done urgently and that
          someone had to act. I contacted the municipalities and government
          officials. They didn’t care at all and they told me “If you love them
          so much, take them all”. I asked my friends for help, their reaction
          was “These animals are dirty, we won’t touch them”.
        </p>

        <p>
          So…I took things in my own hands. With the money I earned I started
          buying bags of dog food and medication. Because I was still living
          with my family, I had some additional funds that allowed me to afford
          all the food and medications for the poor babies. At the time I was
          not aware of social media, or that people would be willing to donate
          to worthy campaigns, so all funds were out of my pocket. Besides food
          and medications, I really wanted to shelter the dogs from the harsh
          weather here, so I saved up some money and put up simple sheds to
          shelter them. Two days later, the sheds were stolen by the locals. I
          even sold my own car to be able to afford more food for them, and I
          would ask my friends to land me their cars so that I could go to the
          feeding locations.
        </p>

        <p>My work with the stray doggies continued, it never stopped.</p>

        <h5>WHAT AM I DOING RIGHT NOW?</h5>

        <p>Every week, I visit 5 feeding zones.</p>

        <p>
          I provide medication, vitamins, and nutrition boosters to every dog I
          can find and catch. For simple conditions like mange, I provide
          medication and for more severe conditions, I take them to a licensed
          veterinary clinic. Funny enough there is only one veterinarian that
          accepts street animals and he helps me a lot.
        </p>

        <p>
          I always try to try to give the doggies the best food possible,
          especially during the winter. When I can’t afford the dry food, I boil
          massive batches of pasta and take it to them. I also visit shelters,
          schools, cafeterias, and collect the leftover food and take those to
          them as well.
        </p>

        <p>
          Four years later, which was just 2 years ago I learned about
          Instagram. I started posting, and people started donating for food and
          medications, and this alone gave me so much hope and support. Last
          month I started a Twitter account as well. Funny enough, my followers
          on Instagram would tag Dodo on my posts and that is how I found out
          about you. I recognized how much of an amazing organization you are,
          so I started sending you my videos in the hope of doing even more for
          these poor animals.
        </p>

        <p>
          My videos are not of the highest quality. I do these feedings all
          alone, I feed, provide medication, and simultaneously try to take
          videos. As you can see, they don’t end up being professional. In the
          last year my dear friend Cigdem, who is a teacher, has been helping
          me. Now, it is two of us alone, two ladies, trying our best to help
          more than 500 stray dogs to survive against the odds.
        </p>

        <h5>HOW DO I FEEL?</h5>

        <p>
          On days when I feel frustrated and completely heartbroken I say “I
          will not go anymore”, but then shortly I realize that if I don’t go,
          they have no one else to go see them. These poor animals are so used
          to being disappointed, hurt, thrown, hit, even killed, that if I gave
          up, their hard life would simply become unimaginable.
        </p>

        <p>
          These homeless babies are kind, they are purer than any of us. For
          these babies, I got into fights, I got punched, kicked, threatened. My
          own friends and family stopped talking to me simply because they
          thought I was “dirty”.
        </p>

        <h6>
          NO MATTER WHAT I WILL NEVER GIVE UP ON THEM. THEY ARE WORTHIER IN MY
          EYE THAN SOME HUMAN BEINGS IN THIS WORLD.
        </h6>

        <h5>WHAT ARE MY CURRENT GOALS/PROJECTS?</h5>

        <p>Currently, I am pursuing 2 goals.</p>

        <p>
          By spaying/neutering the project – I try to gather funds to properly
          administer the medical procedure to control the population growth so
          that no babies are born so that they don’t suffer, and I don’t have to
          bury their dead bodies in these dumpster areas anymore.
        </p>

        <p>
          A proper shelter – I am trying to put together/build a space where I
          can take care of young fragile babies, crippled dogs, dogs that
          require post-surgery recovery.
        </p>

        <p>
          Once we have a shelter, I plan to develop programs that will help some
          of these dogs get adopted or virtually adopted, be supported, and I
          plan to develop programs to inspire people in Turkey to be kinder and
          help stray dogs in their areas. I want to show them that it is
          possible and that these babies have pure hearts and are wonderful dogs
          and friends when given a chance.
        </p>

        <p>Dear You,</p>

        <p>
          I wish you could come here and see the conditions I am dealing with.
          Believe me, you would want to stay and help them just like I did 6
          years ago. I am immensely appreciative of your interest and hopefully
          support. Your interest alone gives me a boost of hope, making me
          recognize that I may not be alone after all. I guess just like my
          grandfather died with his sins on his mind. When I die, on my last
          breath, I will be simply saying “More food more food for my babies”.
        </p>

        <p>Thank you!</p>

        <p>My best wishes,</p>

        <h5>SABAHAT HANİFEOĞLU</h5>

        <h6>DUMPSTER DOGGIES</h6>
      </Letter>
    </Container>
  )
}

const Header = styled.h1`
  display: grid;
  justify-self: center;
`

const Head = styled.div`
  display: grid;
  gap: 2rem;
`

const Text = styled.div`
  display: grid;
  gap: 0.65rem;
  justify-content: center;
`
export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          description
          title
        }
      }
    }
    sabahat: file(relativePath: { eq: "sabahat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    burak: file(relativePath: { eq: "burak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cigdem: file(relativePath: { eq: "cigdem.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ender: file(relativePath: { eq: "ender.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    duska: file(relativePath: { eq: "duska.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default About
