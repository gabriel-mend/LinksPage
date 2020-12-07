import * as Styles from './styles';

import githubIcon from '../../assets/icons/github-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import { useState } from 'react';

const Landing = () => {
  const [toogle, setToogle] = useState('light');

  function toogleButton() {
    setToogle(toogle === "light" ? "dark" : "light");
    console.log(toogle)
  }
  return (
    <Styles.Container className={`background-${toogle}-main`}>
      <Styles.MainContainer>
        <Styles.MainContent className={`background-${toogle}`}>
          <Styles.ButtonToogle onClick={toogleButton}>Mudar de tema</Styles.ButtonToogle>
          <a href="https://www.instagram.com/_loading_gabriel_/">
            <img src="https://avatars0.githubusercontent.com/u/49095200?s=460&u=c1bf40237efc7e4432b01f61cfac4dab28b189ec&v=4" />
            <strong className={`text-${toogle}`}>@loading_gabriel</strong>
            <p className={`text-${toogle}`}>Frontend Developer, <br/> Minimalist & Content Creator.</p>
          </a>
        </Styles.MainContent>
        <Styles.ButtonsContainer>
          <Styles.Button href="https://github.com/loadingGabriel">
            <img src={githubIcon} />
            Github
          </Styles.Button>
          <Styles.Button href="https://www.linkedin.com/in/gabriel-mendonca-pereira/">
            <img src={linkedinIcon} />
            Linkedin
          </Styles.Button>
          <Styles.Button href="https://www.instagram.com/_loading_gabriel_/">
            <img src={instagramIcon} />
            Instagram
          </Styles.Button>
          <Styles.Button href="mailto:crowofcode@gmail.com">
            <img src={emailIcon} />
            Email
          </Styles.Button>
        </Styles.ButtonsContainer>
      </Styles.MainContainer>
    </Styles.Container>
  );
};

export default Landing;
