import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = () => {
    // Create a hidden anchor element
    const anchor = document.createElement("a");
    anchor.style.display = "none";

    // Set the app download link as the anchor's href
    anchor.href =
      "https://play.google.com/store/apps/details?id=com.qminInfotech.metaunite&pcampaignid=web_share";

    // Set the download attribute and the filename
    anchor.setAttribute("download", "app.apk");

    // Append the anchor to the document body
    document.body.appendChild(anchor);
    // Trigger a click event on the anchor element
    anchor.click();

    // Clean up the anchor element
    document.body.removeChild(anchor);
  };

  const onPrivacyPolicyClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onTermsConditionsClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <img
        className={styles.metaLogopngIcon}
        alt=""
        src="/metalogopng@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group-13.svg" />
      <div className={styles.rectangleGroup} onClick={onGroupButtonClick}>
        <div className={styles.groupChild} />
        <b className={styles.download}>Download</b>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleContainer}>
          <img className={styles.groupItem} alt="" src="/rectangle-7@2x.png" />
          <img className={styles.biyoutubeIcon} alt="" src="/biyoutube.svg" />
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupFrame}>
                <div className={styles.groupFrame}>
                  <b className={styles.welcomeTo}>Welcome to</b>
                  <b className={styles.metaUnite}>Meta Unite</b>
                </div>
              </div>
            </div>
            <div className={styles.thisApplicationWill}>
              This application will take user experience of virtual meeting to
              another level.
            </div>
          </div>
          <div className={styles.groupParent1}>
            <img className={styles.groupInner} alt="" src="/group-11.svg" />
            <img className={styles.groupChild1} alt="" src="/group-12.svg" />
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <b className={styles.mac}>Mac</b>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.button1}>
                <b className={styles.windows}>Windows</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heading2}>About Us</div>
      <div className={styles.heading2Container}>
        <span>Unique feautures of </span>
        <b className={styles.metaUniteWorks}> Meta Unite </b>
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.groupParent3}>
          <img className={styles.groupChild2} alt="" src="/group-20@2x.png" />
          <div className={styles.metauniteIsTransforming}>
            Metaunite is transforming the way we meet and collaborate in the
            digital world. We are the world's first Metaverse meeting app,
            designed specifically to provide professionals and students with an
            unparalleled personalised experience.
          </div>
        </div>
        <div className={styles.groupParent4}>
          <img className={styles.groupChild3} alt="" src="/group-22@2x.png" />
          <div className={styles.unlikeOtherVideo}>
            Unlike other video conferencing apps, Metaunite allows for a more
            immersive meeting experience. Our app is built to allow users to
            connect with one another through an immersive 3D environment. Our
            AI-powered system powers personalized avatars for each user and
            allows for the integration of virtual objects. This allows users to
            have a more engaging and interactive meeting experience.
          </div>
        </div>
        <div className={styles.groupParent5}>
          <img className={styles.groupChild3} alt="" src="/group-221@2x.png" />
          <div className={styles.unlikeOtherVideo}>
            Unlike other video conferencing apps, Metaunite allows for a more
            immersive meeting experience. Our app is built to allow users to
            connect with one another through an immersive 3D environment. Our
            AI-powered system powers personalized avatars for each user and
            allows for the integration of virtual objects. This allows users to
            have a more engaging and interactive meeting experience.
          </div>
        </div>
        <div className={styles.groupParent6}>
          <img className={styles.groupChild5} alt="" src="/group-21@2x.png" />
          <div className={styles.metauniteWasFounded}>
            Metaunite was founded in 2022 with the mission of making global
            collaboration easy and providing a user-friendly platform for remote
            meetings. Unlike traditional video conferencing platforms, Metaunite
            is designed to offer a unique and tailored experience for each user,
            giving them the ability to customize their Avatars and meeting space
            according to their preferences.
          </div>
        </div>
        <div className={styles.groupParent7}>
          <img className={styles.groupChild6} alt="" src="/group-222@2x.png" />
          <div className={styles.metauniteWasFounded}>
            Metaunite also allows users to access and leverage their social
            network. Our app gives users access to their contacts and allows
            them to easily invite their friends and colleagues to join in on the
            conversation. Additionally, our app offers a variety of
            collaboration tools, such as chat and voice chat, which allow users
            to easily connect with one another and collaborate.
          </div>
        </div>
      </div>
      <div className={styles.groupParent8}>
        <img className={styles.groupChild7} alt="" src="/group-48095505.svg" />
        <div className={styles.whatIsAMetaUniteParent}>
          <div className={styles.whatIsAContainer}>
            <span>{`What is a `}</span>
            <span className={styles.metaUniteWorks}>Meta Unite ?</span>
          </div>

          <div className={styles.metauniteIsOne}>
            Metaunite is one such digital space that overlays visual elements,
            sound and other sensory input onto real-world setting that enhance
            the user experience by creating a great sense of virtual presence
            especially during the virtual meetings.One of the new generation
            technology : “Metaverse” has been used behind the augmentation of
            this application named Meta unite.
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-1@2x.png"
        />
        <b className={styles.hdAudioAnd}>HD audio and video call</b>
        <div className={styles.thisApplicationCan}>
          This application can stream high quality audio and video call,
          providing a great picture quality.
        </div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon1}
          alt=""
          src="/istock1354645775jpg20220210041327-11@2x.png"
        />
        <div className={styles.istock1354645775jpg202202100} />
        <b className={styles.hdAudioAnd}>Sticky notes</b>
        <div className={styles.thisApplicationCan}>
          This is one unique feature with metauntie that allows you to mark the
          important pointers...
        </div>
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-12@2x.png"
        />
        <b className={styles.hdAudioAnd}>Screensharing</b>
        <div className={styles.thisApplicationComes}>
          This application comes with a unique screen sharing option where the
          user can view the screen in their object of their virtual meetings
          space...
        </div>
      </div>
      <div className={styles.vectorParent1}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-13@2x.png"
        />
        <div className={styles.istock1354645775jpg2022021001} />
        <b className={styles.hdAudioAnd}>generation of meeting report</b>
        <div className={styles.thisApplicationComes}>
          This application comes with a unique screen sharing option where the
          user can view the screen in their object of their virtual meetings
          space...
        </div>
      </div>
      <div className={styles.vectorParent2}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-14@2x.png"
        />
        <b className={styles.hdAudioAnd}>Meeting room with a 3d view</b>
        <div className={styles.unlikeOtherApplications}>
          Unlike other applications, Metaunite provides a virtual 3d view of a
          meeting area...
        </div>
      </div>
      <div className={styles.vectorParent3}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-15@2x.png"
        />
        <div className={styles.istock1354645775jpg2022021002} />
        <b className={styles.hdAudioAnd}>Various 3D animation</b>
        <div className={styles.theApplicationEnhances}>
          The application enhances user experience via various 3D animation such
          as the avatar can wave at every participant,
        </div>
      </div>
      <div className={styles.vectorParent4}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-16@2x.png"
        />
        <b className={styles.hdAudioAnd}>Virtual Avatars</b>
        <div className={styles.usersCanView}>
          Users can view their friends and colleagues in Virtual avatars on the
          application. User can even customize their own avatar.
        </div>
      </div>
      <div className={styles.vectorParent5}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-17@2x.png"
        />
        <div className={styles.istock1354645775jpg2022021003} />
        <b className={styles.hdAudioAnd}>Record meetings</b>
        <div className={styles.usersCanView}>
          Users can view their friends and colleagues in Virtual avatars on the
          application. User can even customize their own avatar.
        </div>
      </div>
      <div className={styles.vectorParent6}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-18@2x.png"
        />
        <b className={styles.hdAudioAnd}>Chat box</b>
        <div className={styles.usersCanView}>
          This application provides a common chat box where anyone can mention
          their doubts and queries during the virtual meeting.
        </div>
      </div>
      <div className={styles.vectorParent7}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon1}
          alt=""
          src="/istock1354645775jpg20220210041327-19@2x.png"
        />
        <div className={styles.istock1354645775jpg2022021004} />
        <b className={styles.hdAudioAnd}>selecting 3d meetings room</b>
        <div className={styles.usersCanView}>
          This application provides selection option amongst various 3D meeting
          room environment such as a Skylab..
        </div>
      </div>
      <div className={styles.vectorParent8}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon10}
          alt=""
          src="/istock1354645775jpg20220210041327-110@2x.png"
        />
        <img
          className={styles.istock1354645775jpg202202100Icon11}
          alt=""
          src="/istock1354645775jpg20220210041327-2@2x.png"
        />
        <img
          className={styles.istock1354645775jpg202202100Icon12}
          alt=""
          src="/istock1354645775jpg20220210041327-2@2x.png"
        />
        <img
          className={styles.istock1354645775jpg202202100Icon13}
          alt=""
          src="/istock1354645775jpg20220210041327-2@2x.png"
        />
        <img
          className={styles.istock1354645775jpg202202100Icon14}
          alt=""
          src="/istock1354645775jpg20220210041327-2@2x.png"
        />
        <img
          className={styles.istock1354645775jpg202202100Icon15}
          alt=""
          src="/istock1354645775jpg20220210041327-2@2x.png"
        />
        <b className={styles.hdAudioAnd}>Raise handt feature</b>
        <div className={styles.usersCanView}>
          This feature allows you to point your suggestion, query or question
          during the virtual meeting.
        </div>
      </div>
      <div className={styles.vectorParent9}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-72.svg" />
        <img
          className={styles.istock1354645775jpg202202100Icon}
          alt=""
          src="/istock1354645775jpg20220210041327-111@2x.png"
        />
        <div className={styles.istock1354645775jpg2022021005} />
        <b className={styles.hdAudioAnd}>Branding</b>
        <div className={styles.usersCanView}>
          <p className={styles.sayGoodbyeTo}>
            Say goodbye to inappropriate video displays and explore the
            possibilities of using banners to effectively showcase your brand.
          </p>
        </div>
      </div>
      <div className={styles.groupParent9}>
        <div className={styles.blogParent}>
          <div className={styles.blog}>Blog</div>
          <div className={styles.pricing}>Pricing</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
        <div className={styles.homeParent}>
          <b className={styles.home}>Home</b>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <img className={styles.divbgCoverIcon} alt="" src="/divbgcover@2x.png" />
      <div className={styles.vectorParent10}>
        <img className={styles.groupChild8} alt="" src="/rectangle-38421.svg" />
        <img
          className={styles.metaLogopngIcon1}
          alt=""
          src="/metalogopng1@2x.png"
        />
        <div className={styles.groupParent10}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild9} />
            <div className={styles.joinOurNewsletter}>Join Our Newsletter</div>
            <div className={styles.willSendYou}>
              * Will send you weekly updates for your better tool management.
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild10} />
              <div className={styles.yourEmailAddress}>Your email address</div>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Enter your email"
                id="emailInput"
              />
              <div className={styles.subscribe} id="subscribeButton">
                Subscribe
              </div>
            </div>
          </div>
          <div className={styles.legalParent}>
            <div className={styles.legal}>Legal</div>
            <a className={styles.privacyPolicy} onClick={onPrivacyPolicyClick}>
              Privacy Policy
            </a>
            <a
              className={styles.termsConditions}
              onClick={onTermsConditionsClick}
            >{`Terms  & Conditions`}</a>
            <div className={styles.refundPolicy}>Refund Policy</div>
            <div className={styles.whitepaper}>Whitepaper</div>
          </div>
          <div className={styles.helpCenterParent}>
            <div className={styles.helpCenter}>Help Center</div>
            <div className={styles.contactUs1}>Contact Us</div>
          </div>
          <div className={styles.companyParent}>
            <div className={styles.legal}>Company</div>
            <div className={styles.contactUs2}>Contact Us</div>
            <div className={styles.blogs}>Blogs</div>
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.reachUsParent}>
            <div className={styles.reachUs}>Reach us</div>
            <div className={styles.bxsphoneCallParent}>
              <img
                className={styles.bxsphoneCallIcon}
                alt=""
                src="/bxsphonecall.svg"
              />
              <div className={styles.div}>+91 9558796885</div>
            </div>
            <div className={styles.icsharpEmailParent}>
              <img
                className={styles.icsharpEmailIcon}
                alt=""
                src="/icsharpemail.svg"
              />
              <div className={styles.supportmetaunitein}>
                support@metaunite.in
              </div>
            </div>
            <div className={styles.linkedinParent}>
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/linkedin@2x.png"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/twitter-squared@2x.png"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/instagram@2x.png"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/facebook@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.metauniteinCopyright2022}>
          © MetaUnite.in Copyright 2022 All Rights Reserved
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
        <img className={styles.groupChild11} alt="" src="/vector-11.svg" />
      </div>
      <img className={styles.frameChild12} alt="" src="/rectangle-3845.svg" />
      <button className={styles.button2} onClick={onButtonClick}>
        <b className={styles.contactUs3}>Contact Us</b>
        <div className={styles.svg}>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        </div>
      </button>
      <div className={styles.metaUniteParent}>
        <b className={styles.metaUnite2}>Meta Unite</b>
        <div className={styles.forOrganisationsThat}>
          For organisations that need more
        </div>
      </div>
    </div>
  );
};

export default Frame;
