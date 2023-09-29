import styles from "./Frame1.module.css";

import React, { useState, useRef, useEffect } from "react";
const Frame1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <img
        className={styles.metaLogopngIcon}
        alt=""
        src="/metalogopng@2x.png"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <b className={styles.download}>Download</b>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <div className={styles.contactUsParent}>
        <b className={styles.contactUs}>Contact Us</b>
        <div className={styles.anyQuestionOrRemarksJustWrapper}>
          <div className={styles.anyQuestionOr}>
            Any question or remarks? Just write us a message!
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.vectorParent}>
          <img className={styles.frameInner} alt="" src="/rectangle-3841.svg" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-3842.svg"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1.svg"
          />
          <div className={styles.ellipseDiv} />
          <b className={styles.contactInformation}>Contact Information</b>
          <div className={styles.carbonlocationFilledParent}>
            <img
              className={styles.carbonlocationFilledIcon}
              alt=""
              src="/carbonlocationfilled.svg"
            />
            <div className={styles.bxsphoneCallParent}>
              <img
                className={styles.bxsphoneCallIcon}
                alt=""
                src="/bxsphonecall.svg"
              />
              <div className={styles.div}>+91 9328388088</div>
            </div>
            <div className={styles.icsharpEmailParent}>
              <img
                className={styles.bxsphoneCallIcon}
                alt=""
                src="/icsharpemail.svg"
              />
              <div className={styles.div}>support@metaunite.in</div>
            </div>
            <div className={styles.vivaAtlierNr}>
              706 viva atlier, nr. Ketan Soc. naranpura ahmedabad- 380013
            </div>
          </div>
          <img
            className={styles.groupIcon}
            alt=""
            src="/group-1000001749.svg"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/group-1000001750.svg"
          />
          <div className={styles.saySomethingTo}>
            Say something to start a live chat!
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupChild11}>
            <img className={styles.groupChild1} alt="" src="/vector-4.svg" />
            <div className={styles.firstName}>First Name:</div>
            <input
              type="text"
              className={styles.lastNameInput}
              placeholder="Enter your first name..."
            />
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.groupChild1} alt="" src="/vector-4.svg" />
            <div className={styles.firstName}>Email:</div>
            <input
              type="email" // Use type="email" for email input validation
              className={styles.emailInput}
              placeholder="Enter your email..."
            />
          </div>

          <div className={styles.groupDiv}>
            <img className={styles.groupChild1} alt="" src="/vector-4.svg" />
            <div className={styles.lastName}>Last Name:</div>
            <input
              type="text"
              className={styles.lastNameInput}
              placeholder="Enter your last name..."
            />
          </div>

          <div className={styles.vectorParent1}>
            <img className={styles.groupChild3} alt="" src="/vector-9.svg" />
            <div className={styles.firstName}>
              <b>Message:</b>
            </div>
            <input
              type="text"
              className={styles.messageInput}
              placeholder="Write your message..."
            />
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.vectorParent2}>
              <img className={styles.groupChild1} alt="" src="/vector-4.svg" />
              <div className={styles.lastName}>Phone Number:</div>
              <input
                type="tel" // Use "tel" type for phone numbers
                className={styles.phoneNumberInput}
                placeholder="Enter your phone number..."
              />
            </div>
          </div>
        </div>
        <div className={styles.sendMessageWrapper}>
            <b className={styles.sendMessage}>Send Message</b>
         </div>

      </div>
      <div className={styles.vectorParent3}>
        <img className={styles.groupChild5} alt="" src="/rectangle-38421.svg" />
        <img
          className={styles.metaLogopngIcon1}
          alt=""
          src="/metalogopng1@2x.png"
        />
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.joinOurNewsletter}>Join Our Newsletter</div>
            <div className={styles.willSendYou}>
              * Will send you weekly updates for your better tool management.
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild6} />
              <div className={styles.yourEmailAddress}>Your email address</div>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
          <div className={styles.legalParent}>
            <div className={styles.legal}>Legal</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div
              className={styles.termsConditions}
            >{`Terms  & Conditions`}</div>
            <div className={styles.pricing}>Pricing</div>
          </div>
          <div className={styles.helpCenterParent}>
            <div className={styles.legal}>Help Center</div>
            <div className={styles.whitepaper}>Whitepaper</div>
            <div className={styles.refundPolicy}>Refund Policy</div>
          </div>
          <div className={styles.companyParent}>
            <div className={styles.legal}>Company</div>
            <div className={styles.privacyPolicy}>Contact Us</div>
            <div className={styles.pricing}>Blogs</div>
            <div className={styles.termsConditions}>About Us</div>
          </div>
          <div className={styles.reachUsParent}>
            <div className={styles.reachUs}>Reach us</div>
            <div className={styles.bxsphoneCallGroup}>
              <img
                className={styles.bxsphoneCallIcon1}
                alt=""
                src="/bxsphonecall1.svg"
              />
              <div className={styles.div2}>+91 9328388088</div>
            </div>
            <div className={styles.icsharpEmailGroup}>
              <img
                className={styles.icsharpEmailIcon1}
                alt=""
                src="/icsharpemail1.svg"
              />
              <div className={styles.supportmetaunitein1}>
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
        <img className={styles.groupChild7} alt="" src="/vector-10.svg" />
        <img className={styles.groupChild8} alt="" src="/vector-11.svg" />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.blogParent}>
          <div className={styles.blog}>Blog</div>
          <div className={styles.pricing1}>Pricing</div>
          <b className={styles.contactUs2}>Contact Us</b>
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.blog}>Home</div>
        </div>
      </div>
      <div className={styles.frameChild2} />
    </div>
  );
};

export default Frame1;
