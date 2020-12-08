import * as Styles from './styles';

import { useState } from 'react';

import githubIcon from '../../styles/assets/icons/github-icon.svg';
import linkedinIcon from '../../styles/assets/icons/linkedin-icon.svg';
import instagramIcon from '../../styles/assets/icons/instagram-icon.svg';
import emailIcon from '../../styles/assets/icons/email-icon.svg';

import Button from '../../components/Button';
import Profile from '../../components/Profile';

const Landing = () => {
  const [toogle, setToogle] = useState('light');

  function toogleButton() {
    setToogle(toogle === "light" ? "dark" : "light");
  }

  return (
    <Styles.Container className={`background-${toogle}-main`}>
      <Styles.MainContainer>
        <Profile 
          toogle={toogle}
          linkProfile="https://www.instagram.com/_loading_gabriel_/"
          imgLinkProfile="https://avatars0.githubusercontent.com/u/49095200?s=460&u=c1bf40237efc7e4432b01f61cfac4dab28b189ec&v=4"
          nameProfile="@loading_gabriel"
          descriptionProfile="Frontend Developer, Minimalist & Content Creator."
        >
           <Styles.ButtonToogle onClick={toogleButton}>Mudar de tema</Styles.ButtonToogle>
        </Profile>
        <Styles.ButtonsContainer>
          <Button 
            link="https://github.com/loadingGabriel"
            icon={githubIcon}
            name="Github"
          />
          <Button 
            link="https://www.linkedin.com/in/gabriel-mendonca-pereira/"
            icon={linkedinIcon}
            name="Linkedin"
          />
          <Button 
            link="https://www.instagram.com/_loading_gabriel_/"
            icon={instagramIcon}
            name="Instagram"
          />
          <Button 
            link="mailto:crowofcode@gmail.com"
            icon={emailIcon}
            name="Email"
          />
        </Styles.ButtonsContainer>
      </Styles.MainContainer>
    </Styles.Container>
  );
};

export default Landing;
