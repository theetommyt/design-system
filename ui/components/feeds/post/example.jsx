// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';


export let PostFooterActions = props =>
  <ul className="slds-post__footer-actions-list slds-list--horizontal">
    <li className="slds-col slds-item slds-m-right--medium">
      <button title="Like this item" className={classNames('slds-button--reset slds-post__footer-action', props.liked ? 'slds-is-active' : null)} aria-pressed={ props.liked ? true : false }>
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="like" />
        { props.liked ? 'Liked' : 'Like' }
      </button>
    </li>
    <li className="slds-col slds-item slds-m-right--medium">
      <button title="Comment on this item" className="slds-button--reset slds-post__footer-action">
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="share_post" /> Comment
      </button>
    </li>
    <li className="slds-col slds-item slds-m-right--medium">
      <button title="Share this item" className="slds-button--reset slds-post__footer-action">
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="share" /> Share
      </button>
    </li>
  </ul>;

export let PostFooterMeta = props =>
  <ul className="slds-post__footer-meta-list slds-list--horizontal slds-has-dividers--right slds-text-title">
    { props.comments ? <li className="slds-item">{ props.comments || '0' } comments</li> : null }
    <li className="slds-item">20 shares</li>
    <li className="slds-item">259 views</li>
  </ul>;

export let PostHeader = props =>
  <header className="slds-post__header slds-media">
    <div className="slds-media__figure">
      <a href="javascript:void(0);" className="slds-avatar slds-avatar--circle slds-avatar--large">
        <img
          alt="Jason Rodgers"
          src="/assets/images/avatar1.jpg"
          title="Jason Rodgers avatar"
        />
      </a>
    </div>
    <div className="slds-media__body">
      <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
        <p>
          <a href="javascript:void(0);" title="Jason Rodgers">Jason Rogers</a> — <a href="javascript:void(0);" title="Design Systems">Design Systems</a>
        </p>
        <ButtonIcon
          className="slds-button--icon-border slds-button--icon-x-small"
          aria-haspopup="true"
          symbol="down"
          assistiveText="More Options"
          title="More Options"
        />
      </div>
      <p className="slds-text-body--small">
        <a href="javascript:void(0);" title="Click for single-item view of this post" className="slds-text-link--reset">5 days Ago</a>
      </p>
    </div>
  </header>;

export let PostContent = props =>
  <div className={classNames('slds-post__content slds-text-longform', props.className)}>
    { props.children }
  </div>;

export let PostFooter = props =>
  <footer className={classNames('slds-post__footer', props.className)}>
    { props.children }
  </footer>;

export let Post = props =>
  <article className={classNames('slds-post', props.className)}>
    { props.children }
  </article>;

export let Comments = props =>
  <div className="slds-feed__item-comments">
    { props.children }
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Post>
    <PostHeader />
    <PostContent>
      <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
    </PostContent>
    <PostFooter>
      <PostFooterActions />
      <PostFooterMeta />
    </PostFooter>
  </Post>
);

export let states = [
  {
    id: 'post-with-liker-bar',
    label: 'Like',
    element:
      <div className="demo-only">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions liked />
            <PostFooterMeta liked />
          </PostFooter>
        </Post>
        <Comments>
          <div className="slds-p-horizontal--medium slds-p-vertical--x-small">
            <a href="javascript:void(0);">You</a> liked this post
          </div>
        </Comments>
      </div>
  }
];