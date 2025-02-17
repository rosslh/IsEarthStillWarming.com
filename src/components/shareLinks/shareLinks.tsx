import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import {
  FaRedditAlien,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaShare,
} from "react-icons/fa";
import style from "./shareLinks.module.scss";

const ShareButtons = () => {
  const shareUrl = `https://isearthstillwarming.com`;
  const title = `IsEarthStillWarming.com`;
  const fullTitle = `IsEarthStillWarming.com: Global warming information and data`;

  const share = () =>
    window.navigator.share({
      url: shareUrl,
      text: `Global warming information and data`,
      title,
    });

  if (
    typeof window !== `undefined` &&
    window.navigator &&
    "share" in window.navigator
  ) {
    return (
      <div className={style.navigatorShare}>
        <button type="button" onClick={share}>
          <FaShare />
          Share
        </button>
      </div>
    );
  }
  return (
    <div className={style.legacyShare}>
      <span className={style.shareLabel}>Share:</span>
      <FacebookShareButton className={style.facebook} url={shareUrl}>
        <FaFacebookF />
      </FacebookShareButton>
      <TwitterShareButton
        className={style.twitter}
        url={shareUrl}
        title={fullTitle}
      >
        <FaTwitter />
      </TwitterShareButton>
      <RedditShareButton
        className={style.reddit}
        title={fullTitle}
        url={shareUrl}
      >
        <FaRedditAlien />
      </RedditShareButton>
      <LinkedinShareButton className={style.linkedin} url={shareUrl}>
        <FaLinkedinIn />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
