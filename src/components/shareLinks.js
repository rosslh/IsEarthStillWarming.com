import React from 'react';
import { css, ClassNames } from '@emotion/core';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton
} from 'react-share';

import {
  FaRedditAlien,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';

const ShareLinks = () => {
  const description = `IsEarthStillWarming.com: Global warming information and data`;
  const url = `https://isearthstillwarming.com`;
  return (
    <ClassNames>
      {({ css: style }) => (
        <div
          css={css`
            padding-top: 1rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .SocialMediaShareButton {
              cursor: pointer;
              :hover {
                opacity: 0.9;
              }
              margin: 0 0.3rem;
              color: white;
              display: inline-block;
              height: 1.8rem;
              width: 1.8rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              overflow: hidden;
            }
          `}
        >
          <span
            css={css`
              padding-right: 0.4rem;
            `}
          >
            Share:
          </span>
          <FacebookShareButton
            className={style`
              background-color: #3B579D;
            `}
            url={url}
            quote={description}
          >
            <FaFacebookF />
          </FacebookShareButton>
          <TwitterShareButton
            className={style`
              background-color: #2CAAE1;
            `}
            url={url}
            title={description}
          >
            <FaTwitter />
          </TwitterShareButton>
          <RedditShareButton
            className={style`
              background-color: #FF4500;
            `}
            title={description}
            url={url}
          >
            <FaRedditAlien />
          </RedditShareButton>
          <LinkedinShareButton
            className={style`
              background-color: #007BB6;
            `}
            url={url}
          >
            <FaLinkedinIn />
          </LinkedinShareButton>
        </div>
      )}
    </ClassNames>
  );
};

export default ShareLinks;