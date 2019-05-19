import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const SocialMediaList = styled.div`
    list-style: none;
    position: fixed;
    bottom: 0px;
    padding: 5px;
    padding-top: 0;
    right: 0px;
    width: 5vh;
    padding-bottom: 20px;
    list-style: none;
    z-index: 99;
    background: black;
    border-radius: 6px;
`

const SocialMediaListItem = styled.li`
  height: 45px;
  line-height: 75px;
  text-align: center;
  display: block;
  cursor: pointer;
  transition: all 0.5s ease;
`

const SocialMediaIcon = styled.a`
  cursor: pointer;
  transition: all 0.5s ease;
  color: white;
`

const SocialMediaIconFB = styled(SocialMediaIcon)`
  :hover {
    color: #3b5998;
  }
`

const SocialMediaIconInsta = styled(SocialMediaIcon)`
  :hover {
    color: #bc2a8d;
  }
`

const SocialMediaIconTwitter = styled(SocialMediaIcon)`
  :hover {
    color: #00aced;
  }
`

const SocialMediaIconYoutube = styled(SocialMediaIcon)`
  :hover {
    color: #dd4b39;
  }
`

const SocialMediaIconMail = styled(SocialMediaIcon)`
  :hover {
    color: green;
  }
`

export default function SocialMedia(props) {
    return (
        <div class="wrapper">
            <SocialMediaList>
                <SocialMediaListItem>
                    <SocialMediaIconFB href="https://www.facebook.com/borneo.football.international/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </SocialMediaIconFB>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <SocialMediaIconInsta href="https://www.instagram.com/borneo_football/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialMediaIconInsta>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <SocialMediaIconTwitter href="https://twitter.com/Borneo_Football" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialMediaIconTwitter>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <SocialMediaIconYoutube href="https://www.youtube.com/channel/UCfQs-tSFgUEmmF-E3E4dwYg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </SocialMediaIconYoutube>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <SocialMediaIconMail href="mailto:borneo.football@gmail.com?subject=">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </SocialMediaIconMail>
                </SocialMediaListItem>

            </SocialMediaList>
        </div>
    )
}

